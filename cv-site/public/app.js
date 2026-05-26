const JOBS = [
  {
    id: "swap",
    title: "Swap Commerce",
    meta: "Software Developer · December 2025 – Present",
    blurb: "",
    description: "TODO: short description.",
    link: "https://swap-commerce.com",
    tech: ["node"],
  },
  {
    id: "vault",
    title: "Vault Platform",
    meta: "Full Stack Developer · October 2023 – June 2025",
    blurb: "London, UK (Remote)",
    description: "Vault Platform tackles workplace misconduct via a management portal and multiple user-intake methods (web, phone, mobile). I led projects end-to-end - design, implementation, App/Play Store releases - and was one of the primary developers who helped take the company to acquisition in June 2025.",
    link: "https://vaultplatform.com",
    tech: ["node", "typescript", "react", "jest", "sql", "aws", "docker", "bash", "graphql", "sequelize"],
  },
  {
    id: "project-1",
    title: "Plastic Pipe Shop",
    meta: "Freelance Developer · June 2023 – September 2023",
    blurb: "Stirling, UK (Remote)",
    description: "Sole developer hired to build a service that auto-generates spec-sheet PDFs for different products. Deployed on AWS Lambda + S3 via CDK, with Docker for the dev setup and Bash scripts for testing and builds.",
    link: "https://www.plasticpipeshop.co.uk/",
    tech: ["node", "jest", "aws", "cdk", "docker", "bash"],
  },
  {
    id: "procuros",
    title: "Procuros GmbH",
    meta: "Full Stack Developer · January 2022 – May 2023",
    blurb: "Hamburg, Germany (Remote)",
    description: "Early-stage German startup automating B2B transactions. I was primary developer on the customer portal rebuild and built the email-magic-link system for orders, shipping notices and invoices. Promoted from junior to mid-level developer.",
    link: "https://procuros.io/",
    tech: ["react", "typescript", "jest", "php", "laravel", "phpunit", "docker", "aws", "google-app-script"],
  },
  {
    id: "incentive",
    title: "Incentive Games",
    meta: "Full Stack Developer · May 2020 – December 2021",
    blurb: "Edinburgh, UK (Remote)",
    description: "Joined as a graduate and watched the company grow from ~10 to ~30 people. Built and maintained games across the full stack and took ownership of game security after pen tests. Promoted from graduate to junior developer.",
    link: "https://incentivegames.com",
    tech: ["react", "typescript", "jest", "node", "sql", "aws"],
  },
];

const PROJECTS = [
  {
    id: "nfl",
    title: "NFL Fantasy Player Comparison",
    meta: "Personal project",
    description: "Player classifier for fantasy football - models a player's projected fantasy points from variables like Madden rating, strength of schedule and opposition matchups. Ran weighted-average simulations against past seasons to tune the model.",
    link: "https://github.com/cameronjgray/player-comparison",
    tech: ["node", "docker", "sql", "bash"],
  },
  {
    id: "hestia",
    title: "Project Hestia",
    meta: "Personal project · 2018 – Present",
    description: "My longest-running project. Around 21,000 family photos spanning the 1960s to now, sorted and backed up. A small Python script sends a random photo to the family group at 9am every day; a local web app on a Raspberry Pi serves the full collection over the home network.",
    tech: ["html", "css", "js", "python"],
  },
  {
    id: "ffbb",
    title: "Fantasy Fantasy Basketball",
    meta: "Lockdown project",
    description: "With no real sports during lockdown there was no real fantasy basketball - so I built a simulation league for my friends. A Python script generates daily games using player ratings from the 2K games; Google Sheets handled the draft, scoring and standings.",
    tech: ["python", "google-sheets"],
  },
  {
    id: "dissertation",
    title: "University Dissertation",
    meta: "Final-year project",
    description: "\"Using Machine Learning to Identify Fake Images.\" Built a TensorFlow model to detect image tampering and wrapped it in a PHP web frontend to make the technology more accessible.",
    link: "https://www.cameronjgray.com/Using%20Machine%20Learning%20To%20Identify%20Fake%20Images.pdf",
    tech: ["python", "tensorflow", "php"],
  },
  {
    id: "vim-learning",
    title: "Vim Learning",
    meta: "Ongoing",
    description: "Started with Vim Adventures, graduated to using Vim for small tasks, then a VS Code extension, and finally building my own Neovim config from scratch. Now my editor of choice - and the learning never stops.",
    link: "https://github.com/cameronjgray/nvim",
    tech: ["vim", "neovim"],
  },
];


