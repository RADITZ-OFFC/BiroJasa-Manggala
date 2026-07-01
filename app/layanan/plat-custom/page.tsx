// app/layanan/plat-custom/page.tsx
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

const canonical = `${siteUrl}/layanan/plat-custom`;

const pageTitle = `Jasa Plat Custom | ${siteName}`;
const pageDescription =
  "Jasa plat custom (pilih nomor) dengan proses rapi dan transparan. Persyaratan jelas: BPKB & STNK asli, KTP asli, surat kuasa, nomor yang dipilih, dan cek fisik. Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa plat custom",
    "plat nomor custom",
    "pilih nomor plat kendaraan",
    "jasa pilih nomor plat",
    "syarat plat custom",
    "cara buat plat custom",
    "cek fisik plat custom",
    "biro jasa plat custom",
    "urus plat custom cepat",
    "plat custom Ciputat",
    "plat custom Tangerang Selatan",
    "biro jasa kendaraan Jabodetabek",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Plat Custom",
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

export default function PlatCustomPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal plat custom (pilih nomor plat kendaraan).";
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
        name: "Jasa Plat Custom — Pilih Nomor Tanpa Ribet",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Plat Custom (Pilih Nomor Plat)",
        serviceType: "Plat Custom / Pilih Nomor Plat Kendaraan",
        url: canonical,
        description:
          "Layanan bantuan plat custom (pilih nomor plat kendaraan) dengan persyaratan jelas, alur transparan, dan komunikasi responsif agar kamu tidak bolak-balik dan tidak bingung berkas.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin plat custom/pilih nomor dengan proses yang rapi",
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
          { "@type": "ListItem", position: 3, name: "Plat Custom", item: canonical },
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
        id="jsonld-plat-custom"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Plat Custom (Pilih Nomor Plat)"
          subtitle="Pengen nomor pilihan tapi nggak mau ribet urus berkas? Kami bantu cek persyaratan, arahkan langkahnya, dan kawal prosesnya dengan komunikasi yang jelas."
          description="Plat custom umumnya butuh dokumen kendaraan, nomor yang dipilih, dan cek fisik. Mulai dari chat WhatsApp dulu—kami cek kelengkapan kamu dan jelaskan alur paling aman biar tidak bolak-balik."
          badgeText="Nomor Plat Pilihan"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal plat custom (pilih nomor plat kendaraan)."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Plat Custom", href: "/layanan/plat-custom" },
          ]}
          highlights={[
            {
              title: "Bantu cek nomor pilihan",
              description:
                "Kamu sebutkan nomor yang diinginkan, kami bantu arahkan langkah berikutnya sesuai kebutuhan.",
            },
            {
              title: "Persyaratan jelas",
              description:
                "Kami cek BPKB/STNK, KTP, surat kuasa (jika diwakilkan), nomor pilihan, dan cek fisik.",
            },
            {
              title: "Proses rapi & transparan",
              description:
                "Alur dijelaskan dari awal, komunikasi jelas, dan update status yang informatif.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat plat custom"
          subheading="Biar kamu fokus pilih nomor—urusan berkas dan alurnya kita rapikan."
          items={[
            {
              title: "Tidak bingung persyaratan",
              description:
                "Kami cek kebutuhan dokumen dari awal, termasuk detail nomor yang kamu pilih.",
            },
            {
              title: "Arahan cek fisik lebih jelas",
              description:
                "Cek fisik sering jadi titik yang bikin orang bolak-balik. Kami arahkan tahapannya dengan jelas.",
            },
            {
              title: "Komunikasi transparan",
              description:
                "Kami jelaskan alur dan hal yang bisa memengaruhi proses, supaya kamu tidak merasa ‘mendadak berubah’.",
            },
            {
              title: "Hemat waktu & tenaga",
              description:
                "Proses dibantu dan dikawal, jadi kamu tidak perlu antre panjang untuk hal yang sama.",
            },
            {
              title: "Update status responsif",
              description:
                "Tanya kapan saja via WhatsApp—kami update progres secara jelas dan informatif.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan plat custom"
          subheading="Siapkan dokumen berikut agar proses lebih lancar. Kalau ada kondisi khusus, chat dulu—kami bantu cek langkah terbaiknya."
          items={[
            { label: "BPKB Asli" },
            { label: "STNK Asli" },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            {
              label: "Nomor yang dipilih",
              note: "Tulis nomor yang kamu inginkan saat konsultasi via WhatsApp.",
            },
            {
              label: "Cek Fisik",
              note: "Biasanya dibutuhkan untuk verifikasi identitas kendaraan.",
            },
          ]}
        />

        <AlurProses
          heading="Alur proses plat custom"
          subheading="Langkah ringkas dan jelas agar kamu tidak bolak-balik."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu sebutkan jenis kendaraan, area, dan nomor yang diinginkan. Kami tanya detail seperlunya.",
            },
            {
              title: "Cek persyaratan berkas",
              description:
                "Kami cek BPKB/STNK, KTP, surat kuasa (bila diwakilkan), serta kebutuhan cek fisik.",
            },
            {
              title: "Koordinasi cek fisik",
              description:
                "Kami arahkan tahapan cek fisik sesuai kebutuhan agar proses berikutnya lebih lancar.",
            },
            {
              title: "Proses pengurusan berjalan",
              description:
                "Kami bantu prosesnya dan update status secara jelas selama proses berlangsung.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi proses plat custom"
          subheading="Estimasi tergantung kelengkapan berkas, kebutuhan cek fisik, dan antrean area. Kami berikan perkiraan setelah cek berkas supaya realistis."
          points={[
            {
              title: "Kelengkapan dokumen",
              description:
                "BPKB/STNK, identitas, dan surat kuasa (jika diwakilkan) yang lengkap membantu proses lebih lancar.",
            },
            {
              title: "Nomor yang dipilih",
              description:
                "Nomor pilihan yang kamu ajukan akan kami cek dan arahkan langkah selanjutnya sesuai kebutuhan proses.",
            },
            {
              title: "Cek fisik & antrean area",
              description:
                "Cek fisik dan antrean setempat bisa memengaruhi estimasi pengerjaan.",
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
          kickerText="FAQ Plat Custom"
          title="Pertanyaan umum sebelum plat custom"
          subtitle="Jawaban ringkas biar kamu paham persyaratan dan langkah yang benar."
          waMessage="Assalamualaikum admin, saya mau tanya perihal plat custom (pilih nomor plat kendaraan)."
          faqs={[
            {
              q: "Apa saja syarat plat custom?",
              a: "Umumnya: BPKB asli, STNK asli, KTP asli, surat kuasa bila diwakilkan, nomor yang dipilih, dan cek fisik. Jika ada kebutuhan tambahan sesuai kasus/area, kami informasikan setelah pengecekan.",
            },
            {
              q: "Saya mau nomor tertentu—gimana cara mulai?",
              a: "Chat WhatsApp dan tulis nomor yang kamu inginkan + jenis kendaraan + area. Kami bantu cek dan arahkan langkah berikutnya.",
            },
            {
              q: "Apakah cek fisik wajib untuk plat custom?",
              a: "Pada banyak kasus, cek fisik diperlukan untuk verifikasi identitas kendaraan. Kami arahkan kebutuhan dan tahapannya sesuai kondisi berkas dan area.",
            },
            {
              q: "Kalau saya sibuk, bisa diwakilkan?",
              a: "Bisa. Umumnya memerlukan surat kuasa dan dokumen pendukung. Chat dulu agar kami cek detailnya untuk kasus kamu.",
            },
            {
              q: "Berapa lama estimasi prosesnya?",
              a: "Tergantung kelengkapan dokumen, kebutuhan cek fisik, dan antrean area. Kami berikan estimasi setelah cek berkas agar realistis.",
            },
          ]}
        />

        <CtaClosingService
          heading="Siap pilih nomor plat yang kamu mau?"
          subheading="Mulai dari konsultasi dulu. Kirim nomor pilihanmu via WhatsApp—kami cek kebutuhan dokumen, arahkan alur, dan bantu prosesnya dengan komunikasi yang jelas."
          waMessage="Assalamualaikum admin, saya mau tanya perihal plat custom (pilih nomor plat kendaraan)."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}