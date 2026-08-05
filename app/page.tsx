"use client";

/* eslint-disable @next/next/no-img-element */
import { FormEvent, useEffect, useState } from "react";

type IconKind =
  | "orbit"
  | "grid"
  | "layers"
  | "axis"
  | "diamond"
  | "pulse"
  | "shield"
  | "balance";

const valueAreas: Array<{ title: string; icon: IconKind }> = [
  { title: "Salud", icon: "orbit" },
  { title: "Educación", icon: "grid" },
  { title: "Industria", icon: "layers" },
  { title: "Servicios", icon: "axis" },
  { title: "Minería", icon: "diamond" },
  { title: "Energía", icon: "pulse" },
];

const servicePriorities: Array<{ title: string; icon: IconKind }> = [
  { title: "Inocuidad alimentaria", icon: "orbit" },
  { title: "Seguridad de las personas", icon: "shield" },
  { title: "Satisfacción de los usuarios", icon: "pulse" },
  { title: "Eficiencia y sostenibilidad económica", icon: "balance" },
  { title: "Continuidad operacional", icon: "axis" },
  { title: "Seguridad de instalaciones y equipamiento", icon: "grid" },
  { title: "Sostenibilidad ambiental", icon: "diamond" },
  { title: "Alineación con los objetivos del negocio", icon: "layers" },
];

const lifecycle = [
  {
    title: "Diagnóstico",
    text: "Comprendemos el contexto, identificamos oportunidades de mejora y accionamos sobre riesgos y aspectos críticos que requieren atención inmediata.",
  },
  {
    title: "Diseño del Servicio",
    text: "Diseñamos un modelo de servicio alineado con los objetivos del negocio, incorporando las prioridades que definirán su desempeño.",
  },
  {
    title: "Selección de Proveedores",
    text: "Implementamos procesos de selección objetivos y transparentes para identificar al proveedor más adecuado para cada organización.",
  },
  {
    title: "Implementación y Transición",
    text: "Coordinamos la puesta en marcha del servicio para asegurar una transición ordenada y minimizar riesgos operacionales.",
  },
  {
    title: "Gestión del Desempeño",
    text: "Monitoreamos el desempeño acordado mediante indicadores, impulsando la mejora continua y manteniendo el servicio alineado con los objetivos del negocio.",
  },
];

