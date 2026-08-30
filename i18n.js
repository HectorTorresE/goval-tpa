const SITE = "https://hectortorrese.github.io/goval-tpa/";

const meta = {
  es: {
    title: "Goval TPA | TPA asistencia médica y al viajero en República Dominicana",
    description:
      "Goval TPA es un Third Party Administrator en República Dominicana: asistencia médica, emergencias, siniestros y asistencia al viajero 24/7 para aseguradoras y asegurados.",
    ogTitle: "Goval TPA | TPA asistencia médica y al viajero",
    ogDescription:
      "Third Party Administrator en RD: asistencia médica, emergencias, siniestros y viajero 24/7.",
  },
  en: {
    title: "Goval TPA | Medical & travel assistance TPA in the Dominican Republic",
    description:
      "Goval TPA is a Third Party Administrator in the Dominican Republic: medical assistance, emergencies, claims, and 24/7 traveler assistance for insurers and members.",
    ogTitle: "Goval TPA | Medical & travel assistance TPA",
    ogDescription:
      "Dominican Republic TPA: medical assistance, emergencies, claims, and traveler support 24/7.",
  },
};

const dict = {
  es: {
    "nav.services": "Servicios",
    "nav.network": "Red",
    "nav.travel": "Viajero",
    "nav.contact": "Contacto",
    "nav.cta": "Solicitar asistencia",
    "nav.ctaShort": "Contacto",
    "hero.eyebrow": "Third Party Administrator · República Dominicana",
    "hero.title": "Asistencia médica y de viaje, coordinada cuando más importa",
    "hero.lede":
      "Goval TPA gestiona y coordina servicios de asistencia médica, emergencias y siniestros para aseguradoras y sus asegurados — en el país y en el extranjero, las 24 horas.",
    "hero.cta1": "Hablar con el equipo",
    "hero.cta2": "Ver servicios",
    "services.title": "Servicios de TPA: asistencia médica y siniestros",
    "services.lede":
      "Operamos como Third Party Administrator: el puente operativo entre aseguradoras, prestadores y personas que necesitan asistencia médica real.",
    "services.s1.t": "Asistencia médica",
    "services.s1.p":
      "Coordinación de atención, autorización y seguimiento con la red de prestadores médicos.",
    "services.s2.t": "Emergencias y siniestros",
    "services.s2.p": "Gestión ágil de emergencias médicas y reclamos para aseguradoras y asegurados.",
    "services.s3.t": "Cobertura nacional e internacional",
    "services.s3.p": "Operación en República Dominicana y apoyo en el exterior con red aliada.",
    "network.title": "Red de prestadores médicos y no médicos",
    "network.p":
      "Trabajamos con una red de prestadores médicos y no médicos para entregar asistencia completa — clínica, logística y acompañamiento.",
    "network.l1": "Prestadores médicos",
    "network.l2": "Servicios no médicos de apoyo",
    "network.l3": "Aliados para aseguradoras (p. ej. Humano Seguros)",
    "travel.title": "Asistencia al viajero 24/7",
    "travel.lede":
      "Emergencias médicas, jurídicas y personales mientras viaja — con coordinación continua.",
    "travel.p1": "Médica",
    "travel.p2": "Jurídica",
    "travel.p3": "Personal",
    "contact.title": "Contacto TPA — República Dominicana",
    "contact.p": "¿Aseguradora, socio o viajero? Escríbanos y le respondemos a la brevedad.",
    "contact.emailLabel": "Correo",
    "contact.note": "Actualizaremos teléfono y dirección oficiales tras confirmación del cliente.",
    "footer": "© Goval TPA · República Dominicana",
  },
  en: {
    "nav.services": "Services",
    "nav.network": "Network",
    "nav.travel": "Travelers",
    "nav.contact": "Contact",
    "nav.cta": "Request assistance",
    "nav.ctaShort": "Contact",
    "hero.eyebrow": "Third Party Administrator · Dominican Republic",
    "hero.title": "Medical and travel assistance, coordinated when it matters most",
    "hero.lede":
      "Goval TPA manages and coordinates medical assistance, emergencies, and claims for insurers and their members — in-country and abroad, 24 hours a day.",
    "hero.cta1": "Talk to the team",
    "hero.cta2": "Explore services",
    "services.title": "TPA services: medical assistance and claims",
    "services.lede":
      "We operate as a Third Party Administrator: the operational bridge between insurers, providers, and people who need real medical assistance.",
    "services.s1.t": "Medical assistance",
    "services.s1.p":
      "Care coordination, authorization, and follow-up across our medical provider network.",
    "services.s2.t": "Emergencies and claims",
    "services.s2.p": "Fast handling of medical emergencies and claims for insurers and members.",
    "services.s3.t": "National and international coverage",
    "services.s3.p": "Operations in the Dominican Republic and support abroad through partner networks.",
    "network.title": "Medical and non-medical provider network",
    "network.p":
      "We work with medical and non-medical providers to deliver complete assistance — clinical, logistical, and personal support.",
    "network.l1": "Medical providers",
    "network.l2": "Non-medical support services",
    "network.l3": "Partners for insurers (e.g. Humano Seguros)",
    "travel.title": "Traveler assistance 24/7",
    "travel.lede":
      "Medical, legal, and personal emergencies while you travel — with continuous coordination.",
    "travel.p1": "Medical",
    "travel.p2": "Legal",
    "travel.p3": "Personal",
    "contact.title": "Contact TPA — Dominican Republic",
    "contact.p": "Insurer, partner, or traveler? Write to us and we’ll respond promptly.",
    "contact.emailLabel": "Email",
    "contact.note": "Official phone and address will be updated after client confirmation.",
    "footer": "© Goval TPA · Dominican Republic",
  },
};

function setMeta(name, content, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function applyLang(lang, pushUrl = true) {
  const pack = dict[lang] || dict.es;
  const m = meta[lang] || meta.es;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (pack[key]) el.textContent = pack[key];
  });
  document.title = m.title;
  setMeta("description", m.description);
  setMeta("og:title", m.ogTitle, "property");
  setMeta("og:description", m.ogDescription, "property");
  setMeta("og:locale", lang === "en" ? "en_US" : "es_DO", "property");
  setMeta("twitter:title", m.ogTitle);
  setMeta("twitter:description", m.ogDescription);
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("goval-lang", lang);
  } catch (_) {}
  if (pushUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  }
}

document.querySelectorAll(".lang button").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

const params = new URLSearchParams(window.location.search);
const fromQuery = params.get("lang");
const saved = (() => {
  try {
    return localStorage.getItem("goval-lang");
  } catch (_) {
    return null;
  }
})();
const initial =
  fromQuery === "en" || fromQuery === "es"
    ? fromQuery
    : saved === "en" || saved === "es"
      ? saved
      : "es";
applyLang(initial, Boolean(fromQuery) || true);
