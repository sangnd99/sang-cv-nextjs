import { useEffect, useRef, memo } from 'react';
import Box from '@mui/material/Box';

import ParticlesEngine from './particles-engine';
import { hex2rgba } from 'utils';

interface ParticlesProps {
  particleColor?: string;
  particleLine?: string;
}

let particlesArrays: ParticlesEngine[] = [];

const init = (canvas: HTMLCanvasElement, color: string) => {
  particlesArrays = [];
  if (canvas) {
    const particlesNumbers = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < particlesNumbers; ++i) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3;
      const directionX = Math.random() * 2 - 1;
      const directionY = Math.random() * 2 - 1;
      particlesArrays.push(
        new ParticlesEngine(canvas, x, y, directionX, directionY, size, color),
      );
    }
  }
};

const connect = (ctx: CanvasRenderingContext2D, color: string) => {
  const len = particlesArrays.length;
  let opacity = 1;
  const availableDistance = 100;
  for (let i = 0; i < len; ++i) {
    for (let j = i; j < len; ++j) {
      const dx = particlesArrays[i].x - particlesArrays[j].x;
      const dy = particlesArrays[i].y - particlesArrays[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < availableDistance) {
        opacity = 1 - distance / availableDistance;
        ctx.beginPath();
        ctx.strokeStyle = hex2rgba(color, opacity);
        ctx.lineWidth = 0.2;
        ctx.moveTo(particlesArrays[i].x, particlesArrays[i].y);
        ctx.lineTo(particlesArrays[j].x, particlesArrays[j].y);
        ctx.stroke();
      }
    }
  }
};

const Particles: React.FC<ParticlesProps> = ({
  particleColor,
  particleLine,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const callbackKeyRef = useRef(-1);
  const animate = () => {
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArrays.length; ++i) {
          particlesArrays[i].draw();
          particlesArrays[i].update();
        }
        connect(ctx, particleLine || 'gray');
      }
      callbackKeyRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    // Clear animation frame when rerender
    cancelAnimationFrame(callbackKeyRef.current);
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      // set default width and height for canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // initial canvas
      init(canvas, particleColor || 'white');
      animate();
      // change width and height when resize
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
      return () => {
        window.removeEventListener('resize', () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });
      };
    }
  }, [particleColor, particleLine]);
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }}></canvas>
    </Box>
  );
};

export default memo(Particles);
