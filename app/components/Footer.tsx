import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#capabilities", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#security", label: "Security" },
      { href: "/#capabilities", label: "Roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/demo", label: "About" },
      { href: "/demo", label: "Blog" },
      { href: "/demo", label: "Careers" },
      { href: "/demo", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Security Policy" },
      { href: "#", label: "GDPR" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] px-4 py-14 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
              S
            </span>
            <span className="text-lg font-bold">SecPrompt</span>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/65">
            AI-powered third-party risk assessment platform
          </p>
          <p className="mt-6 text-xs text-white/45">© 2026 SecPrompt</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              {column.title}
            </p>
            <div className="space-y-3 text-sm">
              {column.links.map((link) => (
                <Link key={`${column.title}-${link.label}`} href={link.href} className="block text-white/70 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
