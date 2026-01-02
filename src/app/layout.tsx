import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JhonDev | Desarrollador Web (React, Next.js) | Optimización SEO",
  description:
    "Desarrollador Web experto en React, Next.js y TypeScript. Creo aplicaciones de alto rendimiento, accesibles y optimización SEO. ¡Conoce mi trabajo!",
  authors: [{ name: "Jhonatan Espinal Garcia" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "JhonDev | Desarrollador Web (React, Next.js, TypeScript)",
    description:
      "Desarrollador Web Frontend experto en React, Next.js y TypeScript. Creo aplicaciones de alto rendimiento, accesibles y optimizadas para SEO. ¡Conoce mi trabajo!",
    url: "https://www.jhondev.xyz/",
    siteName: "JhonDev",
    images: [
      {
        url: "https://wlfxrqgczmkdisaygmra.supabase.co/storage/v1/object/public/portfolio-assets/meta/meta-background.webp",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhonatan Espinal | Desarrollador Web Frontend (React, Next.js)",
    description:
      "Desarrollador Web Frontend experto en React, Next.js y TypeScript. Creo aplicaciones de alto rendimiento, accesibles y optimizadas para SEO. ¡Conoce mi trabajo!",
    images: [
      "https://wlfxrqgczmkdisaygmra.supabase.co/storage/v1/object/public/portfolio-assets/meta/meta-background.webp",
    ],
  },
  verification: {
    google: "ZuLeN527RLeu6fCEEWEZsRbq3r7SbpqLPCBIFy2CS48",
  },
  other: {
    language: "es-MX",
    "geo.region": "MX",
    "geo.placename": "Ciudad de México, México",
    "geo.position": "19.4326;-99.1332",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
