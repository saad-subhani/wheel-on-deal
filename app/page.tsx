"use client";

import { FormEvent, useState } from "react";

const PHONE = "07308 401100";
const WHATSAPP = "447308401100";

const services = [
  {
    number: "01",
    title: "Mobile Tyre Fitting",
    text: "New tyres supplied and fitted at your home, workplace, car park or roadside.",
    icon: "tyre",
  },
  {
    number: "02",
    title: "Mobile Battery Fitting",
    text: "A convenient mobile battery fitting service when your vehicle needs a reliable replacement.",
    icon: "battery",
  },
  {
    number: "03",
    title: "Locking Wheel Nut Removal",
    text: "Lost your locking wheel nut key? We can help remove difficult or locking wheel nuts.",
    icon: "lock",
  },
];

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

const faqs = [
  {
    question: "How much does mobile tyre fitting cost?",
    answer:
      "The price depends on the tyre or service your vehicle requires. Send us your registration, postcode and what you need, and we can give you clear pricing before the work begins.",
  },
  {
    question: "Can you come to me at home or work?",
    answer:
      "Yes. Our mobile service is designed to come to your location, whether that is home, work, a car park or a suitable roadside location.",
  },
  {
    question: "Can you help with an emergency?",
    answer:
      "Yes. Wheel On Deal is available 24 hours a day for mobile tyre and vehicle-related assistance. Call us and tell us where you are and what has happened.",
  },
  {
    question: "Can you remove locking wheel nuts without the key?",
    answer:
      "Yes. Locking wheel nut removal is one of our mobile services. Tell us when you contact us that the key is missing.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover Bournemouth, Poole, Christchurch, Ferndown, Wimborne, Ringwood, Southampton, Portsmouth, Winchester, New Forest and Salisbury, including surrounding areas.",
  },
  {
    question: "Do I need to visit a garage?",
    answer:
      "Not necessarily. Our mobile service means we come to you, so many jobs can be completed at your location without a traditional garage visit.",
  },
];

