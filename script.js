
// THEME TOGGLE (dark default)
(function(){
  const btn = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const KEY = 'cbm-theme';
  function apply(theme){
    if(theme === 'light'){
      root.setAttribute('data-theme','light');
      if(btn){ btn.setAttribute('aria-pressed','true'); btn.textContent='🌞'; }
    }else{
      root.removeAttribute('data-theme');
      if(btn){ btn.setAttribute('aria-pressed','false'); btn.textContent='🌙'; }
    }
  }
  apply(localStorage.getItem(KEY));
  if(btn){
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      if(next === 'light'){ localStorage.setItem(KEY,'light'); }
      else{ localStorage.removeItem(KEY); }
      apply(localStorage.getItem(KEY));
    });
  }
})();

// MOBILE MENU: full-screen slide-in + focus trap + ESC + tap-outside + scroll lock
(function(){
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = mobileMenu ? mobileMenu.querySelector('.close-btn') : null;
  let lastFocus = null;

  function getFocusable(container){
    return Array.from(container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
  }

  function openMenu(){
    if(!mobileMenu) return;
    lastFocus = document.activeElement;
    mobileMenu.hidden = false;
    requestAnimationFrame(()=>{
      mobileMenu.classList.add('active');
      document.body.classList.add('no-scroll');
      if(hamburger) hamburger.setAttribute('aria-expanded','true');
      const f = getFocusable(mobileMenu);
      if(f.length){ f[0].focus(); }
    });
  }

  function closeMenu(){
    if(!mobileMenu) return;
    mobileMenu.classList.remove('active');
    if(hamburger) hamburger.setAttribute('aria-expanded','false');
    setTimeout(()=>{ mobileMenu.hidden = true; document.body.classList.remove('no-scroll'); }, 300);
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }

  if(hamburger && mobileMenu && closeBtn){
    hamburger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    mobileMenu.addEventListener('click', (e)=>{
      if(e.target.closest('a')){ closeMenu(); }
      else if(e.target === mobileMenu){ closeMenu(); }
    });
    document.addEventListener('keydown', (e)=>{
      if(!mobileMenu.classList.contains('active')) return;
      if(e.key === 'Escape'){ e.preventDefault(); closeMenu(); return; }
      if(e.key === 'Tab'){
        const f = getFocusable(mobileMenu);
        if(!f.length) return;
        const i = f.indexOf(document.activeElement);
        if(e.shiftKey){
          if(i <= 0){ e.preventDefault(); f[f.length-1].focus(); }
        }else{
          if(i === -1 || i >= f.length - 1){ e.preventDefault(); f[0].focus(); }
        }
      }
    });
  }
})();

// ACTIVE LINK HIGHLIGHT (desktop + mobile), static
(function(){
  function leaf(href){
    if(!href) return '';
    const noHash = href.split('#')[0];
    const parts = noHash.split('/');
    let file = parts.pop() || '';
    if(file === '') file = 'index.html';
    return file;
  }
  let current = leaf(window.location.pathname);
  if(current === '' || current.endsWith('/')) current = 'index.html';
  const anchors = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  anchors.forEach(a => {
    const target = leaf(a.getAttribute('href'));
    if(target === current){
      a.classList.add('active');
    }else{
      a.classList.remove('active');
    }
  });
})();
