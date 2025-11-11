---
 
---

# Armoury
Purpose-built secure communication kits tailored to your threat profile. Conduct our <a href="/threat-assessment.html" style="text-decoration:underline;font-weight:600;">Threat Assessment</a> to discover your threat profile.

<style>
  .tiles { display:grid; gap:1.25rem; margin:1.5rem 0; }
  @media (min-width:720px){ .tiles{ grid-template-columns:repeat(4,1fr);} }
  .tile {
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px; padding: 1.25rem 1rem 1rem;
    transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  }
  .tile:hover {
    transform: translateY(-2px);
    border-color: rgba(255,255,255,.18);
    box-shadow: 0 8px 20px rgba(0,0,0,.25);
  }
  .tile h3{ margin:.1rem 0 .35rem; font-size:1.15rem }
  .tile .sub{ opacity:.9; font-size:.92rem; margin-bottom:.6rem; }
  .badge{
    display:inline-block; font-size:.72rem; letter-spacing:.02em;
    padding:.2rem .5rem; border-radius:999px; margin-bottom:.4rem;
    background: rgba(0,0,0,.25); border:1px solid rgba(255,255,255,.12);
  }
  .cta { display:flex; gap:.5rem; align-items:center; margin-top:.5rem }
  .cta .btn { padding:.55rem .9rem }
  ul { margin: 0 0 .4rem .9rem; padding:0; }

  /* ---- Image carousel ---- */
  .carousel {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: .75rem;
  }
  .carousel img {
    display:block;
    width:100%;
    height:auto;
  }
  .carousel .nav {
    position:absolute; top:50%; transform:translateY(-50%);
    border:1px solid rgba(255,255,255,.18);
    background: rgba(0,0,0,.35);
    backdrop-filter: blur(2px);
    padding:.3rem .55rem;
    border-radius:999px;
    cursor:pointer;
    line-height:1;
    font-size:1.1rem;
    color:#fff;
  }
  .carousel .prev { left:.5rem; }
  .carousel .next { right:.5rem; }
  .carousel .nav:hover { background: rgba(0,0,0,.5); }
  .carousel .dots {
    position:absolute; bottom:.4rem; left:50%; transform:translateX(-50%);
    display:flex; gap:.3rem;
  }
  .carousel .dot {
    width:6px; height:6px; border-radius:999px;
    background: rgba(255,255,255,.35);
  }
  .carousel .dot.active { background: rgba(255,255,255,.9); }
  .carousel.hidden-arrows .nav { display:none; } /* auto-hide for single-image */
</style>


