"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[90vh] px-4 py-8">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 items-center justify-center text-center"
        >
          <motion.p
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold"
          >
            We are the best URL shortener in the market
          </motion.p>

          <p className="px-6 md:px-20 text-center text-lg">
            We are the most straightforward URL shortener in the world. Most shorteners ask for login and signup, but we offer you direct access to shorten your URL without hassle.
          </p>

          <motion.li
            className="flex gap-4 list-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/shorten">
              <button className="bg-purple-500 hover:bg-amber-100 font-bold py-2 px-4 rounded-lg shadow-lg">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 hover:bg-amber-100 font-bold py-2 px-4 rounded-lg shadow-lg">
                Github
              </button>
            </Link>
          </motion.li>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative w-full h-[300px] md:h-auto"
        >
          <Image
            className="mix-blend-darken object-cover"
            alt="An image of a vector"
            src="/7566.jpg"
            fill
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}
