import SectionTitle from "@/components/ui/SectionTitle";

export default function SeoTextSection({ title, children }) {
  return (
    <section className="section-padding bg-white/70">
      <div className="container-page max-w-4xl">
        <SectionTitle title={title} />
        <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">{children}</div>
      </div>
    </section>
  );
}
