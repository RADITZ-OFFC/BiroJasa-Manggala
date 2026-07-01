// app/page.tsx
import type { Metadata } from "next";
import HeroMain from "./components/heroMain/HeroMain";
import TrustBadges from "./components/trustBadges/TrustBadges";
import ServicesGrid from "./components/servicesGrid/ServicesGrid";
import Steps from "./components/steps/Steps";
import WhyUs from "./components/whyUs/WhyUs";
import AreaCoverage from "./components/areaCoverage/AreaCoverage";
import CtaHome from "./components/ctaHome/CtaHome";
import FaqMini from "./components/faqMini/FaqMini";

const siteName = "Biro Jasa Manggala";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const ogImagePath = "/images/hero-birojasa-Manggala.png"; // 1200x630

const title = "Biro Jasa STNK Terpercaya | Biro Jasa Manggala";

const description =
  "Urus STNK tanpa ribet dan tanpa antre. Konsultasi gratis via WhatsApp +6285324188967. Proses jelas, biaya transparan, berkas aman.";

const keywords: string[] = [
  "biro jasa stnk",
  "jasa pengurusan stnk",
  "biro jasa stnk ciputat",
  "jemput berkas stnk",
  "proses jelas",
  "biaya transparan",
  "berkas aman",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "id_ID",
    url: `${siteUrl}/`,
    title,
    description,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Biro Jasa Manggala — Biro Jasa STNK Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImagePath],
  },
};

function buildHomeWebPageJsonLd() {
  const whatsappUrl = "https://wa.me/6285324188967";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#home`,
    name: title,
    url: `${siteUrl}/`,
    description,
    isPartOf: { "@id": `${siteUrl}/#localbusiness` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}${ogImagePath}`,
      width: 1200,
      height: 630,
    },
    potentialAction: [
      {
        "@type": "ContactAction",
        name: "Konsultasi Gratis",
        target: [whatsappUrl],
      },
    ],
  };
}

export default function HomePage() {
  const homeJsonLd = buildHomeWebPageJsonLd();

  return (
    <main>
      {/* Page JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <HeroMain />
      <TrustBadges />
      <ServicesGrid />
      <Steps />
      <WhyUs />
      <AreaCoverage />
      <FaqMini />
      <CtaHome />
    </main>
  );
}