const STARTING_COLOR = 255;

class ShootingStar {
    x = 0;
    y = 0;
    startingX = 0;
    startingY = 0;
    startingColor = STARTING_COLOR;
    colorRGB = STARTING_COLOR;
    startingRadius = 0.5
    maxLength = 100;
    trail = 100;

    constructor(startingX, startingY) {
        this.x = startingX;
        this.y = startingY;
        this.startingX = startingX;
        this.startingY = startingY;
    }

    draw() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.strokeStyle = `rgba(${this.colorRGB}, ${this.colorRGB}, ${this.colorRGB})`;

        let radius = this.startingRadius;

        for (let i = 0; i < this.trail; i++) {
            const modifier = i + radius;
            const modifiedX = this.x - modifier;
            const modifiedY = this.y - modifier;

            context.beginPath();
            context.arc(modifiedX, modifiedY, radius, 0, 2 * Math.PI);
            radius -= this.startingRadius / this.trail;
            context.stroke();
            context.closePath();

            this.colorRGB -= this.startingColor / this.trail;
            context.strokeStyle = `rgba(${this.colorRGB}, ${this.colorRGB}, ${this.colorRGB})`;
        }

        this.x++;
        this.y++;
        this.updateStartingColor();

        if (!(this.x > this.startingX + this.maxLength)) {
            setTimeout(() => this.draw(), 1);
        }
    }

    updateStartingColor() {
        const distancedTravelled = Math.abs(this.x - this.startingX);
        const distanceRemaining = Math.abs(this.trail - distancedTravelled);
        
        // if (distancedTravelled > this.trail / 2) {
            this.startingColor = STARTING_COLOR - (STARTING_COLOR / distanceRemaining);
        // }

        this.colorRGB = this.startingColor;
    }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    draw();
}

let x = 500;
let y = 500;
const star1 = new ShootingStar(x, y);

function draw() {
    star1.draw();
}

resizeCanvas();
