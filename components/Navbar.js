"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // install lucide-react if not already: `npm install lucide-react`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-purple-700 text-white'>
      <div className='flex justify-between items-center px-4 py-4 md:px-8'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <Link href="/">BitLink</Link>
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 items-center text-lg'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shorten">Shorten</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
          <li className='flex gap-2'>
            <Link href="/shorten">
              <button className='bg-purple-500 py-2 px-4 rounded-lg font-bold shadow-md'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 py-2 px-4 rounded-lg font-bold shadow-md'>Github</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden flex flex-col items-start gap-4 px-4 pb-4 text-lg'>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/shorten" onClick={toggleMenu}>Shorten</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact us</Link></li>
          <li className='flex gap-3 mt-2'>
            <Link href="/shorten">
              <button className='bg-purple-500 py-2 px-4 rounded-lg font-bold shadow-md'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-500 py-2 px-4 rounded-lg font-bold shadow-md'>Github</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
