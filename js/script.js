/* =================
THEME TOGGLE
================= */

const themeToggle = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");

  if (theme === "light") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";
  }
});

/* =========================
LANGUAGE SYSTEM
========================= */

const translations = {
  pt: {
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_journey: "Jornada",
    nav_projects: "Projetos",
    nav_certifications: "Certificações",
    nav_contact: "Contato",

    hero_title: "Olá, eu sou Benjamin",
    hero_subtitle: "Front-End Developer in Training",
    hero_text:
      "Estudante de Análise e Desenvolvimento de Sistemas focado em desenvolvimento web, construção de interfaces e criação de projetos práticos.",
    hero_btn_projects: "Ver Projetos",
    hero_btn_github: "GitHub",

    about_title: "Sobre Mim",
    about_text: "Um pouco sobre minha jornada e objetivos.",

    skills_title: "Habilidades",
    skills_text: "Tecnologias e ferramentas que fazem parte da minha jornada.",

    journey_title: "Minha Jornada",
    journey_text: "Evolução na programação.",

    projects_title: "Projetos",
    projects_text: "Projetos que mostram minha evolução prática.",

    certifications_title: "Certificações",
    certifications_text: "Cursos e estudos complementares.",

    contact_title: "Contato",
    contact_text: "Vamos conversar sobre projetos e oportunidades.",
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_journey: "Journey",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    hero_title: "Hello, I'm Benjamin",
    hero_subtitle: "Front-End Developer in Training",
    hero_text:
      "Systems Analysis and Development student focused on web development, interface building, and practical projects.",
    hero_btn_projects: "View Projects",
    hero_btn_github: "GitHub",

    about_title: "About Me",
    about_text: "A little about my journey and goals.",

    skills_title: "Skills",
    skills_text: "Technologies and tools that are part of my journey.",

    journey_title: "My Journey",
    journey_text: "My progress in programming.",

    projects_title: "Projects",
    projects_text: "Projects that show my practical evolution.",

    certifications_title: "Certifications",
    certifications_text: "Courses and complementary studies.",

    contact_title: "Contact",
    contact_text: "Let's talk about projects and opportunities.",
  },
};

const langToggle = document.getElementById("lang-toggle");
const savedLanguage = localStorage.getItem("language") || "pt";

function applyLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  localStorage.setItem("language", language);

  langToggle.textContent = language === "pt" ? "PT / EN" : "EN / PT";
}

applyLanguage(savedLanguage);

langToggle.addEventListener("click", () => {
  const currentLanguage = localStorage.getItem("language") || "pt";
  const newLanguage = currentLanguage === "pt" ? "en" : "pt";

  applyLanguage(newLanguage);
});
