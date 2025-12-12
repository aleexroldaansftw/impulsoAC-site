import React from "react";

export default function Hero(){
  return (
    <div className="hero hero-enhanced hero-dark" id="home">
      <div className="hero-grid container" style={{ padding: 0 }}>
        <div className="hero-text">
          <h1 className="hero-title">Impulso Deportivo y Social A.C.</h1>
          <p className="lead hero-lead">“Transformamos vidas a través del deporte y la acción social”</p>

          <p className="hero-desc">
            Somos una asociación civil comprometida con el bienestar social, el desarrollo humano y la igualdad de oportunidades a través del deporte y la acción comunitaria.
          </p>

          
        </div>

        <div className="hero-visual">
          {/* Si quieres la animación flotante, agrega la clase "kid-float float-loop" */}
          <img src="/assets/niño.png" alt="niño" className="kid kid-float float-loop" />
        </div>
      </div>

      {/* Separador: SVG wave / fade hacia la siguiente sección */}
      <div className="hero-wave" aria-hidden>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gHeroWaveDark" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="100%" stopColor="rgba(255,255,255,1)" />
            </linearGradient>
          </defs>
          <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="url(#gHeroWaveDark)"></path>
        </svg>
      </div>
    </div>
  );
}
