import { siteConfig } from "@/lib/seo";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+${siteConfig.phoneIntl}`,
    email: siteConfig.email,
    areaServed: "Argentina",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.addressLocality,
      addressCountry: siteConfig.addressCountry,
    },
    founder: {
      "@type": "Person",
      name: "Darío Vallinas",
      jobTitle: "Contador Público",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
