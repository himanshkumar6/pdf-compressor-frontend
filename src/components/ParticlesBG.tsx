import React, { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  phase: number; // twinkle phase
  hue: number;   // color shift
};

const ParticlesBG: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  // ✅ LCP OPTIMIZATION: Disable particles on mobile & reduced motion
  const [shouldRender, setShouldRender] = React.useState(true);

  React.useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReduced) {
      setShouldRender(false);
    }
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: P[] = [];
    let animationFrameId = 0;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const getParticleCount = (w: number, h: number) => {
      const area = w * h;
      if (w < 600) return Math.floor(area / 26000); // mobile less
      if (w < 1000) return Math.floor(area / 21000);
      return Math.floor(area / 17000);
    };

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * DPR);
      canvas.height = Math.floor(window.innerHeight * DPR);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;

      const count = getParticleCount(window.innerWidth, window.innerHeight);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.55 * DPR,
          vy: (Math.random() - 0.5) * 0.55 * DPR,
          r: (Math.random() * 1.9 + 0.6) * DPR,
          opacity: Math.random() * 0.42 + 0.08,
          phase: Math.random() * Math.PI * 2,
          hue: 185 + Math.random() * 55, // 185..240 (cyan->purple)
        });
      }
    };

    const isDarkTheme = () => document.documentElement.classList.contains("dark");

    const drawAuroraNebula = () => {
      const w = canvas.width;
      const h = canvas.height;
      const dark = isDarkTheme();

      // base overlay (light mode must not get "smoked" / grey)
      ctx.fillStyle = dark ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.72)";
      ctx.fillRect(0, 0, w, h);

      // aurora blobs (cheap but looks premium)
      const blob = (x: number, y: number, r: number, c1: string, c2: string) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, c1);
        g.addColorStop(1, c2);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      };

      if (dark) {
        blob(w * 0.20, h * 0.15, Math.max(w, h) * 0.55, "rgba(34,211,238,0.10)", "rgba(0,0,0,0)");
        blob(w * 0.82, h * 0.25, Math.max(w, h) * 0.60, "rgba(168,85,247,0.10)", "rgba(0,0,0,0)");
        blob(w * 0.55, h * 0.88, Math.max(w, h) * 0.70, "rgba(59,130,246,0.07)", "rgba(0,0,0,0)");
      } else {
        blob(w * 0.20, h * 0.15, Math.max(w, h) * 0.55, "rgba(8,145,178,0.06)", "rgba(255,255,255,0)");
        blob(w * 0.82, h * 0.25, Math.max(w, h) * 0.60, "rgba(147,51,234,0.05)", "rgba(255,255,255,0)");
        blob(w * 0.55, h * 0.88, Math.max(w, h) * 0.70, "rgba(37,99,235,0.04)", "rgba(255,255,255,0)");
      }
    };

    const drawLines = () => {
      const maxDist = 155 * DPR;
      const dark = isDarkTheme();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < maxDist) {
            const base = dark ? 0.18 : 0.06;
            const alpha = (1 - d / maxDist) * base;
            const hue = (a.hue + b.hue) / 2;
            ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${alpha})`;
            ctx.lineWidth = 1 * DPR;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const drawMouseAura = () => {
      const mouse = mouseRef.current;
      if (!mouse.active) return;

      const mx = mouse.x * DPR;
      const my = mouse.y * DPR;
      const dark = isDarkTheme();

      // premium aura ring
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, 220 * DPR);
      g.addColorStop(0, dark ? "rgba(34,211,238,0.10)" : "rgba(8,145,178,0.08)");
      g.addColorStop(0.35, dark ? "rgba(168,85,247,0.06)" : "rgba(147,51,234,0.04)");
      g.addColorStop(1, dark ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)");

      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // subtle ring
      ctx.strokeStyle = dark ? "rgba(34,211,238,0.15)" : "rgba(8,145,178,0.12)";
      ctx.lineWidth = 1 * DPR;
      ctx.beginPath();
      ctx.arc(mx, my, 55 * DPR, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawParticle = (p: P, t: number) => {
      const dark = isDarkTheme();

      // twinkle effect
      const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.002 + p.phase));
      const op = clamp(p.opacity * tw * (dark ? 1 : 0.55), dark ? 0.06 : 0.03, dark ? 0.55 : 0.22);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      ctx.shadowBlur = 18 * DPR;
      ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, ${dark ? 0.45 : 0.22})`;
      ctx.fillStyle = `hsla(${p.hue}, 100%, 65%, ${op})`;
      ctx.fill();

      // tiny bright core
      ctx.shadowBlur = 0;
      ctx.fillStyle = `hsla(${p.hue}, 100%, 85%, ${op * 0.75})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.6 * DPR, p.r * 0.35), 0, Math.PI * 2);
      ctx.fill();
    };

    const update = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;

      const mouse = mouseRef.current;
      const mx = mouse.x * DPR;
      const my = mouse.y * DPR;

      particles.forEach((p) => {
        // slight natural drift
        p.phase += 0.003;

        // mouse magnet effect
        if (mouse.active) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const influence = 240 * DPR;
          if (dist < influence) {
            // magnetic pull (looks premium)
            const pull = (1 - dist / influence) * 0.06;
            p.vx += (dx / (dist || 1)) * pull;
            p.vy += (dy / (dist || 1)) * pull;

            // hue gets a bit more vibrant near mouse
            p.hue = clamp(p.hue + 0.15, 180, 250);
          }
        }

        // movement
        p.x += p.vx;
        p.y += p.vy;

        // wrap edges
        if (p.x > w) p.x = 0;
        if (p.x < 0) p.x = w;
        if (p.y > h) p.y = 0;
        if (p.y < 0) p.y = h;

        // damping
        p.vx *= 0.992;
        p.vy *= 0.992;

        // subtle per-frame color shift (cyan->purple cycle)
        p.hue = 195 + 35 * Math.sin(t * 0.00008 + p.phase);
      });
    };

    const animate = (t: number) => {
      // clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // nebula + aurora
      drawAuroraNebula();

      // interaction aura
      drawMouseAura();

      // update & render
      update(t);
      drawLines();
      particles.forEach((p) => drawParticle(p, t));

      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches?.[0];
      if (!t) return;
      mouseRef.current = { x: t.clientX, y: t.clientY, active: true };
    };
    const onTouchEnd = () => {
      mouseRef.current.active = false;
    };

    resize();
    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[var(--bg)]">
        <div className="absolute inset-0 bg-[image:var(--gradient-bg)] opacity-60" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 particles-bg"
    />
  );
};

export default ParticlesBG;
