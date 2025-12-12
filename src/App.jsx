import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Donation from "./components/Donation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VisitUs from "./components/VisitUs";   // ← IMPORTANTE: importamos el nuevo componente

export default function App(){
  return (
    <>
      <Header />
      <main>
        <div className="page-inner">
          <Hero />

          <section id="mision-vision" style={{marginTop:20}}>
            <div className="info-tiles">
              <div className="tile">
                <h4>Misión</h4>
                <p>
                  Impulsar el desarrollo integral de niñas, niños, jóvenes y familias a través del deporte, la activación física y los programas sociales, creando oportunidades reales de crecimiento educativo, emocional y comunitario.
                </p>
              </div>
              <div className="tile">
                <h4>Visión</h4>
                <p>
                  Ser la organización líder en Hidalgo y un referente nacional en programas deportivos y sociales, reconocida por transformar historias de vida y abrir caminos hacia el desarrollo humano.
                </p>
              </div>
            </div>
          </section>

          <section id="programas-deportivos" style={{marginTop:28}}>
            <h2 className="section-title">Programas Deportivos</h2>
            <Programs type="deportivos" />
          </section>

          <section id="programas-sociales" style={{marginTop:28}}>
            <h2 className="section-title">Programas Sociales</h2>
            <Programs type="sociales" />
          </section>

          <section id="visit-us" style={{ marginTop: 40 }}>
            <VisitUs />
          </section>

          <section id="contacto" style={{marginTop:28}}>
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
