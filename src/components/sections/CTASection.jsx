import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";

export default function CTASection({
  title = "Hablá con el contador ahora",
  text = "No dejes que un problema fiscal siga creciendo.",
}) {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/images/hero00.png')",
        }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-slate-250/80" />

      {/* Glow azul */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/70 via-slate-950/40 to-cyan-950/60 opacity-90" />

      {/* Blur radial */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Contenido */}
      <div className="container-page relative z-10 text-center">
        {/* Badge */}
        <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold tracking-wide text-cyan-200 backdrop-blur-md">
          ESTUDIO CONTABLE ONLINE
        </span>

        {/* Título */}
        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          {title}
        </h2>

        {/* Texto */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
          {text}
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <PrimaryButton />
          <SecondaryButton />
        </div>
      </div>
    </section>
  );
}
