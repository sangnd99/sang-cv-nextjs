import { useEffect, useRef, memo, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';

import ParticlesEngine, { MouseType } from './particles-engine';
import { hex2rgba } from 'utils';

interface ParticlesProps {
  particleColor?: string;
  particleLine?: string;
}

const MOUSE_DIVISOR = 7000;

const Particles: React.FC<ParticlesProps> = ({
  particleColor,
  particleLine,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const callbackKeyRef = useRef(-1);
  const particlesArrays = useRef<ParticlesEngine[]>([]);

  let mouse: MouseType = useMemo(
    () => ({
      x: null,
      y: null,
      radius: 0,
    }),
    [],
  );

  const init = useCallback(
    (canvas: HTMLCanvasElement, color: string) => {
      particlesArrays.current = [];
      if (canvas) {
        const particlesNumbers = (canvas.width * canvas.height) / 8000;
        for (let i = 0; i < particlesNumbers; ++i) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 3;
          const directionX = Math.random() * 2 - 1;
          const directionY = Math.random() * 2 - 1;
          particlesArrays.current.push(
            new ParticlesEngine(
              canvas,
              mouse,
              x,
              y,
              directionX,
              directionY,
              size,
              color,
            ),
          );
        }
      }
    },
    [mouse],
  );

  const connect = useCallback(
    (ctx: CanvasRenderingContext2D, color: string) => {
      const len = particlesArrays.current.length;
      let opacity = 1;
      const availableDistance = 100;
      for (let i = 0; i < len; ++i) {
        for (let j = i; j < len; ++j) {
          const dx =
            particlesArrays.current[i].x - particlesArrays.current[j].x;
          const dy =
            particlesArrays.current[i].y - particlesArrays.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < availableDistance) {
            opacity = 1 - distance / availableDistance;
            ctx.beginPath();
            ctx.strokeStyle = hex2rgba(color, opacity);
            ctx.lineWidth = 0.2;
            ctx.moveTo(
              particlesArrays.current[i].x,
              particlesArrays.current[i].y,
            );
            ctx.lineTo(
              particlesArrays.current[j].x,
              particlesArrays.current[j].y,
            );
            ctx.stroke();
          }
        }
      }
    },
    [particlesArrays],
  );

  const animate = useCallback(() => {
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArrays.current.length; ++i) {
          particlesArrays.current[i].draw();
          particlesArrays.current[i].update();
        }
        connect(ctx, particleLine || 'gray');
      }
      callbackKeyRef.current = requestAnimationFrame(animate);
    }
  }, [connect, particleLine, particlesArrays]);

  useEffect(() => {
    // Clear animation frame when rerender
    cancelAnimationFrame(callbackKeyRef.current);
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      if (typeof window === 'undefined') return;
      // set default width and height for canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // calculate mouse radius
      mouse.radius = (canvas.width * canvas.height) / MOUSE_DIVISOR;
      // initial canvas
      init(canvas, particleColor || 'white');
      animate();
      // change width and height when resize
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // calculate mouse radius
        mouse.radius = (canvas.width * canvas.height) / MOUSE_DIVISOR;
      });
      // add mouse position
      window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      return () => {
        window.removeEventListener('resize', () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          // calculate mouse radius
          mouse.radius = (canvas.width * canvas.height) / MOUSE_DIVISOR;
        });
        window.removeEventListener('mousemove', (e) => {
          mouse.x = e.x;
          mouse.y = e.y;
        });
      };
    }
  }, [particleColor, particleLine, animate, init, mouse]);

  const handleMouseOut = () => {
    mouse.x = null;
    mouse.y = null;
  };
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        onMouseOut={handleMouseOut}
        style={{ display: 'block' }}
      ></canvas>
    </Box>
  );
};

export default memo(Particles);
