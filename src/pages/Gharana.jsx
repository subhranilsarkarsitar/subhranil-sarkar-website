import React from "react";

import Navbar from "../components/Navbar";

import "./Gharana.css";

const Gharana = () => {
    return (
        <div className="container gharana">
            <Navbar />
            <div className="main-content page-content">
              <div className="image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/gharana.png`}
                  alt="Sitar performance of Subhranil Sarkar and Ustad Shahid Parvez Khan"
                  className="gharana-image"
                />
              </div>
              <div className="text-content">
                <h1 className="title">Gharana</h1>
                <p className="description">
                  Subhranil Sarkar is a distinguished torchbearer of the Etawah Gharana, also known as the Imdadkhani Gharana,
                  one of the most revered schools of Hindustani classical music. This illustrious tradition, named after
                  its visionary founder Ustad Imdad Khan, originated in the town of Etawah, Uttar Pradesh. Ustad Imdad Khan,
                  a virtuoso of the sitar and surbahar, pioneered a style that harmonized technical brilliance with profound
                  artistic expression, establishing a legacy that continues to resonate through generations.
                </p>
                <p className="description">
                  The essence of the Etawah Gharana lies in its unparalleled mastery of the intricate interplay between
                  the left and right hand, a technique profoundly influenced by the lyrical grace of Khayal gayaki.
                  By refining the left-hand techniques, the gharana enabled the seamless execution of complex, Khayal-inspired
                  movements on string instruments. Its signature Gayaki Ang seeks to evoke the expressive nuances of vocal music,
                  imbuing the sitar and surbahar with a voice-like fluidity. This approach, rich with meend (gliding notes),
                  gamak (oscillations), and murki (ornamented flourishes), creates a sublime blend of precision and emotion,
                  offering a deeply immersive and soulful auditory experience.
                </p>
                <p className="description">
                  The gharana has given the world some of the most extraordinary artists who have elevated its traditions
                  to unparalleled heights. Ustad Vilayat Khan, a legendary figure, revolutionized sitar artistry with his
                  refinement of the Gayaki Ang, bringing global recognition to the instrument. Ustad Shahid Parvez Khan,
                  a contemporary maestro, is celebrated for his unparalleled technical command and deeply emotive performances. 
                </p>
                <p className="description">
                  Luminaries such as Ustad Enayat Khan, Ustad Wahid Khan, Ustad Ustad Aziz Khan, Ustad Hafeez Khan, Ustad Imrat Khan,
                  have also made monumental contributions to the gharana's legacy. Pandit Budhaditya Mukherjee, another eminent exponent,
                  is renowned for his profound virtuosity on both the sitar and surbahar, continuously expanding the horizons of the art form.
                  Other notable names are Pandit Kashinath Mukherjee, Ustad Nishat Khan, Ustad Irshad Khan, Ustad Sujaat Khan
                  who have brought glory to the gharana. Their unwavering commitment to preserving its purity while embracing
                  evolving musical landscapes has ensured that the Etawah Gharana remains both vibrant and relevant in the modern era.
                </p>
                <p className="description">
                  The Etawah Gharana embodies a harmonious confluence of discipline, innovation, and spirituality.
                  Its music transcends time, encapsulating the very essence of Hindustani classical tradition while
                  offering audiences an experience that is both transformative and timeless.
                </p>
              </div>
            </div>
          </div>
    );
}

export default Gharana;
