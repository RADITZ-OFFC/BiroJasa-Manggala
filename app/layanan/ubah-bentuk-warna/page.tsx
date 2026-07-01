// app/layanan/ubah-bentuk-warna/page.tsx
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

const canonical = `${siteUrl}/layanan/ubah-bentuk-warna`;

const pageTitle = `Ubah Bentuk/Warna | ${siteName}`;
const pageDescription =
  "Jasa ubah bentuk/warna kendaraan untuk update data STNK dengan proses rapi dan transparan. Persyaratan jelas (BPKB & STNK asli, KTP, surat kuasa, cek fisik, rekomendasi bengkel resmi). Konsultasi gratis via WhatsApp +6285324188967.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa ubah warna kendaraan",
    "ubah warna kendaraan STNK",
    "jasa ubah bentuk kendaraan",
    "ubah bentuk kendaraan",
    "ubah data kendaraan STNK",
    "syarat ubah warna kendaraan",
    "syarat ubah bentuk kendaraan",
    "cek fisik no rangka no kendaraan",
    "rekomendasi bengkel resmi ubah warna",
    "biro jasa ubah warna Ciputat",
    "biro jasa ubah warna Tangerang Selatan",
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
        alt: "BiroJasa Manggala Indonesia — Jasa Ubah Bentuk/Warna Kendaraan",
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

