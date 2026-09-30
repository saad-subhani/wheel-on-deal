import styles from "./Footer.module.css";

const PHONE = "07308 401100";
const WHATSAPP = "447308401100";

const areas = [
  "Bournemouth",
  "Poole",
  "Christchurch",
  "Ferndown",
  "Wimborne",
  "Ringwood",
  "Southampton",
  "Portsmouth",
  "Winchester",
  "New Forest",
  "Salisbury",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <a href="/" className={styles.logo}>
                <img src="/logo.png" alt="Wheel On Deal" />
              </a>

              <p>
                Mobile tyre fitting, battery fitting and locking wheel nut
                removal brought directly to you.
              </p>

              <div className={styles.contact}>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
                <a href="mailto:info@wheelondeal.co.uk">
                  info@wheelondeal.co.uk
                </a>
              </div>
            </div>

            <div className={styles.column}>
              <h3>Services</h3>

              <a href="/#quote">Mobile Tyre Fitting</a>
              <a href="/#quote">Mobile Battery Fitting</a>
              <a href="/#quote">Locking Wheel Nut Removal</a>
              <a href="/#faq">FAQs</a>
            </div>

            <div className={styles.column}>
              <h3>Areas</h3>

              {areas.slice(0, 6).map((area) => (
                <a href="/#areas" key={area}>
                  {area}
                </a>
              ))}
            </div>

            <div className={styles.column}>
              <h3>More areas</h3>

              {areas.slice(6).map((area) => (
                <a href="/#areas" key={area}>
                  {area}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Wheel On Deal. All rights reserved.</p>

          <div>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>Call us</a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}