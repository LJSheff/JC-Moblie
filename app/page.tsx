"use client";

import Image from "next/image";
import { FormEvent } from "react";

const services = [
  ["01", "Diagnostics & fault finding", "Warning light on or something not feeling right? Josh can investigate the issue and explain the next steps.", "Warning lights & vehicle faults"],
  ["02", "Servicing & maintenance", "Routine servicing and maintenance at your home or workplace, helping you keep on top of your car’s upkeep.", "Routine vehicle care"],
  ["03", "Brakes, clutches & repairs", "Need a repair? Tell Josh what’s happening and he’ll confirm whether the work can be carried out on-site.", "Repairs assessed individually"],
  ["04", "Timing belts & timing chains", "Timing belt and timing chain replacements. Tell Josh your vehicle details so he can discuss the work needed and confirm whether it can be carried out on-site.", "Timing belt & chain replacements"],
  ["05", "Pre-MOT checks", "Get your car checked ahead of its MOT and understand any potential issues that may need attention.", "Checks before test day"],
];
const reviews = [
  ["Grant Stockman", "Brilliant mechanic and reliable"],
  ["Debbie McGowan", "Fantastic service from JC Mobile Mechanic. Very reasonable prices, excellent work."],
  ["Laura Birch", "What a superb service. I got booked in for the following day — the job was done quickly and professionally at a reasonable price."],
  ["Jayden Clark", "Good service."],
  ["Chris Marsden", "Excellent service — top marks."],
  ["Emma Thompson", "100% recommend. Very reliable, honest and quick to reply — a 5-star service all round."],
  ["BMDServices", "Quality service provided. Friendly chap, good prices and a top service. Will be using again for all my mechanical needs."],
  ["Selene Althea", "Excellent service and very friendly. Will definitely contact again for any other car issues."],
];

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.jcmobile.co.uk/#business",
  name: "JC Mobile Mechanic",
  url: "https://www.jcmobile.co.uk/",
  image: "https://www.jcmobile.co.uk/jc-mobile-van.png",
  telephone: "+44 7799 543101",
  description: "Mobile vehicle diagnostics, servicing, repairs, timing belts, timing chains and pre-MOT checks across Rotherham, Sheffield, Doncaster, Barnsley, Worksop, Retford and North Chesterfield.",
  areaServed: [
    { "@type": "Place", name: "Rotherham" },
    { "@type": "Place", name: "Sheffield" },
    { "@type": "Place", name: "Doncaster" },
    { "@type": "Place", name: "Barnsley" },
    { "@type": "Place", name: "Worksop" },
    { "@type": "Place", name: "Retford" },
    { "@type": "Place", name: "North Chesterfield" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile mechanic services",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Vehicle diagnostics and fault finding" },
      { "@type": "OfferCatalog", name: "Vehicle servicing and maintenance" },
      { "@type": "OfferCatalog", name: "Brakes, clutches and mechanical repairs" },
      { "@type": "OfferCatalog", name: "Timing belt and timing chain replacements" },
      { "@type": "OfferCatalog", name: "Pre-MOT checks" },
    ],
  },
  sameAs: ["https://www.facebook.com/jcmobilemechanicrotherham/"],
};

