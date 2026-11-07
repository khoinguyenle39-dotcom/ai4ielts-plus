"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeIeltsLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  enableInteraction?: boolean;
}

export default function ThreeIeltsLogo({
  size = "md",
  className = "",
  enableInteraction = true,
}: ThreeIeltsLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || (size === "sm" ? 110 : size === "lg" ? 280 : 160);
    const height = container.clientHeight || (size === "sm" ? 44 : size === "lg" ? 100 : 56);

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.z = size === "sm" ? 8 : size === "lg" ? 7 : 7.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting (DOL Red Aesthetic)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 8, 10);
    scene.add(dirLight1);

    const redRimLight = new THREE.PointLight(0xe11b22, 3, 20);
    redRimLight.position.set(-5, -2, 5);
    scene.add(redRimLight);

    // 3. Materials
    const redGlossMaterial = new THREE.MeshStandardMaterial({
      color: 0xe11b22,
      metalness: 0.35,
      roughness: 0.18,
      emissive: 0x440000,
    });

    const whiteGlossMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.15,
    });

    // 4. Procedural 3D Letter Shapes for "IELTS"
    const group = new THREE.Group();
    scene.add(group);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.45,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    // Helper to create 2D shapes
    const createI = () => {
      const s = new THREE.Shape();
      s.moveTo(-0.25, -1);
      s.lineTo(0.25, -1);
      s.lineTo(0.25, 1);
      s.lineTo(-0.25, 1);
      s.closePath();
      return s;
    };

    const createE = () => {
      const s = new THREE.Shape();
      s.moveTo(-0.45, -1);
      s.lineTo(0.45, -1);
      s.lineTo(0.45, -0.6);
      s.lineTo(-0.05, -0.6);
      s.lineTo(-0.05, -0.2);
      s.lineTo(0.35, -0.2);
      s.lineTo(0.35, 0.2);
      s.lineTo(-0.05, 0.2);
      s.lineTo(-0.05, 0.6);
      s.lineTo(0.45, 0.6);
      s.lineTo(0.45, 1);
      s.lineTo(-0.45, 1);
      s.closePath();
      return s;
    };

    const createL = () => {
      const s = new THREE.Shape();
      s.moveTo(-0.45, -1);
      s.lineTo(0.45, -1);
      s.lineTo(0.45, -0.6);
      s.lineTo(-0.05, -0.6);
      s.lineTo(-0.05, 1);
      s.lineTo(-0.45, 1);
      s.closePath();
      return s;
    };

    const createT = () => {
      const s = new THREE.Shape();
      s.moveTo(-0.2, -1);
      s.lineTo(0.2, -1);
      s.lineTo(0.2, 0.6);
      s.lineTo(0.5, 0.6);
      s.lineTo(0.5, 1);
      s.lineTo(-0.5, 1);
      s.lineTo(-0.5, 0.6);
      s.lineTo(-0.2, 0.6);
      s.closePath();
      return s;
    };

    const createS = () => {
      const s = new THREE.Shape();
      s.moveTo(-0.45, -1);
      s.lineTo(0.45, -1);
      s.lineTo(0.45, -0.2);
      s.lineTo(-0.05, -0.2);
      s.lineTo(-0.05, 0.2);
      s.lineTo(0.45, 0.2);
      s.lineTo(0.45, 1);
      s.lineTo(-0.45, 1);
      s.lineTo(-0.45, 0.2);
      s.lineTo(0.05, 0.2);
      s.lineTo(0.05, -0.2);
      s.lineTo(-0.45, -0.2);
      s.closePath();
      return s;
    };

    const letters = [
      { shape: createI(), x: -2.0, mat: redGlossMaterial },
      { shape: createE(), x: -1.0, mat: redGlossMaterial },
      { shape: createL(), x: 0.0, mat: redGlossMaterial },
      { shape: createT(), x: 1.0, mat: redGlossMaterial },
      { shape: createS(), x: 2.0, mat: redGlossMaterial },
    ];

    const letterMeshes: THREE.Mesh[] = [];

    letters.forEach(({ shape, x, mat }) => {
      const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geom.center();
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.x = x;
      group.add(mesh);
      letterMeshes.push(mesh);
    });

    // 5. Mouse tracking interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (!enableInteraction) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotation.current.x = y * 0.4;
      targetRotation.current.y = x * 0.6;
      isInteracting.current = true;
    };

    const handleMouseLeave = () => {
      targetRotation.current.x = 0;
      targetRotation.current.y = 0;
      isInteracting.current = false;
    };

    const handleClick = () => {
      // 360 degree energetic spin trigger
      letterMeshes.forEach((mesh, idx) => {
        const startY = mesh.rotation.y;
        const startTime = performance.now();
        const duration = 700 + idx * 80;

        const animateSpin = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const easeOutBack = 1 + 2.7 * Math.pow(progress - 1, 3) + 1.7 * Math.pow(progress - 1, 2);
          mesh.rotation.y = startY + easeOutBack * Math.PI * 2;
          if (progress < 1) requestAnimationFrame(animateSpin);
          else mesh.rotation.y = 0;
        };
        requestAnimationFrame(animateSpin);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth damping (lerp)
      group.rotation.x += (targetRotation.current.x - group.rotation.x) * 0.1;
      group.rotation.y += (targetRotation.current.y - group.rotation.y) * 0.1;

      // Subtle breathing wave when idle
      if (!isInteracting.current) {
        letterMeshes.forEach((mesh, idx) => {
          mesh.position.y = Math.sin(elapsed * 2.5 + idx * 0.8) * 0.08;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [size, enableInteraction]);

  return (
    <div
      ref={containerRef}
      className={`cursor-pointer select-none inline-flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${
        size === "sm" ? "w-[120px] h-[44px]" : size === "lg" ? "w-[280px] h-[100px]" : "w-[160px] h-[56px]"
      } ${className}`}
      title="3D IELTS Logo - Di chuột hoặc click để tương tác!"
    />
  );
}
