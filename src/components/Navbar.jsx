import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import SitarIcon from "./SitarIcon";

import "./Navbar.css";

const LINKS = [
  { to: "/about", id: "about", label: "Bio" },
  { to: "/gharana", id: "gharana", label: "Gharana" },
  { to: "/teaching", id: "teaching", label: "Teaching" },
  { to: "/sitar-and-us", id: "sitar-and-us", label: "Sangeet & Us" },
  { to: "/baithaki", id: "baithaki", label: "Baithaki Movement" },
  { to: "/contact", id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const location = useLocation();

  // Close the menu after any menu choice
  useEffect(() => { setOpen(false); }, [location.key]);

  // Highlight the section currently in the middle of the screen
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    const home = document.getElementById("home");
    const homeIo = home && new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(null); },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    if (homeIo) homeIo.observe(home);
    return () => { io.disconnect(); if (homeIo) homeIo.disconnect(); };
  }, []);

  // Subtle border once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu; growing past the phone breakpoint closes it too
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const mq = window.matchMedia("(min-width: 851px)");
    const onMq = (e) => { if (e.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    mq.addEventListener ? mq.addEventListener("change", onMq) : mq.addListener(onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener ? mq.removeEventListener("change", onMq) : mq.removeListener(onMq);
    };
  }, []);

  return (
    <>
      <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <Link className="brand" to="/">Subhranil Sarkar</Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="navlinks"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="menu-icon-sitar" aria-hidden="true"><SitarIcon /></span>
          <svg className="menu-icon-close" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <nav className={`links${open ? " open" : ""}`} id="navlinks" aria-label="Main">
          {LINKS.map(({ to, id, label }) => (
            <Link
              key={to}
              to={to}
              className={active === id ? "active" : undefined}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="nav-spacer" aria-hidden="true" />
    </>
  );
};

export default Navbar;
