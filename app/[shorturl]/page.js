import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = params.shorturl; 

  const client = await clientPromise;
  const db = client.db("Bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });

  if (doc && doc.url) {
    const now = new Date();
    if (doc.expiresAt && now > doc.expiresAt) {
      
      return <div className="text-center mt-16 text-red-600 font-bold text-xl">This link has expired.</div>;
    }
    
    await collection.updateOne({ shorturl }, { $inc: { clicks: 1 } });
    redirect(doc.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }

 
  return <div>Redirecting...</div>;
}
