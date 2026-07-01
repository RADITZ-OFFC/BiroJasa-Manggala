// app/testimoni/page.tsx
import type { Metadata } from "next";
import TestimoniPage from "../components/testimoniPage/TestimoniPage";
import CtaHome from "../components/ctaHome/CtaHome";

const siteName = "Biro Jasa Manggala";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const ogImagePath = "/images/hero-birojasa-Manggala.png";

const title = "Testimoni Pelanggan | Biro Jasa Manggala";

const description =
  "Baca pengalaman nyata pelanggan BiroJasa Manggala Indonesia. Layanan aman, transparan, dan cepat untuk pengurusan STNK, SIM, dan dokumen kendaraan lainnya.";

const keywords: string[] = [
  "testimoni biro jasa",
  "ulasan biro jasa manggala",
  "review jasa pengurusan stnk",
  "pengalaman pelanggan biro jasa",
  "biro jasa terpercaya tasikmalaya",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: `${siteUrl}/testimoni`,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "id_ID",
    url: `${siteUrl}/testimoni`,
    title,
    description,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Testimoni Pelanggan Biro Jasa Manggala",
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

export default function TestimoniRoute() {
  return (
    <main>
      <TestimoniPage />
      <CtaHome />
    </main>
  );
}
