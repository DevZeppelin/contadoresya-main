import SectionTitle from "@/components/ui/SectionTitle";

export default function InfoCards({ eyebrow, title, subtitle, items = [] }) {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card-soft rounded-3xl p-7 transition hover:-translate-y-1">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-xl">{item.icon || "✔"}</div>
              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
