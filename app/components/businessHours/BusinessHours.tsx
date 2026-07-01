// app/components/businessHours/BusinessHours.tsx
import styles from "./BusinessHours.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarDay,
  faLocationArrow,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const waMessage =
  "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
const waHref = `https://wa.me/6285324188967?text=${encodeURIComponent(waMessage)}`;

const mapsHref = "https://maps.app.goo.gl/SSgcD7aLdy2w69VR9";

// sama seperti di app/kontak/page.tsx (embed map)
const mapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2520484121765!2d108.10937737411295!3d-7.325561872040056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5500592e037d%3A0x895447ca0894cbb4!2sST%20Galunggung!5e0!3m2!1sid!2sid!4v1777223294886!5m2!1sid!2sid";

const hours = [
  { day: "Senin", time: "08:00 - 16:00" },
  { day: "Selasa", time: "08:00 - 16:00" },
  { day: "Rabu", time: "08:00 - 16:00" },
  { day: "Kamis", time: "08:00 - 16:00" },
  { day: "Jumat", time: "08:00 - 11:00" },
  { day: "Sabtu", time: "08:00 - 14:00" },
  { day: "Minggu", time: "Tutup" },
];

export default function BusinessHours() {
  return (
    <section className={styles.section} aria-label="Jam operasional dan lokasi">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span className={styles.kickerText}>Business Hours</span>
            </div>

            <h2 className={styles.title}>Jam operasional & arah ke lokasi</h2>
            <p className={styles.subtitle}>
              Kamu bisa datang sesuai jam operasional di bawah ini, atau lebih praktis: chat WhatsApp dulu
              untuk memastikan kebutuhan berkas dan langkah berikutnya.
            </p>

            <div className={styles.hoursCard} aria-label="Jam buka">
              <div className={styles.hoursHeader}>
                <span className={styles.hoursIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faCalendarDay} />
                </span>
                <p className={styles.hoursTitle}>Jam Buka</p>
              </div>

              <ul className={styles.list} aria-label="Daftar jam operasional">
                {hours.map((h) => (
                  <li key={h.day} className={styles.row}>
                    <span className={styles.day}>{h.day}</span>
                    <span className={styles.time}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions} aria-label="Aksi kontak dan arah">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.ctaPrimary} btn btnPrimary`}
                aria-label="Chat WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
                Chat WhatsApp
              </a>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
                aria-label="Direction ke lokasi via Google Maps"
              >
                <FontAwesomeIcon icon={faLocationArrow} aria-hidden="true" />
                Direction
              </a>
            </div>

            <div className={styles.note} aria-label="Catatan">
              <span className={styles.noteIcon} aria-hidden="true">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              <p className={styles.noteText}>
                Alamat: Jl. Cinangsi RT.12/RW.03, Ciawang, Leuwisari, Tasikmalaya, West Java 46464, Indonesia
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <aside className={styles.right} aria-label="Peta lokasi">
            <div className={styles.mapCard}>
              <div className={styles.mapTop}>
                <p className={styles.mapTitle}>Lokasi di Google Maps</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                  aria-label="Buka di Google Maps"
                >
                  Buka Maps
                </a>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src={mapsEmbedSrc}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta lokasi BiroJasa Manggala Indonesia"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}