import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("Bitlinks");
  const collection = db.collection("url");
  const links = await collection.find({}).toArray();
  return Response.json({ links });
}
