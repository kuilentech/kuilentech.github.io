/* ============================================================
   KuilenTech — site logic
   - bilingual NL/EN via data-i18n keys
   - style direction A/B toggle
   - persistence in localStorage
   ============================================================ */

const I18N = {
  nl: {
    "nav.about": "Over mij",
    "nav.services": "Diensten",
    "nav.tech": "Tech-stack",
    "nav.exp": "Ervaring",
    "nav.contact": "Contact",
    "nav.cta": "Neem contact op",

    "hero.kicker": "Modern Workspace Engineer · 6+ jaar enterprise",
    "hero.title_a": "De moderne werkplek,",
    "hero.title_b": "tot in de puntjes.",
    "hero.sub": "KuilenTech is Brian van de Kuilen, Senior Modern Workspace Engineer met 6+ jaar enterprise-ervaring. Gespecialiseerd in Azure Virtual Desktop, Microsoft Intune en Entra ID. Inhuurbaar op project- of detacheringsbasis.",
    "hero.cta1": "Plan een kennismaking",
    "hero.cta2": "Bekijk LinkedIn",

    "status.label": "Status",
    "status.avail": "Beschikbaar vanaf sep. 2026",
    "status.role": "Rol",
    "status.role_v": "Senior Workspace Engineer",
    "status.exp": "Ervaring",
    "status.exp_v": "6+ jaar enterprise",
    "status.region": "Regio",
    "status.region_v": "Nederland",
    "status.rate": "Tarief",
    "status.rate_v": "Op aanvraag",

    "about.kicker": "Over mij",
    "about.title": "Complexe werkplekken, opgelost.",
    "about.body": "Ik los complexe werkplekvraagstukken op in grote organisaties, van 25.000+ werkplekken tot identity-architectuur. Als senior schakel ik snel, denk ik mee over de architectuur en lever ik werkende oplossingen op. De juiste tool voor het vraagstuk, niet andersom.",
    "about.s1l": "jaar enterprise-ervaring",
    "about.s2l": "werkplekken in beheer",
    "about.s3n": "3",
    "about.s3l": "kernspecialisaties: AVD, Intune, Entra ID",

    "svc.kicker": "Wat ik doe",
    "svc.title": "Diensten die je direct vooruit helpen.",
    "svc.intro": "Van strategisch advies tot hands-on bouwen. Als senior schakel ik snel en lever ik werkende oplossingen op.",
    "svc.1t": "Modern Workplace Engineering",
    "svc.1d": "Ontwerp en uitrol van Azure Virtual Desktop, Intune en Autopilot. Werkplekken die schalen tot in de tienduizenden.",
    "svc.2t": "Identity & Access",
    "svc.2d": "Veilige identity-architectuur met Entra ID, Conditional Access en MFA. Toegang die klopt, voor iedereen, overal.",
    "svc.3t": "Advies & consultancy",
    "svc.3d": "Architectuuradvies, migratiestrategie en technische reviews. Van vraagstuk naar een helder, werkbaar plan.",
    "svc.4t": "Inhuur & detachering",
    "svc.4d": "Tijdelijk een senior aan boord. Flexibel inzetbaar, snel ingewerkt en meteen van waarde.",

    "tech.kicker": "Tech-stack",
    "tech.title": "Gereedschap waarmee ik werk.",
    "tech.intro": "Een doorsnede van de technologieën die ik dagelijks inzet. De juiste tool voor het vraagstuk, niet andersom.",
    "tech.c1": "Modern Workplace & EUC",
    "tech.c2": "Identity & Access",
    "tech.c3": "Monitoring & Beheer",
    "tech.c4": "Cloud",

    "exp.kicker": "Werkervaring",
    "exp.title": "Waar ik aan heb gewerkt.",
    "exp.intro": "Een greep uit recente opdrachten bij toonaangevende Nederlandse organisaties.",
    "exp.now": "Huidig",
    "exp.role_senior": "Senior Modern Workspace Engineer",
    "exp.sogeti_note": "Onder andere de deployment van 25.000+ werkplekken voor grote enterprise klanten.",
    "exp.p_postnl": "Live zetten van een wereldwijd gebruikte, business-critical Kiosk-omgeving.",
    "exp.p_robeco": "MFA ingericht en Conditional Access-policies opgezet.",
    "exp.p_por": "iPhone MDM ingericht met Conditional Access.",
    "exp.sectors_org": "Diverse sectoren",
    "exp.sectors_lead": "Ervaring opgedaan in onder meer:",
    "exp.s1": "Semi-overheid",
    "exp.s2": "Nutsbedrijven",
    "exp.s3": "Overheid",
    "exp.s4": "Transport",
    "exp.s5": "Gemeente",
    "exp.s6": "Retail",
    "exp.s7": "Vastgoed",
    "exp.rec": "Aanbevelingen en de volledige tijdlijn vind je op mijn LinkedIn-profiel.",
    "exp.rec_cta": "Bekijk LinkedIn-profiel",

    "contact.kicker": "Contact",
    "contact.big": "Klaar om samen te bouwen?",
    "contact.cta1": "Stuur een bericht",
    "contact.cta2": "Connect op LinkedIn",
    "contact.m1t": "E-mail",
    "contact.m2t": "LinkedIn",
    "contact.m2v": "in/brianvdkuilen",
    "contact.m3t": "Regio",
    "contact.m3v": "Nederland",
    "contact.m4t": "Beschikbaar",
    "contact.m4v": "September 2026",

    "foot.tag": "Senior Modern Workspace Engineering",
    "foot.rights": "Alle rechten voorbehouden."
  },

  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.tech": "Tech stack",
    "nav.exp": "Experience",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    "hero.kicker": "Modern Workspace Engineer · 6+ yrs enterprise",
    "hero.title_a": "The modern workplace,",
    "hero.title_b": "down to the detail.",
    "hero.sub": "KuilenTech is Brian van de Kuilen, Senior Modern Workspace Engineer with 6+ years of enterprise experience. Specialised in Azure Virtual Desktop, Microsoft Intune and Entra ID. Available for projects or secondment.",
    "hero.cta1": "Book an intro call",
    "hero.cta2": "View LinkedIn",

    "status.label": "Status",
    "status.avail": "Available from Sep 2026",
    "status.role": "Role",
    "status.role_v": "Senior Workspace Engineer",
    "status.exp": "Experience",
    "status.exp_v": "6+ yrs enterprise",
    "status.region": "Region",
    "status.region_v": "Netherlands",
    "status.rate": "Rate",
    "status.rate_v": "On request",

    "about.kicker": "About",
    "about.title": "Complex workplaces, solved.",
    "about.body": "I solve complex workplace challenges in large organisations, from 25,000+ workplaces to identity architecture. As a senior I get up to speed fast, shape the architecture and deliver working solutions. The right tool for the problem, not the other way around.",
    "about.s1l": "years of enterprise experience",
    "about.s2l": "workplaces managed",
    "about.s3n": "3",
    "about.s3l": "core specialisations: AVD, Intune, Entra ID",

    "svc.kicker": "What I do",
    "svc.title": "Services that move you forward.",
    "svc.intro": "From strategic advice to hands-on building. As a senior I get up to speed fast and deliver working solutions.",
    "svc.1t": "Modern Workplace Engineering",
    "svc.1d": "Design and rollout of Azure Virtual Desktop, Intune and Autopilot. Workplaces that scale into the tens of thousands.",
    "svc.2t": "Identity & Access",
    "svc.2d": "Secure identity architecture with Entra ID, Conditional Access and MFA. Access that's right, for everyone, everywhere.",
    "svc.3t": "Advice & consultancy",
    "svc.3d": "Architecture advice, migration strategy and technical reviews. From question to a clear, workable plan.",
    "svc.4t": "Hire & secondment",
    "svc.4d": "A senior on board, temporarily. Flexible, quick to onboard and immediately valuable.",

    "tech.kicker": "Tech stack",
    "tech.title": "The tools I build with.",
    "tech.intro": "A cross-section of the technologies I use daily. The right tool for the problem, not the other way around.",
    "tech.c1": "Modern Workplace & EUC",
    "tech.c2": "Identity & Access",
    "tech.c3": "Monitoring & Management",
    "tech.c4": "Cloud",

    "exp.kicker": "Experience",
    "exp.title": "Where I've worked.",
    "exp.intro": "A selection of recent engagements at leading Dutch organisations.",
    "exp.now": "Current",
    "exp.role_senior": "Senior Modern Workspace Engineer",
    "exp.sogeti_note": "Including a 25,000+ workplace deployment for major enterprise clients.",
    "exp.p_postnl": "Launched a worldwide, business-critical kiosk environment.",
    "exp.p_robeco": "Implemented MFA and Conditional Access policies.",
    "exp.p_por": "Set up iPhone MDM with Conditional Access.",
    "exp.sectors_org": "Various sectors",
    "exp.sectors_lead": "Experience gained across:",
    "exp.s1": "Semi-government",
    "exp.s2": "Utilities",
    "exp.s3": "Government",
    "exp.s4": "Transport",
    "exp.s5": "Municipality",
    "exp.s6": "Retail",
    "exp.s7": "Real estate",
    "exp.rec": "You'll find recommendations and the full timeline on my LinkedIn profile.",
    "exp.rec_cta": "View LinkedIn profile",

    "contact.kicker": "Contact",
    "contact.big": "Ready to build together?",
    "contact.cta1": "Send a message",
    "contact.cta2": "Connect on LinkedIn",
    "contact.m1t": "Email",
    "contact.m2t": "LinkedIn",
    "contact.m2v": "in/brianvdkuilen",
    "contact.m3t": "Region",
    "contact.m3v": "Netherlands",
    "contact.m4t": "Available",
    "contact.m4v": "September 2026",

    "foot.tag": "Senior Modern Workspace Engineering",
    "foot.rights": "All rights reserved."
  }
};

