import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import SitarIcon from "./SitarIcon";

import "./Navbar.css";

const LINKS = [
  { to: "/about", label: "Bio" },
  { to: "/gharana", label: "Gharana" },
  { to: "/teaching", label: "Teaching" },
  { to: "/sitar-and-us", label: "Sangeet & Us" },
  { to: "/baithaki", label: "Baithaki Movement" },
  // { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the menu whenever the page changes
  useEffect(() => { setOpen(false); }, [location.pathname]);

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
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
        </nav>
      </header>
      <div className="nav-spacer" aria-hidden="true" />
    </>
  );
};

export default Navbar;
