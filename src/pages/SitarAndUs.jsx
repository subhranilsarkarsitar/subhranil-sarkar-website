import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SitarAndUs = () => {
  return (
    <div className="container sitar-n-us">
        <Navbar />
        <div className="main-content page-content">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/sitar-min.jpg`}
              alt="Sitar performance of Subhranil Sarkar and Ustad Shahid Parvez Khan"
              className="gharana-image"
            />
          </div>
          <div className="text-content">
            <h1 className="title">Sangeet & Us</h1>
            <p className="description">
              Sangeet and Us is a celebration of the timeless bond between the seeker and sound, between the soul
              and the surging river of melody.
            </p>
            <p className="description">
              It is where music transcends the written note and becomes an eternal dialogue — a space where
              tradition breathes, emotions awaken, and every note carries the fragrance of centuries past.
            </p>
            <p className="description">
              Ideated by Shri Subhranil Sarkar, this initiative invites us to journey together into the heart of
              Indian classical music, honoring its ancient roots while nurturing its vibrant future.
              Here, music is not merely heard — it is lived, felt, and shared, weaving the essence of
              sangeet into every heart it touches.
            </p>


            <h2>Strings & Us</h2>
            <p className="description">
              <strong>Strings & Us</strong> was the seed from which this musical tree first grew, ideated by Shri Subhranil Sarkar
              during the early Orkut era and blossoming into a vibrant Facebook group in 2010.
              Born from the urge to demystify Indian classical music, Strings & Us created a space where
              musicians and enthusiasts could come together, converse, explore, and deepen their
              understanding — weaving bonds through the shared language of strings.
            </p>

            <h2>Sitar & Us</h2>
            <p className="description">
              A divine flowering of this timeless vision, <strong>Sitar & Us</strong> is an ode to the
              sitar — that celestial voice of the soul, whispering ancient secrets through its resonant strings.
            </p>
            <p className="description">
              At its core lies the life’s work of Shri Subhranil Sarkar, whose deep reverence
              for the sitar has been nurtured through <strong>over 25 years of relentless research,
              craftsmanship, and soulful exploration.</strong>
            </p>
            <p className="description">
              His journey has been one of devotion — studying the art of sitar-making,
              perfecting the nuances of sound, and breathing new life into the traditions
              handed down through generations.
            </p>
            <p className="description">
              Through transformative performances, intimate workshops, meticulous crafting of instruments,
              and profound musical dialogues, Sitar & Us dives into the very soul of the sitar — honoring
              its timeless techniques while fearlessly embracing innovation.
              It is a living testament to Subhranil’s unwavering pursuit of the perfect resonance — an invitation
              to experience the sitar not just as an instrument, but as a sacred extension of spirit, story, and song.
            </p>
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default SitarAndUs;
