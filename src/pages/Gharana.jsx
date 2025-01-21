import React from "react";

import Navbar from "../components/Navbar";

import "./Gharana.css";

const Gharana = () => {
    return (
        <div className="container gharana">
            <Navbar />
            <div className="gharana-container">
              <div className="gharana-image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/gharana.png`}
                  alt="Sitar performance of Subhranil Sarkar and Ustad Shahid Parvez Khan"
                  className="gharana-image"
                />
              </div>
              <div className="gharana-content text-content">
                <h1 className="gharana-title">Gharana</h1>
                <p className="gharana-description">
                  The Etawah gharana is a North Indian school of sitar and surbahar
                  music and named after a small town close to Agra where Imdad Khan
                  (1848–1920) lived. It is also known as Imdadkhani gharana in the
                  honour of its founder, Imdad Khan.
                </p>
                <p className="gharana-details">
                  The gharana's achievements include the development of the Surbahar,
                  major structural changes to both the sitar and surbahar, and the
                  creation of the instrumental style known as the gayaki ang (vocal
                  style performed on sitar) by Vilayat Khan. This style of sitar is now
                  known as the Vilayatkhani sitar.
                </p>
                <p className="gharana-performers">
                  Living performers of the family include Shahid Parvez, Shujaat Khan,
                  Nishat Khan, Irshad Khan, Wajahat Khan, Hidayat Khan, and Zila Khan,
                  the first female performer of this gharana.
                </p>
              </div>
            </div>
          </div>
    );
}

export default Gharana;
