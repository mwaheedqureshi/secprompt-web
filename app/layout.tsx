import "./globals.css";

export const metadata = {
  title: "SecPrompt",
  description: "AI for third-party security risk assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f4f1ea] text-[#17130f]">
        
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-5 py-6 md:px-14">
          <a href="/" className="text-xl font-semibold tracking-tight">
            SecPrompt
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="/product" className="hover:opacity-60">Product</a>
            <a href="/solutions" className="hover:opacity-60">Solutions</a>
            <a href="/security" className="hover:opacity-60">Security</a>
            <a href="/company" className="hover:opacity-60">Company</a>

            <a
              href="/demo"
              className="rounded-full border border-[#17130f]/20 px-5 py-2 hover:bg-[#17130f] hover:text-white"
            >
              Book a demo
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-[#17130f]/10 px-5 py-10 md:px-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6d6257] md:flex-row md:justify-between">
            <p>© 2026 SecPrompt</p>

            <div className="flex gap-6">
              <a href="/security">Security</a>
              <a href="#">Privacy</a>
              <a href="/company">Contact</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}