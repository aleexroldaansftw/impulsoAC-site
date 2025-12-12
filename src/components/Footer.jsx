import React from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  MapPin
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-gold" role="contentinfo">
      <div className="container footer-grid">
        
        {/* Columna 1 */}
        <div className="footer-col footer-brand">
          <a href="#home" aria-label="Inicio">
            <img src="/assets/logo2.png" alt="logo" className="footer-logo" />
          </a>

          <h4 className="footer-title">Impulso Deportivo y Social A.C.</h4>

          <p className="footer-desc">
            Transformamos vidas a través del deporte y la acción social.
            Programas deportivos, becas y actividades comunitarias para jóvenes y familias.
          </p>
        </div>

        {/* Columna navegación */}
        <div className="footer-col footer-nav">
          <h4 className="footer-heading">Navegación</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#mision-vision">Misión / Visión</a></li>
            <li><a href="#programas-deportivos">Deportivos</a></li>
            <li><a href="#programas-sociales">Sociales</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna contacto */}
        <div className="footer-col footer-contact">
          <h4 className="footer-heading">Contacto</h4>

          <a className="footer-contact-item" href="mailto:alan_valdespino@impulsodep.com">
            <Mail size={18} className="footer-icon" />
            alan_valdespino@impulsodep.com
          </a>

          <a className="footer-contact-item" href="https://wa.me/527712952216" target="_blank">
            <Phone size={18} className="footer-icon" />
            +52 771 295 2216
          </a>

          <a className="footer-contact-item" href="https://www.facebook.com/share/1Dy6SkUnbW/?mibextid=wwXIfr" target="_blank">
            <Facebook size={18} className="footer-icon" />
            Impulso Dep A.C.
          </a>

          <a className="footer-contact-item" href="https://www.instagram.com/impulso_dep_ac" target="_blank">
            <Instagram size={18} className="footer-icon" />
            @impulso_dep_ac
          </a>

          <a className="footer-contact-item" href="https://maps.app.goo.gl/DGWEskjQYQGXbWYs9?g_st=iwb" target="_blank">
            <MapPin size={18} className="footer-icon" />
            Pachuca, Hidalgo
          </a>

        </div>
      </div>

      {/* Abajo */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div>
            © {new Date().getFullYear()} Impulso Deportivo y Social A.C.
            Todos los derechos reservados.
          </div>
          <div className="made-by">
            Sitio web desarrollado por ASTRODEV y BLAZE
          </div>
        </div>
      </div>
    </footer>
  );
}
