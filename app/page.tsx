"use client";

/* eslint-disable @next/next/no-img-element */
import { FormEvent, useEffect, useState } from "react";

const strategicAspects = [
  "Cumplimiento de los niveles de servicio (SLA) y estándares operativos.",
  "Inocuidad alimentaria.",
  "Seguridad de las personas.",
  "Satisfacción de los usuarios.",
  "Continuidad operacional y gestión de contingencias.",
  "Seguridad de las instalaciones y del equipamiento.",
  "Sostenibilidad y cuidado del medio ambiente.",
  "Alineación con las políticas y el posicionamiento de la organización.",
];

const sectors = [
  "Salud",
  "Educación",
  "Industria",
  "Minería",
  "Oil & Gas",
  "Hospitalidad",
  "Campamentos remotos",
];

const lifecycle = [
  {
    title: "Diagnóstico",
    text: "Analizamos la situación actual, los objetivos de la organización y las oportunidades de mejora.",
  },
  {
    title: "Diseño del Servicio",
    text: "Definimos el modelo de servicio más adecuado según las necesidades de cada organización.",
  },
  {
    title: "Selección de Proveedores",
    text: "Diseñamos y acompañamos procesos de selección objetivos y transparentes.",
  },
  {
    title: "Implementación y Transición",
    text: "Coordinamos la puesta en marcha del servicio asegurando una transición ordenada.",
  },
  {
    title: "Gestión del Desempeño",
    text: "Medimos resultados mediante indicadores, promoviendo el cumplimiento del contrato y la mejora continua del servicio.",
  },
];

const experience = [
  {
    value: "+25 años",
    text: "Liderando empresas de servicios de alimentación y Facilities Management.",
  },
  {
    value: "Latinoamérica",
    text: "Experiencia regional en operaciones de alta complejidad.",
  },
  {
    value: "Visión integral",
    text: "Desde la estrategia hasta la gestión del desempeño.",
  },
  {
    value: "Metodología propia",
    text: "Gestión estratégica del ciclo de vida del servicio.",
  },
];

