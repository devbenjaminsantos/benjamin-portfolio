/* =================
THEME TOGGLE
================= */

const themeToggle = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

if (currentTheme === "light") {
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
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
    // Navbar
    nav_about: "Sobre",
    nav_skills: "Habilidades",
    nav_experience: "Experiência",
    nav_freelance: "Freelancer",
    nav_projects: "Projetos",
    nav_certifications: "Certificações",
    nav_contact: "Contato",

    // Hero
    hero_title: "Benjamin Montenegro",
    hero_subtitle:
      "Desenvolvedor Full Stack Jr. com foco em interfaces, APIs e sistemas em nuvem",
    hero_description:
      "1 ano de experiência profissional • 5˚ período em ADS • Inglês C1. Desenvolvendo interfaces responsivas, APIs e soluções em nuvem que conectam produto, negócio e usabilidade.",
    hero_btn_projects: "Ver Projetos",

    // Sobre
    about_title: "Sobre Mim",
    about_subtitle:
      "Curiosidade técnica, produto e evolução Full Stack.",
    about_p1:
      "Sempre fui fascinado por tecnologia, não só em usá-la, mas em entender como ela funciona. Comecei pelo Front-End, unindo clean code, SEO, UI e UX para criar interfaces atrativas, responsivas e úteis para quem usa.",
    about_p2:
      "Com o tempo, aprofundei o que acontece por trás das interfaces e me tornei Full Stack. Na Doss Imobiliária, contribuí para dobrar o volume de leads segmentados e também entreguei soluções freelance para a Rego Barros e a Ki-Dilicia. Hoje desenvolvo o Finova, uma aplicação financeira pessoal com autenticação, dados e infraestrutura em nuvem.",

    // Habilidades
    skills_title: "Habilidades",
    skills_subtitle:
      "Tecnologias e ferramentas que fazem parte do meu repertório.",
    skills_frontend: "Front-End",
    skills_backend: "Back-End",
    skills_database: "Banco de Dados",
    skills_cloud: "Cloud / DevOps",
    skills_tests: "Testes",
    skills_tools: "Ferramentas",

    // Experiência
    experience_title: "Experiência",
    experience_subtitle: "Minhas experiências profissionais.",
    experience_badge_job: "Experiência Profissional",
    experience_doss_title: "Doss Imobiliária",
    experience_doss_point_1:
      "Desenvolvimento completo da plataforma imobiliária, da concepção da interface ao sistema em produção.",
    experience_doss_point_2:
      "Criação de interfaces com foco em UX, UI e SEO, incluindo formulários segmentados por perfil, tipo de imóvel e preferências.",
    experience_doss_point_3:
      "Implementação de autenticação, segurança de dados, favoritos, preferências e painel administrativo com CRUD de imóveis, leads, FAQ e notícias.",
    experience_doss_point_4:
      "Integração com Google OAuth via Google Cloud e contribuição para dobrar os leads semanais, alcançando 20% de conversão em vendas mensais.",

    // Projetos
    freelance_title: "Freelancer",
    freelance_subtitle:
      "Projetos entregues para clientes reais, com foco em resultado, presença digital e entrega em produção.",
    projects_title: "Projetos",
    projects_subtitle:
      "Projetos que acompanham minha jornada no mundo do desenvolvimento de software.",
    project_cover_product: "Interface Web",
    project_cover_admin_text: "dashboard • filtros • gestão visual",
    project_cover_finance_text: "financas • autenticacao • visao consolidada",
    project_freelance_title: "Rego Barros Consultoria",
    project_freelance_point_1:
      "Site institucional para consultoria de cidadania europeia e serviços internacionais.",
    project_freelance_point_2:
      "Criação da identidade visual e design das páginas do zero.",
    project_freelance_point_3:
      "Tradução do conteúdo do cliente em uma arquitetura de informação clara, organizando serviços e jornada do usuário para reduzir fricção e facilitar a conversão.",
    project_freelance_point_4:
      "Desenvolvimento completo com decisões de UX alinhadas à regra de negócio, SEO, responsividade e performance.",
    project_freelance_api_tag: "APIs Públicas",
    project_freelance_meta:
      "Site institucional para consultoria de cidadania europeia, com foco em clareza, conversão, SEO e performance.",
    project_freelance_2_title: "Ki-Dilicia Gourmet",
    project_freelance_2_point_1:
      "Cardápio digital em desenvolvimento para pedidos online, com navegação simples e objetiva.",
    project_freelance_2_point_2:
      "Jornada guiada para escolha de produtos, adicionais e preferências antes da finalização.",
    project_freelance_2_point_3:
      "Integração com WhatsApp para envio do pedido com todas as escolhas organizadas.",
    project_freelance_2_point_4:
      "Interface construída com foco em conversão, praticidade no atendimento e experiência mobile-first.",
    project_freelance_2_meta:
      "Cardápio digital em desenvolvimento, focado em conversão, praticidade no pedido e finalização guiada pelo WhatsApp.",
    project_admin_title: "Painel Administrativo",
    project_admin_description:
      "Interface administrativa responsiva desenvolvida com foco em organização de dados e experiência do usuário. Permite gerenciamento eficiente de informações e visualização clara de status e filtros aplicados.",
    project_finance_title: "Finova",
    project_finance_point_1:
      "Aplicação de gestão financeira pessoal com arquitetura SaaS-like, dashboard personalizável e onboarding para novos usuários.",
    project_finance_point_2:
      "Autenticação com JWT, timeout de sessão, rigidez de senha, redefinição por email e audit logs completos.",
    project_finance_point_3:
      "Metas financeiras, insights automáticos, importação CSV/OFX, resumo mensal por email e compartilhamento em modo leitura.",
    project_finance_point_4:
      "Stack com React, TypeScript, ASP.NET Core, SQL Server, Azure, Docker e testes com Playwright, xUnit e Vitest.",

    // Certificações
    certifications_title: "Certificações",
    certifications_subtitle: "Cursos e estudos complementares.",
    certifications_badge_course: "Formação Complementar",
    certifications_item_1_title: "Curso Básico Frontend",
    certifications_item_1_stack: "HTML • CSS • JavaScript • Bootstrap",
    certifications_item_2_title: "Curso Backend",
    certifications_item_2_stack: "API • C# • Microsserviços • REST",
    certifications_item_3_title: "Desenvolvimento Web com Python e Django",
    certifications_item_3_stack: "Python • Django • Desenvolvimento Web",
    certifications_item_4_title: "Curso Banco de Dados",
    certifications_item_4_stack: "SQL Server",

    // Contato
    contact_title: "Contato",
    contact_subtitle:
      "Se houver um projeto, oportunidade ou parceria, minha caixa de entrada está aberta.",
    contact_name_label: "Nome",
    contact_name_placeholder: "Seu nome",
    contact_email_label: "Email",
    contact_email_placeholder: "voce@email.com",
    contact_message_label: "Mensagem",
    contact_message_placeholder: "Me conte sobre seu projeto, vaga ou ideia.",
    contact_submit: "Enviar mensagem",
    contact_status_sending: "Enviando mensagem...",
    contact_status_success: "Mensagem enviada com sucesso.",
    contact_status_error:
      "Nao foi possivel enviar agora. Tente novamente em instantes.",
    contact_status_missing_key:
      "Falta configurar a chave do Web3Forms no formulario.",
  },

  en: {
    // Navbar
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_freelance: "Freelance",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    // Hero
    hero_title: "Benjamin Montenegro",
    hero_subtitle:
      "Junior Full Stack Developer focused on interfaces, APIs and cloud systems",
    hero_description:
      "1 year of professional experience • 5th semester in Systems Analysis and Development • English C1. Building responsive interfaces, APIs and cloud solutions that connect product, business and usability.",
    hero_btn_projects: "View Projects",

    // About
    about_title: "About Me",
    about_subtitle:
      "Technical curiosity, product thinking and Full Stack growth.",
    about_p1:
      "I have always been fascinated by technology, not only using it, but understanding how it works. I started with Front-End development, combining clean code, SEO, UI and UX to create attractive, responsive and useful interfaces.",
    about_p2:
      "Over time, I went deeper into what happens behind the interface and became a Full Stack developer. At Doss Imobiliária, I helped double the volume of qualified leads and also delivered freelance solutions for Rego Barros and Ki-Dilicia. Today, I am building Finova, a personal finance app with authentication, data flows and cloud infrastructure.",

    // Skills
    skills_title: "Skills",
    skills_subtitle: "Technologies and tools that are part of my repertoire.",
    skills_frontend: "Front-End",
    skills_backend: "Back-End",
    skills_database: "Database",
    skills_cloud: "Cloud / DevOps",
    skills_tests: "Testing",
    skills_tools: "Tools",

    // Experience
    experience_title: "Experience",
    experience_subtitle: "My professional experiences.",
    experience_badge_job: "Professional Experience",
    experience_doss_title: "Doss Imobiliária",
    experience_doss_point_1:
      "Full development of the real estate platform, from interface concept to production system.",
    experience_doss_point_2:
      "Designed interfaces focused on UX, UI and SEO, including segmented forms by client profile, property type and preferences.",
    experience_doss_point_3:
      "Implemented authentication, data security, favorites, preferences and an admin panel with CRUD for properties, leads, FAQ and news.",
    experience_doss_point_4:
      "Integrated Google OAuth through Google Cloud and helped double weekly leads, reaching a 20% conversion rate in monthly sales.",

    // Projects
    freelance_title: "Freelance",
    freelance_subtitle:
      "Projects delivered for real clients, focused on results, digital presence and production-ready delivery.",
    projects_title: "Projects",
    projects_subtitle:
      "Projects that follow my journey in the world of software development.",
    project_cover_product: "Web Interface",
    project_cover_admin_text: "dashboard • filters • visual management",
    project_cover_finance_text: "finance • authentication • consolidated view",
    project_freelance_title: "Rego Barros Consultoria",
    project_freelance_point_1:
      "Institutional website for European citizenship consulting and international services.",
    project_freelance_point_2:
      "Created the visual identity and page design from scratch.",
    project_freelance_point_3:
      "Translated the client's content into a clear information architecture, organizing services and the user journey to reduce friction and improve conversion.",
    project_freelance_point_4:
      "Delivered the full build with UX decisions aligned to the client's business rules, SEO, responsiveness and performance.",
    project_freelance_api_tag: "Public APIs",
    project_freelance_meta:
      "Institutional website for European citizenship consulting, focused on clarity, conversion, SEO and performance.",
    project_freelance_2_title: "Ki-Dilicia Gourmet",
    project_freelance_2_point_1:
      "Digital menu in development for online ordering, with simple and straightforward navigation.",
    project_freelance_2_point_2:
      "Guided journey for choosing products, add-ons and preferences before checkout.",
    project_freelance_2_point_3:
      "WhatsApp integration to send the order with all selected options organized.",
    project_freelance_2_point_4:
      "Interface built with a focus on conversion, practical service flow and a mobile-first experience.",
    project_freelance_2_meta:
      "Digital menu in development, focused on conversion, ordering practicality and guided WhatsApp checkout.",
    project_admin_title: "Admin Panel",
    project_admin_description:
      "Responsive administrative interface developed with a focus on data organization and user experience. Enables efficient information management and clear visualization of applied status and filters.",
    project_finance_title: "Finova",
    project_finance_point_1:
      "Personal finance management app with a SaaS-like architecture, customizable dashboard and onboarding for new users.",
    project_finance_point_2:
      "JWT authentication, session timeout, password policy, email password reset and complete audit logs.",
    project_finance_point_3:
      "Financial goals, automatic spending insights, CSV/OFX import, monthly email summary and read-only dashboard sharing.",
    project_finance_point_4:
      "Built with React, TypeScript, ASP.NET Core, SQL Server, Azure, Docker and tests with Playwright, xUnit and Vitest.",

    // Certifications
    certifications_title: "Certifications",
    certifications_subtitle: "Courses and complementary studies.",
    certifications_badge_course: "Complementary Training",
    certifications_item_1_title: "Basic Frontend Course",
    certifications_item_1_stack: "HTML • CSS • JavaScript • Bootstrap",
    certifications_item_2_title: "Backend Course",
    certifications_item_2_stack: "API • C# • Microservices • REST",
    certifications_item_3_title: "Web Development with Python and Django",
    certifications_item_3_stack: "Python • Django • Web Development",
    certifications_item_4_title: "Database Course",
    certifications_item_4_stack: "SQL Server",

    // Contact
    contact_title: "Contact",
    contact_subtitle:
      "If there is a project, opportunity or partnership in mind, my inbox is open.",
    contact_name_label: "Name",
    contact_name_placeholder: "Your name",
    contact_email_label: "Email",
    contact_email_placeholder: "you@email.com",
    contact_message_label: "Message",
    contact_message_placeholder:
      "Tell me about your project, role or idea.",
    contact_submit: "Send message",
    contact_status_sending: "Sending message...",
    contact_status_success: "Message sent successfully.",
    contact_status_error:
      "Unable to send right now. Please try again in a moment.",
    contact_status_missing_key:
      "The Web3Forms access key still needs to be configured.",
  },
};

