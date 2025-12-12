import React from "react";

export default function Donation(){
  return (
    <div className="donate">
      <div className="left">
        <h3>Apoya nuestra causa</h3>
        <p style={{maxWidth:520, color:"var(--muted)"}}>
          Con tu donación apoyamos becas, campañas 'Cobijando Corazones', rehabilitación y eventos con causa. Puedes donar en efectivo, en especie (cobijas, tapitas) o apoyando como voluntario.
        </p>
      </div>

      <div style={{display:"flex", flexDirection:"column", gap:8, alignItems:"flex-end"}}>
        <a className="donate-btn" href="#contacto">Quiero ayudar</a>
        <small style={{color:"var(--muted)"}}>También aceptamos donativos en especie</small>
      </div>
    </div>
  );
}
