import React from "react";

import SocialTiles from "../components/SocialTiles";


const Baithaki = () => {
  return (
    <section id="baithaki" className="container baithaki">
        <div className="main-content page-content">
          <div className="image-container">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/bm-logo.png`}
              alt="The Baithaki Movement by Subhranil Sarkar"
              className="gharana-image"
            />
          </div>
          <div className="text-content">
            <h2 className="title">Baithaki Movement</h2>
            <p className="description">
              The Baithaki Movement is a back to the roots series brought to you by sitarist Subhranil Sarkar.
            </p>
            <p className="description">
              Follow us on social media for the latest updates
            </p>
            <SocialTiles className="baithaki-tiles" items={[
              { icon: "instagram", label: "Instagram", value: "@baithaki.movement", href: "https://www.instagram.com/baithaki.movement" },
              { icon: "facebook", label: "Facebook", value: "Baithaki Movement", href: "https://www.facebook.com/profile.php?id=100093679717387" },
            ]} />
          </div>
        </div>
    </section>
  );
}

export default Baithaki;
