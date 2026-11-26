import React from "react";

import SocialTiles from "../components/SocialTiles";

import "./Contact.css";

const CONTACTS = [
  { icon: "facebook", label: "Facebook", value: "subhranil.sitarist", href: "https://www.facebook.com/subhranil.sitarist" },
  { icon: "instagram", label: "Instagram", value: <>@subhranil.<wbr />sarkar_sitar</>, href: "https://www.instagram.com/subhranil.sarkar_sitar" },
  { icon: "youtube", label: "YouTube", value: "@SubhranilSarkar", href: "https://www.youtube.com/@SubhranilSarkar" },
  { icon: "whatsapp", label: "WhatsApp", value: "Send a message", href: "https://wa.me/message/42TWM6O5BEZPE1" },
  { icon: "form", label: "Get in Touch", value: "Enquiry form", href: "https://forms.gle/TKD3X6fhHB2m8hq26" },
];

const Contact = () => {
  return (
    <section id="contact" className="container contact" aria-labelledby="contact-title">
      <div className="contact-top">
        <figure className="contact-photo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/contact.jpg`}
            alt="Subhranil Sarkar in a kurta and embroidered cap, standing against a wooden door"
            loading="lazy"
          />
        </figure>
        <div className="contact-head">
          <p className="eyebrow">Stay connected</p>
          <h2 className="title" id="contact-title">Contact</h2>
          <p className="contact-intro">For concerts, lessons and enquiries, reach out through any of these.</p>
          <SocialTiles items={CONTACTS} className="contact-tiles" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
