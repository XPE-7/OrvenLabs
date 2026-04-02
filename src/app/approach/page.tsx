import Link from "next/link";

export const metadata = {
  title: "Approach | Orven Labs",
  description: "Discovery-led custom AI systems built around your business operations.",
};

const phases = [
  { title: "Discovery", detail: "Map workflows, constraints, and success signals." },
  { title: "Design", detail: "Define agent roles, voice, and routing logic." },
  { title: "Build", detail: "Integrate with your stack and test edge cases." },
  { title: "Optimize", detail: "Tune weekly based on real conversations." },
];

const deliverables = [
  "Workflow map and opportunity gaps",
  "Agent architecture blueprint",
  "Integration and data plan",
  "Launch metrics and review cadence",
];

export default function ApproachPage() {
  return (
    <div className="space-y-10 pb-12">
      <div className="space-y-3">
        <div className="section-title">Approach</div>
        <h1 className="text-4xl font-semibold text-white">Custom systems start with discovery</h1>
        <p className="text-slate-400">We build the right system only after we understand your business flow.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {phases.map((phase, idx) => (
          <div key={phase.title} className="card-soft p-4">
            <div className="text-xs uppercase tracking-[0.14em] text-slate-400">Phase {idx + 1}</div>
            <div className="mt-2 text-lg font-semibold text-white">{phase.title}</div>
            <p className="mt-2 text-sm text-slate-300">{phase.detail}</p>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <div className="section-title">Deliverables</div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {deliverables.map((item) => (
            <div key={item} className="card-soft flex items-center gap-3 p-3 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card flex flex-col gap-3 border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="section-title">Next step</div>
          <h3 className="mt-2 text-xl font-semibold text-white">Start with a blueprint session</h3>
        </div>
        <Link href="/contact" className="button-primary">Book discovery</Link>
      </div>
    </div>
  );
}
