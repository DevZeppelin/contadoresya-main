import PageBuilder from "@/components/sections/PageBuilder";
import { pages } from "@/data/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Monotributo Argentina: Exclusión, Deuda y Categorización",
  description: "¿Problemas con el monotributo? Exclusión, deudas o mala categorización. Estudio contable online en Argentina.",
  path: "/monotributo",
});

export default function Page() {
  return <PageBuilder page={pages.monotributo} />;
}
