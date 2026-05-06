const body = document.body;
const glow = document.querySelector(".cursor-glow");
const navLinks = [...document.querySelectorAll(".section-nav a")];
const sections = [...document.querySelectorAll(".section")];
const menuToggle = document.querySelector(".menu-toggle");
const videoModal = document.querySelector("[data-video-modal]");
const videoFrame = videoModal?.querySelector("iframe");
const moduleModal = document.querySelector("[data-module-modal]");
const moduleContent = document.querySelector("[data-module-content]");

const moduleCopy = {
  leasing: {
    eyebrow: "Leasing paths",
    title: "Four focused pitches for four different brand ambitions.",
    items: [
      "Luxury and contemporary: controlled adjacency, concierge storytelling, hotel-linked itineraries.",
      "Flagship retail: immersive architecture, launch programming, media capture, and tourism reach.",
      "F&B: dining concepts positioned as lifestyle anchors before and after attractions or events.",
      "Pop-up: seasonal tests, fandom drops, creator retail, and campaign-specific court activations.",
    ],
  },
  sponsor: {
    eyebrow: "Sponsorship platform",
    title: "A sponsor can own the trip, not just a sign.",
    items: [
      "Signature naming opportunities across attractions, events, loyalty, and wayfinding moments.",
      "Audience packages by family travel, Gen Z discovery, luxury shopping, and regional repeat guests.",
      "Activation examples: ride-presented-by, event series, creator studio, product sampling, hotel packages.",
      "Measurement layer: QR journeys, offer redemption, lead capture, and campaign footfall reporting.",
    ],
  },
  events: {
    eyebrow: "Events + venues",
    title: "Designed to grow into a full booking module.",
    items: [
      "Rotunda and court programming for launches, celebrity appearances, live music, and premieres.",
      "Hypothetical expo configuration for conventions, brand summits, fan events, and retail showcases.",
      "Performing arts concept path for ticketed evening programming and sponsor-hosted hospitality.",
      "Booking CTA flow with capacity assumptions, calendar holds, package tiers, and production requirements.",
    ],
  },
  venue: {
    eyebrow: "Venue-specific module",
    title: "A credible expansion path for expo, performance, and hospitality packages.",
    items: [
      "Expo concept: sponsor-ready floor plans, modular booth packages, load-in assumptions, and hotel bundles.",
      "Performing arts path: ticketed programming, premium seating, reception space, and brand-hosted evenings.",
      "Production package: staging, lighting, guest flow, security, catering, and media capture requirements.",
      "Sales flow: audience fit, event calendar availability, package tier, lead capture, and booking CTA.",
    ],
  },
};

function updateGlow(event) {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}

function setActiveSection(entries) {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
  });
}

function showPanel(tabName) {
  document.querySelectorAll(".retail-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  document.querySelectorAll(".deal-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tabName);
  });
}

function setEventRow(row) {
  document.querySelectorAll(".console-row").forEach((button) => {
    button.classList.toggle("active", button === row);
  });
}

function openVideo() {
  if (!videoModal || !videoFrame) return;
  if (!videoFrame.src) {
    videoFrame.src = videoFrame.dataset.src;
  }
  videoModal.showModal();
}

function closeVideo() {
  if (!videoModal || !videoFrame) return;
  videoModal.close();
  videoFrame.src = "";
}

function openModule(moduleName) {
  const copy = moduleCopy[moduleName];
  if (!copy || !moduleModal || !moduleContent) return;

  moduleContent.innerHTML = `
    <p class="eyebrow">${copy.eyebrow}</p>
    <h2>${copy.title}</h2>
    <ul>${copy.items.map((item) => `<li>${item}</li>`).join("")}</ul>
    <a class="primary-cta" href="mailto:leasing@moa.net?subject=${encodeURIComponent(
      `Mall of America ${copy.eyebrow} conversation`,
    )}">Advance this path</a>
  `;
  moduleModal.showModal();
}

function closeModule() {
  moduleModal?.close();
}

window.addEventListener("pointermove", updateGlow, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".retail-tab").forEach((tab) => {
  tab.addEventListener("click", () => showPanel(tab.dataset.tab));
});

document.querySelectorAll(".console-row").forEach((row) => {
  row.addEventListener("click", () => setEventRow(row));
});

document.querySelectorAll("[data-open-video]").forEach((button) => {
  button.addEventListener("click", openVideo);
});
document.querySelector("[data-close-video]")?.addEventListener("click", closeVideo);
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});

document.querySelectorAll(".module-card").forEach((card) => {
  card.addEventListener("click", () => openModule(card.dataset.module));
});
document.querySelector("[data-close-module]")?.addEventListener("click", closeModule);
moduleModal?.addEventListener("click", (event) => {
  if (event.target === moduleModal) closeModule();
});

const observer = new IntersectionObserver(setActiveSection, {
  rootMargin: "-35% 0px -45% 0px",
  threshold: [0.2, 0.4, 0.6],
});

sections.forEach((section) => observer.observe(section));

const slideNumber = document.querySelector("[data-slide-number]");
const progressBar = document.querySelector("[data-progress-bar]");
const previousSlide = document.querySelector("[data-prev-slide]");
const nextSlide = document.querySelector("[data-next-slide]");
let activeSlideIndex = 0;

function updateDeckChrome(index) {
  activeSlideIndex = Math.max(0, Math.min(index, sections.length - 1));
  const current = String(activeSlideIndex + 1).padStart(2, "0");
  const total = String(sections.length).padStart(2, "0");

  if (slideNumber) {
    const title = sections[activeSlideIndex]?.dataset.title || "Section";
    slideNumber.textContent = `${current} / ${total}  ${title}`;
  }

  if (progressBar) {
    progressBar.style.width = `${((activeSlideIndex + 1) / sections.length) * 100}%`;
  }
}

function goToSlide(index) {
  const target = sections[Math.max(0, Math.min(index, sections.length - 1))];
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const deckObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    updateDeckChrome(sections.indexOf(visible.target));
  },
  { threshold: [0.45, 0.62] },
);

sections.forEach((section) => deckObserver.observe(section));
previousSlide?.addEventListener("click", () => goToSlide(activeSlideIndex - 1));
nextSlide?.addEventListener("click", () => goToSlide(activeSlideIndex + 1));

window.addEventListener("keydown", (event) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
  if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    goToSlide(activeSlideIndex + 1);
  }
  if (event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goToSlide(activeSlideIndex - 1);
  }
});

updateDeckChrome(0);

window.addEventListener("load", () => {
  const hashTarget = window.location.hash && document.querySelector(window.location.hash);
  hashTarget?.scrollIntoView({ behavior: "auto", block: "start" });
});
