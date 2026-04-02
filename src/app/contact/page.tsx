import Link from "next/link";
import nodemailer from "nodemailer";
import { redirect } from "next/navigation";
import { contactChannels } from "@/lib/data";

export const metadata = {
  title: "Contact | Orven Labs",
  description: "Book a discovery call to design a custom AI solution for your business workflows.",
};

export const runtime = "nodejs";

const socialLinks = [
  { label: "Email", href: "mailto:arcade.richang@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/orvenlabs.co/" },
];

const intakePoints = [
  "A quick snapshot of your business and how you sell or support.",
  "Where conversations slow down or leads get lost.",
  "What you want to automate first, even if you are not sure yet.",
];

async function sendContact(formData: FormData) {
  "use server";

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const workflow = String(formData.get("workflow") ?? "").trim();

  if (!name || !email || !workflow || !email.includes("@")) {
    redirect("/contact?error=1");
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    redirect("/contact?error=1");
  }

  const mailFrom = process.env.MAIL_FROM ?? user;
  const mailTo = process.env.MAIL_TO ?? "arcade.richang@gmail.com";

  const text = [
    "New Orven Labs request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Workflow: ${workflow}`,
  ].join("\n");

  const subject = `New booking request from ${name}`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject,
      text,
    });
  } catch {
    redirect("/contact?error=1");
  }

  redirect("/contact?sent=1");
}

type ContactPageProps = {
  searchParams?: {
    sent?: string;
    error?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const sent = searchParams?.sent === "1";
  const error = searchParams?.error === "1";

  return (
    <div className="space-y-12 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="section-title">Contact</div>
          <h1 className="text-4xl font-semibold text-white">Tell us what you sell and we will build the flow</h1>
          <p className="text-slate-400">
            This is a discovery call, not a hard pitch. We listen first, map the system, and tell you exactly what we
            would build.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/approach" className="button-ghost">See our approach</Link>
            <Link href="/services" className="button-ghost">Explore services</Link>
          </div>
        </div>
        <div className="card-soft space-y-3 p-6">
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">What we need from you</div>
          <ul className="space-y-2 text-sm text-slate-300">
            {intakePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="text-sm text-slate-400">We usually reply within 24-48 hours.</div>
        </div>
      </div>

      {sent ? (
        <div className="card-soft border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
          Thanks for the details. We will review and follow up with next steps shortly.
        </div>
      ) : null}
      {error ? (
        <div className="card-soft border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
          We could not send your request yet. Please email or call us directly and we will take it from there.
        </div>
      ) : null}

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <form action={sendContact} className="card space-y-4 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span className="text-slate-200">Name</span>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                placeholder="Jane Doe"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span className="text-slate-200">Work email</span>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
                placeholder="jane@company.com"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-300">
            <span className="text-slate-200">Company</span>
            <input
              name="company"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
              placeholder="Company name"
            />
          </label>

          <label className="space-y-2 text-sm text-slate-300">
            <span className="text-slate-200">What should we automate first?</span>
            <textarea
              name="workflow"
              required
              className="min-h-[100px] sm:min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-cyan-400/60"
              placeholder="If you are unsure, describe the bottleneck or repeat task."
            />
          </label>

          <button type="submit" className="button-primary w-full md:w-fit">Send request</button>
          <p className="text-xs text-slate-500">We will respond with a short plan and a suggested call time.</p>
        </form>

        <div className="card-soft space-y-5 p-6">
          <div>
            <div className="section-title">Direct channels</div>
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              {contactChannels.map((item) => {
                const channelHref =
                  item.label === "Email"
                    ? `mailto:${item.value}`
                    : item.label === "Phone"
                    ? `tel:${item.value.replace(/\s+/g, "")}`
                    : undefined;

                return (
                  <div key={item.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                    <span className="text-slate-400">{item.label}</span>
                    {channelHref ? (
                      <a href={channelHref} className="font-semibold text-white hover:text-cyan-200">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-white">{item.value}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="section-title">Quick links</div>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
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
        </div>
      </div>
    </div>
  );
}



