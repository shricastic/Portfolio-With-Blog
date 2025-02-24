"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { Menu, X } from "lucide-react";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-semibold tracking-tight">
          श्री
        </Link>

        {/* Hamburger Menu for md screens and smaller */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-4 items-center ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="block text-center py-2 hover:text-neutral-800 dark:hover:text-neutral-200"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <div className="flex justify-center py-2">
            <ThemeSwitch />
          </div>
        </div>
      )}
    </nav>
  );
}
