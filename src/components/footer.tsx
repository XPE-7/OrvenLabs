import Link from "next/link";
import { contactChannels } from "@/lib/data";

const socialLinks = [
  { label: "Email", href: "mailto:arcade.richang@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/orvenlabs.co/" },
];

const footerLinks = [
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/industries", label: "Industries" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#050912]">
      <div className="page-shell grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
        <div className="space-y-3">
          <div className="pill">Custom AI Automation Agency</div>
          <h3 className="text-2xl font-semibold text-white">Orven Labs</h3>
          <p className="text-sm text-slate-400">
            We build custom AI agents for teams who want cleaner lead flow, faster response, and fewer manual tasks.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-sm">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200 hover:border-cyan-300/60 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="section-title">Explore</div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="section-title">Book a call</div>
          <p className="text-sm text-slate-400">Tell us one workflow. We will map the system.</p>
          <Link href="/contact" className="button-primary text-sm">Book discovery</Link>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            {contactChannels.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                <span className="text-slate-400">{item.label}</span>
                <span className="font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} Orven Labs. Custom AI systems built for real business operations.
      </div>
    </footer>
  );
}


