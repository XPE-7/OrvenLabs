import Link from "next/link";

export const metadata = {
  title: "About | Orven Labs",
  description: "Custom AI agency focused on discovery-led solutions for revenue and operations.",
};

const principles = [
  "Discovery before tools",
  "Custom architecture",
  "Clear measurement",
  "Minimal but durable systems",
];

const focusAreas = [
  "Revenue and lead capture",
  "Support and retention",
  "Operations and routing",
];

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-12">
      <div className="space-y-3">
        <div className="section-title">About</div>
        <h1 className="text-4xl font-semibold text-white">A focused custom AI studio</h1>
        <p className="text-slate-400">We design systems that fit how your team already works.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <h3 className="text-xl font-semibold text-white">Principles</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-soft p-5">
          <h3 className="text-xl font-semibold text-white">Focus areas</h3>
          <div className="mt-3 space-y-3 text-sm text-slate-300">
            {focusAreas.map((item) => (
              <div key={item} className="card-soft p-3">{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-3 border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="section-title">Start</div>
          <h3 className="mt-2 text-xl font-semibold text-white">Bring one workflow to refine</h3>
        </div>
        <Link href="/contact" className="button-primary">Book discovery</Link>
      </div>
    </div>
  );
}