const STORE = { lang: "kt-lang", dir: "kt-style" };

function applyLang(lang) {
  const dict = I18N[lang] || I18N.nl;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll(".js-lang").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
  );
  try { localStorage.setItem(STORE.lang, lang); } catch (e) {}
}

function applyDir(dir) {
  const root = document.documentElement;
  root.classList.add("kt-swapping");
  root.setAttribute("data-direction", dir);
  void root.offsetWidth; /* force reflow: commit new vars with no transition */
  requestAnimationFrame(() =>
    requestAnimationFrame(() => root.classList.remove("kt-swapping"))
  );
  document.querySelectorAll(".js-style").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.style === dir))
  );
  try { localStorage.setItem(STORE.dir, dir); } catch (e) {}
}

function boot() {
  let lang = "nl", dir = "a";
  try {
    lang = localStorage.getItem(STORE.lang) || lang;
    dir = localStorage.getItem(STORE.dir) || dir;
  } catch (e) {}

  applyLang(lang);
  applyDir(dir);

  document.querySelectorAll(".js-lang").forEach((b) =>
    b.addEventListener("click", () => applyLang(b.dataset.lang))
  );
  document.querySelectorAll(".js-style").forEach((b) =>
    b.addEventListener("click", () => applyDir(b.dataset.style))
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
