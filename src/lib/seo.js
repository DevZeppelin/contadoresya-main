export const siteConfig = {
  name: "ContadoresYa",
  url: "https://contadoresya.ar",
  description:
    "Estudio contable online en Argentina especializado en monotributo, impuestos, ARCA, sueldos y certificaciones.",
  phone: "2615740182",
  phoneIntl: "542615740182",
  email: "cpnvallinas@gmail.com",
  whatsapp: "https://wa.me/542615740182",
  addressLocality: "Mendoza",
  addressCountry: "AR",
};

export function pageMetadata({ title, description, path = "/" }) {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_AR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}
