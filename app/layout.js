import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import bitlink from "../public/bitlink.png";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlink - Your Trusted URL Shortener",
  description: "Shorten, share, and track your URLs with Bitlink",
  icons: {
    icon: "/bitlink.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
