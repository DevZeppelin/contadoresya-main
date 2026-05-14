export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyan-600">{eyebrow}</p>}
      <h2 className="text-3xl font-black leading-tight text-slate-250 md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>}
    </div>
  );
}