const LINKEDIN_URL_PLACEHOLDER = "#linkedin-pendiente";
const CONTACT_EMAIL_PLACEHOLDER = "correo pendiente";
const CONTACT_PHONE_PLACEHOLDER = "teléfono pendiente";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function TechnicalMark({ variant = "cycle" }: { variant?: "cycle" | "grid" }) {
  return (
    <div className={`technical-mark technical-mark--${variant}`} aria-hidden="true">
      <span className="technical-mark__orbit technical-mark__orbit--one" />
      <span className="technical-mark__orbit technical-mark__orbit--two" />
      <span className="technical-mark__axis technical-mark__axis--x" />
      <span className="technical-mark__axis technical-mark__axis--y" />
      <span className="technical-mark__node technical-mark__node--one" />
      <span className="technical-mark__node technical-mark__node--two" />
      <span className="technical-mark__node technical-mark__node--three" />
      <span className="technical-mark__core" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(
      "El formulario está listo. Falta definir la dirección de envío para activarlo.",
    );
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="STROMA, ir al inicio">
          <img src={`${BASE_PATH}/stroma-logo.png`} alt="STROMA" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Abrir navegación</span>
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#por-que-stroma" onClick={closeMenu}>Por qué STROMA</a>
          <a href="#como-trabajamos" onClick={closeMenu}>Cómo trabajamos</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        <a className="button button--header" href="#contacto">
          Solicitar una reunión
        </a>
      </header>

      <main>
        <section className="hero blueprint-section" id="inicio">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content reveal">
            <span className="eyebrow">Gestión estratégica · Ciclo de vida</span>
            <h1>Los servicios críticos requieren una gestión estratégica.</h1>
            <p>
              Gestionamos la contratación y el desempeño de servicios de
              alimentación y soluciones integrales para campamentos remotos.
            </p>
            <a className="button" href="#contacto">Solicitar una reunión</a>
          </div>
          <div className="hero__visual">
            <TechnicalMark />
            <span className="hero__annotation hero__annotation--one">operación</span>
            <span className="hero__annotation hero__annotation--two">continuidad</span>
            <span className="hero__annotation hero__annotation--three">desempeño</span>
          </div>
          <a className="scroll-cue" href="#por-que-stroma" aria-label="Continuar a Por qué STROMA">
            <span>Explorar</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="why section-shell blueprint-section" id="por-que-stroma">
          <div className="section-heading reveal">
            <span className="section-index">01 / Por qué STROMA</span>
            <h2>Servicios que sostienen la operación.</h2>
          </div>

          <div className="why__layout">
            <div className="why__copy reveal">
              <p className="lead">
                Ya sea en una institución de salud, una operación minera, una
                planta industrial, un establecimiento educativo, un hotel o un
                campamento remoto, los servicios de alimentación y soluciones
                integrales son un eslabón clave en la organización.
              </p>
              <p>
                Su desempeño impacta directamente en la continuidad operacional,
                la seguridad, la experiencia de las personas y los resultados del
                negocio.
              </p>
              <p>
                Gestionarlos estratégicamente permite reducir riesgos, optimizar
                recursos sin afectar la experiencia de los usuarios y contribuir
                al cumplimiento de los objetivos de la organización.
              </p>
            </div>

            <div className="impact-map reveal" aria-label="Impactos estratégicos">
              {[
                "Continuidad operacional",
                "Seguridad",
                "Experiencia de las personas",
                "Resultados del negocio",
                "Reducción de riesgos",
                "Optimización de recursos",
                "Cumplimiento de objetivos",
              ].map((item, index) => (
                <div className="impact-map__item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="why__closing reveal">
            <span className="annotation-dot" aria-hidden="true" />
            <p>
              STROMA gestiona estratégicamente la contratación y el desempeño de
              estos servicios durante todo su ciclo de vida, trabajando junto a
              cada organización.
            </p>
          </div>
        </section>

        <section className="critical section-shell blueprint-section" id="operacion-critica">
          <div className="critical__intro reveal">
            <span className="section-index">02 / Operación crítica</span>
            <h2>Más que un servicio, una operación crítica.</h2>
            <p>
              Una contratación efectiva comienza definiendo claramente los
              aspectos que impactan en las personas, la operación y los objetivos
              de la organización. Estos criterios deben incorporarse desde el
              diseño del servicio, reflejarse en el proceso de contratación y
              mantenerse durante toda la gestión.
            </p>
          </div>

          <div className="aspects">
            <div className="aspects__label">
              <span>Aspectos estratégicos del servicio</span>
              <i aria-hidden="true" />
            </div>
            <ol className="aspects__grid">
              {strategicAspects.map((item, index) => (
                <li className="aspect-card reveal" key={item}>
                  <span className="aspect-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`line-icon line-icon--${(index % 4) + 1}`} aria-hidden="true">
                    <i />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="sectors reveal">
            <div className="sectors__heading">
              <span className="section-index">Sectores</span>
              <h3>Un mismo desafío, diferentes sectores</h3>
            </div>
            <ul>
              {sectors.map((sector) => <li key={sector}>{sector}</li>)}
            </ul>
          </div>
        </section>

        <section className="process section-shell blueprint-section" id="como-trabajamos">
          <div className="process__heading reveal">
            <div>
              <span className="section-index">03 / Cómo trabajamos</span>
              <h2>Cómo trabajamos</h2>
            </div>
            <p>
              El valor de un servicio se construye a través de la gestión
              estratégica de cada etapa de su ciclo de vida.
            </p>
          </div>

          <div className="lifecycle" aria-label="Ciclo de vida del servicio">
            <div className="lifecycle__rail" aria-hidden="true" />
            {lifecycle.map((step, index) => (
              <article className="lifecycle-step reveal" key={step.title}>
                <div className="lifecycle-step__node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="lifecycle-step__content">
                  <span className="mono-label">Etapa {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-shell blueprint-section" id="experiencia">
          <div className="experience__story">
            <div className="experience__visual reveal">
              <TechnicalMark variant="grid" />
              <span className="experience__years">25+</span>
              <span className="mono-label">Años de experiencia</span>
            </div>

            <div className="experience__copy reveal">
              <span className="section-index">04 / Experiencia STROMA</span>
              <h2>Experiencia que se convierte en metodología.</h2>
              <p className="lead">
                STROMA fue fundada por Helvio Frieiro, ejecutivo con más de 25
                años de experiencia liderando empresas prestadoras de servicios
                de alimentación y Facilities Management en América Latina.
              </p>
              <p>
                Su trayectoria incluye la dirección de operaciones complejas,
                procesos de contratación, implementación y gestión de servicios
                para organizaciones de distintos sectores, aportando una visión
                integral del negocio y del funcionamiento de estos servicios.
              </p>
              <p>
                Hoy, esa experiencia se traduce en una metodología para gestionar
                estratégicamente los servicios que respaldan la operación de
                nuestros clientes.
              </p>
              {/* PLACEHOLDER: reemplazar por la URL real de LinkedIn. */}
              <a className="button button--muted" href={LINKEDIN_URL_PLACEHOLDER}>
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="experience__metrics">
            {experience.map((item, index) => (
              <article className="metric reveal" key={item.value}>
                <span className="metric__index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.value}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell blueprint-section" id="contacto">
          <div className="contact__intro reveal">
            <span className="section-index">05 / Contacto</span>
            <h2>Conversemos sobre los servicios que respaldan su operación.</h2>
            <p>
              Complete el formulario para solicitar una reunión con STROMA.
            </p>
            <div className="contact__pending">
              {/* PLACEHOLDERS: reemplazar cuando el cliente entregue los datos. */}
              <span>Email / {CONTACT_EMAIL_PLACEHOLDER}</span>
              <span>WhatsApp / {CONTACT_PHONE_PLACEHOLDER}</span>
            </div>
          </div>

          {/* PLACEHOLDER: conectar la acción real del formulario. */}
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <label>
              <span>Nombre</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Organización</span>
              <input name="organization" type="text" autoComplete="organization" />
            </label>
            <label>
              <span>Correo electrónico</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Teléfono</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="contact-form__message">
              <span>Mensaje</span>
              <textarea name="message" rows={4} required />
            </label>
            <button className="button" type="submit">Solicitar una reunión</button>
            <p className="form-status" role="status" aria-live="polite">
              {formMessage}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <img src={`${BASE_PATH}/stroma-logo.png`} alt="STROMA" />
          <span>Gestión estratégica de servicios críticos.</span>
        </div>
        <nav aria-label="Navegación de pie de página">
          <a href="#por-que-stroma">Por qué STROMA</a>
          <a href="#como-trabajamos">Cómo trabajamos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </nav>
        {/* PLACEHOLDER: reemplazar por la URL real de LinkedIn. */}
        <a href={LINKEDIN_URL_PLACEHOLDER}>LinkedIn</a>
        <span>© {new Date().getFullYear()} STROMA</span>
      </footer>
    </>
  );
}
