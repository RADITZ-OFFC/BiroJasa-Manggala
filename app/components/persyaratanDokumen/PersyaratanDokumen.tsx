// app/components/persyaratanDokumen/PersyaratanDokumen.tsx
import styles from "./PersyaratanDokumen.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faIdCard,
  faFileSignature,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

type RequirementItem = {
  label: string;
  note?: string;
  icon?: any;
};

type PersyaratanDokumenProps = {
  heading?: string;
  subheading?: string;
  items: RequirementItem[];
  footnote?: string;
};

export default function PersyaratanDokumen({
  heading = "Persyaratan dokumen",
  subheading = "Siapkan dokumen berikut agar proses perpanjang STNK tahunan bisa berjalan lancar.",
  items,
  footnote = "Catatan: Persyaratan dapat menyesuaikan kondisi berkas dan kebutuhan di masing-masing area. Jika ragu, chat WhatsApp dulu untuk kami cek cepat.",
}: PersyaratanDokumenProps) {
  return (
    <section className={styles.section} aria-label="Persyaratan dokumen layanan">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.subtitle}>{subheading}</p>
        </header>

        <div className={styles.card} aria-label="Daftar persyaratan dokumen">
          <ul className={styles.list}>
            {items.map((it, idx) => (
              <li key={`${it.label}-${idx}`} className={styles.item}>
                <span className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon
                    icon={
                      it.icon ??
                      (idx === 0
                        ? faFileLines
                        : idx === 1
                          ? faIdCard
                          : idx === 2
                            ? faFileSignature
                            : faCircleCheck)
                    }
                  />
                </span>

                <div className={styles.body}>
                  <p className={styles.label}>{it.label}</p>
                  {it.note ? <p className={styles.note}>{it.note}</p> : null}
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.footnote}>{footnote}</p>
        </div>
      </div>
    </section>
  );
}