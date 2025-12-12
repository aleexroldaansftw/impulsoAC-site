import React from "react";

/*
 Props:
  - img: path relativo (ej. "/assets/pb1.jpg")
  - title: string
  - subtitle: string
  - description: string
*/
export default function ProgramCard({ img, title, subtitle, description }){
  return (
    <article className="card">
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <div style={{color:"var(--dark-gray)", fontWeight:600, marginBottom:8}}>{subtitle}</div>
        <p>{description}</p>
      </div>
    </article>
  );
}
