import type { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/700.css";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = "https://stromaservices.com";
const title = "STROMA | Gestión estratégica de servicios críticos";
const description =
  "Acompañamos a las organizaciones en la contratación y el desempeño de servicios de alimentación y facility management.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "facility management",
    "gestión de servicios de alimentación",
    "servicios críticos",
    "gestión estratégica de servicios",
    "contratación de servicios",
    "STROMA",
  ],
  authors: [{ name: "STROMA" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "STROMA",
    title,
    description,
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "STROMA — Gestión estratégica de servicios críticos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${basePath}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.svg`, type: "image/svg+xml" },
      { url: `${basePath}/favicon-16.png`, sizes: "16x16", type: "image/png" },
      { url: `${basePath}/favicon-32.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/favicon-48.png`, sizes: "48x48", type: "image/png" },
      { url: `${basePath}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${basePath}/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    shortcut: `${basePath}/favicon.ico`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "STROMA",
  url: siteUrl,
  logo: `${siteUrl}/stroma-logo-full-white.png`,
  description,
  sameAs: ["https://www.linkedin.com/in/helviofrieiro"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@stromaservices.com",
      telephone: "+54-9-11-3011-6835",
      areaServed: "AR",
      availableLanguage: ["Spanish"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guayrá 2249",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