function Icon({
  type,
  size = 28,
}: {
  type: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "tyre") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3.5v5.3M20.5 12h-5.3M12 20.5v-5.3M3.5 12h5.3" />
      </svg>
    );
  }

  if (type === "battery") {
    return (
      <svg {...common}>
        <rect x="4" y="6" width="16" height="13" rx="2" />
        <path d="M8 3v3M16 3v3M8 12h3M13 12h3M12 10v4" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M6.8 3.5h2.1l1.2 4-1.7 1.4a15.2 15.2 0 0 0 6.7 6.7l1.4-1.7 4 1.2v2.1c0 1-.8 1.8-1.8 1.8C11.1 19 5 12.9 5 5.3c0-1 .8-1.8 1.8-1.8Z" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    );
  }

  if (type === "van") {
    return (
      <svg {...common}>
        <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (type === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h13M13 6l6 6-6 6" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.5 11.3a8.5 8.5 0 0 1-12.7 7.4L4 20l1.4-3.7a8.5 8.5 0 1 1 15.1-5Z" />
        <path d="M9 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .4-1.5.2-2-.6-4.6-3-5.8-4.8-.6-1-.9-2.1-.4-2.7Z" />
      </svg>
    );
  }

  return null;
}

export default function HomePage() {
  const [postcode, setPostcode] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState({
    name: "",
    location: "",
    vehicle: "",
    registration: "",
    where: "",
    service: "",
    locking: "",
    notes: "",
  });

  const [sent, setSent] = useState(false);

  function checkPostcode(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!postcode.trim()) return;

    const message = `Hi Wheel On Deal, I would like to check whether you cover ${postcode.trim()}.`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function updateForm(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setSent(false);
  }

  function sendWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = [
      "Hi Wheel On Deal, I would like a quote.",
      "",
      `Name: ${form.name || "Not provided"}`,
      `Postcode / location: ${form.location || "Not provided"}`,
      `Make and model: ${form.vehicle || "Not provided"}`,
      `Registration number: ${form.registration || "Not provided"}`,
      `Where is the car?: ${form.where || "Not provided"}`,
      `Service needed: ${form.service || "Not sure, need advice"}`,
      `Locking wheel nut: ${form.locking || "Not provided"}`,
      `Additional notes: ${form.notes || "None"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
  }

  return (
    <main className="site-main">

      {/* HERO */}
      <section className="hero">
        <div className="hero-media" />
        <div className="hero-overlay" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow light">MOBILE VEHICLE SERVICES</p>

            <h1>
              WE COME TO YOU.
              <br />
              DAY OR NIGHT.
            </h1>

            <p className="hero-text">
              Mobile tyre fitting, battery fitting and locking wheel nut
              removal at your home, work, car park or suitable roadside
              location.
            </p>

            <div className="hero-actions">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="button button-gold"
              >
                Call {PHONE}
                <Icon type="arrow" size={19} />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                WhatsApp us
                <Icon type="whatsapp" size={18} />
              </a>
            </div>
          </div>

          <form className="postcode-box" onSubmit={checkPostcode}>
            <span className="small-label">DO WE COVER YOU?</span>

            <strong>Check your postcode</strong>

            <div className="postcode-row">
              <input
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter your postcode"
                aria-label="Postcode"
              />

              <button type="submit">
                Check
                <Icon type="arrow" size={18} />
              </button>
            </div>

            <p>
              Bournemouth, Poole, Christchurch and surrounding areas. Send
              your postcode and we&apos;ll tell you straight away.
            </p>
          </form>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <span className="trust-icon">
              <Icon type="clock" size={25} />
            </span>
            <div>
              <strong>24 hour service</strong>
              <span>Available day and night</span>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">
              <Icon type="location" size={25} />
            </span>
            <div>
              <strong>We come to you</strong>
              <span>Home, work or suitable roadside</span>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">
              <Icon type="van" size={25} />
            </span>
            <div>
              <strong>Mobile service</strong>
              <span>No need to visit a garage</span>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">
              <Icon type="check" size={25} />
            </span>
            <div>
              <strong>Clear pricing</strong>
              <span>Know what you need before work starts</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>

              <h2>
                Mobile service.
                <br />
                <span>Wherever you are.</span>
              </h2>
            </div>

            <p className="section-intro">
              Tell us what has happened and where your vehicle is. We&apos;ll
              help you with a practical mobile solution and clear information
              before we get started.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>

                  <span className="service-icon">
                    <Icon type={service.icon} size={31} />
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#quote" className="text-link">
                  Get a quote
                  <Icon type="arrow" size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="dark-section process-section">
        <div className="container">
          <div className="section-heading centered light-heading">
            <p className="eyebrow light">HOW IT WORKS</p>

            <h2>
              Three steps.
              <br />
              <span>Simple from start to finish.</span>
            </h2>
          </div>

          <div className="process-grid">
            <article className="process-item">
              <span className="process-number">01</span>

              <div className="process-icon">
                <Icon type="phone" size={29} />
              </div>

              <h3>Call or WhatsApp</h3>

              <p>
                Tell us what has happened, where the vehicle is and what
                service you need.
              </p>
            </article>

            <article className="process-item">
              <span className="process-number">02</span>

              <div className="process-icon">
                <Icon type="van" size={29} />
              </div>

              <h3>We come to you</h3>

              <p>
                Our mobile service comes to your home, workplace, car park or
                suitable roadside location.
              </p>
            </article>

            <article className="process-item">
              <span className="process-number">03</span>

              <div className="process-icon">
                <Icon type="check" size={29} />
              </div>

              <h3>Back on the road</h3>

              <p>
                Your chosen service is completed at your location so you can
                get on with your day.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section why-section">
        <div className="container why-layout">

          <div className="image-frame large-image">
            <img
              src="/home/11.jpg"
              alt="Wheel On Deal mobile vehicle service"
            />

            <span className="image-tag">WHEEL ON DEAL</span>
          </div>

          <div className="why-copy">
            <p className="eyebrow">WHY WHEEL ON DEAL</p>

            <h2>
              Built around
              <br />
              <span>your convenience.</span>
            </h2>

            <p className="lead">
              Vehicle problems rarely happen at a convenient time. Our mobile
              approach is designed to save you the trip to a garage and make
              getting help straightforward.
            </p>

            <div className="bullet-list">

              <div className="bullet-item">
                <span className="bullet-check">
                  <Icon type="check" size={17} />
                </span>

                <div>
                  <strong>A mobile service</strong>

                  <p>
                    We bring the service to your location instead of asking
                    you to arrange another journey.
                  </p>
                </div>
              </div>

              <div className="bullet-item">
                <span className="bullet-check">
                  <Icon type="check" size={17} />
                </span>

                <div>
                  <strong>Practical help</strong>

                  <p>
                    We focus on the service your vehicle actually needs and
                    explain the options clearly.
                  </p>
                </div>
              </div>

              <div className="bullet-item">
                <span className="bullet-check">
                  <Icon type="check" size={17} />
                </span>

                <div>
                  <strong>Home, work or roadside</strong>

                  <p>
                    Our mobile setup gives you more flexibility when arranging
                    vehicle assistance.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BUILDER */}
      <section className="quote-section" id="quote">
        <div className="container quote-layout">

          <div className="quote-intro">
            <p className="eyebrow light">FASTEST WAY TO A PRICE</p>

            <h2>
              Build your message.
              <br />
              <span>We do the rest.</span>
            </h2>

            <p>
              Answer these here and WhatsApp opens with the whole message
              already written — nothing to type on your phone. Most of it is
              a tap. Nothing is stored on this website.
            </p>

            <div className="quote-contact">
              <span className="quote-contact-icon">
                <Icon type="whatsapp" size={22} />
              </span>

              <div>
                <small>Prefer to talk?</small>

                <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                  Or call {PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="quote-form" onSubmit={sendWhatsApp}>

            <div className="form-grid">

              <label>
                <span>Name</span>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    updateForm("name", e.target.value)
                  }
                  placeholder="Your name"
                />
              </label>

              <label>
                <span>Postcode / location</span>

                <input
                  type="text"
                  value={form.location}
                  onChange={(e) =>
                    updateForm("location", e.target.value)
                  }
                  placeholder="e.g. BH1 1AA"
                />
              </label>

              <label>
                <span>Make and model</span>

                <input
                  type="text"
                  value={form.vehicle}
                  onChange={(e) =>
                    updateForm("vehicle", e.target.value)
                  }
                  placeholder="e.g. Ford Focus"
                />
              </label>

              <label>
                <span>Registration number</span>

                <input
                  type="text"
                  value={form.registration}
                  onChange={(e) =>
                    updateForm("registration", e.target.value)
                  }
                  placeholder="e.g. AB12 CDE"
                />
              </label>

            </div>

            {/* WHERE */}
            <div className="form-group">

              <span className="form-title">
                Where is the car?
              </span>

              <div className="choice-grid">

                {[
                  "At home",
                  "At work",
                  "Roadside",
                  "Car park",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.where === item ? "selected" : ""
                    }`}
                    onClick={() =>
                      updateForm("where", item)
                    }
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            {/* SERVICE */}
            <div className="form-group">

              <span className="form-title">
                Service needed
              </span>

              <div className="choice-grid service-choices">

                {[
                  "Mobile Tyre Fitting",
                  "Mobile Battery Fitting",
                  "Locking Wheel Nut Removal",
                  "Not sure, need advice",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.service === item ? "selected" : ""
                    }`}
                    onClick={() =>
                      updateForm("service", item)
                    }
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            {/* LOCKING WHEEL NUT */}
            <div className="form-group">

              <span className="form-title">
                Locking wheel nut
              </span>

              <div className="choice-grid small">

                {[
                  "I have the key",
                  "No key",
                  "Not sure",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.locking === item ? "selected" : ""
                    }`}
                    onClick={() =>
                      updateForm("locking", item)
                    }
                  >
                    {item}
                  </button>
                ))}

              </div>
            </div>

            {/* NOTES */}
            <label className="notes-field">

              <span>Additional notes</span>

              <textarea
                value={form.notes}
                onChange={(e) =>
                  updateForm("notes", e.target.value)
                }
                placeholder="Tell us anything else that may help..."
                rows={4}
              />

            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="button button-gold full-button"
            >
              Send on WhatsApp
              <Icon type="whatsapp" size={19} />
            </button>

            {sent && (
              <p className="form-success">
                WhatsApp has been opened with your message prepared.
              </p>
            )}

            <p className="form-call">
              Or call{" "}
              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                {PHONE}
              </a>
            </p>

          </form>
        </div>
      </section>

      {/* STANDARD */}
      <section className="section standard-section">
        <div className="container">

          <div className="section-heading centered">
            <p className="eyebrow">OUR STANDARD</p>

            <h2>
              Straightforward service.
              <br />
              <span>Done properly.</span>
            </h2>

            <p className="center-intro">
              We believe mobile vehicle services should be convenient,
              transparent and focused on doing the job properly.
            </p>
          </div>

          <div className="standard-grid">

            <article>
              <span>01</span>
              <h3>Customer focused</h3>
              <p>
                We keep the process clear and make it easy to arrange help
                around your day.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Quality workmanship</h3>
              <p>
                We approach every job carefully and pay attention to the
                details that matter.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Clear pricing</h3>
              <p>
                We explain the service and expected cost before work begins.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Competitive rates</h3>
              <p>
                Our mobile model gives you a convenient alternative to
                travelling to a traditional garage.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>Convenient service</h3>
              <p>
                We come to suitable locations so you can avoid unnecessary
                disruption.
              </p>
            </article>

            <article>
              <span>06</span>
              <h3>Responsible approach</h3>
              <p>
                We aim to complete every job carefully and leave you with a
                clear understanding of the work carried out.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="promise-section">
        <div className="container promise-layout">

          <div>
            <p className="eyebrow light">OUR PROMISE</p>

            <h2>
              A service built
              <br />
              <span>around your day.</span>
            </h2>
          </div>

          <div className="promise-copy">

            <p>
              When your vehicle needs attention, the last thing you need is
              unnecessary hassle. We bring the service to you and keep the
              process straightforward.
            </p>

            <div className="promise-points">

              <div>
                <span>
                  <Icon type="check" size={19} />
                </span>

                <p>
                  Clear communication from first contact to completion.
                </p>
              </div>

              <div>
                <span>
                  <Icon type="check" size={19} />
                </span>

                <p>
                  Mobile convenience without an unnecessary garage visit.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TYRES */}
      <section className="section tyres-section">
        <div className="container">

          <div className="section-heading split-heading">

            <div>
              <p className="eyebrow">TYRES</p>

              <h2>
                The right tyre.
                <br />
                <span>For your vehicle.</span>
              </h2>
            </div>

            <p className="section-intro">
              We can help you choose a tyre according to your vehicle, driving
              needs and budget. Add your own tyre brand imagery below when
              your final assets are ready.
            </p>

          </div>

          <div className="tyre-grid">

            <div className="tyre-card featured">

              <div className="tyre-image-slot">
                <span>TYRE IMAGE</span>
              </div>

              <div>
                <small>PREMIUM</small>
                <h3>Premium options</h3>

                <p>
                  For drivers looking for established tyre brands and
                  performance-focused options.
                </p>
              </div>

            </div>

            <div className="tyre-card">

              <div className="tyre-image-slot">
                <span>TYRE IMAGE</span>
              </div>

              <div>
                <small>MID-RANGE</small>
                <h3>Mid-range options</h3>

                <p>
                  A practical balance between everyday performance, quality
                  and cost.
                </p>
              </div>

            </div>

            <div className="tyre-card">

              <div className="tyre-image-slot">
                <span>TYRE IMAGE</span>
              </div>

              <div>
                <small>VALUE</small>
                <h3>Budget options</h3>

                <p>
                  Value-focused choices for drivers who want to keep costs
                  under control.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="container pricing-layout">

          <div className="pricing-image">
            <div className="image-placeholder">
              <span>YOUR IMAGE</span>
              <small>
                Replace with your own tyre/service image
              </small>
            </div>
          </div>

          <div className="pricing-copy">

            <p className="eyebrow">PRICING</p>

            <h2>
              Clear pricing.
              <br />
              <span>Honest advice.</span>
            </h2>

            <p>
              We believe you should understand what you are paying for before
              the work starts. Tell us what you need and we&apos;ll explain
              the service and pricing clearly.
            </p>

            <div className="pricing-points">

              <div>
                <span>
                  <Icon type="check" size={18} />
                </span>

                <div>
                  <strong>Quoted before work starts</strong>

                  <p>
                    Know the expected cost before you commit to the service.
                  </p>
                </div>
              </div>

              <div>
                <span>
                  <Icon type="check" size={18} />
                </span>

                <div>
                  <strong>Pay for the service you need</strong>

                  <p>
                    We focus on the job required rather than unnecessary
                    extras.
                  </p>
                </div>
              </div>

            </div>

            <a href="#quote" className="button button-dark">
              Get a quote
              <Icon type="arrow" size={18} />
            </a>

          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="section areas-section">
        <div className="container">

          <div className="section-heading centered">

            <p className="eyebrow">WHERE WE COVER</p>

            <h2>
              Mobile service across
              <br />
              <span>Dorset, Hampshire & Wiltshire.</span>
            </h2>

            <p className="center-intro">
              We cover Bournemouth, Poole, Christchurch and surrounding areas,
              with mobile services extending across our wider service area.
            </p>

          </div>

          <div className="areas-grid">

            {areas.map((area, index) => (
              <div className="area-card" key={area}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{area}</strong>

                <Icon type="arrow" size={18} />

              </div>
            ))}

          </div>

          <div className="areas-bottom">

            <span>NOT SURE IF WE COVER YOU?</span>

            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
              Call {PHONE}
              <Icon type="arrow" size={17} />
            </a>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container faq-layout">

          <div className="faq-title">

            <p className="eyebrow">COMMON QUESTIONS</p>

            <h2>
              Before
              <br />
              <span>you call.</span>
            </h2>

            <p>
              If you still have a question, give us a call or send a WhatsApp
              message and we&apos;ll help.
            </p>

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="text-link"
            >
              Call {PHONE}
              <Icon type="arrow" size={17} />
            </a>

          </div>

          <div className="faq-list">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "open" : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-plus">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">

        <div className="final-cta-bg" />

        <div className="container final-cta-inner">

          <p className="eyebrow light">NEED HELP NOW?</p>

          <h2>
            Tell us where
            <br />
            <span>the vehicle is.</span>
          </h2>

          <p>
            One call or WhatsApp message gets the conversation started. Tell us
            what has happened and where you are.
          </p>

          <div className="hero-actions">

            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="button button-gold"
            >
              Call {PHONE}
              <Icon type="phone" size={18} />
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              Message on WhatsApp
              <Icon type="whatsapp" size={18} />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}