const langToggle = document.getElementById("lang-toggle");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

function toggleMobileMenu(forceState) {
  if (!navToggle || !navMenu) {
    return;
  }

  const shouldOpen =
    typeof forceState === "boolean"
      ? forceState
      : !navMenu.classList.contains("is-open");

  navMenu.classList.toggle("is-open", shouldOpen);
  navToggle.classList.toggle("is-active", shouldOpen);
  navToggle.setAttribute("aria-expanded", String(shouldOpen));
}

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[lang] && translations[lang][key]) {
      element.setAttribute("placeholder", translations[lang][key]);
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  localStorage.setItem("language", lang);

  if (lang === "en") {
    langToggle.classList.add("is-en");
  } else {
    langToggle.classList.remove("is-en");
  }
}

const savedLanguage = localStorage.getItem("language") || "pt";
applyLanguage(savedLanguage);

langToggle.addEventListener("click", () => {
  const currentLanguage = localStorage.getItem("language") || "pt";
  const newLanguage = currentLanguage === "pt" ? "en" : "pt";

  applyLanguage(newLanguage);
});

langToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    const currentLanguage = localStorage.getItem("language") || "pt";
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";

    applyLanguage(newLanguage);
  }
});

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    toggleMobileMenu();
  });

  navToggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMobileMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggleMobileMenu(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      toggleMobileMenu(false);
    }
  });
}

