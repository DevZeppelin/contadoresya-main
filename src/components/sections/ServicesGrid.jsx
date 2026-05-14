import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export default function ServicesGrid({ title = "Elegí qué necesitás resolver ahora", subtitle = "Servicios contables pensados para resolver problemas concretos." }) {
  return (
    <section className="section-padding bg-white/60">
      <div className="container-page">
        <SectionTitle eyebrow="Servicios" title={title} subtitle={subtitle} center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link href={s.href} key={s.href} className="group rounded-3xl border border-cyan-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
              <h3 className="text-2xl font-black text-slate-950 group-hover:text-cyan-700">{s.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{s.text}</p>
              <span className="mt-6 inline-block font-black text-cyan-700">Ver servicio →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
