import { siteConfig } from "@/lib/seo";

export function PrimaryButton({ href = siteConfig.whatsapp, children = "Hablar por WhatsApp" }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-cyan-700 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      {children}
    </a>
  );
}

export function SecondaryButton({ href = "#contacto", children = "Consultar ahora" }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-2xl border border-white/35 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      {children}
    </a>
  );
}
