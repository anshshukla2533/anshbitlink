import clientPromise from "@/lib/mongodb";


const rateLimitStore = {};

export async function POST(request) {
  try {
  
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "unknown";

    const now = Date.now();
    const lastRequestTime = rateLimitStore[ip];

    
    if (lastRequestTime && now - lastRequestTime < 60 * 1000) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "Rate limit exceeded. Please wait 1 minute.",
        },
        { status: 429 }
      );
    }

    
    rateLimitStore[ip] = now;

    const body = await request.json();


    const client = await clientPromise;
    const db = client.db("Bitlinks");
    const collection = db.collection("url");

   
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 60 * 1000), 
    });

    return Response.json({
      success: true,
      error: false,
      message: "URL Generated Successfully",
    });
  } catch (error) {
    console.error("Error inserting to DB:", error);
    return Response.json(
      { success: false, error: true, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
