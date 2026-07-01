"use client";

// app/components/testimoni/Testimoni.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Testimoni.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
  faShieldHalved,
  faClock,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

type Review = {
  name: string;
  area: string;
  title: string;
  text: string;
  tag: "Aman" | "Cepat" | "Transparan";
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Testimoni() {
  const reviews: Review[] = useMemo(
    () => [
      {
        name: "Aulia Putri",
        area: "Kota TasikMalaya",
        title: "Prosesnya jelas dari awal",
        text: "Awalnya saya takut salah berkas. Adminnya sabar jelasin kebutuhan dokumen, step-by-step, dan selalu ngasih update. Rasanya beneran dibantu bukan cuma jasa.",
        tag: "Transparan",
      },
      {
        name: "Ujang Pratama",
        area: "Singaparna",
        title: "Nggak perlu antre & bolak-balik",
        text: "Yang paling saya suka: komunikasinya rapi dan nggak bikin bingung. Saya tinggal kirim info, berkas aman, dan progressnya dikabari. Waktunya jadi hemat banget.",
        tag: "Cepat",
      },
      {
        name: "Ares Muhyi",
        area: "Leuwisari",
        title: "Berkas ditangani rapi",
        text: "Saya tipe yang detail, tapi BiroJasa Manggala Indonesia bikin saya tenang. Semua dijelaskan jelas, berkas ditangani tertib, dan penyelesaiannya terasa terarah.",
        tag: "Aman",
      },
      {
        name: "Edwin",
        area: "Mangunreja",
        title: "Admin responsif dan ramah",
        text: "Chat saya dijawab cepat, bahasanya enak dipahami, dan selalu dikasih opsi yang paling masuk akal. Cocok buat yang sibuk dan nggak mau ribet urus surat kendaraan.",
        tag: "Cepat",
      },
      {
        name: "Abah Gatot",
        area: "PadaKembang",
        title: "Biaya dan alur dijelaskan di depan",
        text: "Saya suka karena dari awal sudah dijelaskan alurnya, apa yang perlu disiapkan, dan estimasi prosesnya. Jadi tidak ada drama di tengah jalan. Beneran transparan.",
        tag: "Transparan",
      },
      {
        name: "Edi Kuswandi",
        area: "ManonJaya",
        title: "Pelayanan terasa aman & profesional",
        text: "Saya butuh yang bisa dipercaya. Cara kerjanya rapi, komunikasinya jelas, dan penanganan dokumennya bikin yakin. Kalau urus surat kendaraan lagi, saya balik ke sini.",
        tag: "Aman",
      },
    ],
    []
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateStateFromScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    const children = Array.from(el.querySelectorAll<HTMLElement>(`[data-card="1"]`));
    if (!children.length) return;

    // Find the card whose left edge is closest to track's left padding edge
    const trackLeft = el.getBoundingClientRect().left;
    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    children.forEach((c, idx) => {
      const dist = Math.abs(c.getBoundingClientRect().left - trackLeft);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    setActiveIndex(bestIdx);

    // Can scroll checks
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateStateFromScroll();

    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => updateStateFromScroll();
    el.addEventListener("scroll", onScroll, { passive: true });

    // Resize observer to keep state accurate
    const ro = new ResizeObserver(() => updateStateFromScroll());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;

    const cards = Array.from(el.querySelectorAll<HTMLElement>(`[data-card="1"]`));
    const target = cards[idx];
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  const scrollByCards = (dir: -1 | 1) => {
    const next = clamp(activeIndex + dir, 0, reviews.length - 1);
    scrollToIndex(next);
  };

  const tagIcon = (tag: Review["tag"]) => {
    if (tag === "Cepat") return faClock;
    if (tag === "Transparan") return faHandshake;
    return faShieldHalved;
  };

  return (
    <section className={styles.section} aria-label="Testimoni pelanggan BiroJasa Manggala Indonesia">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.headLeft}>
            <h2 className={styles.title}>Testimoni pelanggan</h2>
            <p className={styles.subtitle}>
              Kami mengutamakan layanan yang <strong>aman</strong>,{" "}
              <strong>transparan</strong>, dan <strong>tidak ribet</strong>—supaya
              pengurusan surat kendaraan terasa lebih tenang.
            </p>
          </div>

          <div className={styles.headRight}>
            <Link href="https://maps.app.goo.gl/SSgcD7aLdy2w69VR9" target="_blank" className={styles.moreLink} aria-label="Lihat semua ulasan">
              <FontAwesomeIcon icon={faGoogle} />
              Lihat ulasan di google →
            </Link>
          </div>
        </header>

        <div className={styles.carousel} aria-label="Carousel testimoni">
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navLeft}`}
            onClick={() => scrollByCards(-1)}
            aria-label="Geser ke kiri"
            disabled={!canLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div ref={trackRef} className={styles.track} role="group" aria-label="Daftar kartu testimoni">
            {reviews.map((r) => (
              <article key={`${r.name}-${r.title}`} className={styles.card} data-card="1">
                <div className={styles.cardTop}>
                  <span className={styles.quote} aria-hidden="true">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                  </span>

                  <span className={styles.tag} aria-label={`Highlight: ${r.tag}`}>
                    <FontAwesomeIcon icon={tagIcon(r.tag)} aria-hidden="true" />
                    {r.tag}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardText}>{r.text}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.person}>
                    <span className={styles.personName}>{r.name}</span>
                    <span className={styles.personArea}>{r.area}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navRight}`}
            onClick={() => scrollByCards(1)}
            aria-label="Geser ke kanan"
            disabled={!canRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className={styles.dots} aria-label="Indikator geser">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ""}`}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Lihat testimoni ${idx + 1}`}
              aria-current={idx === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}