const experienceCards: Array<{ title: string; text: string; icon: IconKind }> = [
  {
    title: "Conocimiento del servicio",
    text: "Más de 25 años liderando empresas prestadoras de servicios de alimentación y facility management.",
    icon: "orbit",
  },
  {
    title: "Latinoamérica",
    text: "Experiencia ejecutiva en operaciones de alta complejidad en América Latina.",
    icon: "grid",
  },
  {
    title: "Visión integral del negocio",
    text: "Desde la estrategia y la contratación hasta la gestión del desempeño.",
    icon: "axis",
  },
  {
    title: "Metodología propia",
    text: "Gestión estratégica del ciclo de vida del servicio.",
    icon: "layers",
  },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/helviofrieiro";
const CONTACT_EMAIL = "info@stromaservices.com";
const CONTACT_PHONE = "+54 9 11 3011-6835";
const CONTACT_ADDRESS = "Guayrá 2249 · Ciudad Autónoma de Buenos Aires";
const WHATSAPP_URL =
  "https://wa.me/5491130116835?text=Hola%2C%20quisiera%20solicitar%20una%20reuni%C3%B3n%20con%20STROMA.";
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

function GeometricIcon({
  kind,
  compact = false,
}: {
  kind: IconKind;
  compact?: boolean;
}) {
  return (
    <span
      className={`geo-icon geo-icon--${kind}${compact ? " geo-icon--compact" : ""}`}
      aria-hidden="true"
    >
      <i />
      <b />
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.5Z" />
      <path d="M8.4 7.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.2.5.3.5.5 0 .3-.1 1.5-.8 2.1-.6.6-1.4.9-2.3.7-1.1-.2-2.6-.8-4.4-2.4-2-1.8-3.1-4.1-3.2-5.3-.1-.8.2-1.4.5-1.9Z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [contactRegionVisible, setContactRegionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const regions = [
      document.querySelector("#contacto"),
      document.querySelector(".site-footer"),
    ].filter((region): region is Element => region !== null);
    const visibleRegions = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleRegions.add(entry.target);
        else visibleRegions.delete(entry.target);
      });
      setContactRegionVisible(visibleRegions.size > 0);
    });

    regions.forEach((region) => observer.observe(region));
    return () => observer.disconnect();
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
          <img src={`${BASE_PATH}/stroma-logo-full-white.png`} alt="STROMA Service Management" />
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
          <a className="main-nav__cta" href="#contacto" onClick={closeMenu}>
            Solicitar una reunión
          </a>
        </nav>

        <a className="button button--header" href="#contacto">
          Solicitar una reunión
        </a>
      </header>

      <main>
        <section className="hero blueprint-section" id="inicio">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content reveal">
            <span className="eyebrow">Metodología propia · Decisiones de alto impacto</span>
            <h1>Los servicios críticos requieren una gestión estratégica.</h1>
            <p>
              Gestionamos estratégicamente la contratación y el desempeño de
              los servicios de alimentación y facility management.
            </p>
            <a className="button" href="#contacto">Solicitar una reunión</a>
          </div>
          <div className="hero__visual">
            <TechnicalMark />
          </div>
          <a
            className="scroll-cue"
            href="#por-que-stroma"
            aria-label="Conocer STROMA"
          >
            <span>Conocer STROMA</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="why section-shell blueprint-section" id="por-que-stroma">
          <div className="section-heading reveal">
            <span className="section-index">Por qué STROMA</span>
            <h2>
              El desempeño del servicio depende tanto del proveedor como de quien
              lo contrata.
            </h2>
          </div>

          <div className="why__layout">
            <div className="why__copy reveal">
              <p>
                En sectores donde los servicios de alimentación y facility
                management son críticos para la operación, las decisiones sobre
                su contratación y gestión impactan directamente en la continuidad
                operacional, la seguridad, la experiencia de las personas y los
                resultados del negocio.
              </p>
              <p>
                Por eso, el desempeño del servicio no depende únicamente del
                proveedor, sino también de las decisiones que se toman durante
                todo su ciclo de vida.
              </p>
              <p className="why__value">
                Ahí es donde STROMA genera valor: diseñando, contratando y
                gestionando estratégicamente los servicios de alimentación y
                facility management, alineados con los objetivos del negocio.
              </p>
            </div>

            <div className="value-areas reveal">
              <h3>Dónde generamos valor.</h3>
              <div className="value-areas__grid">
                {valueAreas.map((item) => (
                  <article className="value-card" key={item.title}>
                    <GeometricIcon kind={item.icon} compact />
                    <h4>{item.title}</h4>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="priorities">
            <p className="priorities__intro reveal">
              Un servicio crítico no se mide por un único indicador. Su
              desempeño depende de factores como:
            </p>
            <div className="priorities__grid">
              {servicePriorities.map((item) => (
                <article className="priority-card reveal" key={item.title}>
                  <GeometricIcon kind={item.icon} />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-shell blueprint-section" id="como-trabajamos">
          <div className="process__heading reveal">
            <div>
              <span className="section-index">Cómo trabajamos</span>
              <h2>
                Gestionamos estratégicamente cada etapa del ciclo de vida del
                servicio. Transformamos decisiones en resultados.
              </h2>
            </div>
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
              <span className="section-index">Experiencia STROMA</span>
              <h2>Experiencia que se convierte en metodología.</h2>
              <p className="experience__intro">
                STROMA fue fundada por Helvio Frieiro, ejecutivo con más de 25
                años de experiencia liderando empresas de servicios de
                alimentación y facility management en América Latina.
              </p>
              <p>
                Su trayectoria en operaciones complejas, procesos de contratación
                y gestión estratégica de servicios permitió desarrollar una
                visión integral del ciclo de vida del servicio.
              </p>
              <p>
                Hoy, esa experiencia se transforma en una metodología propia que
                ayuda a las organizaciones a tomar mejores decisiones y maximizar
                el valor de los servicios que respaldan la operación.
              </p>
              <a
                className="button button--muted"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                Ver perfil en LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="experience__metrics">
            {experienceCards.map((item) => (
              <article className="metric reveal" key={item.title}>
                <GeometricIcon kind={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell blueprint-section" id="contacto">
          <div className="contact__intro reveal">
            <span className="section-index">Contacto</span>
            <h2>Conversemos sobre los servicios que respaldan su operación.</h2>
            <p>Complete el formulario para solicitar una reunión con STROMA.</p>
            <div className="contact__details">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <span>Email</span>
                <strong>{CONTACT_EMAIL}</strong>
              </a>
              <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}>
                <span>Teléfono</span>
                <strong>{CONTACT_PHONE}</strong>
              </a>
              <div>
                <span>Dirección</span>
                <strong>{CONTACT_ADDRESS}</strong>
              </div>
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
          <img
            className="site-footer__logo"
            src={`${BASE_PATH}/stroma-logo-full-white.png`}
            alt="STROMA Service Management"
          />
          <span>Gestión estratégica de servicios críticos.</span>
        </div>
        <nav aria-label="Navegación de pie de página">
          <a href="#por-que-stroma">Por qué STROMA</a>
          <a href="#como-trabajamos">Cómo trabajamos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="site-footer__legal">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>© {new Date().getFullYear()} STROMA</span>
          <a
            className="site-footer__credit"
            href="https://www.ideamos.com.ar"
            target="_blank"
            rel="noreferrer"
          >
            Un desarrollo de Estudio Ideamos
          </a>
        </div>
      </footer>

      <a
        className={`whatsapp-float${
          contactRegionVisible ? " whatsapp-float--clear" : ""
        }`}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Solicitar una reunión con STROMA por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
