class ParticlesEngine {
  constructor(
    private canvas: HTMLCanvasElement,
    public x: number,
    public y: number,
    private directionX: number,
    private directionY: number,
    private size: number,
    public color: string,
  ) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
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
    this.x -= this.directionX;
    this.y -= this.directionY;
  }
}

export default ParticlesEngine;
