"use client";

import React, { useEffect, useRef } from "react";

interface LetterParticle {
  char: string;
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  isRed: boolean;
  angleSeed: number;
}

export default function FloatingIeltsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 170
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Generate random scattered letters: I, E, L, T, S
    const CHARS = ["I", "E", "L", "T", "S"];
    // Adjust density based on screen size: around 45 to 65 letters scattered
    const count = Math.min(65, Math.max(35, Math.floor((width * height) / 22000)));
    const particles: LetterParticle[] = [];

    for (let i = 0; i < count; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const x = Math.random() * width;
      const y = Math.random() * height;
      // Varied font sizes from 32px to 96px
      const size = Math.floor(Math.random() * 55) + 32;
      // Rotation between -45 and +45 degrees
      const rotation = (Math.random() - 0.5) * 0.9;
      const rotSpeed = (Math.random() - 0.5) * 0.005;
      // Subtle opacity (between 0.05 and 0.12) so it stays gentle and non-distracting
      const opacity = Math.random() * 0.07 + 0.05;
      // Mix of soft DOL red tint (25%) and soft neutral slate tint (75%)
      const isRed = Math.random() < 0.3;

      particles.push({
        char,
        x,
        y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        size,
        rotation,
        rotSpeed,
        opacity,
        isRed,
        angleSeed: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Natural gentle ambient floating drift (sine wave)
        const ambientDx = Math.cos(time + p.angleSeed) * 0.45;
        const ambientDy = Math.sin(time + p.angleSeed * 1.5) * 0.45;

        // 2. Interactive mouse repulsion force
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          // Calculate push strength (stronger when closer to cursor)
          const force = (mouse.radius - dist) / mouse.radius;
          const pushX = (dx / dist) * force * 4.5;
          const pushY = (dy / dist) * force * 4.5;
          p.vx += pushX;
          p.vy += pushY;
          // Rotate slightly upon interaction
          p.rotation += (dx > 0 ? 0.015 : -0.015) * force;
        }

        // Apply friction damping
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Update positions
        p.x += p.vx + ambientDx;
        p.y += p.vy + ambientDy;
        p.rotation += p.rotSpeed;

        // Screen boundary wrapping (smooth transition when floating off edges)
        const pad = p.size * 1.5;
        if (p.x < -pad) p.x = width + pad;
        if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        if (p.y > height + pad) p.y = -pad;

        // Draw scattered translucent letter
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `900 ${p.size}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (p.isRed) {
          // Soft red translucent
          ctx.fillStyle = `rgba(225, 27, 34, ${p.opacity * 1.3})`;
        } else {
          // Soft neutral slate translucent
          ctx.fillStyle = `rgba(100, 116, 139, ${p.opacity})`;
        }

        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full select-none"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
}
