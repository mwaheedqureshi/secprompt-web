"use client";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#capabilities", label: "Product" },
  { href: "/#assessment", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#security", label: "Security" },
  { href: "/demo", label: "Company" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button onClick={() => setOpen(!open)} className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-dark-900 shadow-sm" aria-label="Toggle menu">
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-900/10">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-50 hover:text-primary-700">
              {label}
            </a>
          ))}
          <a href="/demo" onClick={() => setOpen(false)}
            className="mt-1 block rounded-xl bg-primary-600 px-4 py-3 text-center text-sm font-semibold text-white">
            Book a demo
          </a>
        </div>
      )}
    </div>
  );
}