<div class="tiles">

  <!-- SHIELD -->
  <article class="tile" id="shield">
    <span class="badge">Low risk threat profile</span>

    <!-- Single-image carousel (arrows auto-hidden) -->
    <div class="carousel" data-images='["/assets/img/pixel8a-grapheneos.jpg"]' aria-label="PX8-A Shield images">
      <img src="/assets/img/pixel8a-grapheneos.jpg" alt="PX8-A Shield">
      <button class="nav prev" aria-label="Previous image">‹</button>
      <button class="nav next" aria-label="Next image">›</button>
      <div class="dots"></div>
    </div>

    <h3>PX8-A Shield</h3>
    <div class="sub">
      $1600 AUD<br>
      Designed for low risk workflows, protects against app level surveillance & physical theft/seizure.
    </div>
    <ul>
      <li>GrapheneOS Pixel 8a</li>
      <li>BYO SIM</li>
      <li>Privacy app suite</li>
    </ul>
    <div class="cta">
      <a class="btn" href="/armoury/shield.html">View kit</a>
    </div>
  </article>


  <!-- SHADOW -->
  <article class="tile" id="shadow">
    <span class="badge">Moderate-high risk profile</span>

    <div class="carousel"
         data-images='[
           "/assets/img/pixel8a-grapheneos.jpg",
           "/assets/img/faraday-medium.jpeg"
         ]'
         aria-label="PX8-A Shadow images">
      <img src="/assets/img/pixel8a-grapheneos.jpg" alt="PX8-A Shadow">
      <button class="nav prev" aria-label="Previous image">‹</button>
      <button class="nav next" aria-label="Next image">›</button>
      <div class="dots"></div>
    </div>

    <h3>PX8-A Shadow</h3>
    <div class="sub">
      $1800 AUD<br>
      Designed for moderate–high risk workflows, protects against passive dragnet surveillance. Enhanced posture against targeted surveillance.
    </div>
    <ul>
      <li>GrapheneOS Pixel 8a</li>
      <li>Anonymous SIM</li>
      <li>Encrypted communication suite</li>
      <li>Faraday bag (medium)</li>
    </ul>
    <div class="cta">
      <a class="btn" href="/armoury/shadow.html">View kit</a>
    </div>
  </article>


  <!-- GHOST -->
  <article class="tile" id="ghost">
    <span class="badge">High risk threat profile</span>

    <div class="carousel"
         data-images='[
           "/assets/img/pixel8a-grapheneos.jpg",
           "/assets/img/faraday-large.jpeg",
           "/assets/img/nw750.jpg"
         ]'
         aria-label="PX8-A Ghost images">
      <img src="/assets/img/pixel8a-grapheneos.jpg" alt="PX8-A Ghost">
      <button class="nav prev" aria-label="Previous image">‹</button>
      <button class="nav next" aria-label="Next image">›</button>
      <div class="dots"></div>
    </div>

    <h3>PX8-A Ghost</h3>
    <div class="sub">
      $2500 AUD<br>
      Designed for high risk workflows, protects against targeted surveillance and advanced location correlation.
    </div>
    <ul>
      <li>GrapheneOS Pixel 8a</li>
      <li>NW750 privacy router</li>
      <li>Anonymous SIM</li>
      <li>Encrypted communication suite</li>
      <li>Faraday bag (large)</li>
    </ul>
    <div class="cta">
      <a class="btn" href="/armoury/ghost.html">View kit</a>
    </div>
  </article>


  <!-- PRIVACY SIM -->
  <article class="tile" id="privacy-sim">
    <span class="badge">eSIM — Global</span>
    <h3>Privacy SIM recharge</h3>
    <div class="sub">
      • Anonymously registered<br>
      • Global coverage<br>
      • Unlimited expiry<br><br>

      1GB — $10 ($10/GB)<br>
      10GB — $100 ($10/GB)<br>
      20GB — $180 ($9/GB)<br>
      50GB — $400 ($8/GB)<br>
      100GB — $700 ($7/GB)
    </div>
    <div class="cta">
      <a class="btn" href="/armoury/privacy-sim.html">View SIM</a>
    </div>
  </article>

</div>

<script>
  // Tiny vanilla JS carousel
  (function(){
    function initCarousel(root){
      try {
        var data = root.getAttribute('data-images');
        var images = JSON.parse(data);
        var imgEl = root.querySelector('img');
        var prev = root.querySelector('.prev');
        var next = root.querySelector('.next');
        var dotsWrap = root.querySelector('.dots');
        var i = 0;

        // Hide arrows if only one image
        if (!images || images.length <= 1) {
          root.classList.add('hidden-arrows');
        }

        // Build dots
        dotsWrap.innerHTML = '';
        images.forEach(function(_, idx){
          var d = document.createElement('span');
          d.className = 'dot' + (idx === 0 ? ' active' : '');
          d.addEventListener('click', function(){ i = idx; render(); });
          dotsWrap.appendChild(d);
        });

        function render(){
          imgEl.src = images[i];
          var dots = dotsWrap.querySelectorAll('.dot');
          dots.forEach(function(dot, idx){
            dot.classList.toggle('active', idx === i);
          });
        }

        prev && prev.addEventListener('click', function(e){
          e.preventDefault();
          i = (i - 1 + images.length) % images.length;
          render();
        });

        next && next.addEventListener('click', function(e){
          e.preventDefault();
          i = (i + 1) % images.length;
          render();
        });

        // Keyboard: allow left/right when tile focused
        root.addEventListener('keydown', function(e){
          if (e.key === 'ArrowLeft'){ i = (i - 1 + images.length) % images.length; render(); }
          if (e.key === 'ArrowRight'){ i = (i + 1) % images.length; render(); }
        });
        root.tabIndex = 0;

        render();
      } catch (e) {
        console && console.warn && console.warn('Carousel init failed:', e);
      }
    }

    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.carousel').forEach(initCarousel);
    });
  })();
</script>
