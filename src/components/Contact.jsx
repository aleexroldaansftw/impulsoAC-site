import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const email = "alan_valdespino@impulsodep.com";
  const phone = "+527712952216";
  const phoneDial = "+527712952216";
  const facebookUrl = "https://www.facebook.com/share/1Dy6SkUnbW/?mibextid=wwXIfr";
  const instagramUrl = "https://www.instagram.com/impulso_dep_ac?igsh=NDViNGc5eHR0Z2I3&utm_source=qr";

  const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <section id="contacto" className="container" style={{ marginTop: 40 }}>
      <h2 className="section-title" style={{ marginBottom: 8 }}>Contacto</h2>
      <p style={{ color: "var(--muted)", marginBottom: 28 }}>
       ¿Tienes preguntas o te gustaría apoyar a nuestra causa con una donación? Contáctanos a través de cualquiera de nuestros medios:
      </p>

      <div className="contact-cards improved">
        {/* Correo */}
        <article className="contact-card">
          <div className="contact-icon icon-mail" aria-hidden>
            <HiOutlineMail size={22} color="#ffffff" />
          </div>

          <h3>Correo electrónico</h3>
          <p className="contact-main contact-main--wrap">{email}</p>

          <div className="contact-actions">
            <a className="contact-btn" href={`mailto:${email}`}>Escribir correo</a>
          </div>
        </article>

        {/* WhatsApp */}
        <article className="contact-card">
          <div className="contact-icon icon-whatsapp" aria-hidden>
            <FaWhatsapp size={22} color="#ffffff" />
          </div>

          <h3>WhatsApp</h3>
          <p className="contact-main">{phone}</p>

          <div className="contact-actions">
            <a
              className="contact-btn"
              href={`https://wa.me/${phoneDial.replace(/\D/g,"")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir chat
            </a>
          </div>
        </article>

        {/* Facebook */}
        <article className="contact-card">
          <div className="contact-icon icon-facebook" aria-hidden>
            <FaFacebookF size={20} color="#ffffff" />
          </div>

          <h3>Facebook</h3>
          <p className="contact-main">Impulso Deportivo A.C.</p>

          <div className="contact-actions">
            <button className="contact-btn" onClick={() => open(facebookUrl)}>Abrir Facebook</button>
          </div>
        </article>

        {/* Instagram */}
        <article className="contact-card">
          <div className="contact-icon icon-insta" aria-hidden>
            <FaInstagram size={20} color="#ffffff" />
          </div>

          <h3>Instagram</h3>
          <p className="contact-main">@impulso_dep_ac</p>

          <div className="contact-actions">
            <button className="contact-btn" onClick={() => open(instagramUrl)}>Abrir Instagram</button>
          </div>
        </article>
      </div>
    </section>
  );
}
