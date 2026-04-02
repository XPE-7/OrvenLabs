import Link from "next/link";

export const metadata = {
  title: "Results | Orven Labs",
  description: "Human-first outcomes that lead to booked calls and clean handoffs.",
};

const outcomeShifts = [
  {
    title: "Leads get a real reply fast",
    detail: "Every new inquiry receives a calm response before it goes cold.",
  },
  {
    title: "Bookings feel guided",
    detail: "We make it easy to pick a time without back-and-forth.",
  },
  {
    title: "Follow-ups feel consistent",
    detail: "No awkward gaps or forgotten leads in the middle.",
  },
  {
    title: "Handoffs feel clean",
    detail: "Your team gets context, not a messy thread.",
  },
  {
    title: "Support stays light",
    detail: "Common questions are handled while humans focus on the hard ones.",
  },
  {
    title: "Reporting stays simple",
    detail: "You see what is working without digging through logs.",
  },
];

const signals = [
  {
    title: "First response time",
    detail: "How fast a lead hears back after they reach out.",
  },
  {
    title: "Qualified lead rate",
    detail: "How many conversations end with a real fit.",
  },
  {
    title: "Booking conversion",
    detail: "How often the conversation ends in a scheduled call.",
  },
  {
    title: "No-show recovery",
    detail: "How often we recover the call after a miss.",
  },
];

const tuningSteps = [
  {
    title: "Week 1: baseline",
    detail: "We capture current response times, lead flow, and drop-off points.",
  },
  {
    title: "Week 2: tighten",
    detail: "We refine the questions, routing, and voice based on real replies.",
  },
  {
    title: "Week 4: scale",
    detail: "We expand to new channels or add deeper automation when the flow is stable.",
  },
];

export default function ResultsPage() {
  return (
    <div className="space-y-12 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="section-title">Results</div>
          <h1 className="text-4xl font-semibold text-white">Results that feel calm and human</h1>
          <p className="text-slate-400">
            We focus on the moments that decide whether a lead trusts you enough to book the call. Every build is tuned
            to those moments.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">Book a call</Link>
            <Link href="/playbooks" className="button-ghost">See playbooks</Link>
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">What we watch</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Speed to first response.</li>
            <li>How cleanly a lead is qualified.</li>
            <li>How often the next step is booked.</li>
            <li>Where the handoff breaks down.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="section-title">Outcome shifts</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {outcomeShifts.map((item) => (
            <div key={item.title} className="card p-5">
              <div className="text-lg font-semibold text-white">{item.title}</div>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="section-title">Signals we track</div>
          <div className="mt-4 space-y-3">
            {signals.map((item) => (
              <div key={item.title} className="card-soft p-4">
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="section-title">How results show up</div>
          <div className="mt-4 space-y-3">
            {tuningSteps.map((step) => (
              <div key={step.title} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <div>
                  <div className="text-sm font-semibold text-white">{step.title}</div>
                  <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-4 border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="section-title">Ready to improve the flow?</div>
          <h3 className="mt-2 text-xl font-semibold text-white">We will design the first booking loop together</h3>
          <p className="mt-2 text-sm text-slate-300">One call, then a clear plan shaped to your business.</p>
        </div>
        <Link href="/contact" className="button-primary">Book a call</Link>
      </div>
    </div>
  );
}
