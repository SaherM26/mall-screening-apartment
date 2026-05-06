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
    title: "The four leasing paths I would build out next.",
    items: [
      "Luxury and contemporary: styling moments, hotel-linked trips, and calmer premium zones.",
      "Flagship retail: a store that can also work as a launch space and content moment.",
      "F&B: food concepts that help guests stay before or after attractions and events.",
      "Pop-up: seasonal tests, product drops, creator retail, and campaign-specific activations.",
    ],
  },
  sponsor: {
    eyebrow: "Sponsorship platform",
    title: "Sponsorship should connect to real guest moments.",
    items: [
      "Naming ideas across attractions, events, loyalty moments, and wayfinding.",
      "Audience packages for families, tourists, teens, premium shoppers, and regional repeat guests.",
      "Activation examples: ride sponsorship, event series, creator studio, sampling, and hotel offers.",
      "Measurement ideas: QR journeys, offer redemption, lead capture, and campaign reporting.",
    ],
  },
  events: {
    eyebrow: "Events + venues",
    title: "The events section could become a booking tool.",
    items: [
      "Rotunda and court programming for launches, appearances, live music, and premieres.",
      "Expo-style layouts for conventions, brand summits, fan events, and retail showcases.",
      "Performing arts concept for ticketed evenings and sponsor-hosted hospitality.",
      "Booking flow with capacity, calendar holds, package tiers, and production needs.",
    ],
  },
  venue: {
    eyebrow: "Venue-specific module",
    title: "A future module for expo and performance packages.",
    items: [
      "Expo concept: floor plans, booth packages, load-in assumptions, and hotel bundles.",
      "Performance path: ticketed programming, seating, reception space, and hosted evenings.",
      "Production package: staging, lighting, guest flow, security, catering, and media capture.",
      "Sales flow: audience fit, calendar availability, package tier, lead capture, and CTA.",
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
