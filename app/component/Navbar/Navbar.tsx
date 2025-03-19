// components/Navbar.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import NavDrop from '../productDropDown/DropDown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-white text-black font-italic" data-height= "84" >
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-lg ml-8">
            <Image
                src="/blazon.png"
                width={100}
                height={100}
                alt="Picture of the author"
                />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link key='1' href="/" className=" px-3 py-2 rounded-md text-sm  ">
                Home
              </Link>
              <button key='2'  className=" px-3 py-2 rounded-md text-sm  ">
                <NavDrop/>
              </button>
              <Link key='3' href="/blz/contact" className=" px-3 py-2 rounded-md text-sm  ">
                Contact us
              </Link>
              <Link key='4' href="/requestquote" className="REQUEST px-3 py-2  text-sm  ">
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www0.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={isMenuOpen ? 'md:hidden block mobileView' : 'md:hidden hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link key='1' href="/" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <button key='2' className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
          <NavDrop/>
          </button>
          <Link key='3' href="/blz/contact" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Contact us
          </Link>
          <Link key='4' href="/requestquote" className="REQUEST hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
                REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
}