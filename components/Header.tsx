"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const PHONE = "07308 401100";
const WHATSAPP = "447308401100";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.whatsappIcon}
    >
      <path
        fill="currentColor"
        d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.43-8.42ZM12.06 21.8h-.01a9.87 9.87 0 0 1-5.03-1.37l-.36-.21-3.74.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.51-5.29C2.18 6.45 6.61 2.02 12.06 2.02c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.88 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <div className={styles.topbar}>
        <div className={styles.container}>
          <div className={styles.topLeft}>
            <span>24/7 MOBILE VEHICLE SERVICES</span>
          </div>

          <div className={styles.topRight}>
            <a href="mailto:info@wheelondeal.co.uk">
              info@wheelondeal.co.uk
            </a>

            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
              {PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <a href="/" className={styles.logo} onClick={closeMenu}>
              <img src="/logo.png" alt="Wheel On Deal" />
            </a>

            <div
              className={`${styles.navLinks} ${
                open ? styles.open : ""
              }`}
            >
              <a href="#services" onClick={closeMenu}>
                Services
              </a>

              <a href="#how-it-works" onClick={closeMenu}>
                How It Works
              </a>

              <a href="#areas" onClick={closeMenu}>
                Areas
              </a>

              <a href="#faq" onClick={closeMenu}>
                FAQs
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className={styles.mobileWhatsapp}
                onClick={closeMenu}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>

            <div className={styles.navActions}>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className={styles.call}
              >
                Call {PHONE}
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className={styles.cta}
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              className={`${styles.menuButton} ${
                open ? styles.menuOpen : ""
              }`}
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}