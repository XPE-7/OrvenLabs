import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/industries", label: "Industries" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="logo-orbit" aria-hidden="true">
        <span className="logo-orbit__core" />
        <span className="logo-orbit__dot logo-orbit__dot--a" />
        <span className="logo-orbit__dot logo-orbit__dot--b" />
      </div>
      <div className="leading-tight">
        <div className="text-base font-semibold text-[#e7f4ff]">
          Orven <span className="text-[#18aac4]">Labs</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Custom AI Systems</div>
      </div>
    </div>
  );
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-gradient-to-b from-[#050915]/85 via-[#050915]/65 to-transparent backdrop-blur-md">
      <div className="page-shell flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group relative transition-colors duration-150 hover:text-white">
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-300 to-emerald-400 transition-all duration-200 group-hover:w-full" />
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="button-primary text-sm shadow-[0_10px_40px_rgba(15,212,247,0.18)]">
          Book a Call
        </Link>

        <nav className="order-3 flex w-full gap-2 overflow-x-auto pb-1 text-xs text-slate-300 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 hover:border-cyan-300/60 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
