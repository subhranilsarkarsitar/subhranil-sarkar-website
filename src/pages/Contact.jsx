import React from "react";

import Navbar from "../components/Navbar";

import "./Contact.css";
import { FacebookIcon, InstagramIcon, MessageIcon, WhatsAppIcon, YouTubeIcon } from "../components/SocialIcons";

const Contact = () => {
    return (
        <div className="container contact">
            <Navbar />
            <div className="main-content page-content">
              <div className="contact-form">
                <h1 className="title">Contact</h1>
                <div className="contact-links">
                  <a href="https://www.facebook.com/subhranil.sitarist" target="_blank" rel="noopener noreferrer" className="fb">
                    <FacebookIcon />
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/subhranil.sarkar_sitar" target="_blank" rel="noopener noreferrer" className="ig">
                    <InstagramIcon />
                    Instagram
                  </a>
                  <a href="https://www.youtube.com/@SubhranilSarkar" target="_blank" rel="noopener noreferrer" className="yt">
                    <YouTubeIcon />
                    YouTube
                  </a>
                  <a href="https://wa.me/message/42TWM6O5BEZPE1" target="_blank" rel="noopener noreferrer" className="wa">
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a href="https://forms.gle/TKD3X6fhHB2m8hq26" target="_blank" rel="noopener noreferrer" className="msg">
                    <MessageIcon />
                    Get in Touch
                  </a>
                </div>
              </div>
              <div className="image-container">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/contact.jpg`}
                alt="Subhranil Sarkar with his sitar"
                className="contact-image"
              />
            </div>
            </div>
          </div>
    );
}

export default Contact;
