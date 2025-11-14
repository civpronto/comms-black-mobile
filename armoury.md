﻿---
# Armoury
Purpose-built communication kits tailored to your threat profile. Visit <a href="/threat-assessment.html" class="accent-link">Threat Assessment</a> to find your profile.

<style>
  .tiles { display:grid; gap:1.25rem; margin:1.5rem 0; }
  @media (min-width:720px){ .tiles{ grid-template-columns:repeat(4,1fr);} }
  .tile { align-items:center; flex-direction:column; display:flex;
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

  /* product name + price inline */
  .tile h3 { align-self:center; text-align:center;
    margin:.1rem 0 .5rem;
    font-size:1.15rem;
    font-weight:600;
  }
  .price-inline { opacity:.9; font-weight:500; }

  ul { margin:0 0 .7rem .9rem; padding:0; }
  .price { font-weight:600; margin:.4rem 0 .6rem; }

  /* badges */
  .badge { margin-right:auto; margin-left:auto; align-self:center;
    display:inline-block; font-size:.72rem; letter-spacing:.02em;
    padding:.25rem .6rem; border-radius:999px; margin-bottom:.5rem;
    font-weight:600; border:1px solid rgba(255,255,255,.15); backdrop-filter: blur(2px);
  }
  .badge.green { background: rgba(0,170,68,.35); border-color: rgba(0,200,90,.45); }
  .badge.amber { background: rgba(200,130,0,.35); border-color: rgba(233,150,34,.45); }
  .badge.red { background: rgba(180,0,0,.35); border-color: rgba(230,50,50,.45); }
  .badge.esim { background: rgba(0,0,0,.35); border-color: rgba(255,255,255,.15); }

  .cta { align-self:stretch; margin-top:auto; justify-content:center; display:flex; gap:.5rem; align-items:center; margin-top:.5rem }
  .cta .btn { padding:.55rem .9rem }

  /* ---- Image carousel ---- */
  .carousel {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: .9rem;
    aspect-ratio: 1 / 1;     /* ✅ square at all sizes */
  }
  .carousel img {
    display:block;
    width:100%;
    height:100%;             /* fill the square */
    object-fit: cover;       /* ✅ no letterbox, consistent crop */
    object-position: center;
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

  /* Hide the dots/circles entirely */
  .carousel .dots { display:none !important; }

  /* Keep arrows hidden when only one image */
  .carousel.hidden-arrows .nav { display:none; }

  /* --- Mobile nav fix: force vertical list under hamburger (local override) --- */
  @media (max-width:719px){
    header nav ul, nav ul {
      display:flex !important;
      flex-direction: column !important;
      gap:.25rem !important;
    }
    header nav ul li, nav ul li { width:100%; }
  }
  .accent-link { color: #1eb6a6; font-weight: 600; text-decoration: underline; }

  /* ===== Comparison Table ===== */
  .compare { width:100%; border-collapse:collapse; margin:2rem 0 0; font-size:.95rem; }
  .compare th, .compare td {
    border:1px solid rgba(255,255,255,.12);
    padding:.65rem .6rem;
    vertical-align:top;
  }
  .compare thead th {
    background: rgba(255,255,255,.06);
    font-weight:700; text-align:center;
  }
  .compare tbody th { text-align:left; width: 34%; }
  .compare td { text-align:center; }
  .compare .muted { opacity:.7; }
  .compare a { color: inherit; text-decoration: underline; }
  @media (max-width: 860px){
    .compare { font-size:.9rem; }
    .compare tbody th { width:auto; }
  }
</style>




<div class="tiles">

  <!-- SHIELD -->
  <article class="tile" id="shield">
    <span class="badge green">Low risk threat profile</span>
    <h3>PX8-A SHIELD</h3>

    <div class="carousel"
      data-images='["/assets/img/shield.png", "/assets/img/pixel8a-grapheneos.jpg"]'>
      <img src="/assets/img/shield.png" alt="PX8-A Shield">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <div class="cta">
      <a class="btn" href="/armoury/shield.html">View SHIELD kit</a>
    </div>
  </article>




  <!-- SHADOW -->
  <article class="tile" id="shadow">
    <span class="badge amber">Medium risk threat profile</span>
    <h3>PX8-A SHADOW</h3>

    <div class="carousel"
      data-images='["/assets/img/shadow.png", "/assets/img/pixel8a-grapheneos.jpg", "/assets/img/faraday-medium.jpeg", "/assets/img/esim.png"]'>
      <img src="/assets/img/shadow.png" alt="PX8-A Shadow">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <div class="cta">
      <a class="btn" href="/armoury/shadow.html">View SHADOW kit</a>
    </div>
  </article>




  <!-- GHOST -->
  <article class="tile" id="ghost">
    <span class="badge red">High risk threat profile</span>
    <h3>PX8-A GHOST</h3>

    <div class="carousel"
      data-images='["/assets/img/ghost.png", "/assets/img/pixel8a-grapheneos.jpg", "/assets/img/faraday-large.jpeg", "/assets/img/nw750.jpg", "/assets/img/esim.png"]'>
      <img src="/assets/img/ghost.png" alt="PX8-A Ghost">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>
    <div class="cta">
      <a class="btn" href="/armoury/ghost.html">View GHOST kit</a>
    </div>
  </article>




  <!-- PRIVACY SIM -->
  <article class="tile" id="privacy-sim">
    <span class="badge esim">eSIM — Global</span>
    <h3>Privacy SIM Recharge</h3>

    <div class="carousel"
      data-images='[
        "/assets/img/esim.png"
      ]'>
      <img src="/assets/img/esim.png" alt="eSIM">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <div class="cta">
      <a class="btn" href="/armoury/privacy-sim.html">RECHARGE SIM</a>
    </div>
  </article>

</div>


<!-- =======================
     COMPARE MODELS (new)
     ======================= -->
<section class="container" style="margin: 1.5rem 0 2.5rem;">
  <h2 style="margin-bottom:.75rem;">Compare Models</h2>
  <table class="compare">
    <thead>
      <tr>
        <th></th>
        <th>PX8-A Shield</th>
        <th>PX8-A Shadow</th>
        <th>PX8-A Ghost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Threat level</th>
        <td>🟢 Low</td>
        <td>🟡 Medium</td>
        <td>🔴 High</td>
      </tr>
      <tr>
        <th>Primary protection</th>
        <td>App surveillance + physical seizure</td>
        <td>Dragnet + metadata collection</td>
        <td>Targeted tracking + identity correlation</td>
      </tr>
      <tr>
        <th>Network anonymisation</th>
        <td class="muted">—</td>
        <td>VPN (always-on)</td>
        <td>VPN/Tor gateway</td>
      </tr>
      <tr>
        <th>Faraday bag</th>
        <td class="muted">—</td>
        <td>Medium</td>
        <td>Large (multi-device)</td>
      </tr>
      <tr>
        <th>NitroWall ID randomisation</th>
        <td class="muted">—</td>
        <td class="muted">—</td>
        <td>✅ (IMEI/MAC/BSSID re-roll)</td>
      </tr>
      <tr>
        <th>Privacy SIM included</th>
        <td class="muted">—</td>
        <td>✅ (in handset)</td>
        <td>✅ (in router)</td>
      </tr>
      <tr>
        <th>Encrypted comms suite</th>
        <td>Signal-ready (via user install)</td>
        <td>✅ Signal + Threema</td>
        <td>✅ Signal + Threema</td>
      </tr>
      <tr>
        <th>Best for</th>
        <td>Everyday privacy</td>
        <td>Travel + moderate risk</td>
        <td>Hostile/high-risk ops</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>$1600 AUD</td>
        <td>$1800 AUD</td>
        <td>$2500 AUD</td>
      </tr>
      <tr>
        <th></th>
        <td><a href="/armoury/shield.html">View Shield →</a></td>
        <td><a href="/armoury/shadow.html">View Shadow →</a></td>
        <td><a href="/armoury/ghost.html">View Ghost →</a></td>
      </tr>
    </tbody>
  </table>
</section>



<script>
(function(){
  function initCarousel(root){
    try {
      var images = JSON.parse(root.getAttribute('data-images'));
      var imgEl = root.querySelector('img');
      var prev = root.querySelector('.prev');
      var next = root.querySelector('.next');
      var dotsWrap = root.querySelector('.dots'); // hidden via CSS
      var i = 0;

      if (!images || images.length <= 1) {
        root.classList.add('hidden-arrows');
      }

      // (Dots are hidden; logic kept minimal)
      if (dotsWrap) {
        dotsWrap.innerHTML = '';
        images.forEach(function(_, idx){
          var d = document.createElement('span');
          d.className = 'dot' + (idx === 0 ? ' active' : '');
          d.addEventListener('click', function(){ i = idx; render(); });
          dotsWrap.appendChild(d);
        });
      }

      function render(){
        imgEl.src = images[i];
        if (dotsWrap) {
          dotsWrap.querySelectorAll('.dot').forEach(function(dot, idx){
            dot.classList.toggle('active', idx === i);
          });
        }
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

      root.addEventListener('keydown', function(e){
        if (e.key === 'ArrowLeft'){ i = (i - 1 + images.length) % images.length; render(); }
        if (e.key === 'ArrowRight'){ i = (i + 1) % images.length; render(); }
      });
      root.tabIndex = 0;

      render();
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.carousel').forEach(initCarousel);
  });
})();
</script>
