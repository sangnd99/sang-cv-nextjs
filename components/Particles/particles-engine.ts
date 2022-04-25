export type MouseType = {
  x: number | null;
  y: number | null;
  radius: number;
};

class ParticlesEngine {
  private density: number;
  constructor(
    private canvas: HTMLCanvasElement,
    private mouse: MouseType,
    public x: number,
    public y: number,
    private directionX: number,
    private directionY: number,
    private size: number,
    public color: string,
  ) {
    this.canvas = canvas;
    this.mouse = mouse;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.density = Math.random() * 5 + 1;
  }
  draw() {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
  update() {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    if (this.mouse.x && this.mouse.y) {
      const dx = this.mouse.x - this.x;
      const dy = this.mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = this.x / distance;
      const forceDirectionY = this.y / distance;
      const maxDistance = this.mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;
      if (distance < this.mouse.radius + this.size) {
        if (this.mouse.x < this.x && this.x < this.canvas.width - this.size) {
          this.x += directionX;
        }
        if (this.mouse.x > this.x && this.x > this.size) {
          this.x -= directionX;
        }
        if (this.mouse.y < this.y && this.y < this.canvas.height - this.size) {
          this.y += directionY;
        }
        if (this.mouse.y > this.y && this.y > this.size) {
          this.y -= directionY;
        }
      }
    }
    this.x -= this.directionX;
    this.y -= this.directionY;
  }
}

export default ParticlesEngine;
