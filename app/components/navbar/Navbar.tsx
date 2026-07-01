"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type NavItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const [desktopLayananOpen, setDesktopLayananOpen] = useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const layananItems: NavItem[] = useMemo(
  () => [
    { label: "Perpanjang STNK Tahunan", href: "/layanan/perpanjang-stnk-tahunan" },
    { label: "Perpanjang STNK 5 Tahunan", href: "/layanan/perpanjang-stnk-5-tahunan" },
    { label: "Balik Nama Kendaraan", href: "/layanan/balik-nama-kendaraan" },
    { label: "KTP, KK & Akte Kelahiran", href: "/layanan/dokumen-kependudukan" },
    { label: "SIM A (Baru/Perpanjang)", href: "/layanan/sim-a" },
    { label: "SIM C (Baru/Perpanjang)", href: "/layanan/sim-c" },
    { label: "Pendaftaran NPWP", href: "/layanan/npwp" },
    { label: "Pendaftaran NIB", href: "/layanan/nib" },
    { label: "Ganti Nomor Plat", href: "/layanan/ganti-nomor-plat" },
    { label: "Ubah Bentuk Warna", href: "/layanan/ubah-bentuk-warna" },
    { label: "Mutasi Masuk", href: "/layanan/mutasi-masuk-kendaraan" },
    { label: "STNK Hilang/Rusak", href: "/layanan/stnk-hilang-rusak" },
    { label: "Plat Custom", href: "/layanan/plat-custom" },
  ],
  []
);

  const whatsappMessage = "Assalamualaikum admin, saya mau tanya perihal surat-surat kendaraan";
  const whatsappHref = `https://wa.me/6285324188967?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    setMobileOpen(false);
    setMobileLayananOpen(false);
    setDesktopLayananOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!desktopLayananOpen) return;
      const target = e.target as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDesktopLayananOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDesktopLayananOpen(false);
        setMobileOpen(false);
        setMobileLayananOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [desktopLayananOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="BiroJasa Manggala Indonesia - Home">
          <span className={styles.logoWrap} aria-hidden="true">
            <Image
              src="/images/hero-birojasa-sahabat.png"
              alt="Logo BiroJasa Manggala Indonesia"
              width={44}
              height={44}
              priority
              className={styles.logo}
            />
          </span>
          <span className={styles.brandText}>BiroJasa Manggala Indonesia</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Navigasi utama">
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link href="/" className={`${styles.link} ${isActive("/") ? styles.active : ""}`}>
                Home
              </Link>
            </li>

            <li className={`${styles.item} ${styles.dropdown}`} ref={dropdownRef}>
              <button
                type="button"
                className={`${styles.link} ${styles.dropdownBtn} ${isActive("/layanan") ? styles.active : ""}`}
                aria-haspopup="menu"
                aria-expanded={desktopLayananOpen}
                aria-controls="nav-layanan-menu"
                onClick={() => setDesktopLayananOpen((v) => !v)}
              >
                Layanan
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${styles.chev} ${desktopLayananOpen ? styles.chevOpen : ""}`}
                />
              </button>

              <div
                id="nav-layanan-menu"
                className={`${styles.dropdownPanel} ${desktopLayananOpen ? styles.dropdownOpen : ""}`}
                role="menu"
              >
                <Link href="/layanan" className={styles.dropdownTopLink} role="menuitem">
                  Lihat semua layanan
                </Link>
                <div className={styles.dropdownDivider} aria-hidden="true" />
                <ul className={styles.dropdownList}>
                  {layananItems.map((it) => (
                    <li key={it.href}>
                      <Link href={it.href} className={styles.dropdownLink} role="menuitem">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className={styles.item}>
              <Link href="/tentang" className={`${styles.link} ${isActive("/tentang") ? styles.active : ""}`}>
                Tentang Kami
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="/testimoni" className={`${styles.link} ${isActive("/testimoni") ? styles.active : ""}`}>
                Testimoni
              </Link>
            </li>

            <li className={styles.item}>
              <Link href="/kontak" className={`${styles.link} ${isActive("/kontak") ? styles.active : ""}`}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`${styles.cta} btn btnPrimary`}>
            <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
            Tanya Sekarang
          </a>

          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
          >
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        id="mobile-nav"
        className={`${styles.mobilePanel} ${mobileOpen ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.mobileHeader}>
          <span className={styles.mobileTitle}>Menu</span>
          <button type="button" className={styles.mobileClose} onClick={() => setMobileOpen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className={styles.mobileBody}>
          <Link href="/" className={`${styles.mobileLink} ${isActive("/") ? styles.mobileActive : ""}`}>
            Home
          </Link>

          <button
            type="button"
            className={`${styles.mobileLink} ${styles.mobileAccordionBtn} ${isActive("/layanan") ? styles.mobileActive : ""}`}
            onClick={() => setMobileLayananOpen((v) => !v)}
            aria-expanded={mobileLayananOpen}
          >
            <span>Layanan</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${styles.chev} ${mobileLayananOpen ? styles.chevOpen : ""}`}
            />
          </button>

          <div
            id="mobile-layanan"
            className={`${styles.mobileSub} ${mobileLayananOpen ? styles.mobileSubOpen : ""}`}
          >
            <Link href="/layanan" className={styles.mobileSubLink}>Lihat semua layanan</Link>
            {layananItems.map((it) => (
              <Link key={it.href} href={it.href} className={styles.mobileSubLink}>
                {it.label}
              </Link>
            ))}
          </div>

          <Link href="/tentang" className={`${styles.mobileLink} ${isActive("/tentang") ? styles.mobileActive : ""}`}>
            Tentang Kami
          </Link>

          <Link href="/testimoni" className={`${styles.mobileLink} ${isActive("/testimoni") ? styles.mobileActive : ""}`}>
            Testimoni
          </Link>

          <Link href="/kontak" className={`${styles.mobileLink} ${isActive("/kontak") ? styles.mobileActive : ""}`}>
            Kontak
          </Link>
        </div>

        {/* Fixed Footer for Mobile */}
        <div className={styles.mobileCtaWrap}>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`${styles.mobileCta} btn btnPrimary`}>
            <FontAwesomeIcon icon={faWhatsapp} />
            Tanya Sekarang
          </a>
        </div>
      </div>
    </header>
  );
}