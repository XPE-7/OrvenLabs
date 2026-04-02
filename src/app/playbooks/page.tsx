import Link from "next/link";

export const metadata = {
  title: "Playbooks | Orven Labs",
  description: "Practical AI playbooks designed around your real conversations.",
};

const moments = [
  {
    title: "After-hours capture",
    detail: "When someone reaches out late, they still get a warm response and a booking link.",
  },
  {
    title: "DM to calendar",
    detail: "Turn casual questions into a scheduled call without pushy sales.",
  },
  {
    title: "No-show recovery",
    detail: "A gentle reschedule flow that saves the relationship.",
  },
  {
    title: "Quote follow-up",
    detail: "If a proposal goes quiet, we bring it back with context and care.",
  },
  {
    title: "VIP routing",
    detail: "High-value leads skip the line and get a human fast.",
  },
  {
    title: "Support triage",
    detail: "Repeated issues handled instantly, edge cases escalated cleanly.",
  },
];

const playbookParts = [
  {
    title: "Conversation map",
    detail: "Key questions and the shortest path to booking.",
  },
  {
    title: "Decision rules",
    detail: "When to qualify, when to route, when to stop.",
  },
  {
    title: "Brand voice",
    detail: "Simple lines that sound like you, not a bot.",
  },
  {
    title: "Stack connections",
    detail: "Calendar, CRM, inbox, Slack, whatever you use.",
  },
];

const channels = ["Voice", "WhatsApp", "Web", "Instagram", "SMS", "Email"];

export default function PlaybooksPage() {
  return (
    <div className="space-y-12 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="section-title">Playbooks</div>
          <h1 className="text-4xl font-semibold text-white">Playbooks are starting points, not scripts</h1>
          <p className="text-slate-400">
            We shape every flow around your business so each conversation ends in a booked call or a clear handoff.
            Nothing generic, nothing robotic.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">Book a call</Link>
            <Link href="/services" className="button-ghost">See services</Link>
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">What makes a great playbook</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>One clear goal and a calm path to get there.</li>
            <li>Short questions that earn trust fast.</li>
            <li>Smart handoffs when a human is needed.</li>
            <li>Room to improve based on real conversations.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="section-title">Moments that matter</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {moments.map((moment) => (
            <div key={moment.title} className="card p-5">
              <div className="text-lg font-semibold text-white">{moment.title}</div>
              <p className="mt-2 text-sm text-slate-300">{moment.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="section-title">What a playbook includes</div>
          <div className="mt-5 grid gap-3">
            {playbookParts.map((part) => (
              <div key={part.title} className="card-soft p-4">
                <div className="text-sm font-semibold text-white">{part.title}</div>
                <p className="mt-2 text-sm text-slate-300">{part.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="section-title">Channel mix</div>
          <p className="mt-2 text-sm text-slate-300">
            We meet your leads where they already reach out. The same playbook can run across multiple channels.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {channels.map((channel) => (
              <span key={channel} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                {channel}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-4 border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="section-title">Make it yours</div>
          <h3 className="mt-2 text-xl font-semibold text-white">Tell us the moment you want to fix first</h3>
          <p className="mt-2 text-sm text-slate-300">We will build the first playbook around that moment.</p>
        </div>
        <Link href="/contact" className="button-primary">Book a call</Link>
      </div>
    </div>
  );
}
