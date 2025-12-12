import React from "react";

/*
  Programs.jsx — versión corregida
  - Secciones con imágenes => ProgramSection (texto + galería)
  - Secciones sin imágenes => tarjetas lado a lado (.programs-text-blocks)
*/

function ProgramSection({ id, title, subtitle, content, images = [] }) {
  // Primer párrafo para placeholder (no debería mostrarse porque aquí hay imágenes)
  const firstParagraph = content.split("\n\n")[0] || "";

  return (
    <section id={id} className="program-section" aria-labelledby={id + "-title"}>
      <div className="left">
        <h3 id={id + "-title"}>{title}</h3>
        <h4>{subtitle}</h4>

        <div
  className="program-html"
  dangerouslySetInnerHTML={{ __html: content }}
></div>

      </div>

      <div className="gallery">
        {images && images.length > 0 ? (
          images.map((imgName, idx) => (
            <img
              key={idx}
              src={`/assets/${imgName}`}
              alt={`${title} ${idx + 1}`}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ))
        ) : (
          // Si por alguna razón llegara aquí sin imágenes, mostramos el primer párrafo como placeholder
          <div className="placeholder" aria-hidden="true" style={{ padding: 18 }}>
            <div>
              <strong style={{ display: "block", marginBottom: 8 }}>{subtitle}</strong>
              <div>{firstParagraph}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Programs({ type }) {
  // Textos
  const tdpText = `Impulso Deportivo y Social A.C. desarrolla y apoya proyectos deportivos orientados al alto rendimiento, ofreciendo a jóvenes futbolistas la oportunidad de competir en la Tercera División Profesional (TDP) de la Federación Mexicana de Fútbol. Desde hace dos años, la organización participa de manera continua en esta categoría, consolidando un proceso formativo sólido y profesional.

Durante este tiempo, el proyecto ha brindado apoyo a jugadores nacionales de diversos estados de la República, así como a futbolistas extranjeros que buscan una plataforma competitiva para su crecimiento. Como parte de su compromiso social y deportivo, la asociación otorga becas del 100% a talentos que demuestran capacidad, disciplina y proyección, asegurando que las oportunidades no dependan de la situación económica del atleta.

Con esta estructura, Impulso Deportivo y Social A.C. fortalece el desarrollo integral de sus jugadores, promoviendo valores como disciplina, trabajo en equipo y responsabilidad, mientras impulsa su avance hacia niveles superiores del fútbol mexicano.`;

const escuelasText = `
<p>Nuestras Escuelas de Formación Deportiva ofrecen un programa integral diseñado para desarrollar tanto las habilidades técnicas como el crecimiento personal de niñas, niños y jóvenes. A través de una metodología progresiva y adaptada por edades, combinamos entrenamiento específico de fútbol con trabajo físico, formación en valores y actividades educativas que fomentan la disciplina, el respeto y el trabajo en equipo.</p>

<h4>Qué trabajamos</h4>
<ul>
  <li><strong>Técnica individual:</strong> control, pase, regate, tiro y finalización.</li>
  <li><strong>Táctica colectiva:</strong> posicionamiento, transición defensa–ataque y juego en equipo.</li>
  <li><strong>Preparación física:</strong> fuerza básica, coordinación, propiocepción y prevención de lesiones.</li>
  <li><strong>Formación en valores:</strong> respeto, responsabilidad, compromiso y liderazgo.</li>
  <li><strong>Actividades complementarias:</strong> charlas nutricionales, talleres de convivencia y dinámicas para fortalecer la autoestima.</li>
</ul>

<h4>Beneficios del programa</h4>
<p>Participar en nuestras escuelas significa recibir formación estructurada en un entorno seguro y motivador. Los beneficios incluyen mejora del rendimiento físico, mayor comprensión táctica del juego, participación en torneos y eventos, además de acompañamiento para el desarrollo académico y personal de los participantes. Nuestro enfoque busca no solo formar deportistas, sino también ciudadanos responsables y con hábitos de vida saludable.</p>

<h4>Metodología y seguimiento</h4>
<p>Trabajamos con entrenadores capacitados y planes de sesión semanales ajustados al nivel y edad del grupo. Realizamos evaluaciones periódicas para medir el progreso técnico y físico, emitimos reportes para las familias y ofrecemos la posibilidad de becas según desempeño y situación socioeconómica.</p>
`;

  const becasText = `En Impulso Deportivo y Social A.C. trabajamos de manera directa en colonias, barrios y comunidades para identificar a jóvenes con habilidades futbolísticas excepcionales. Nuestro enfoque se centra en descubrir talento donde normalmente no existen las oportunidades, evaluando el desempeño, la disciplina y el potencial de cada aspirante.

A través de nuestro programa de becas completas, apoyamos a jugadores que destacan por su capacidad, pero que carecen de los recursos económicos para acceder a un proceso deportivo formal. Estas becas cubren su formación, acompañamiento técnico y la integración a un entorno estructurado que facilita su crecimiento dentro del alto rendimiento.

Nuestro objetivo es claro: convertir el talento en oportunidad real. Buscamos que cada joven becado tenga acceso a una plataforma que impulse su desarrollo deportivo y personal, generando un camino sólido para su futuro en el fútbol profesional.`;

  const activacionText = `Jornadas gratuitas de activación física, acondicionamiento básico y deporte recreativo para todas las edades en parques, escuelas y comunidades.`;

  const rehabText = `Apoyamos a jóvenes deportistas y personas de la comunidad con sesiones de rehabilitación para prevenir lesiones y mejorar su bienestar físico.`;

  const eventosText = `Nuestra asociación civil impulsa actividades deportivas como torneos, carreras y partidos amistosos con un propósito doble: promover estilos de vida saludables y generar un impacto social positivo dentro de la comunidad.

Cada evento que organizamos se convierte en una oportunidad para que participantes y espectadores contribuyan a causas significativas. A través de estas iniciativas recaudamos tapitas de plástico y donativos que destinamos al apoyo de tratamientos médicos y proyectos comunitarios. Además, en cada evento promovemos la participación de familias, escuelas y empresas para fortalecer el tejido social.`;

  const cobijaText = `Recaudamos fondos y cobijas nuevas para entregarlas a familias y personas en situación de vulnerabilidad durante la temporada invernal, con el objetivo de brindar apoyo ante las bajas temperaturas. Este esfuerzo permite ofrecer un alivio inmediato a quienes enfrentan condiciones difíciles, asegurando que cuenten con abrigo y un respaldo solidario en los momentos de mayor necesidad.

La campaña 'Cobijando Corazones' incluye jornadas de recolección en espacios públicos, alianzas con escuelas y empresas, y entregas directas en comunidades identificadas por su grado de vulnerabilidad.`;

  /* PROGRAMAS: usa los nombres de imagenes exactos en public/assets */
  const deportes = [
    {
      id: "tdp",
      title: "Tercera División Profesional (TDP)",
      subtitle: "Participación en TDP",
      content: tdpText,
      images: ["prog-dep1.jpg", "prog-dep2.jpg", "prog-dep3.jpg", "prog-dep4.jpg", "prog-dep5.jpg"]
    },
    {
      id: "escuelas",
      title: "Escuelas de Formación Deportiva",
      subtitle: "Entrenamiento integral",
      content: escuelasText,
      images: [
        "esc-form1.jpg",
        "esc-form2.jpg",
        "esc-form3.jpg",
        "esc-form4.jpg",
        "esc-form5.jpg",
        "esc-form6.jpg",
        "esc-form7.jpg",
        "esc-form8.jpg",
        "esc-form9.jpg",
        "esc-form10.jpg",
        "esc-form11.jpg",
        "esc-form12.jpg"
      ]
    },
    {
      id: "becas",
      title: "Becas para jóvenes",
      subtitle: "Detección y apoyo",
      content: becasText,
      images: ["becas1.jpg", "becas2.jpg"]
    },
    // activacion y rehab SIN imágenes
    {
      id: "activacion",
      title: "Activación Física Comunitaria",
      subtitle: "Sesiones gratuitas",
      content: activacionText,
      images: [] // sin imágenes
    },
    {
      id: "rehab",
      title: "Rehabilitación Física",
      subtitle: "Terapias y prevención",
      content: rehabText,
      images: [] // sin imágenes
    }
  ];

  const sociales = [
    {
      id: "eventos",
      title: "Partidos Benéficos",
      subtitle: "Partidos con causa",
      content: eventosText,
      images: ["beneficos1.jpg", "beneficos2.jpg", "beneficos3.jpg"]
    },
    {
      id: "cobijando",
      title: "Cobijando Corazones",
      subtitle: "Recolección de cobijas y apoyo invernal",
      content: cobijaText,
      images: [
        "cobijando1.jpg",
        "cobijando2.jpg",
        "cobijando3.jpg",
        "cobijando4.jpg",
        "cobijando5.jpg",
        "cobijando6.jpg"
      ]
    }
  ];

  const items = type === "deportivos" ? deportes : sociales;

  return (
    <>
      {/* Render programs that HAVE images first (normal layout) */}
      {items
        .filter(item => item.images && item.images.length > 0)
        .map(item => (
          <ProgramSection
            key={item.id}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            images={item.images}
          />
        ))}

      {/* Render programs WITHOUT images as side-by-side cards */}
      <div className="programs-text-blocks" style={{ marginTop: 20 }}>
        {items
          .filter(item => !item.images || item.images.length === 0)
          .map(item => (
            <div key={item.id} className="program-section no-images" aria-labelledby={item.id + "-title"}>
              <h3 id={item.id + "-title"}>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              {item.content.split("\n\n").map((p, i) => (
                <p key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>{p}</p>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
