// app/tentang/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroAbout from "../components/heroAbout/HeroAbout";
import BrandStory from "../components/brandStory/BrandStory";
import VisiMisi from "../components/visiMisi/VisiMisi";
import CaraKerja from "../components/caraKerja/CaraKerja";
import AreaCoverageAbout from "../components/areaCoverageAbout/AreaCoverageAbout";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const pageTitle = `Tentang BiroJasa Manggala Indonesia — Aman, Transparan, dan Proses Jelas`;
const pageDescription =
  "Kenali BiroJasa Manggala Indonesia: biro jasa pengurusan STNK & berkas kendaraan untuk orang sibuk. Proses jelas, komunikasi responsif, berkas aman, dan biaya transparan.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "tentang biro jasa manggala",
    "biro jasa STNK terpercaya",
    "jasa pengurusan STNK",
    "biro jasa STNK TasikMalaya",
    "biro jasa STNK JawaBarat",
    "jemput antar berkas",
    "proses pengurusan STNK",
    "berkas aman",
    "biaya transparan",
  ],
  alternates: {
    canonical: `${siteUrl}/tentang`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteUrl}/tentang`,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "BiroJasa Manggala Indonesia — Tentang Kami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TentangPage() {
  const aboutUrl = `${siteUrl}/tentang`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${aboutUrl}#about`,
    url: aboutUrl,
    name: "Tentang BiroJasa Manggala Indonesia",
    description: pageDescription,
    about: {
      "@type": "ProfessionalService",
      name: siteName,
      url: siteUrl,
      telephone: "+6285324188967",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Cinangsi Ciawang, Kec. Leuwisari",
        addressLocality: "Kabupaten Tasikmalaya",
        addressRegion: "JawaBarat",
        postalCode: "46464",
        addressCountry: "ID",
      },
      areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
    },
  };

  return (
    <>
      <Script
        id="jsonld-tentang-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroAbout />
      <BrandStory />
      <VisiMisi />
      <CaraKerja />
      <AreaCoverageAbout />
    </>
  );
}