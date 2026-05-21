// Entry point. Use ES modules - just add `import`s as you grow.

  // Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Example: fade-in cards as they scroll into view.
  // Remove or replace with your own fun stuff.
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.1 });

for (const card of document.querySelectorAll('.card')) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(12px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
}


const CANVAS_X = window.innerWidth;
const CANVAS_Y = window.innerHeight;
const MID_POINT_X = CANVAS_X / 2;
const MID_POINT_Y = CANVAS_Y / 2;
const CANVAS_COLOUR = "black";
const SPAWN_RADIUS = 500;

const STAR_SIZE = 2;
const STAR_COLOUR = "white";
const STAR_COUNT = 500;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animate(ctx, stars) {
  ctx.reset();
  ctx.rect(0, 0, CANVAS_X, CANVAS_Y);
  ctx.fillStyle = CANVAS_COLOUR;
  ctx.fill();
  stars.forEach(star => star.updateAndDraw());
}

class Star {   
  constructor(ctx) {
    this.ctx = ctx;
    this.initXAndY();
    this.radius = STAR_SIZE;
    this.colour = STAR_COLOUR;
    this.xI = randomIntFromInterval(-10, 10);
    this.yI = randomIntFromInterval(-10, 10);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.colour;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    const shouldIncrement = randomIntFromInterval(-1,8) > 0;
    if (shouldIncrement) {
      this.x += this.xI;
      this.y += this.yI;
    }

    const offCanvas = (this.x > CANVAS_X || this.x < 0 ) || (this.y > CANVAS_Y || this.y < 0 );
    if(offCanvas){
      this.initXAndY();
    }
  }

  updateAndDraw() {
    this.update();
    this.draw();
  }

  initXAndY() {
    this.x = MID_POINT_X;
    this.y = MID_POINT_Y;
  }

  resetXAndY() {
    this.x = MID_POINT_X;
    this.y = MID_POINT_Y;
  }

  details() {
    console.log(this.x);
    console.log(this.y);
  }
}

const c = document.getElementById("stars");
const ctx = c.getContext("2d");
ctx.canvas.height = CANVAS_Y;
ctx.canvas.width = CANVAS_X;
ctx.moveTo(0,0);

const stars = [];

for (let i=0; i<STAR_COUNT; i++) {
  stars.push(new Star(ctx));
}

(function loop() {
  setTimeout(() => {
    animate(ctx, stars);

    loop();
  }, 10);
})();
