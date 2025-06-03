"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 text-gray-800">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 text-gray-800">
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-600 text-gray-800"
            >
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-600 text-gray-800">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Icon
                icon={isOpen ? "mdi:close" : "mdi:menu"}
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow-md">
          <Link href="/" className="block hover:text-blue-600 text-gray-800">
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600 text-gray-800"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block hover:text-blue-600 text-gray-800"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-600 text-gray-800"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
