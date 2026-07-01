// app/layanan/stnk-hilang-rusak/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroService from "@/app/components/heroService/HeroService";
import BenefitsSummary from "@/app/components/benefitsSummary/BenefitsSummary";
import PersyaratanDokumen from "@/app/components/persyaratanDokumen/PersyaratanDokumen";
import AlurProses from "@/app/components/alurProses/AlurProses";
import Estimasi from "@/app/components/estimasi/Estimasi";
import FaqMini from "@/app/components/faqMini/FaqMini";
import CtaClosingService from "@/app/components/ctaClosingService/CtaClosingService";

import { faClock } from "@fortawesome/free-solid-svg-icons";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://biro-jasa-manggala.vercel.app";

const siteName = "BiroJasa Manggala Indonesia";
const ogImage = `${siteUrl}/images/og-birojasa-sahabat.jpg`;

const canonical = `${siteUrl}/layanan/stnk-hilang-rusak`;

const pageTitle = `Jasa STNK Hilang/Rusak | ${siteName}`;
const pageDescription =
  "Jasa urus STNK hilang atau rusak dengan proses rapi dan transparan. Persyaratan jelas: BPKB asli, fotocopy STNK (jika ada), KTP asli, surat kuasa, laporan kehilangan dari Polsek (untuk hilang), dan cek fisik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa urus STNK hilang",
    "jasa STNK rusak",
    "buat STNK hilang",
    "urus STNK hilang",
    "urus STNK rusak",
    "syarat STNK hilang",
    "syarat STNK rusak",
    "laporan kehilangan Polsek STNK",
    "cek fisik STNK hilang",
    "biro jasa STNK Ciputat",
    "biro jasa STNK Tangerang Selatan",
    "jasa STNK Jabodetabek",
    "konsultasi gratis WhatsApp",
  ],
  alternates: { canonical },
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
        alt: "BiroJasa Manggala Indonesia — Jasa STNK Hilang/Rusak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function StnkHilangRusakPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal urus STNK hilang/rusak.";
  const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(
    waMessage
  )}`;

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
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: "Jasa STNK Hilang/Rusak — Dibantu Sampai Beres",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa STNK Hilang/Rusak",
        serviceType: "Urus STNK Hilang atau STNK Rusak",
        url: canonical,
        description:
          "Layanan bantuan pengurusan STNK hilang atau rusak dengan persyaratan jelas, alur transparan, dan komunikasi responsif agar kamu tidak bolak-balik dan tidak bingung berkas.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin mengurus STNK hilang atau rusak dengan proses yang rapi",
        },
        availableChannel: [
          {
            "@type": "ServiceChannel",
            serviceUrl: waHref,
            servicePhone: "+6285324188967",
            availableLanguage: ["id"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Layanan", item: `${siteUrl}/layanan` },
          { "@type": "ListItem", position: 3, name: "STNK Hilang/Rusak", item: canonical },
        ],
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
        id="jsonld-stnk-hilang-rusak"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa STNK Hilang/Rusak"
          subtitle="Tenang—kami bantu cek berkas, jelaskan alur, dan dampingi prosesnya dengan komunikasi yang jelas, supaya kamu nggak panik dan nggak bolak-balik."
          description="Untuk STNK hilang biasanya perlu laporan kehilangan dari Polsek. Untuk STNK rusak, persyaratannya bisa berbeda. Mulai dari chat WhatsApp dulu—kami cek kondisi kamu dan arahkan langkah paling aman."
          badgeText="Layanan STNK"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal urus STNK hilang/rusak."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "STNK Hilang/Rusak", href: "/layanan/stnk-hilang-rusak" },
          ]}
          highlights={[
            {
              title: "Arahan berkas jelas",
              description:
                "Kami bantu cek BPKB, KTP, surat kuasa, fotocopy STNK (jika ada), dan kebutuhan laporan kehilangan.",
            },
            {
              title: "Proses rapi & transparan",
              description:
                "Alur dijelaskan dari awal, komunikasi responsif, dan update status yang jelas.",
            },
            {
              title: "Berkas ditangani aman",
              description: "Dokumen penting kamu ditangani tertib dan bertanggung jawab.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat urus STNK hilang/rusak"
          subheading="Masalah STNK bikin panik itu wajar. Yang penting, langkahnya jelas dan berkasnya rapi."
          items={[
            {
              title: "Tidak bingung harus mulai dari mana",
              description:
                "Kami arahkan langkah pertama yang benar—termasuk jika perlu laporan kehilangan dari Polsek.",
            },
            {
              title: "Persyaratan jelas sesuai kondisi",
              description:
                "STNK hilang dan STNK rusak bisa punya kebutuhan berbeda. Kami bantu cek persyaratan sesuai kasus kamu.",
            },
            {
              title: "Hemat waktu & tenaga",
              description:
                "Proses dibantu dan dikawal sehingga kamu tidak bolak-balik untuk hal yang sama.",
            },
            {
              title: "Komunikasi transparan",
              description:
                "Kami jelaskan alur dan hal yang bisa memengaruhi proses, jadi kamu tidak merasa ‘gelap’ di tengah jalan.",
            },
            {
              title: "Update status responsif",
              description:
                "Tanya kapan saja via WhatsApp—kami update progres secara jelas dan informatif.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan urus STNK hilang/rusak"
          subheading="Siapkan dokumen berikut agar proses lebih lancar. Kalau ada yang belum lengkap, chat dulu—kami bantu cek opsi langkahnya."
          items={[
            { label: "BPKB Asli" },
            {
              label: "STNK Fotocopy (jika ada)",
              note: "Jika STNK hilang total dan tidak ada fotocopy, chat dulu untuk kami cek langkahnya.",
            },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            {
              label: "Laporan Kehilangan dari Polsek",
              note: "Diperlukan untuk kasus STNK hilang.",
            },
            {
              label: "Cek Fisik",
              note: "Biasanya dibutuhkan untuk verifikasi identitas kendaraan.",
            },
          ]}
        />

        <AlurProses
          heading="Alur proses urus STNK hilang/rusak"
          subheading="Langkah dibuat jelas agar kamu tidak panik dan tidak bolak-balik."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu jelaskan kondisi STNK (hilang/rusak), area pengurusan, dan dokumen yang kamu punya saat ini.",
            },
            {
              title: "Cek persyaratan berkas",
              description:
                "Kami cek BPKB, KTP, fotocopy STNK (jika ada), surat kuasa (bila diwakilkan), serta kebutuhan cek fisik.",
            },
            {
              title: "Koordinasi dokumen tambahan (jika hilang)",
              description:
                "Untuk STNK hilang, kami arahkan pembuatan laporan kehilangan dari Polsek dan kebutuhan pendukung lainnya.",
            },
            {
              title: "Proses pengurusan berjalan",
              description:
                "Kami bantu prosesnya dengan tertib dan update status secara jelas selama proses berlangsung.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi proses STNK hilang/rusak"
          subheading="Estimasi tergantung kelengkapan berkas, kebutuhan laporan kehilangan (untuk hilang), cek fisik, dan antrean area. Kami berikan perkiraan setelah cek berkas supaya realistis."
          points={[
            {
              title: "Kelengkapan dokumen",
              description:
                "BPKB/KTP dan dokumen pendukung yang lengkap akan mempercepat alur. Kami bantu cek dari awal.",
            },
            {
              title: "Laporan kehilangan (untuk STNK hilang)",
              description:
                "Jika STNK hilang, tahapan laporan Polsek dapat memengaruhi estimasi. Kami arahkan langkahnya dengan jelas.",
            },
            {
              title: "Cek fisik & antrean area",
              description:
                "Cek fisik dan antrean layanan setempat bisa memengaruhi estimasi pengerjaan.",
              icon: faClock,
            },
            {
              title: "Kondisi kasus khusus",
              description:
                "Jika ada kondisi khusus pada dokumen/kendaraan, kami jelaskan dampaknya ke proses dan estimasi sejak awal.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ STNK Hilang/Rusak"
          title="Pertanyaan umum sebelum urus STNK hilang atau rusak"
          subtitle="Jawaban ringkas biar kamu paham langkahnya—terutama soal laporan kehilangan dan dokumen pendukung."
          waMessage="Assalamualaikum admin, saya mau tanya perihal urus STNK hilang/rusak."
          faqs={[
            {
              q: "Apa bedanya syarat STNK hilang dan STNK rusak?",
              a: "STNK hilang umumnya butuh laporan kehilangan dari Polsek. STNK rusak biasanya fokus pada dokumen kendaraan dan verifikasi data. Kami cek kebutuhan tepatnya sesuai kondisi kamu.",
            },
            {
              q: "Apakah laporan kehilangan Polsek wajib?",
              a: "Untuk kasus STNK hilang, biasanya diperlukan. Kami bisa arahkan cara dan dokumen pendukung yang perlu disiapkan.",
            },
            {
              q: "Kalau tidak punya fotocopy STNK, bagaimana?",
              a: "Chat dulu. Kami cek kondisi dokumen kamu dan arahkan langkah yang paling aman sesuai kebutuhan proses.",
            },
            {
              q: "Apakah cek fisik wajib untuk STNK hilang/rusak?",
              a: "Pada banyak kasus, cek fisik diperlukan untuk verifikasi identitas kendaraan. Kami arahkan tahapannya sesuai kondisi dan area pengurusan.",
            },
            {
              q: "Bagaimana cara mulai yang paling cepat?",
              a: "Chat WhatsApp: “Layanan: STNK hilang/rusak / Mobil atau motor / Area: … / Dokumen yang ada: BPKB, KTP, fotocopy STNK ada/tidak …”. Kami langsung cek dan arahkan langkah berikutnya.",
            },
          ]}
        />

        <CtaClosingService
          heading="STNK hilang atau rusak? Tenang, kita mulai dari cek berkas dulu."
          subheading="Mulai dari konsultasi dulu. Kami cek kebutuhan dokumen, arahkan laporan kehilangan (jika diperlukan), dan bantu prosesnya dengan komunikasi yang jelas—tanpa bikin kamu bolak-balik."
          waMessage="Assalamualaikum admin, saya mau tanya perihal urus STNK hilang/rusak."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}