function cardHTML(item) {
  const blurb = item.blurb ? `<p class="card__meta">${escapeHtml(item.blurb)}</p>` : "";
  return `
    <button class="card reveal" type="button" data-id="${escapeAttr(item.id)}" aria-label="Open details for ${escapeAttr(item.title)}">
      <picture>
        <source type="image/avif"
                srcset="/img/${item.id}-400.avif 400w, /img/${item.id}-800.avif 800w"
                sizes="(max-width: 700px) 100vw, 50vw">
        <source type="image/webp"
                srcset="/img/${item.id}-400.webp 400w, /img/${item.id}-800.webp 800w"
                sizes="(max-width: 700px) 100vw, 50vw">
        <img src="/img/${item.id}-800.jpg" alt=""
             width="800" height="500" loading="lazy" decoding="async">
      </picture>
      <div class="card__body">
        <h3>${escapeHtml(item.title)}</h3>
        <p class="card__meta">${escapeHtml(item.meta)}</p>
        ${blurb}
        <div class="card__badges-row">
          <ul class="badges" aria-label="Technologies">
            ${item.tech.map(t => badgeHTML(t)).join("")}
          </ul>
        </div>
      </div>
    </button>
  `;
}

function badgeHTML(slug) {
  return `<li class="badge"><img src="/img/tech/${slug}.svg" alt="${escapeAttr(slug)}" width="28" height="28" loading="lazy" decoding="async"></li>`;
}

function renderGrid(gridEl, items) {
  gridEl.innerHTML = items.map(cardHTML).join("");
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function escapeAttr(s) { return escapeHtml(s); }

const modal     = document.getElementById("card-modal");
const modalImg  = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalDesc = document.getElementById("modal-description");
const modalBadges = document.getElementById("modal-badges");
const modalLink = document.getElementById("modal-link");

function openModal(item) {
  modalImg.src    = `/img/${item.id}-800.jpg`;
  modalImg.alt    = `${item.title} preview`;
  modalTitle.textContent = item.title;
  modalMeta.textContent  = [item.meta, item.blurb].filter(Boolean).join(" · ");
  modalDesc.textContent  = item.description || "";
  modalBadges.innerHTML  = item.tech.map(badgeHTML).join("");

  if (item.link) {
    modalLink.href = item.link;
    modalLink.style.display = "";
  } else {
    modalLink.style.display = "none";
  }

  modal.showModal();
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
modal.querySelector("[data-modal-close]").addEventListener("click", () => modal.close());

for (const gridEl of document.querySelectorAll("[data-source]")) {
  const source = gridEl.dataset.source === "jobs" ? JOBS : PROJECTS;
  renderGrid(gridEl, source);

  gridEl.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const id = card.dataset.id;
    const item = source.find(x => x.id === id);
    if (item) openModal(item);
  });
}


const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.1 });

for (const card of document.querySelectorAll(".card.reveal")) {
  revealObserver.observe(card);
}

const STAR_COUNT  = 500;
const STAR_SIZE   = 2;
const STAR_COLOUR = "white";
const BG_COLOUR   = "black";

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let CANVAS_X, CANVAS_Y, MID_X, MID_Y;

function resizeCanvas() {
  CANVAS_X = canvas.width  = window.innerWidth;
  CANVAS_Y = canvas.height = window.innerHeight;
  MID_X = CANVAS_X / 2;
  MID_Y = CANVAS_Y / 2;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Star {
  constructor() {
    this.reset();
    this.xI = randInt(-10, 10);
    this.yI = randInt(-10, 10);
  }
  reset() { this.x = MID_X; this.y = MID_Y; }
  update() {
    if (randInt(-1, 8) > 0) {
      this.x += this.xI;
      this.y += this.yI;
    }
    if (this.x > CANVAS_X || this.x < 0 || this.y > CANVAS_Y || this.y < 0) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, STAR_SIZE, 0, 2 * Math.PI);
    ctx.fillStyle = STAR_COLOUR;
    ctx.fill();
    ctx.closePath();
  }
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: STAR_COUNT }, () => new Star());

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  ctx.fillStyle = BG_COLOUR;
  ctx.fillRect(0, 0, CANVAS_X, CANVAS_Y);
  for (const s of stars) {
    s.x = randInt(0, CANVAS_X);
    s.y = randInt(0, CANVAS_Y);
    s.draw();
  }
} else {
  function frame() {
    ctx.fillStyle = BG_COLOUR;
    ctx.fillRect(0, 0, CANVAS_X, CANVAS_Y);
    for (const s of stars) { s.update(); s.draw(); }
    setTimeout(frame, 10);
  }
  frame();
}
