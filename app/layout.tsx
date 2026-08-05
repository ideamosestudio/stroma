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
    icon: `${basePath}/stroma-logo.png`,
    shortcut: `${basePath}/stroma-logo.png`,
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
