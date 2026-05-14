import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Certificación de Ingresos en Argentina | Rápido y Simple",
  description: "Certificación de ingresos firmada por contador. Válida para alquileres, créditos y billeteras bloqueadas.",
  path: "/certificacion-de-ingresos",
});

export default function Page() {
  return <PageBuilder page={pages.certificacion} />;
}
