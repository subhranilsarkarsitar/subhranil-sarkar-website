import React from "react";

import Navbar from "../components/Navbar";

import "./About.css";

const About = () => {
    return (
      <div className="container aboutme">
        <Navbar />
        <div className="main-content page-content">
          <div className="text-content">
            <h1 className="title">About Me</h1>
            <p className="description">
              Subhranil Sarkar is regarded as one of the most promising Sitar-players of the younger generation.
              He belongs to Sitar's first family, the Etawah Gharana (also known as the Imdadkhani Gharana).
              He was initiated into music at the age of 6 by Sri Bimal Chatterjee of the same Gharana.
              In the year 2000, Subhranil was accepted as a disciple by the great Sitar maestro
              Padma-Shri Ustad Shahid Parvez Khan and with this began a new chapter in Subhranil’s musical life.
              Within a few years he has established himself as one of the foremost disciples of Ustadji
              and one of the young torchbearers of his Gharana.
            </p>
            <p className="aboutme-description">
              Subhranil started performing at the All India Radio, Kolkata at the age of 9.
              He acquired his Masters degree in Music from the Rabindra Bharati University being the
              first-class-first gold medalist of his year.
              For quite a few years he was associated with the Archive of North Indian Classical Music
              (Jadavpur University, Kolkata). He has been an Examiner as well as Adjudicator
              with the Rabindra Bharati University, Kolkata.
              He has presented lecture-demonstrations on the 'Sitar', ‘Etawah Gharana’ and ‘Ustad Amir Khan’
              at a few prestigious institutions. Subhranil Sarkar has performed in numerous concerts
              all over India, U.S. and Europe. One of the biggest highlights in Subhranil’s life
              is to have accompanied the great Ustad Shahid Parvez Khan in concerts on the sitar.
            </p>
          </div>
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/aboutme.jpg`}
              alt="Subhranil Sarkar with his sitar"
              className="aboutme-image"
            />
            <a className="presskit" href={`${process.env.PUBLIC_URL}/assets/downloads/subhranil-sarkar-presskit.zip`}>Download Press-Kit</a>
          </div>
        </div>
      </div>
    );
}

export default About;
