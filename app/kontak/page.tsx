// app/kontak/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HeroContact from "../components/heroContact/HeroContact";
import BusinessHours from "../components/businessHours/BusinessHours";
import CtaContact from "../components/ctaContact/CtaContact";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const pageTitle = `Kontak & Lokasi | ${siteName}`;
const pageDescription =
  "Hubungi Biro Jasa Manggala via WhatsApp +6285324188967. Alamat: Jl. Cinangsi Ciawang, Kec. Leuwisari Lihat lokasi di Google Maps dan konsultasi gratis.";

const canonical = `${siteUrl}/kontak`;

const waMessage = "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

const mapsHref = "https://maps.app.goo.gl/SSgcD7aLdy2w69VR9";

// Sumber iframe resmi dari BRAND-PROFILE-BIROJASA-SAHABAT.md
const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6532356893217!2d106.7216366!3d-6.3092055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e56ea58af423%3A0xbbcdfa50c6a4400c!2sBiro%20Jasa%20Stnk%20Bpkb%20Sahabat!5e0!3m2!1sen!2sus!4v1766370931730!5m2!1sen!2sus";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "kontak biro jasa stnk",
    "biro jasa stnk tasikmalaya",
    "biro jasa stnk JawaBarat",
    "alamat biro jasa manggala",
    "lokasi biro jasa stnk serua indah",
    "konsultasi biro jasa stnk",
    "whatsapp biro jasa stnk",
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
        alt: "BiroJasa Manggala Indonesia — Kontak & Lokasi",
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

export default function KontakPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#birojasa-Manggala`,
        name: siteName,
        url: siteUrl,
        telephone: "+6285324188967",
        hasMap: mapsHref,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Cinangsi RT.12/RW.03, Ciawang, Kec. Leuwisari, Kabupaten Tasikmalaya",
          addressLocality: "Kabupaten Tasikmalaya",
          addressRegion: "JawaBarat",
          postalCode: "46464",
          addressCountry: "ID",
        },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+6285324188967",
            contactType: "customer service",
            availableLanguage: ["id"],
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": `${canonical}#contact`,
        url: canonical,
        name: "Kontak & Lokasi Biro Jasa Manggala",
        description: pageDescription,
        mainEntity: { "@id": `${siteUrl}#birojasa-Manggala` },
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-kontak"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroContact />
      <BusinessHours />
      <CtaContact />
    </>
  );
}