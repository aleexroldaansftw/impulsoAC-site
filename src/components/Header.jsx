import React, { useEffect, useRef, useState } from "react";

/*
  Header.jsx
  - Scrollspy con IntersectionObserver
  - Navegación nativa con anchors (#id) → FUNCIONA EN PROD
  - Logo redirige a inicio
*/

const SECTIONS = [
  { id: "top", label: "Inicio" },
  { id: "mision-vision", label: "Misión/Visión" },
  { id: "programas-deportivos", label: "Deportivos" },
  { id: "programas-sociales", label: "Sociales" },
  { id: "visit-us", label: "Visítanos" },
  { id: "contacto", label: "Contacto" }
];

export default function Header() {
  const headerRef = useRef(null);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        {/* LOGO / BRAND */}
        <a
          href="#top"
          className="brand-left"
          aria-label="Ir al inicio"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <img src="/assets/logo2.png" alt="Impulso logo" className="logo" />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span className="name">Impulso Deportivo y Social A.C.</span>
            <small style={{ color: "rgba(255,255,255,0.95)", fontSize: 12 }}>
              Transformamos vidas a través del deporte
            </small>
          </div>
        </a>

        {/* NAV */}
        <nav className="nav" aria-label="Main navigation">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link ${active === s.id ? "active" : ""}`}
              aria-current={active === s.id ? "page" : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
