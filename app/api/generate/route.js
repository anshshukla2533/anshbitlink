import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json(); // Parse request body

    const client = await clientPromise;
    const db = client.db("Bitlinks");
    const collection = db.collection("url");

    // ✅ Check if shorturl already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json({
        success: false,
        error: true,
        message: "Short URL already exists",
      });
    }

    // ✅ Insert only if not present
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
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
