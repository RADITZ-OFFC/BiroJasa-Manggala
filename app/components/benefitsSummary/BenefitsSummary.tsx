// app/components/benefitsSummary/BenefitsSummary.tsx
import styles from "./BenefitsSummary.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClipboardList,
  faShieldHalved,
  faComments,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

type BenefitItem = {
  title: string;
  description: string;
  icon?: any;
};

type BenefitsSummaryProps = {
  heading?: string;
  subheading?: string;
  items: BenefitItem[];
};

const defaultIcons = [faCircleCheck, faClipboardList, faMoneyBillWave, faShieldHalved, faComments];

export default function BenefitsSummary({
  heading = "Ringkasan manfaat",
  subheading = "Biar jelas dari awal: apa yang kamu dapat saat memakai layanan kami.",
  items,
}: BenefitsSummaryProps) {
  return (
    <section className={styles.section} aria-label="Ringkasan manfaat layanan">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.subtitle}>{subheading}</p>
        </header>

        <div className={styles.grid} aria-label="Daftar manfaat">
          {items.map((it, idx) => (
            <article key={`${it.title}-${idx}`} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                <FontAwesomeIcon icon={it.icon ?? defaultIcons[idx % defaultIcons.length]} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardDesc}>{it.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}