export default function UbahBentukWarnaPage() {
  const waMessage =
    "Assalamualaikum admin, saya mau tanya perihal ubah bentuk/warna kendaraan (update data di STNK).";
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
        name: "Jasa Ubah Bentuk/Warna Kendaraan — Dibantu Sampai Beres",
        description: pageDescription,
        inLanguage: "id-ID",
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#Birojasa-Manggala` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: "Jasa Ubah Bentuk/Warna Kendaraan",
        serviceType: "Ubah Bentuk/Warna Kendaraan (Update Data STNK)",
        url: canonical,
        description:
          "Layanan bantuan ubah bentuk/warna kendaraan untuk pembaruan data STNK dengan persyaratan jelas, alur transparan, dan komunikasi responsif agar tidak bolak-balik dan tidak bingung berkas.",
        provider: { "@id": `${siteUrl}#Birojasa-Manggala` },
        areaServed: ["Tasikmalaya", "Singaparna", "JawaBarat"],
        audience: {
          "@type": "Audience",
          audienceType:
            "Pemilik kendaraan yang ingin ubah bentuk/warna dan update data STNK dengan proses yang rapi",
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
          { "@type": "ListItem", position: 3, name: "Ubah Bentuk/Warna", item: canonical },
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
        id="jsonld-ubah-bentuk-warna"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <HeroService
          title="Jasa Ubah Bentuk/Warna Kendaraan"
          subtitle="Update data STNK tanpa bikin kamu bingung berkas—kami bantu cek persyaratan, arahkan cek fisik, dan dampingi prosesnya dengan komunikasi yang jelas."
          description="Perubahan bentuk/warna biasanya butuh dokumen utama kendaraan, cek fisik (no rangka/no kendaraan), dan rekomendasi bengkel resmi. Mulai dari chat WhatsApp dulu—kami cek berkas kamu dan jelaskan langkahnya biar tidak bolak-balik."
          badgeText="Perubahan Data Kendaraan"
          primaryCtaLabel="Konsultasi Gratis"
          primaryCtaMessage="Assalamualaikum admin, saya mau tanya perihal ubah bentuk/warna kendaraan (update data di STNK)."
          secondaryCtaLabel="Lihat layanan lain"
          secondaryCtaHref="/layanan"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Layanan", href: "/layanan" },
            { label: "Ubah Bentuk/Warna", href: "/layanan/ubah-bentuk-warna" },
          ]}
          highlights={[
            {
              title: "Persyaratan jelas",
              description:
                "Kami bantu cek BPKB/STNK, KTP, surat kuasa, cek fisik, dan rekomendasi bengkel resmi.",
            },
            {
              title: "Proses rapi & transparan",
              description:
                "Alur dijelaskan dari awal, komunikasi responsif, dan update status yang jelas.",
            },
            {
              title: "Hemat waktu",
              description:
                "Mengurangi risiko antre panjang dan bolak-balik karena salah berkas.",
            },
          ]}
        />

        <BenefitsSummary
          heading="Ringkasan manfaat ubah bentuk/warna kendaraan"
          subheading="Kalau langkahnya jelas, perubahan data STNK jadi lebih tenang dan terarah."
          items={[
            {
              title: "Tidak bingung persyaratan",
              description:
                "Kami cek kebutuhan berkas dari awal—termasuk dokumen tambahan seperti rekomendasi bengkel resmi.",
            },
            {
              title: "Arahan cek fisik lebih jelas",
              description:
                "Cek fisik (no rangka/no kendaraan) sering jadi titik yang bikin orang bolak-balik. Kami arahkan langkahnya dari awal.",
            },
            {
              title: "Proses transparan",
              description:
                "Kami jelaskan alur kerja dan hal-hal yang bisa memengaruhi proses, supaya kamu nggak khawatir ‘tiba-tiba berubah’.",
            },
            {
              title: "Lebih praktis",
              description:
                "Kamu tetap bisa fokus aktivitas, sementara proses dibantu dan dikawal dengan rapi.",
            },
            {
              title: "Update status jelas",
              description:
                "Kamu dapat info progres melalui WhatsApp sehingga proses terasa lebih pasti.",
            },
          ]}
        />

        <PersyaratanDokumen
          heading="Persyaratan ubah bentuk/warna kendaraan"
          subheading="Siapkan dokumen berikut agar proses lebih lancar. Kalau ada kondisi khusus, kami cek dan arahkan via WhatsApp."
          items={[
            { label: "BPKB Asli" },
            { label: "STNK Asli" },
            { label: "KTP Asli" },
            { label: "Surat Kuasa", note: "Jika pengurusan diwakilkan." },
            {
              label: "Cek Fisik (No Rangka, No Kendaraan)",
              note: "Biasanya dibutuhkan untuk perubahan data (bentuk/warna).",
            },
            {
              label: "Rekomendasi Bengkel Resmi",
              note: "Dibutuhkan sesuai ketentuan untuk perubahan bentuk/warna.",
            },
          ]}
        />

        <AlurProses
          heading="Alur proses ubah bentuk/warna kendaraan"
          subheading="Langkah ringkas dan jelas agar kamu tidak bolak-balik."
          steps={[
            {
              title: "Konsultasi via WhatsApp",
              description:
                "Kamu jelaskan perubahan yang dilakukan (bentuk/warna), area pengurusan, dan kondisi dokumen. Kami arahkan langkah awalnya.",
            },
            {
              title: "Cek persyaratan berkas",
              description:
                "Kami cek BPKB/STNK, KTP, surat kuasa (bila diwakilkan), serta kebutuhan rekomendasi bengkel resmi.",
            },
            {
              title: "Koordinasi cek fisik",
              description:
                "Kami arahkan tahapan cek fisik (no rangka/no kendaraan) agar proses berikutnya lebih lancar.",
            },
            {
              title: "Proses pembaruan data berjalan",
              description:
                "Kami bantu prosesnya dengan rapi dan update status secara jelas selama proses berlangsung.",
            },
            {
              title: "Selesai & dokumen kembali",
              description:
                "Setelah selesai, dokumen kamu kami kembalikan sesuai kesepakatan.",
            },
          ]}
        />

        <Estimasi
          heading="Estimasi proses ubah bentuk/warna"
          subheading="Estimasi tergantung kondisi berkas, kebutuhan cek fisik, kelengkapan rekomendasi bengkel resmi, dan antrean area. Kami berikan perkiraan setelah cek berkas supaya realistis."
          points={[
            {
              title: "Kelengkapan dokumen",
              description:
                "BPKB/STNK, identitas, dan surat kuasa (jika diwakilkan) yang lengkap membantu proses lebih lancar.",
            },
            {
              title: "Rekomendasi bengkel resmi",
              description:
                "Dokumen rekomendasi bengkel resmi sering jadi penentu kelancaran proses. Kami bantu cek dan arahkan sejak awal.",
            },
            {
              title: "Cek fisik & antrean area",
              description:
                "Cek fisik (no rangka/no kendaraan) dan antrean setempat bisa memengaruhi estimasi pengerjaan.",
              icon: faClock,
            },
            {
              title: "Kondisi kasus khusus",
              description:
                "Jika ada penyesuaian pada dokumen/kendaraan, kami jelaskan dampaknya ke proses dan estimasi sejak awal.",
            },
          ]}
        />

        <FaqMini
          kickerText="FAQ Ubah Bentuk/Warna"
          title="Pertanyaan umum sebelum ubah bentuk/warna kendaraan"
          subtitle="Jawaban ringkas supaya kamu paham persyaratan dan tahu langkah paling aman."
          waMessage="Assalamualaikum admin, saya mau tanya perihal ubah bentuk/warna kendaraan (update data di STNK)."
          faqs={[
            {
              q: "Apa saja syarat ubah bentuk/warna kendaraan?",
              a: "Umumnya: BPKB asli, STNK asli, KTP asli, surat kuasa bila diwakilkan, cek fisik (no rangka/no kendaraan), serta rekomendasi bengkel resmi. Jika ada kebutuhan tambahan sesuai kasus/area, kami informasikan setelah pengecekan.",
            },
            {
              q: "Rekomendasi bengkel resmi itu untuk apa?",
              a: "Dokumen ini biasanya dibutuhkan sebagai bukti/pendukung perubahan bentuk atau warna sesuai ketentuan. Kami bantu cek format/kebutuhannya agar tidak bolak-balik.",
            },
            {
              q: "Apakah cek fisik wajib?",
              a: "Pada banyak kasus perubahan data, cek fisik diperlukan. Kami akan arahkan kebutuhan dan tahapannya sesuai kondisi berkas dan area pengurusan.",
            },
            {
              q: "Kalau saya sibuk, bisa diwakilkan?",
              a: "Bisa. Umumnya memerlukan surat kuasa dan dokumen pendukung. Chat dulu agar kami cek detailnya untuk kasus kamu.",
            },
            {
              q: "Bagaimana cara mulai yang paling cepat?",
              a: "Chat WhatsApp dengan info: “Layanan: ubah bentuk/warna / Jenis perubahan: … / Area: … / Kondisi berkas: …”. Kami langsung arahkan langkah berikutnya.",
            },
          ]}
        />

        <CtaClosingService
          heading="Mau update bentuk/warna kendaraan tanpa bingung berkas?"
          subheading="Mulai dari konsultasi dulu. Kami cek kebutuhan dokumen, arahkan cek fisik dan rekomendasi bengkel resmi, lalu bantu prosesnya dengan komunikasi yang jelas."
          waMessage="Assalamualaikum admin, saya mau tanya perihal ubah bentuk/warna kendaraan (update data di STNK)."
          secondaryHref="/layanan"
          secondaryLabel="Lihat layanan lainnya"
        />
      </main>
    </>
  );
}