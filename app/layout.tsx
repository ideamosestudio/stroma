import type { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/700.css";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "STROMA | Gestión estratégica de servicios críticos",
  description:
    "Acompañamos a las organizaciones en la contratación y el desempeño de servicios de alimentación y facility management.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
