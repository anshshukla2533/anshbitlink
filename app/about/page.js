// app/about/page.jsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-purple-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 pb-2 w-fit">
          BitLink-Url shortner
        </h1>

        <p className="text-lg mb-4">
          BitLin is a URL shortening service built with Next.js and MongoDB. It allows you to convert long, messy URLs into short and shareable links in a single click.
        </p>

        <p className="text-lg mb-4">
          Whether you&apos;re sharing on social media, sending in an email, or just want to make things look cleaner, BitLin makes it easier. It s fast, minimal, and private—your data stays yours.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🚀 Technologies Used</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Next.js (App Router)</li>
          <li>MongoDB Atlas</li>
          <li>Tailwind CSS</li>
          <li>Vercel for Deployment</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">💡 Features</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Shorten long URLs instantly</li>
          <li>Automatic redirection from short link</li>
          <li>Real-time MongoDB backend</li>
          <li>Minimalist and responsive design</li>
        </ul>

        <p className="text-lg mt-8">
          Built with ❤️ by Ansh Shukla.
        </p>
      </div>
    </main>
  );
}
