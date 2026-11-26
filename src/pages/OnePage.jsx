import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import About from "./About";
import Gharana from "./Gharana";
import Teach from "./Teach";
import SitarAndUs from "./SitarAndUs";
import Baithaki from "./Baithaki";
import Contact from "./Contact";

// Old page addresses (/about, /gharana, …) now land on the matching section
export const SECTION_FOR_PATH = {
  "/": "home",
  "/home": "home",
  "/about": "about",
  "/gharana": "gharana",
  "/teaching": "teaching",
  "/sitar-and-us": "sitar-and-us",
  "/baithaki": "baithaki",
  "/contact": "contact",
};

const OnePage = () => {
  const location = useLocation();
  const firstRun = useRef(true);

  useEffect(() => {
    const id = SECTION_FOR_PATH[location.pathname] || "home";
    const el = document.getElementById(id);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = firstRun.current || reduce ? "auto" : "smooth";
    firstRun.current = false;
    if (!el) return;
    if (id === "home") window.scrollTo({ top: 0, behavior });
    else el.scrollIntoView({ behavior, block: "start" });

    // Images above the target can shift it while they load: re-align once on first load
    if (behavior === "auto" && id !== "home" && document.readyState !== "complete") {
      const realign = () => el.scrollIntoView({ block: "start" });
      window.addEventListener("load", realign, { once: true });
      return () => window.removeEventListener("load", realign);
    }
  }, [location.pathname, location.key]);

  return (
    <div className="onepage">
      <Navbar />
      <main id="main">
        <Home />
        <About />
        <Gharana />
        <Teach />
        <SitarAndUs />
        <Baithaki />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default OnePage;
