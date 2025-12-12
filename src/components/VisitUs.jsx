import React from "react";

export default function VisitUs() {
  return (
    <section className="visit-section" id="visit-us">
      <div className="container visit-grid">
        <div className="visit-media" aria-hidden="true">
          {/* Ajusta la ruta si tu imagen está en otro lugar */}
          <img src="/assets/local.jpg" alt="Instalaciones Impulso" />
        </div>

        <div className="visit-content">
          <h2>¡VEN A VISITARNOS!</h2>
          <p className="lead">
            Te invitamos a conocer nuestras instalaciones, programas y entrenamientos.
            Nuestro equipo estará encantado de recibirte y brindarte toda la información.
          </p>

          <a
            className="visit-button"
            href="https://maps.app.goo.gl/DGWEskjQYQGXbWYs9?g_st=iwb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir ubicación en Google Maps"
          >
            Ver ubicación en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
