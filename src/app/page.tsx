import Link from "next/link";

const exploreLinks = [
  {
    href: "/approach",
    title: "Approach",
    detail: "Discovery and delivery",
    tone: "from-[#2b6cff]/15",
  },
  {
    href: "/services",
    title: "Services",
    detail: "Custom agent systems",
    tone: "from-[#0aa8bf]/15",
  },
  {
    href: "/playbooks",
    title: "Playbooks",
    detail: "Proven flows, tuned",
    tone: "from-[#d9a96b]/20",
  },
  {
    href: "/industries",
    title: "Industries",
    detail: "Market specific logic",
    tone: "from-[#5c7bff]/15",
  },
  {
    href: "/results",
    title: "Results",
    detail: "Measurable outcomes",
    tone: "from-[#19c3d4]/15",
  },
  {
    href: "/contact",
    title: "Book a call",
    detail: "Start with discovery",
    tone: "from-[#22c8b4]/20",
  },
];

const signalPoints = [
  "Discovery call first",
  "Custom system design",
  "Launch with handoff",
  "Ongoing tuning",
];

const bookingSteps = [
  "Quick intro call",
  "Workflow review",
  "Blueprint proposal",
];

const motionWords = [
  "book the call",
  "reply in seconds",
  "sound human",
  "fit your workflow",
];

export default function Home() {
  return (
    <div className="space-y-14 pb-12">
      <section className="grid-overlay relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-14 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:px-10">
        <div className="absolute inset-0 mesh-bg opacity-80" />
        <div className="absolute -left-10 top-10 h-28 w-28 sm:-left-16 sm:h-40 sm:w-40 rounded-full bg-[#2b6cff]/20 blur-3xl float-slow" />
        <div className="absolute right-4 top-6 h-24 w-24 sm:right-10 sm:h-32 sm:w-32 rounded-full bg-[#0aa8bf]/20 blur-3xl float-slower" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 reveal-up">
            <div className="pill w-fit">Custom AI systems</div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              We build AI agents that{" "}
              <span className="word-rotator">
                <span className="word-rotator__inner">
                  {motionWords.map((word) => (
                    <span key={word} className="word-rotator__word">{word}</span>
                  ))}
                </span>
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Orven Labs designs custom automation after mapping your real workflow. No templates, no generic bots.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="button-primary">Book a discovery call</Link>
              <Link href="/approach" className="button-ghost">How we work</Link>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-300">
              {signalPoints.map((point) => (
                <span key={point} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="card-soft relative overflow-hidden p-6">
            <div className="absolute -right-6 top-6 h-28 w-28 sm:-right-10 sm:h-40 sm:w-40 rounded-full bg-[#2b6cff]/20 blur-3xl float-slower" />
            <div className="absolute -left-4 bottom-10 h-24 w-24 sm:-left-8 sm:h-32 sm:w-32 rounded-full bg-[#d9a96b]/20 blur-3xl float-slow" />
            <div className="relative space-y-4">
              <div className="section-title">Blueprint preview</div>
              <div className="card-soft p-4 text-sm text-slate-200">Workflow map aligned to your team.</div>
              <div className="card-soft p-4 text-sm text-slate-200">Agent roles and fallback logic.</div>
              <div className="card-soft p-4 text-sm text-slate-200">Integration plan for your stack.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-soft p-6">
          <div className="section-title">Live signal</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Every lead gets a response</h2>
          <p className="mt-2 text-slate-300">We keep the flow moving while your team stays focused.</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="card-soft p-3">Inbound captured in seconds.</div>
            <div className="card-soft p-3">Qualification prompts adapt to the answers.</div>
            <div className="card-soft p-3">Booking confirmed with a calm follow-up.</div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="absolute inset-0 motion-grid opacity-60" />
          <div className="absolute -left-6 top-10 h-28 w-28 sm:-left-10 sm:h-40 sm:w-40 rounded-full bg-[#2b6cff]/25 blur-3xl float-slow" />
          <div className="absolute right-[-12px] top-6 h-24 w-24 sm:right-[-20px] sm:h-32 sm:w-32 rounded-full bg-[#0aa8bf]/25 blur-3xl float-slower" />
          <div className="absolute bottom-[-20px] left-1/2 h-28 w-28 sm:bottom-[-30px] sm:h-40 sm:w-40 -translate-x-1/2 rounded-full bg-[#d9a96b]/20 blur-3xl float-slow" />
          <div className="motion-line hidden sm:block" />
          <div className="relative space-y-4">
            <div className="section-title">Signal view</div>
            <div className="card-soft p-3 text-sm text-slate-200">Inbound &gt; qualify &gt; book</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card-soft p-3 text-xs text-slate-300">Avg reply: 12s</div>
              <div className="card-soft p-3 text-xs text-slate-300">Handoff: 2 steps</div>
            </div>
            <div className="card-soft p-3 text-xs text-slate-300">Follow-up cadence: 3 gentle nudges</div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-6">
          <div className="section-title">Book a call</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Start with a short discovery</h2>
          <p className="mt-2 text-slate-300">We only need one real workflow to start designing your system.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">Book a discovery call</Link>
            <Link href="/contact" className="button-ghost">Send a quick brief</Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {bookingSteps.map((step) => (
              <div key={step} className="card-soft p-3 text-sm text-slate-200">{step}</div>
            ))}
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="section-title">What you get</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="card-soft p-3">A clear workflow map and gap audit.</div>
            <div className="card-soft p-3">A custom agent architecture plan.</div>
            <div className="card-soft p-3">Launch timeline and integration list.</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <div className="section-title">Explore</div>
          <h2 className="mt-2 text-3xl font-semibold text-white">Pick a path</h2>
          <p className="text-slate-400">Each section has its own space and detail.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exploreLinks.map((item) => (
            <Link key={item.href} href={item.href} className="card block p-5 hover:no-underline">
              <div className={`mb-3 h-1 w-12 rounded-full bg-gradient-to-r ${item.tone} to-transparent`} />
              <div className="text-lg font-semibold text-white">{item.title}</div>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card-soft p-5">
          <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Studio</div>
          <div className="mt-2 text-lg font-semibold text-white">Discovery</div>
          <p className="mt-2 text-sm text-slate-300">Map flows, constraints, and voice.</p>
        </div>
        <div className="card-soft p-5">
          <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Studio</div>
          <div className="mt-2 text-lg font-semibold text-white">Design</div>
          <p className="mt-2 text-sm text-slate-300">Architect the agent system.</p>
        </div>
        <div className="card-soft p-5">
          <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Studio</div>
          <div className="mt-2 text-lg font-semibold text-white">Deploy</div>
          <p className="mt-2 text-sm text-slate-300">Launch, monitor, refine.</p>
        </div>
      </section>

      <section className="card overflow-hidden border border-white/10 bg-gradient-to-r from-[#2b6cff]/20 via-[#0aa8bf]/10 to-transparent p-8 text-center">
        <div className="section-title justify-center">Get started</div>
        <h3 className="mt-3 text-3xl font-semibold text-white">Ready to book a discovery call?</h3>
        <p className="mt-2 text-slate-300">Tell us one workflow and we will map the system.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="button-primary">Book a call</Link>
          <Link href="/approach" className="button-ghost">See the approach</Link>
        </div>
      </section>
    </div>
  );
}