/* ========================
ACTIVE NAV LINK
========================== */
const sections = document.querySelectorAll("main section[id]");

function setActiveLink() {
  toggleMobileMenu(false);

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

/* ========================
SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =====================
IMAGE MODAL
===================== */
const profileImage = document.getElementById("profile-image");
const imageModal = document.getElementById("image-modal");
const imageModalClose = document.getElementById("image-modal-close");
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const contactSubmit = document.getElementById("contact-submit");
const web3FormsAccessKey = document.getElementById("web3forms-access-key");

if (profileImage && imageModal && imageModalClose) {
  profileImage.addEventListener("click", () => {
    imageModal.classList.add("show");
  });

  imageModalClose.addEventListener("click", () => {
    imageModal.classList.remove("show");
  });

  imageModal.addEventListener("click", (event) => {
    if (event.target === imageModal) {
      imageModal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      imageModal.classList.remove("show");
    }
  });
}

if (contactForm && contactStatus && contactSubmit && web3FormsAccessKey) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const currentLanguage = localStorage.getItem("language") || "pt";
    const accessKey = web3FormsAccessKey.value.trim();

    if (!accessKey) {
      contactStatus.textContent =
        translations[currentLanguage].contact_status_missing_key;
      contactStatus.classList.add("is-error");
      return;
    }

    contactStatus.textContent = translations[currentLanguage].contact_status_sending;
    contactStatus.classList.remove("is-error", "is-success");
    contactSubmit.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        contactStatus.textContent =
          translations[currentLanguage].contact_status_success;
        contactStatus.classList.add("is-success");
        contactForm.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      contactStatus.textContent =
        translations[currentLanguage].contact_status_error;
      contactStatus.classList.add("is-error");
    } finally {
      contactSubmit.disabled = false;
    }
  });
}
