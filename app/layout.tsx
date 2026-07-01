// app/layout.tsx
import type { Metadata } from "next";
import "./styles/_globals.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const siteName = "Biro Jasa Manggala Indonesia";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const ogImagePath = "/images/hero-birojasa-Manggala.png"; // 1200x630

const defaultDescription =
  "Biro Jasa Manggala membantu pengurusan STNK dan kelengkapan surat kendaraan dengan proses yang jelas, transparan, aman, dan cepat. Konsultasi gratis via WhatsApp, tanpa ribet dan tanpa perlu antre.";

const keywords: string[] = [
  "biro jasa stnk",
  "jasa pengurusan stnk",
  "biro jasa stnk ciputat",
  "jasa stnk tangerang selatan",
  "perpanjang stnk tahunan",
  "perpanjang stnk 5 tahunan",
  "balik nama kendaraan",
  "mutasi masuk kendaraan",
  "ganti nomor plat",
  "ubah bentuk warna kendaraan",
  "stnk hilang",
  "stnk rusak",
  "plat custom",
  "jemput berkas",
  "jemput antar dokumen",
  "konsultasi stnk",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Biro Jasa STNK Terpercaya | Biro Jasa Manggala Indonesia",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "id_ID",
    url: siteUrl,
    title: "Biro Jasa STNK Terpercaya | Biro Jasa Manggala Indonesia",
    description: defaultDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Biro Jasa Manggala Indonesia — Biro Jasa STNK Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biro Jasa STNK Terpercaya | Biro Jasa Manggala Indonesia",
    description: defaultDescription,
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: siteName,
    url: siteUrl,
    telephone: "+6285324188967",
    image: `${siteUrl}${ogImagePath}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Cinangsi RT.12/RW.03, Ciawang, Kec. Leuwisari",
      addressLocality: "Kabupaten Tasikmalaya",
      addressRegion: "JawaBarat",
      postalCode: "46464",
      addressCountry: "ID",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Kabupaten Tasikmalaya" },
      { "@type": "AdministrativeArea", name: "Kota Tasikmalaya" },
      { "@type": "AdministrativeArea", name: "Jawa Barat" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+6285324188967",
        contactType: "customer service",
        availableLanguage: ["id"],
      },
    ],
    sameAs: ["https://maps.app.goo.gl/SSgcD7aLdy2w69VR9"],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        {/* Sitewide JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />

        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}