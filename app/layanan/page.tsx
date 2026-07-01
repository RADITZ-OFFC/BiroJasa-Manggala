// app/layanan/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HeroLayanan from "../components/heroLayanan/HeroLayanan";
import Steps from "../components/steps/Steps";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const pageTitle = `Layanan Pengurusan STNK | ${siteName}`;
const pageDescription =
  "Pilih layanan: perpanjang STNK, balik nama, mutasi masuk, ganti nomor plat, ubah bentuk/warna, STNK hilang/rusak, plat custom, dan lainnya. Cek persyaratan & konsultasi gratis via WhatsApp.";

const canonical = `${siteUrl}/layanan`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "layanan pengurusan STNK",
    "jasa STNK",
    "jasa perpanjang STNK",
    "perpanjang STNK tahunan",
    "perpanjang STNK 5 tahunan",
    "balik nama kendaraan",
    "mutasi masuk kendaraan",
    "ganti nomor plat",
    "ubah bentuk warna kendaraan",
    "STNK hilang rusak",
    "plat custom",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "biro jasa STNK Jabodetabek",
    "cek persyaratan STNK",
    "konsultasi gratis WhatsApp",
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: canonical,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "BiroJasa Manggala Indonesia — Layanan Pengurusan STNK",
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

export default function LayananPage() {
  const layanan = [
    { name: "Perpanjang STNK Tahunan", url: `${siteUrl}/layanan/perpanjang-stnk-tahunan` },
    { name: "Perpanjang STNK 5 Tahunan", url: `${siteUrl}/layanan/perpanjang-stnk-5-tahunan` },
    { name: "Balik Nama Kendaraan", url: `${siteUrl}/layanan/balik-nama-kendaraan` },
    { name: "Mutasi Masuk Kendaraan", url: `${siteUrl}/layanan/mutasi-masuk-kendaraan` },
    { name: "Ganti Nomor Plat", url: `${siteUrl}/layanan/ganti-nomor-plat` },
    { name: "Ubah Bentuk/Warna", url: `${siteUrl}/layanan/ubah-bentuk-warna` },
    { name: "STNK Hilang/Rusak", url: `${siteUrl}/layanan/stnk-hilang-rusak` },
    { name: "Plat Custom", url: `${siteUrl}/layanan/plat-custom` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#Birojasa-Manggala`,
        name: siteName,
        url: siteUrl,
        telephone: "+6285324188967",
        hasMap: "https://maps.app.goo.gl/SSgcD7aLdy2w69VR9",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Cinangsi RT.12/RW.03, Ciawang, Kec. Leuwisari, Kabupaten Tasikmalaya",
          addressLocality: "Kabupaten Tasikmalaya",
          addressRegion: "JawaBarat",
          postalCode: "46464",
          addressCountry: "ID",
        },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
      },
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#page`,
        url: canonical,
        name: "Layanan Pengurusan STNK & Berkas Kendaraan",
        description: pageDescription,
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
        mainEntity: {
          "@type": "ItemList",
          "@id": `${canonical}#services`,
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: layanan.length,
          itemListElement: layanan.map((it, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: it.name,
              url: it.url,
              provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
              areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-layanan"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroLayanan />
      <Steps />
    </>
  );
}