// app/components/brandStory/BrandStory.tsx
import Link from "next/link";
import styles from "./BrandStory.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCircleQuestion,
  faPeopleArrows,
  faReceipt,
  faCircleCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage = "Assalamualaikum admin BiroJasa Manggala Indonesia, saya mau konsultasi.";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

type PainPoint = {
  title: string;
  desc: string;
  icon: any;
};

const painPoints: PainPoint[] = [
  {
    title: "Bingung berkas",
    desc: "Banyak orang tidak yakin dokumen apa yang benar-benar dibutuhkan. Salah sedikit, harus balik lagi.",
    icon: faFileCircleQuestion,
  },
  {
    title: "Capek antre & bolak-balik",
    desc: "Waktu habis di jalan dan antrean, padahal aktivitas harian tidak bisa ditinggal begitu saja.",
    icon: faPeopleArrows,
  },
  {
    title: "Takut biaya nggak jelas",
    desc: "Yang bikin khawatir bukan cuma prosesnya, tapi juga ketidakpastian—biaya dan langkahnya tidak transparan.",
    icon: faReceipt,
  },
];

export default function BrandStory() {
  return (
    <section className={styles.section} aria-label="Cerita BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerDot} aria-hidden="true" />
              <span className={styles.kickerText}>Brand Story</span>
            </div>

            <h2 className={styles.title}>Kenapa BiroJasa Manggala Indonesia ada?</h2>

            <p className={styles.subtitle}>
              Kami melihat satu pola yang sama: banyak orang ingin mengurus surat kendaraan dengan benar,
              tapi terhambat karena <strong>bingung berkas</strong>,{" "}
              <strong>capek antre</strong>, dan <strong>takut biaya nggak jelas</strong>.
            </p>

            <p className={styles.desc}>
              Dari situ, BiroJasa Manggala Indonesia hadir sebagai “teman” yang membantu dari awal: jelaskan
              persyaratan, rapikan alur proses, dan jaga komunikasi agar kamu tahu apa yang sedang terjadi.
              Tujuannya sederhana: pengurusan surat kendaraan jadi lebih <strong>jelas</strong>,{" "}
              <strong>aman</strong>, dan <strong>nyaman</strong>.
            </p>

            <div className={styles.actions}>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Konsultasi via WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Tanya aja dulu
              </a>

              <Link
                href="/layanan"
                className={`${styles.ctaSecondary} btn btnSecondary`}
                aria-label="Lihat layanan"
              >
                Lihat layanan <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Masalah yang sering terjadi">
            <div className={styles.cards}>
              {painPoints.map((p) => (
                <article key={p.title} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    <FontAwesomeIcon icon={p.icon} />
                  </div>

                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>

                  <div className={styles.cardFoot} aria-label="Solusi">
                    <span className={styles.footIcon} aria-hidden="true">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>
                    <span className={styles.footText}>
                      Kami bantu jelaskan & arahkan dari awal.
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}