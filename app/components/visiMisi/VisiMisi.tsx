// app/components/visiMisi/VisiMisi.tsx
import styles from "./VisiMisi.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faFlagCheckered,
  faShieldHalved,
  faHandHoldingHeart,
  faMagnifyingGlassDollar,
  faBolt,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

type Pillar = {
  title: string;
  desc: string;
  icon: any;
};

const values: Pillar[] = [
  {
    title: "Terpercaya",
    desc: "Kami menjaga kepercayaan lewat kerja yang rapi, komunikasi yang sopan, dan tanggung jawab terhadap setiap berkas yang dititipkan.",
    icon: faUserCheck,
  },
  {
    title: "Transparan",
    desc: "Alur proses dan kebutuhan berkas dijelaskan dari awal. Kamu tahu apa yang perlu disiapkan dan bagaimana langkahnya berjalan.",
    icon: faMagnifyingGlassDollar,
  },
  {
    title: "Aman",
    desc: "Penanganan dokumen dilakukan dengan tertib. Kami utamakan keamanan dan kejelasan status selama proses berlangsung.",
    icon: faShieldHalved,
  },
  {
    title: "Cepat & Efisien",
    desc: "Kami bantu supaya kamu tidak perlu antre dan bolak-balik. Fokus kamu tetap jalan, pengurusan kami koordinasikan.",
    icon: faBolt,
  },
  {
    title: "Sahabat",
    desc: "Kami melayani dengan bahasa yang mudah dipahami, ramah, dan solutif—seperti teman yang membantu, bukan bikin pusing.",
    icon: faHandHoldingHeart,
  },
];

export default function VisiMisi() {
  return (
    <section className={styles.section} aria-label="Visi, Misi, dan Nilai BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faBullseye} />
            </span>
            <span className={styles.kickerText}>Visi, Misi & Nilai</span>
          </div>

          <h2 className={styles.title}>Kami ingin pengurusan surat kendaraan terasa lebih mudah</h2>

          <p className={styles.subtitle}>
            BiroJasa Manggala Indonesia dibangun untuk membantu orang sibuk mengurus STNK dan berkas kendaraan dengan
            cara yang <strong>jelas</strong>, <strong>aman</strong>, dan <strong>transparan</strong>.
          </p>
        </header>

        <div className={styles.vmGrid} aria-label="Visi dan misi">
          <article className={styles.vmCard}>
            <div className={styles.vmIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faFlagCheckered} />
            </div>
            <h3 className={styles.vmTitle}>Visi</h3>
            <p className={styles.vmText}>
              Menjadi biro jasa yang paling dipercaya sebagai “sahabat” dalam pengurusan surat kendaraan—
              dengan proses yang rapi, komunikasi yang jelas, dan pengalaman yang nyaman.
            </p>
          </article>

          <article className={styles.vmCard}>
            <div className={styles.vmIcon} aria-hidden="true">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h3 className={styles.vmTitle}>Misi</h3>
            <ul className={styles.misiList} aria-label="Daftar misi">
              <li className={styles.misiItem}>
                Membantu pelanggan memahami persyaratan dan alur proses tanpa bikin bingung.
              </li>
              <li className={styles.misiItem}>
                Menjaga penanganan berkas tetap aman, rapi, dan bertanggung jawab.
              </li>
              <li className={styles.misiItem}>
                Memberikan update status yang jelas agar pelanggan tenang selama proses.
              </li>
              <li className={styles.misiItem}>
                Membuat layanan lebih efisien agar pelanggan tidak perlu antre dan bolak-balik.
              </li>
            </ul>
          </article>
        </div>

        <div className={styles.valuesWrap} aria-label="Nilai utama layanan">
          <h3 className={styles.valuesTitle}>Nilai yang kami pegang</h3>

          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <article key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={v.icon} />
                </div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}