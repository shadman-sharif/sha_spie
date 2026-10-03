(() => {
  'use strict';

  const root = document.documentElement;
  const progress = document.getElementById('progress');
  const canvas = document.getElementById('network');
  const menu = document.querySelector('.site-toggle');
  const nav = document.querySelector('.site-nav');

  // Keep the portfolio visible even if a non-essential enhancement fails.
  const showContent = () => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('show'));
  };

  // Scroll progress
  const updateProgress = () => {
    if (!progress) return;
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const value = max ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
    progress.style.width = value + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });

  // Reveal-on-scroll. If IntersectionObserver is unavailable, show everything.
  if ('IntersectionObserver' in window) {
    root.classList.add('js');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    showContent();
  }

  // Solar system + starfield background (subtle)
  const initSpace = () => {
    if (!canvas) return;
    const ctx = canvas.getContext?.('2d');
    if (!ctx) return;

    let width = 0, height = 0, dpr = 1, t = 0;
    let stars = [];
    let cx = 0, cy = 0;

    // Planets: radius from sun (relative), size, color, speed, orbit tilt
    const planets = [
      { name: 'Mercury', r: 0.11, size: 3.0, color: '#c8c0b0', speed: 1.8, phase: 0.2 },
      { name: 'Venus',   r: 0.17, size: 4.2, color: '#e8c87a', speed: 1.35, phase: 1.1 },
      { name: 'Earth',   r: 0.24, size: 4.5, color: '#5b9fd4', speed: 1.1, phase: 2.4 },
      { name: 'Mars',    r: 0.32, size: 3.8, color: '#e05a3a', speed: 0.9, phase: 3.8 },
      { name: 'Jupiter', r: 0.48, size: 8.5, color: '#d4a574', speed: 0.5, phase: 0.7 },
      { name: 'Saturn',  r: 0.62, size: 7.0, color: '#e0c898', speed: 0.36, phase: 4.2, ring: true },
      { name: 'Uranus',  r: 0.76, size: 5.2, color: '#7ec8c8', speed: 0.25, phase: 5.5 },
      { name: 'Neptune', r: 0.90, size: 5.0, color: '#4a7ec8', speed: 0.2, phase: 1.9 }
    ];

    const makeStars = () => {
      const count = Math.min(220, Math.floor((width * height) / 5000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        s: 0.5 + Math.random() * 1.4,
        a: 0.35 + Math.random() * 0.55,
        tw: Math.random() * Math.PI * 2,
        tws: 0.015 + Math.random() * 0.03
      }));
    };

    const resize = () => {
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Place sun slightly left-center so content on the right stays readable
      cx = width * 0.50;
      cy = height * 0.50;
      makeStars();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.007;

      // Stars
      for (const s of stars) {
        s.tw += s.tws;
        const alpha = s.a * (0.6 + 0.4 * Math.sin(s.tw));
        ctx.beginPath();
        ctx.fillStyle = `rgba(230,235,245,${alpha})`;
        ctx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
        ctx.fill();
      }

      const scale = Math.min(width, height) * 0.55;

      // Orbit rings (very subtle)
      for (const p of planets) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(140,160,200,0.22)';
        ctx.lineWidth = 1;
        ctx.ellipse(cx, cy, p.r * scale, p.r * scale * 0.55, -0.25, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Sun glow
      const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 42);
      sunGrad.addColorStop(0, 'rgba(255,230,140,1)');
      sunGrad.addColorStop(0.3, 'rgba(255,190,70,0.7)');
      sunGrad.addColorStop(0.65, 'rgba(255,150,40,0.2)');
      sunGrad.addColorStop(1, 'rgba(255,120,20,0)');
      ctx.beginPath();
      ctx.fillStyle = sunGrad;
      ctx.arc(cx, cy, 42, 0, Math.PI * 2);
      ctx.fill();

      // Sun core
      ctx.beginPath();
      ctx.fillStyle = '#ffe8a0';
      ctx.shadowColor = 'rgba(255,190,60,1)';
      ctx.shadowBlur = 24;
      ctx.arc(cx, cy, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Planets
      for (const p of planets) {
        const angle = t * p.speed + p.phase;
        const ox = Math.cos(angle) * p.r * scale;
        const oy = Math.sin(angle) * p.r * scale * 0.55;
        // slight tilt rotation
        const rx = ox * Math.cos(-0.25) - oy * Math.sin(-0.25);
        const ry = ox * Math.sin(-0.25) + oy * Math.cos(-0.25);
        const px = cx + rx;
        const py = cy + ry;

        // Saturn ring
        if (p.ring) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(220,200,150,0.45)';
          ctx.lineWidth = 1.5;
          ctx.ellipse(px, py, p.size * 2.2, p.size * 0.7, -0.4, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Planet body
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Soft highlight
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        ctx.arc(px - p.size * 0.25, py - p.size * 0.25, p.size * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });
    draw();
  };

  try { initSpace(); } catch (error) {
    console.warn('Solar system background disabled:', error);
  }

  // Mobile navigation
  const closeMenu = () => {
    if (!nav || !menu) return;
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation menu');
    document.body.classList.remove('menu-open');
    document.body.style.removeProperty('overflow');
  };

  if (menu && nav) {
    const toggleMenu = () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      document.body.classList.toggle('menu-open', open);
      if (open && window.innerWidth <= 980) document.body.style.overflow = 'hidden';
      else document.body.style.removeProperty('overflow');
    };

    menu.addEventListener('click', toggleMenu);
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    // Close predictably with Escape, outside click, and when returning to desktop.
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (!nav.classList.contains('open')) return;
      if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    }, { passive: true });
  }

  updateProgress();
})();
