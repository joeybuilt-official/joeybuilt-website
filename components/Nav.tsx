"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Products", href: "/products" },
  { label: "Plexo", href: "/plexo" },
  { label: "Open Source", href: "/open-source" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-base-800/60 bg-base-950/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Logo className="text-xl" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-base-400 transition-colors hover:text-base-100"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/joeybuilt-official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-base-400 transition-colors hover:text-base-100"
          >
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-base-400 hover:text-base-100 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M2 5h16M2 10h16M2 15h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-base-800/60 px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base-300 transition-colors hover:text-base-100"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/joeybuilt-official"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-base-300 transition-colors hover:text-base-100"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
