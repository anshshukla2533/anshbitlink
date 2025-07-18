import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = params.shorturl; // ✅ No need to `await` `params`, it's already a plain object

  const client = await clientPromise;
  const db = client.db("Bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });

  if (doc && doc.url) {
    redirect(doc.url); // ✅ Redirect to original URL
  } else {
    // ✅ Use environment variable or fallback
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }

  // ✅ This return is unreachable because redirect() ends the rendering
  // But if you want to render something for debugging, remove redirect
  return <div>Redirecting...</div>;
}
