"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")

  async function generate() {
    try {
      const response = await fetch("http://localhost:3000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: url,
          shorturl: shortUrl
        })
      });

      const data = await response.json();

      if (data.success) {
        const finalLink = `${process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"}/${shortUrl}`;
        setGeneratedLink(finalLink)
        setUrl("")
        setshortUrl("")
        alert("✅ Short URL created successfully!")
      } else {
        alert("⚠️ Failed to create short URL: " + data.message);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
    }
  }

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate Your Short Url</h1>

      <div className="flex flex-col gap-4">
        <input
          className="bg-white px-4 py-2 focus:outline-purple-600 rounded w-full"
          type="text"
          placeholder="Enter your Url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />

        <input
          className="bg-white px-4 py-2 focus:outline-purple-600 rounded w-full"
          type="text"
          placeholder="Enter Your Preferred Short Url"
          value={shortUrl}
          onChange={e => setshortUrl(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-purple-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg px-4 py-2 transition w-full cursor-pointer"
        >
          Generate
        </button>

        {generatedLink && (
          <div className="mt-4">
            <span className="font-semibold">Your short link: </span>
            <Link href={generatedLink} target="_blank" className="text-blue-600 underline">
              {generatedLink}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shorten
