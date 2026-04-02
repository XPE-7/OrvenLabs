import Link from "next/link";

export const metadata = {
  title: "Industries | Orven Labs",
  description: "AI systems tailored to the way your industry actually works.",
};

const contexts = [
  {
    name: "Local services on the move",
    pain: "Phones ring while you are on a job, and leads disappear fast.",
    build: "We capture every call, qualify quickly, and book the right slot.",
  },
  {
    name: "Appointment-led studios and clinics",
    pain: "Front desks are busy and rescheduling eats the day.",
    build: "We handle booking, reminders, and polite reschedules without friction.",
  },
  {
    name: "High-ticket consults",
    pain: "Leads want trust and clarity before they commit.",
    build: "We run a calm qualification flow and route VIPs fast.",
  },
  {
    name: "Hospitality and reservations",
    pain: "Messages arrive everywhere and response time matters.",
    build: "We unify inquiries and turn questions into confirmed bookings.",
  },
  {
    name: "Ecommerce and creator brands",
    pain: "DMs pile up and support gets repetitive.",
    build: "We handle the common questions and surface the real opportunities.",
  },
  {
    name: "Property and real estate",
    pain: "Slow follow-up loses the deal to someone faster.",
    build: "We respond instantly, qualify, and schedule the viewing.",
  },
];

const adaptations = [
  {
    title: "Tone + trust",
    detail: "Every industry has its own pace. We match it without sounding scripted.",
  },
  {
    title: "Routing rules",
    detail: "Urgent, high-value, or sensitive leads get special handling.",
  },
  {
    title: "Compliance + consent",
    detail: "We follow the messaging rules that matter in your space.",
  },
  {
    title: "Data capture",
    detail: "We ask only what you need to move the deal forward.",
  },
];

const constants = [
  {
    title: "Fast first response",
    detail: "Speed wins attention and builds trust.",
  },
  {
    title: "Clear next steps",
    detail: "Every flow ends with a booking or a clean handoff.",
  },
  {
    title: "Simple reporting",
    detail: "You always know what is working and what needs tuning.",
  },
];

export default function IndustriesPage() {
  return (
    <div className="space-y-12 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="section-title">Industries</div>
          <h1 className="text-4xl font-semibold text-white">Built for how you sell, not your category</h1>
          <p className="text-slate-400">
            We adapt language, routing, and timing to your world. The call is where we learn your process and shape a
            system around it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">Book a call</Link>
            <Link href="/results" className="button-ghost">See outcomes</Link>
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Why this works</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>We start with your actual conversations, not templates.</li>
            <li>We tailor the flow to the way your team sells.</li>
            <li>We keep the goal focused: a booked call or a clean handoff.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <div className="section-title">Where we fit best</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contexts.map((context) => (
            <div key={context.name} className="card p-5">
              <div className="text-lg font-semibold text-white">{context.name}</div>
              <p className="mt-2 text-sm text-slate-300">{context.pain}</p>
              <div className="mt-4 card-soft p-3 text-xs text-slate-300">{context.build}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-soft p-6">
          <div className="section-title">What we adapt</div>
          <div className="mt-4 space-y-3">
            {adaptations.map((item) => (
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
        <div className="card p-6">
          <div className="section-title">What stays consistent</div>
          <div className="mt-4 space-y-4">
            {constants.map((item) => (
              <div key={item.title} className="card-soft p-4">
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-4 border border-white/10 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="section-title">Not on the list?</div>
          <h3 className="mt-2 text-xl font-semibold text-white">We will learn your industry on the first call</h3>
          <p className="mt-2 text-sm text-slate-300">Tell us how you sell. We will design the right flow.</p>
        </div>
        <Link href="/contact" className="button-primary">Book a call</Link>
      </div>
    </div>
  );
}
