import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

const buildIncludes = [
  "Discovery + workflow map",
  "Agent design and routing",
  "Integrations and QA",
  "Launch + optimization plan",
];

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} | Orven Labs`,
    description: service.positioning,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <div className="space-y-8 pb-12">
      <div className="space-y-2">
        <div className="section-title">Service</div>
        <h1 className="text-4xl font-semibold text-white">{service.name}</h1>
        <p className="text-slate-400">{service.positioning}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card-soft p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-slate-400">Problem</div>
          <div className="mt-2 text-lg font-semibold text-white">{service.problem}</div>
        </div>
        <div className="card-soft p-5">
          <div className="text-xs uppercase tracking-[0.14em] text-slate-400">Solution</div>
          <div className="mt-2 text-lg font-semibold text-white">{service.solution}</div>
        </div>
      </div>

      <div className="card p-6">
        <div className="section-title">Build includes</div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {buildIncludes.map((item) => (
            <div key={item} className="card-soft flex items-center gap-3 p-3 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/contact" className="button-primary">Book this build</Link>
        <Link href="/services" className="button-ghost">Back to services</Link>
      </div>
    </div>
  );
}
