import React from "react";

import "./SocialTiles.css";

// Line icons in the style of raginibyhindolita.com (stroke only, 24×24)
const ICONS = {
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
  youtube: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.2 8.2c0 3.6 2.6 6.4 6.4 6.4l.9-1.4-2-1-.9.8c-1.1-.4-2-1.3-2.4-2.4l.8-.9-1-2z" />
    </>
  ),
  form: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
};

/**
 * A row of contact tiles: icon, small uppercase label, and the handle in serif.
 * items: [{ icon, label, value, href }]
 */
const SocialTiles = ({ items, className = "" }) => (
  <ul className={`social-tiles ${className}`}>
    {items.map(({ icon, label, value, href }) => (
      <li key={href}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {ICONS[icon]}
          </svg>
          <span className="social-label">
            {label} <span className="visually-hidden">(opens in a new tab)</span>
          </span>
          <span className="social-value">{value}</span>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialTiles;
