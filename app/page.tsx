"use client";

import Image from "next/image";
import { FormEvent } from "react";

const services = [["01", "Diagnostics & fault finding", "Warning light on? We can identify the issue and explain the next step clearly."], ["02", "Servicing & maintenance", "Keep your car running properly with convenient servicing at home or work."], ["03", "Brakes, clutches & repairs", "From worn pads and discs to common mechanical repairs, carried out where possible."], ["04", "Pre-MOT checks", "A straightforward check before your MOT, helping you spot work that may need doing."]];
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

export default function Home() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const details = Object.fromEntries(new FormData(event.currentTarget));
    const message = `Hi JC Mobile Mechanic, I'd like to book a service.\n\nName: ${details.name}\nPhone: ${details.phone}\nVehicle registration: ${details.registration || "Not supplied"}\n\nWhat I need help with:\n${details.message}`;
    window.location.href = `https://wa.me/447799543101?text=${encodeURIComponent(message)}`;
  }
  return <main>
    <header className="site-header"><a className="brand" href="#top"><span>JC</span> MOBILE MECHANIC</a><nav><a href="#services">Services</a><a href="#about">About</a><a href="#reviews">Reviews</a><a href="#enquire">Enquire</a></nav><a className="header-cta" href="#enquire">Get a quote</a></header>
    <section className="hero" id="top"><div className="hero-grid" aria-hidden="true"/><div className="hero-content"><p className="eyebrow">MOBILE MECHANIC · ROTHERHAM</p><h1>Reliable repairs.<br/><em>Where you need us.</em></h1><p className="hero-copy">Straightforward vehicle repairs, servicing and diagnostics without the hassle of taking your car to a garage.</p><div className="hero-actions"><a className="button primary" href="#enquire">Request a quote <b>→</b></a><a className="button ghost" href="#services">View services</a></div></div><aside className="hero-note"><span className="note-mark">JC</span><p>Mobile vehicle care across Rotherham and the surrounding area.</p></aside></section>
    <section className="trust-strip"><p><span>•</span> CONVENIENT MOBILE SERVICE</p><p><span>•</span> CLEAR, HONEST ADVICE</p><p><span>•</span> ROTHERHAM & SURROUNDING AREAS</p></section>
    <section className="services section" id="services"><div><p className="eyebrow">WHAT WE DO</p><h2>Keeping your car<br/>moving.</h2></div><div className="service-list">{services.map(([number, title, copy]) => <article className="service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><a href="#enquire" aria-label={`Enquire about ${title}`}>↗</a></article>)}</div></section>
    <section className="about-band" id="about"><div className="about-image"><Image src="/jc-mobile-van.png" alt="JC Mobile Mechanic van" fill sizes="(max-width: 720px) 100vw, 50vw" priority/></div><div className="about-copy"><p className="eyebrow">ABOUT JC MOBILE MECHANIC</p><h2>Proper car care.<br/>At your doorstep.</h2><p>JC Mobile Mechanic brings straightforward servicing, diagnostics and repairs directly to your home or workplace across Rotherham and the surrounding area.</p><p>We believe looking after your car should be simple: clear advice, honest work and no unnecessary trips to a garage. If a repair needs a workshop, we’ll always let you know upfront.</p></div></section>
    <section className="reviews section" id="reviews"><div className="reviews-heading"><p className="eyebrow">CUSTOMER REVIEWS</p><h2>Trusted by local<br/>drivers.</h2><p>Real recommendations from JC Mobile Mechanic customers.</p><a href="https://www.facebook.com/jcmobilemechanicrotherham/reviews/?id=100071424180682&sk=reviews" target="_blank" rel="noreferrer">Read all reviews on Facebook ↗</a></div><div className="review-marquee" aria-label="Customer reviews"><div className="review-track">{[...reviews, ...reviews].map(([name, quote], index) => <article className="review-card" key={`${name}-${index}`}><div className="stars">★★★★★</div><blockquote>“{quote}”</blockquote><p>— {name}</p></article>)}</div></div></section>
    <section className="enquiry section" id="enquire"><div className="enquiry-copy"><p className="eyebrow">REQUEST A QUOTE</p><h2>Let’s get you<br/><em>back on the road.</em></h2><p>Complete the form and WhatsApp will open with your booking details already written out. Just check it and press send.</p><div className="contact-options"><a className="call-now" href="tel:07799543101">Call 07799 543101</a><a className="whatsapp-now" href="https://wa.me/447799543101?text=Hi%20JC%20Mobile%20Mechanic%2C%20I%27d%20like%20to%20book%20a%20service." target="_blank" rel="noreferrer">WhatsApp us</a></div><a className="facebook" href="https://www.facebook.com/jcmobilemechanicrotherham/?locale=en_GB" target="_blank" rel="noreferrer">Message us on Facebook <b>↗</b></a></div><form onSubmit={submit} className="quote-form"><p className="form-intro"><strong>Booking by WhatsApp:</strong> fill in your details below, then we’ll take you straight to WhatsApp.</p><label>Your name<input required name="name" placeholder="Your full name"/></label><label>Phone number<input required type="tel" name="phone" placeholder="Best number to reach you"/></label><label>Vehicle registration <small>We’ll check the vehicle details manually.</small><input name="registration" placeholder="e.g. AB12 CDE" autoCapitalize="characters"/></label><label>What do you need help with?<textarea required name="message" placeholder="Tell us about the issue, service or repair you need…" rows={4}/></label><button className="button primary submit" type="submit">Continue to WhatsApp <b>↗</b></button></form></section>
    <footer><a className="brand" href="#top"><span>JC</span> MOBILE MECHANIC</a><p>Mobile mechanic services in Rotherham.</p><a href="https://www.facebook.com/jcmobilemechanicrotherham/?locale=en_GB" target="_blank" rel="noreferrer">Facebook ↗</a></footer>
  </main>;
}
