import React, { useEffect, useRef, useState } from "react";

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  phase: number;
  hue: number;
};

const ParticlesBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  // ✅ MOBILE OPTIMIZATION: Particles disabled on mobile (<768px)
  // The CSS Aurora background will still provide a premium feel.
  const [showParticles, setShowParticles] = useState(true);

  useEffect(() => {
    const checkSpecs = () => {
      const isMobile = window.innerWidth <= 768;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Disable particles on mobile OR reduced motion
      setShowParticles(!isMobile && !prefersReduced);
    };

    checkSpecs();
    window.addEventListener("resize", checkSpecs);
    return () => window.removeEventListener("resize", checkSpecs);
  }, []);

  useEffect(() => {
    if (!showParticles) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true }); // optimize for transparency
    if (!ctx) return;

    let particles: P[] = [];
    let animationFrameId = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(DPR, DPR); // Simplify drawing logic
      initParticles();
    };

    const getParticleCount = (w: number) => {
      // Drastically reduced count for performance
      // Desktop: ~50-60 particles max
      if (w < 1200) return 30;
      return 50;
    };

    const initParticles = () => {
      particles = [];
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = getParticleCount(w);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4, // Slower, calmer motion
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          phase: Math.random() * Math.PI * 2,
          hue: 190 + Math.random() * 40, // Cyan to blue range
        });
      }
    };

    // Dark theme check for color adjustments
    const isDarkTheme = () => document.documentElement.classList.contains("dark");

    const drawLines = (dark: boolean) => {
      const maxDist = 130; // Reduced connection distance
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Reset composite operation for lines
      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          // Fast cleanup for distant particles
          if (Math.abs(dx) > maxDist || Math.abs(dy) > maxDist) continue;

          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * (dark ? 0.15 : 0.08); // Subtle lines
            ctx.strokeStyle = dark 
              ? `rgba(34, 211, 238, ${alpha})` // Cyan in dark
              : `rgba(8, 145, 178, ${alpha})`; // Teal in light
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const updateAndDraw = (t: number) => {
      const dark = isDarkTheme();
      const w = window.innerWidth;
      const h = window.innerHeight;

      // 1. Clear Canvas (Transparent)
      ctx.clearRect(0, 0, w, h);

      // 2. Draw Particles
      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction (Vector based push)
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = 150;
          
          if (dist < influence) {
            const force = (influence - dist) / influence;
            p.vx -= (dx / dist) * force * 0.02;
            p.vy -= (dy / dist) * force * 0.02;
            p.opacity = Math.min(0.8, p.opacity + 0.01); // Brighten on hover
          }
        }

        // Wrap around
        if (p.x > w) p.x = 0; else if (p.x < 0) p.x = w;
        if (p.y > h) p.y = 0; else if (p.y < 0) p.y = h;

        // Draw Dot
        const pulse = Math.sin(t * 0.002 + p.phase);
        const op = p.opacity * (0.8 + 0.2 * pulse); // Subtle pulse
        
        ctx.fillStyle = dark 
          ? `rgba(34, 211, 238, ${op})` 
          : `rgba(14, 116, 144, ${op})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw Lines
      drawLines(dark);

      // 4. Mouse Aura (Optional, keeps it interactive)
      if (mouseRef.current.active) {
        const { x, y } = mouseRef.current;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 200);
        g.addColorStop(0, dark ? "rgba(34,211,238,0.05)" : "rgba(8,145,178,0.05)");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    // Events
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => { mouseRef.current.active = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onLeave);
    
    // Initial start
    resize();
    
    // Start loop
    animationFrameId = requestAnimationFrame(updateAndDraw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [showParticles]);

  return (
    <>
      {/* 
        ✅ ELEMENT 1: CSS Aurora Background 
        - Always rendered (Mobile & Desktop) 
        - GPU accelerated 
        - Zero JS thread usage
      */}
      <div className="aurora-container">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* 
        ✅ ELEMENT 2: Interactive Particles
        - Only on desktop
        - Lightweight canvas
      */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-0"
          style={{ opacity: 0.8 }}
        />
      )}
    </>
  );
};

export default ParticlesBG;
