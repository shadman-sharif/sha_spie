(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.site-nav a[href]')].filter(a => !a.classList.contains('site-nav__cta'));

  // Header: compact glass state once the page is scrolled
  const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll-spy: highlight the nav link of the section in view (home page only)
  const map = new Map();
  links.forEach(a => {
    const h = a.getAttribute('href');
    if (h && h.startsWith('#') && h.length > 1) {
      const el = document.querySelector(h);
      if (el) map.set(el, a);
    }
  });
  if (map.size && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.removeAttribute('aria-current'));
        const a = map.get(e.target);
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    map.forEach((_, el) => io.observe(el));
  }

  // Back to top
  document.querySelectorAll('[data-top]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

})();
