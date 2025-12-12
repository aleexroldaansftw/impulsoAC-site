import React, { useEffect, useRef, useState } from "react";

/*
  Header.jsx
  - Smooth scrolling con offset por header fijo (72px)
  - Scrollspy usando IntersectionObserver
  - Links mantienen fallback href (para accesibilidad)
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
  const [active, setActive] = useState("home");

  useEffect(() => {
    // Scrollspy: observa secciones y actualiza active
    const observerOptions = {
      root: null,
      rootMargin: `-110px 0px -60% 0px`, // ajusta para cuándo consideras "activo"
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

  // scroll suave con offset por header fijo
  function handleNavClick(e, id) {
    // allow normal ctrl/cmd+click etc.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const target = document.getElementById(id);

// 👉 SI NO EXISTE, DEJA QUE EL NAVEGADOR HAGA SU TRABAJO
if (!target) {
  return;
}

e.preventDefault();

    const headerHeight = headerRef.current?.offsetHeight || 72;
    const targetY = window.scrollY + target.getBoundingClientRect().top - headerHeight - 16; // -16 breathing
    window.scrollTo({ top: targetY, behavior: "smooth" });

    // efecto táctil: darle focus al elemento destino para accesibilidad
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    // limpiar tabindex después
    window.setTimeout(() => target.removeAttribute("tabindex"), 1000);
  }

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div
  style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
  onClick={(e) => handleNavClick(e, "top")}

  role="button"
>
  <div className="brand-left">
    <img src="/assets/logo2.png" alt="Impulso logo" className="logo" />
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span className="name">Impulso Deportivo y Social A.C.</span>
      <small style={{ color: "rgba(255,255,255,0.95)", fontSize: 12 }}>
        Transformamos vidas a través del deporte
      </small>
    </div>
  </div>
</div>

        <nav className="nav" aria-label="Main navigation">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link ${active === s.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, s.id)}
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
