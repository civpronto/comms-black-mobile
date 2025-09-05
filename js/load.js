// Simple HTML partial loader + year + active link marker
(async function () {
  async function inject(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;
    const res = await fetch(url, { cache: 'no-store' });
    const html = await res.text();
    el.innerHTML = html;
  }
  await Promise.all([
    inject('#site-header', 'header.html'),
    inject('#site-footer', 'footer.html')
  ]);

  // After injection, set up nav toggle and active link
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  // Mark active nav item
  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('#primary-nav a').forEach(a => {
    const href = new URL(a.getAttribute('href'), location.href).pathname;
    if (href === path) a.classList.add('active');
  });
})();