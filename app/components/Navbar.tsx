"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import TypingText from "./TypingText";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const demoUrl = "mailto:demo@secprompt.io";

const navLinks = [
  { href: "/#capabilities", label: "Product" },
  { href: "/#assessment", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#security", label: "Security" },
  { href: "/demo", label: "Company" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/85 px-4 py-4 backdrop-blur-xl md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link href="/" className="flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 text-sm font-bold text-white">
              S
            </span>
            <span className="text-xl font-bold tracking-tight text-dark-900">SecPrompt</span>
          </div>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            AI-Powered TPRM
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-wide text-emerald-600">
            <TypingText />
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary-600">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={demoUrl}
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-dark-900 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
          >
            Book a Demo
          </Link>
          <a
            href={appUrl}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
          >
            Login
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-dark-900 shadow-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-4 max-w-7xl rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-900/10 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={demoUrl}
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-dark-900"
          >
            Book a Demo
          </Link>
          <a
            href={appUrl}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Login
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </nav>
  );
}
