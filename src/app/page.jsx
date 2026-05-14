import PageBuilder from "@/components/sections/PageBuilder";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contador en Mendoza Online | Monotributo, ARCA e Impuestos",
  description: "Estudio contable online en Argentina. Resolvé problemas con monotributo, deudas ARCA, impuestos y sueldos. Atención rápida por WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return <><PageBuilder page={pages.home} /><ServicesGrid /></>;
}
