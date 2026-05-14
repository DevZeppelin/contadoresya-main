import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";

export default function FloatingWhatsapp() {
  return (
    <a href={siteConfig.whatsapp} target="_blank" aria-label="Hablar por WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110">
      <MessageCircle size={32} />
    </a>
  );
}
