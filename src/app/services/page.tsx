import Link from "next/link";

export const metadata = {
  title: "Services | Orven Labs",
  description: "Human-first AI systems that book calls and adapt to your workflow.",
};

const signatureBuilds = [
  {
    title: "The First-Reply Engine",
    detail: "Catches every lead and responds in seconds, even after hours.",
  },
  {
    title: "The Qualification Lane",
    detail: "Filters, scores, and routes to the right person without friction.",
  },
  {
    title: "The Booking Loop",
    detail: "Schedules, confirms, and nudges so appointments actually happen.",
  },
  {
    title: "The Support Companion",
    detail: "Handles repeat questions and hands off cleanly when needed.",
  },
];

const buildSteps = [
  {
    title: "Listen",
    detail: "We learn how you sell, where leads stall, and what your team avoids doing.",
  },
  {
    title: "Design",
    detail: "We map the conversation, handoffs, and guardrails that keep it on-brand.",
  },
  {
    title: "Build",
    detail: "We wire the channels, calendar, and CRM so it lives in your stack.",
  },
  {
    title: "Tune",
    detail: "We review real conversations and tighten the flow week by week.",
  },
];

const customizations = [
  {
    title: "Tone + language",
    detail: "Short, direct, and human. No robotic scripts.",
  },
  {
    title: "Routing logic",
    detail: "VIPs, urgent requests, and edge cases go to the right place.",
  },
  {
    title: "Data capture",
    detail: "We collect only what you need to make confident decisions.",
  },
  {
    title: "Visibility",
    detail: "Dashboards, alerts, and weekly snapshots keep you in the loop.",
  },
];

const outcomes = [
  {
    title: "Faster first response",
    detail: "Leads get a real reply before they drift away.",
  },
  {
    title: "Cleaner handoffs",
    detail: "Your team sees context, not chaos.",
  },
  {
    title: "More booked calls",
    detail: "Follow-ups feel consistent and calm.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="section-title">Services</div>
          <h1 className="text-4xl font-semibold text-white">Systems that feel like your team</h1>
          <p className="text-slate-400">
            We build custom AI agent systems around the way you already sell and support. The goal is simple: get the
            call booked, then tailor everything to your business.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">Book a call</Link>
            <Link href="/approach" className="button-ghost">See the process</Link>
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">What the call covers</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Where leads drop off and what a win looks like.</li>
            <li>Your channels, tools, and the team behind them.</li>
            <li>A quick outline of the first system we would build.</li>
            <li>Next steps and timeline if it feels right.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="section-title">Signature builds</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {signatureBuilds.map((build) => (
            <div key={build.title} className="card p-5">
              <div className="text-lg font-semibold text-white">{build.title}</div>
              <p className="mt-2 text-sm text-slate-300">{build.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="section-title">How we build</div>
          <div className="mt-5 space-y-4">
            {buildSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="text-sm font-semibold text-cyan-200">0{index + 1}</div>
                <div>
                  <div className="text-base font-semibold text-white">{step.title}</div>
                  <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="section-title">What gets customized</div>
          <div className="mt-4 space-y-3">
            {customizations.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <p className="mt-1 text-sm text-slate-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="section-title">Outcomes we aim for</div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item.title} className="card-soft p-4">
              <div className="text-base font-semibold text-white">{item.title}</div>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card flex flex-col gap-4 border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="section-title">Start here</div>
          <h3 className="mt-2 text-xl font-semibold text-white">Tell us what you sell. We will design the system.</h3>
          <p className="mt-2 text-sm text-slate-300">One call, then a clear plan shaped to your business.</p>
        </div>
        <Link href="/contact" className="button-primary">Book a call</Link>
      </div>
    </div>
  );
}
