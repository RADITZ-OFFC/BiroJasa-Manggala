// app/components/alurProses/AlurProses.tsx
import styles from "./AlurProses.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faFileCircleCheck,
  faHandHoldingHand,
  faGears,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

type StepItem = {
  title: string;
  description: string;
  icon?: any;
};

type AlurProsesProps = {
  heading?: string;
  subheading?: string;
  steps: StepItem[];
  note?: string;
};

const fallbackIcons = [
  faComments,
  faFileCircleCheck,
  faHandHoldingHand,
  faGears,
  faCircleCheck,
];

export default function AlurProses({
  heading = "Alur proses",
  subheading = "Alurnya dibuat sederhana supaya kamu tahu step-by-step dari awal sampai selesai.",
  steps,
  note = "Catatan: urutan step bisa menyesuaikan kondisi berkas dan kebutuhan di masing-masing area, tapi prinsipnya tetap: komunikasi jelas dan proses rapi.",
}: AlurProsesProps) {
  return (
    <section className={styles.section} aria-label="Alur proses layanan">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.subtitle}>{subheading}</p>
        </header>

        <ol className={styles.list} aria-label="Langkah-langkah proses">
          {steps.map((s, idx) => (
            <li key={`${s.title}-${idx}`} className={styles.item}>
              <div className={styles.badge} aria-hidden="true">
                <span className={styles.num}>{idx + 1}</span>
              </div>

              <div className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <FontAwesomeIcon icon={s.icon ?? fallbackIcons[idx % fallbackIcons.length]} />
                </span>

                <div className={styles.body}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.note}>{note}</p>
      </div>
    </section>
  );
}