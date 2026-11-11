"use client";

import React, { useEffect, useRef, useState } from "react";

const WORDS = [
  { first: "I", rest: "nternational" },
  { first: "E", rest: "nglish" },
  { first: "L", rest: "anguage" },
  { first: "T", rest: "esting" },
  { first: "S", rest: "ystem" },
];

interface BgFloatingLetter {
  char: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  isRed: boolean;
  seed: number;
}

interface IeltsParticle {
  homeX: number;
  homeY: number;
  homeZ: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  isRed: boolean;
  seed: number;
}

interface RisingWisp {
  x: number;
  y: number;
  z: number;
  speedY: number;
  size: number;
  isRed: boolean;
  seed: number;
}

export default function IglooIntroExperience() {
  const [enteredMainWeb, setEnteredMainWeb] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const openingLayerRef = useRef<HTMLDivElement | null>(null);
  const heroCardRef = useRef<HTMLDivElement | null>(null);
  const heroLightRef = useRef<HTMLDivElement | null>(null);
  const finaleUiRef = useRef<HTMLDivElement | null>(null);

  const handleStartClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setEnteredMainWeb(true);
    }, 480);
  };

  useEffect(() => {
    if (enteredMainWeb) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const scrollEl = scrollContainerRef.current;
    const canvas = canvasRef.current;
    if (!scrollEl || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let targetProgress = 0; // 0.0 -> 6.0
    let smoothProgress = 0;
    let prevSmooth = 0;
    let mouseX = 0;
    let mouseY = 0;
    let smoothMouseX = 0;
    let smoothMouseY = 0;
    const mousePx = { x: -9999, y: -9999 };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();

    const handleScroll = () => {
      const maxScroll = Math.max(1, scrollEl.scrollHeight - scrollEl.clientHeight);
      targetProgress = Math.min(1, Math.max(0, scrollEl.scrollTop / maxScroll)) * 6.0;
    };
    handleScroll();

    const handleMouseMove = (e: MouseEvent) => {
      mousePx.x = e.clientX;
      mousePx.y = e.clientY;
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleMouseLeave = () => {
      mousePx.x = -9999;
      mousePx.y = -9999;
    };

    window.addEventListener("resize", handleResize);
    scrollEl.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    // 1. Background Floating IELTS Letters
    const CHAR_POOL = ["I", "E", "L", "T", "S"];
    const bgFloating: BgFloatingLetter[] = Array.from({ length: 42 }, () => ({
      char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: 0,
      vy: 0,
      size: Math.floor(Math.random() * 48) + 32,
      rotation: (Math.random() - 0.5) * 0.85,
      rotSpeed: (Math.random() - 0.5) * 0.004,
      opacity: Math.random() * 0.055 + 0.04,
      isRed: Math.random() < 0.3,
      seed: Math.random() * Math.PI * 2,
    }));

    // 2. Initialize 3D Particle "IELTS" Sculpture for Finale Chamber
    const ieltsParticles: IeltsParticle[] = [];
    const risingWisps: RisingWisp[] = [];

    const offCanvas = document.createElement("canvas");
    const ow = 520;
    const oh = 180;
    offCanvas.width = ow;
    offCanvas.height = oh;
    const octx = offCanvas.getContext("2d");

    if (octx) {
      octx.fillStyle = "#000000";
      octx.font = '900 132px "Arial Black", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText("IELTS", ow / 2, oh / 2);

      const imgData = octx.getImageData(0, 0, ow, oh).data;
      for (let y = 0; y < oh; y += 3) {
        for (let x = 0; x < ow; x += 3) {
          const alpha = imgData[(y * ow + x) * 4 + 3];
          if (alpha > 128) {
            const bx = (x - ow / 2) * 1.08;
            const by = (y - oh / 2) * 1.08;
            for (let layer = 0; layer < 2; layer++) {
              const bz = (Math.random() - 0.5) * 44;
              const jx = bx + (Math.random() - 0.5) * 2.5;
              const jy = by + (Math.random() - 0.5) * 2.5;
              ieltsParticles.push({
                homeX: jx,
                homeY: jy,
                homeZ: bz,
                x: jx + (Math.random() - 0.5) * 80,
                y: jy + (Math.random() - 0.5) * 80,
                z: bz + (Math.random() - 0.5) * 80,
                vx: 0,
                vy: 0,
                vz: 0,
                size: Math.random() * 1.7 + 1.0,
                isRed: Math.random() < 0.78,
                seed: Math.random() * Math.PI * 2,
              });
            }
          }
        }
      }
    }

    for (let i = 0; i < 160; i++) {
      risingWisps.push({
        x: (Math.random() - 0.5) * 360,
        y: (Math.random() - 0.5) * 160,
        z: (Math.random() - 0.5) * 80,
        speedY: Math.random() * 1.2 + 0.4,
        size: Math.random() * 1.8 + 0.6,
        isRed: Math.random() < 0.5,
        seed: Math.random() * Math.PI * 2,
      });
    }

    const renderFloatingBackground = (w: number, h: number, timeSec: number, scrollVel: number) => {
      for (let i = 0; i < bgFloating.length; i++) {
        const p = bgFloating[i];
        const dx = p.x - mousePx.x;
        const dy = p.y - mousePx.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160 && dist > 0) {
          const force = (160 - dist) / 160;
          p.vx += (dx / dist) * force * 3.5;
          p.vy += (dy / dist) * force * 3.5;
        }
        p.vx *= 0.93;
        p.vy *= 0.93;
        p.x += p.vx + Math.cos(timeSec + p.seed) * 0.35;
        p.y += p.vy + Math.sin(timeSec + p.seed * 1.4) * 0.35 - scrollVel * 12;
        p.rotation += p.rotSpeed;

        const pad = p.size * 1.4;
        if (p.x < -pad) p.x = w + pad;
        if (p.x > w + pad) p.x = -pad;
        if (p.y < -pad) p.y = h + pad;
        if (p.y > h + pad) p.y = -pad;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `900 ${p.size}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = p.isRed
          ? `rgba(225, 27, 34, ${p.opacity * 1.3})`
          : `rgba(100, 116, 139, ${p.opacity})`;
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      }
    };

    const drawMergingWordScene = (w: number, h: number, idx: number, localOffset: number) => {
      const absOff = Math.abs(localOffset);
      if (absOff > 0.88) return;

      const item = WORDS[idx];
      const alpha = Math.max(0, 1 - absOff * 1.25);

      const splitProgress = Math.max(0, (absOff - 0.12) / 0.76);
      const gap = splitProgress * splitProgress * 180;

      const zoom = 1 - absOff * 0.18;
      const responsiveFont = Math.min(108, Math.max(44, w * 0.082)) * zoom;

      const cx = w * 0.5 + smoothMouseX * 18;
      const cy = h * 0.5 + localOffset * -240 + smoothMouseY * 12;

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.font = `900 ${Math.round(responsiveFont)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`;
      ctx.textBaseline = "middle";

      const firstW = ctx.measureText(item.first).width;
      const restW = ctx.measureText(item.rest).width;
      const totalW = firstW + restW;

      const baseStartX = cx - totalW / 2;
      const firstX = baseStartX - gap * 0.6;
      const restX = baseStartX + firstW + gap * 0.6;

      if (gap > 3) {
        ctx.save();
        ctx.strokeStyle = "rgba(225, 27, 34, 0.45)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(firstX + firstW + 4, cy);
        ctx.lineTo(restX - 4, cy);
        ctx.stroke();
        ctx.restore();
      }

      ctx.textAlign = "left";
      for (let d = 5; d >= 1; d--) {
        ctx.fillStyle = "rgba(15, 23, 42, 0.06)";
        ctx.fillText(item.first, firstX + d * 1.2, cy + d * 1.5);
        ctx.fillText(item.rest, restX + d * 1.2, cy + d * 1.5);
      }

      ctx.fillStyle = "#e11b22";
      ctx.fillText(item.first, firstX, cy);

      ctx.fillStyle = "#0f172a";
      ctx.fillText(item.rest, restX, cy);

      ctx.restore();
    };

    const drawFinaleParticleIeltsChamber = (w: number, h: number, appearAlpha: number, timeMs: number) => {
      if (appearAlpha <= 0.01) return;

      const cx = w * 0.5;
      const cy = h * 0.44;
      const responsiveScale = Math.min(1.05, Math.max(0.55, w / 1150));

      ctx.save();
      ctx.globalAlpha = appearAlpha;

      const topY = h * 0.07;
      const topGlow = ctx.createRadialGradient(cx, topY, 20, cx, topY, 240);
      topGlow.addColorStop(0, "rgba(225, 27, 34, 0.22)");
      topGlow.addColorStop(0.5, "rgba(15, 23, 42, 0.08)");
      topGlow.addColorStop(1, "rgba(248, 250, 252, 0)");
      ctx.fillStyle = topGlow;
      ctx.beginPath();
      ctx.ellipse(cx, topY, 230, 44, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(cx, topY, 125, 20, 0, 0, Math.PI * 2);
      ctx.stroke();

      const beamGrad = ctx.createLinearGradient(cx - 260 * responsiveScale, 0, cx + 260 * responsiveScale, 0);
      beamGrad.addColorStop(0, "rgba(15, 23, 42, 0)");
      beamGrad.addColorStop(0.15, "rgba(15, 23, 42, 0.06)");
      beamGrad.addColorStop(0.5, "rgba(225, 27, 34, 0.05)");
      beamGrad.addColorStop(0.85, "rgba(15, 23, 42, 0.06)");
      beamGrad.addColorStop(1, "rgba(15, 23, 42, 0)");
      ctx.fillStyle = beamGrad;
      ctx.fillRect(cx - 260 * responsiveScale, topY, 520 * responsiveScale, h * 0.69);

      const floorY = h * 0.76;
      ctx.fillStyle = "rgba(15, 23, 42, 0.07)";
      ctx.beginPath();
      ctx.ellipse(cx, floorY, 285 * responsiveScale, 42, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(cx, floorY, 235 * responsiveScale, 30, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "#e11b22";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(cx, floorY, 195 * responsiveScale, 22, 0, 0, Math.PI * 2);
      ctx.stroke();

      const bracketOffset = 310 * responsiveScale;
      ctx.strokeStyle = "rgba(15, 23, 42, 0.55)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(cx - bracketOffset + 14, cy - 7);
      ctx.lineTo(cx - bracketOffset, cy);
      ctx.lineTo(cx - bracketOffset + 58, cy);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx + bracketOffset - 14, cy - 7);
      ctx.lineTo(cx + bracketOffset, cy);
      ctx.lineTo(cx + bracketOffset - 58, cy);
      ctx.stroke();

      risingWisps.forEach((wisp) => {
        wisp.y -= wisp.speedY;
        wisp.x += Math.sin(timeMs * 0.002 + wisp.seed) * 0.45;
        if (wisp.y < -210) {
          wisp.y = 40;
          wisp.x = (Math.random() - 0.5) * 360;
        }
        const px = cx + wisp.x * responsiveScale;
        const py = cy + wisp.y * responsiveScale;
        const fade = Math.max(0, 1 - Math.abs(wisp.y) / 210);
        ctx.fillStyle = wisp.isRed
          ? `rgba(225, 27, 34, ${(fade * 0.65).toFixed(2)})`
          : `rgba(15, 23, 42, ${(fade * 0.55).toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(px, py, wisp.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const rotY = smoothMouseX * 0.38 + Math.sin(timeMs * 0.0008) * 0.12;
      const rotX = -smoothMouseY * 0.25;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const interactRadius = 115;

      for (let i = 0; i < ieltsParticles.length; i++) {
        const pt = ieltsParticles[i];

        const hx = pt.homeX * responsiveScale;
        const hy = pt.homeY * responsiveScale;
        const hz = pt.homeZ * responsiveScale;

        const rx1 = hx * cosY - hz * sinY;
        const rz1 = hz * cosY + hx * sinY;
        const ry2 = hy * cosX - rz1 * sinX;
        const rz2 = rz1 * cosX + hy * sinX;

        const dx = cx + pt.x - mousePx.x;
        const dy = cy + pt.y - mousePx.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < interactRadius * interactRadius && distSq > 1) {
          const dist = Math.sqrt(distSq);
          const force = (interactRadius - dist) / interactRadius;
          const nx = dx / dist;
          const ny = dy / dist;
          pt.vx += (nx * 5.2 - ny * 2.8) * force;
          pt.vy += (ny * 5.2 + nx * 2.8) * force;
          pt.vz += Math.sin(pt.seed + timeMs * 0.01) * 4.0 * force;
        }

        const springK = 0.095;
        pt.vx += (rx1 - pt.x) * springK;
        pt.vy += (ry2 - pt.y) * springK;
        pt.vz += (rz2 - pt.z) * springK;

        pt.vx *= 0.84;
        pt.vy *= 0.84;
        pt.vz *= 0.84;

        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.z += pt.vz;

        const scale = 700 / Math.max(180, 700 + pt.z);
        const sx = cx + pt.x * scale;
        const sy = cy + pt.y * scale;

        ctx.fillStyle = pt.isRed ? "#e11b22" : "#0f172a";
        ctx.beginPath();
        ctx.arc(sx, sy, pt.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    const animate = (timeMs: number) => {
      animId = requestAnimationFrame(animate);

      const w = window.innerWidth;
      const h = window.innerHeight;

      smoothProgress += (targetProgress - smoothProgress) * 0.085;
      const scrollVel = smoothProgress - prevSmooth;
      prevSmooth = smoothProgress;

      smoothMouseX += (mouseX - smoothMouseX) * 0.08;
      smoothMouseY += (mouseY - smoothMouseY) * 0.08;

      const bgGrad = ctx.createRadialGradient(
        w * 0.5,
        h * 0.45,
        40,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.9
      );
      bgGrad.addColorStop(0, "#ffffff");
      bgGrad.addColorStop(0.55, "#f8fafc");
      bgGrad.addColorStop(1, "#e2e8f0");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      renderFloatingBackground(w, h, timeMs * 0.001, scrollVel);

      const heroLayer = openingLayerRef.current;
      const heroCard = heroCardRef.current;
      const light = heroLightRef.current;

      if (heroLayer) {
        if (smoothProgress < 0.92) {
          const fade = Math.max(0, 1 - Math.max(0, smoothProgress - 0.22) / 0.58);
          heroLayer.style.opacity = fade.toFixed(3);
          heroLayer.style.transform = `scale(${(1 + smoothProgress * 0.15).toFixed(3)}) translateY(${(-smoothProgress * 110).toFixed(1)}px)`;

          const rotY = smoothMouseX * 12;
          const rotX = -smoothMouseY * 10 + smoothProgress * 8;
          if (heroCard) {
            heroCard.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
          }
          if (light) {
            const gx = ((smoothMouseX + 1) * 50).toFixed(1);
            const gy = ((smoothMouseY + 1) * 50).toFixed(1);
            light.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.6) 0%, transparent 55%)`;
          }
        } else {
          heroLayer.style.opacity = "0";
        }
      }

      if (smoothProgress >= 0.62 && smoothProgress <= 5.45) {
        for (let i = 0; i < 5; i++) {
          const localOffset = smoothProgress - (i + 1);
          drawMergingWordScene(w, h, i, localOffset);
        }
      }

      const finaleUi = finaleUiRef.current;
      if (smoothProgress > 5.12) {
        const appear = Math.min(1, (smoothProgress - 5.12) / 0.68);
        drawFinaleParticleIeltsChamber(w, h, appear, timeMs);
        if (finaleUi) {
          finaleUi.style.opacity = appear.toFixed(3);
          finaleUi.style.pointerEvents = appear > 0.5 ? "auto" : "none";
        }
      } else if (finaleUi) {
        finaleUi.style.opacity = "0";
        finaleUi.style.pointerEvents = "none";
      }
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
      scrollEl.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enteredMainWeb]);

  if (enteredMainWeb) return null;

  return (
    <div
      ref={scrollContainerRef}
      className={`fixed inset-0 z-[100] w-full h-full overflow-y-auto overflow-x-hidden bg-[#f8fafc] select-none transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div style={{ height: "700vh" }} className="relative w-full">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

          {/* Minimal Dot Grid */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.09) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              backgroundPosition: "center center",
            }}
          />

          {/* Top-Left Minimal Logo */}
          <header className="absolute top-6 left-7 z-30 pointer-events-none">
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
              <span className="text-[#e11b22]">AI</span>
              <span className="text-[#0f172a]">4IELTS</span>
              <span className="text-[#e11b22]">+</span>
            </div>
          </header>

          {/* Scene 00: Interactive 3D Hero Image */}
          <div
            ref={openingLayerRef}
            className="absolute inset-0 z-20 flex items-center justify-center px-6 pointer-events-none"
          >
            <div className="w-full max-w-5xl flex items-center justify-center" style={{ perspective: "1400px" }}>
              <div
                ref={heroCardRef}
                className="relative w-full rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_30px_80px_rgba(15,23,42,0.14)]"
                style={{ aspectRatio: "16 / 8.15", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                <img
                  src="/ai4ielts-intro-hero.jpg"
                  alt="AI4IELTS+ Interactive Opening"
                  className="w-full h-full object-cover"
                />
                <div
                  ref={heroLightRef}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.55) 0%, transparent 55%)",
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scene 06: Finale Logo AI4IELTS+ & START Button */}
          <div
            ref={finaleUiRef}
            className="absolute inset-x-0 bottom-10 z-30 flex flex-col items-center justify-center gap-4 opacity-0 pointer-events-none transition-opacity duration-300"
          >
            <div className="text-2xl sm:text-3xl font-black tracking-tight">
              <span className="text-[#e11b22]">AI</span>
              <span className="text-[#0f172a]">4IELTS</span>
              <span className="text-[#e11b22]">+</span>
            </div>

            <button
              type="button"
              onClick={handleStartClick}
              className="px-12 py-3.5 rounded-2xl bg-[#e11b22] hover:bg-[#b91c1c] text-white font-black text-base sm:text-lg tracking-[0.18em] transition transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_12px_35px_rgba(225,27,34,0.4)]"
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