export default function Home() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = Object.fromEntries(new FormData(event.currentTarget));
    // This form only prepares a WhatsApp message; it does not submit to our server.
    const name = String(details.name ?? "").trim().slice(0, 80);
    const phone = String(details.phone ?? "").trim().slice(0, 30);
    const registration = String(details.registration ?? "").trim().slice(0, 15);
    const issue = String(details.message ?? "").trim().slice(0, 1000);
    const message = `Hi JC Mobile Mechanic, I'd like to book a service.\n\nName: ${name}\nPhone: ${phone}\nVehicle registration: ${registration || "Not supplied"}\n\nWhat I need help with:\n${issue}`;
    if (!name || !phone || !issue) return;
    window.location.assign(`https://wa.me/447799543101?text=${encodeURIComponent(message)}`);
  }
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} />
    <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><a className="header-logo" href="#top" aria-label="JC Mobile Mechanic home"><Image src="/jc-mobile-mechanic-logo.png" alt="JC Mobile Mechanic" width={116} height={70} quality={90} priority/></a><nav><a href="#services">Services</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#enquire">Enquire</a></nav><div className="header-right"><details className="mobile-menu"><summary aria-label="Open navigation menu"><span aria-hidden="true">☰</span> Menu</summary><div className="mobile-menu-links"><a href="#services">Services</a><a href="#about">About Josh</a><a href="#reviews">Reviews</a><a href="#enquire">Contact</a></div></details><a className="header-cta" href="#enquire">Get a quote</a></div></header>
    <section className="hero" id="top"><div className="hero-grid" aria-hidden="true"/><div className="hero-inner"><div className="hero-content"><p className="eyebrow">LOCAL MOBILE MECHANIC · ROTHERHAM</p><h1>Car repairs &amp; servicing.<br/><em>At your doorstep.</em></h1><p className="hero-copy">Diagnostics, servicing and vehicle repairs at your home or workplace. Straightforward advice and convenient appointments across Rotherham and surrounding areas.</p><div className="hero-actions"><a className="button primary" href="#enquire">Request a quote <b aria-hidden="true">→</b></a><a className="button ghost" href="#services">Explore services</a></div><p className="hero-reassurance">A local mechanic, a real van, and help where you need it.</p></div><div className="hero-visual"><Image src="/jc-mobile-van.png" alt="JC Mobile Mechanic beside the branded mobile workshop van" fill quality={90} sizes="(max-width: 720px) 150vw, (max-width: 900px) 115vw, 85vw" priority className="hero-photo"/><div className="hero-photo-caption"><span className="hero-caption-dot" aria-hidden="true"/>YOUR LOCAL MOBILE MECHANIC</div></div></div></section>
    <section className="trust-strip"><p><span>•</span> CONVENIENT MOBILE SERVICE</p><p><span>•</span> CLEAR, HONEST ADVICE</p><p><span>•</span> ROTHERHAM & SURROUNDING AREAS</p></section>
    <section className="services section" id="services">
      <div className="services-intro"><div><p className="eyebrow">WHAT JOSH CAN HELP WITH</p><h2>Keeping your car<br/><span>moving.</span></h2></div><div className="services-intro-aside"><p>From fault finding to regular servicing, get straightforward help without arranging a trip to a garage.</p><a href="#enquire">Not sure what you need? Ask Josh <span aria-hidden="true">↗</span></a></div></div>
      <div className="service-grid">{services.map(([number, title, copy, detail]) => <article className="service-tile" key={number}><div className="service-tile-top"><span className="service-number">{number} / {String(services.length).padStart(2, "0")}</span><span className="service-symbol" aria-hidden="true">↗</span></div><div><h3>{title}</h3><p>{copy}</p></div><div className="service-tile-bottom"><span>{detail}</span><a href="#enquire" aria-label={`Ask Josh about ${title}`}>Enquire <span aria-hidden="true">→</span></a></div></article>)}</div>
      <p className="service-note">Not every repair can be completed on-site. Send Josh a few details about your car and he’ll let you know what’s possible.</p>
    </section>
    <section className="about-band" id="about"><div className="about-image"><Image src="/jc-mobile-van.png" alt="Josh from JC Mobile Mechanic standing beside his branded van" fill quality={90} sizes="(max-width: 720px) 720px, (max-width: 1440px) 1080px, 75vw"/></div><div className="about-copy"><p className="eyebrow">MEET YOUR LOCAL MECHANIC</p><h2>Hi, I'm Josh.<br/><span>I come to you.</span></h2><p className="about-lead">I'm the person behind JC Mobile Mechanic, providing mobile servicing, diagnostics and repairs across Rotherham, Sheffield, Doncaster, Barnsley, Worksop, Retford and North Chesterfield.</p><p>As an <strong>ex main dealer technician</strong> with <strong>over 10 years of experience</strong>, my aim is simple: explain what's wrong, talk you through your options and carry out the work at your home or workplace whenever possible.</p><p>You'll deal directly with me from your first message to the completed job. If something needs workshop equipment, I'll let you know.</p><div className="about-actions"><a className="button primary" href="#enquire">Ask Josh for a quote <b aria-hidden="true">→</b></a><span>ONE MECHANIC. PERSONAL SERVICE.</span></div></div></section>
    <section className="reviews section" id="reviews">
      <div className="reviews-top"><div><p className="eyebrow">WHAT CUSTOMERS SAY</p><h2>Good work.<br/><span>Good word of mouth.</span></h2></div><div className="reviews-top-aside"><p>Choosing someone to work on your car is a big decision. Hear what customers have said about Josh and JC Mobile Mechanic.</p><a href="https://www.facebook.com/jcmobilemechanicrotherham/reviews/?id=100071424180682&sk=reviews" target="_blank" rel="noopener noreferrer" className="reviews-source-link">See reviews on Facebook <span aria-hidden="true">↗</span></a></div></div>
      <div className="review-grid">
        {reviews.filter((_, index) => [2, 5, 6].includes(index)).map(([name, quote]) => <figure className="testimonial" key={name}><div className="testimonial-mark" aria-hidden="true">“</div><blockquote>{quote}</blockquote><figcaption><span className="testimonial-avatar" aria-hidden="true">{name.slice(0,1)}</span><span><strong>{name}</strong><small>Customer review · Facebook</small></span></figcaption></figure>)}
      </div>
      <div className="reviews-footer"><div><strong>Want to speak to Josh first?</strong><p>Tell him what your car needs and he'll help you work out the next step.</p></div><a href="#enquire" className="button primary">Get in touch <b aria-hidden="true">→</b></a></div>
    </section>
    <section className="enquiry section" id="enquire"><div className="enquiry-copy"><p className="eyebrow">REQUEST A QUOTE</p><h2>Let’s get you<br/><em>back on the road.</em></h2><p>Complete the form and WhatsApp will open with your booking details already written out. Just check it and press send.</p><div className="contact-options"><a className="call-now" href="tel:07799543101">Call 07799 543101</a><a className="whatsapp-now" href="https://wa.me/447799543101?text=Hi%20JC%20Mobile%20Mechanic%2C%20I%27d%20like%20to%20book%20a%20service." target="_blank" rel="noreferrer">WhatsApp Josh</a></div><a className="facebook" href="https://www.facebook.com/jcmobilemechanicrotherham/?locale=en_GB" target="_blank" rel="noreferrer">Message Josh on Facebook <b>↗</b></a></div><form onSubmit={submit} className="quote-form"><p className="form-intro"><strong>Booking by WhatsApp:</strong> fill in your details below, then WhatsApp will open your prepared message.</p><label>Your name<input required name="name" autoComplete="name" maxLength={80} placeholder="Your full name"/></label><label>Phone number<input required type="tel" name="phone" autoComplete="tel" maxLength={30} inputMode="tel" placeholder="Best number to reach you"/></label><label>Vehicle registration <small>We’ll check the vehicle details manually.</small><input name="registration" maxLength={15} placeholder="e.g. AB12 CDE" autoCapitalize="characters"/></label><label>What do you need help with?<textarea required name="message" maxLength={1000} placeholder="Tell Josh about the issue, service or repair you need…" rows={4}/></label><p className="form-privacy-note">Your details stay in this browser until you choose to continue. WhatsApp will open a pre-filled message; <strong>nothing is sent until you press Send in WhatsApp.</strong> See our <a href="/privacy">privacy notice</a>.</p><button className="button primary submit" type="submit">Continue to WhatsApp <b>↗</b></button></form></section>
    <footer><a className="brand" href="#top"><span>JC</span> MOBILE MECHANIC</a><p>Mobile mechanic services in Rotherham.</p><div className="footer-links"><a href="tel:07799543101">Call Josh: 07799 543101</a><a href="/privacy">Privacy notice</a><a href="https://www.facebook.com/jcmobilemechanicrotherham/?locale=en_GB" target="_blank" rel="noopener noreferrer">Facebook ↗</a></div></footer>
  </main>;
}
