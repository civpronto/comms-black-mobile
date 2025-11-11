---
---

# Armoury
Purpose-built secure communication kits tailored to your threat profile.  
Conduct our <a href="/threat-assessment.html" style="text-decoration:underline;font-weight:600;">Threat Assessment</a> to discover your threat profile.

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

  /* product name + price inline */
  .tile h3 {
    margin:.1rem 0 .5rem;
    font-size:1.15rem;
    font-weight:600;
  }
  .price-inline {
    opacity:.9;
    font-weight:500;
  }

  ul { margin:0 0 .7rem .9rem; padding:0; }
  .price { font-weight:600; margin:.4rem 0 .6rem; }

  /* badge + colours */
  .badge {
    display:inline-block; font-size:.72rem; letter-spacing:.02em;
    padding:.25rem .6rem; border-radius:999px; margin-bottom:.5rem;
    font-weight:600;
    border:1px solid rgba(255,255,255,.15);
    backdrop-filter: blur(2px);
  }
  .badge.green  { background: rgba(0,170,68,.35); border-color: rgba(0,200,90,.45); }
  .badge.amber  { background: rgba(200,130,0,.35); border-color: rgba(233,150,34,.45); }
  .badge.red    { background: rgba(180,0,0,.35); border-color: rgba(230,50,50,.45); }
  .badge.esim   { background: rgba(0,0,0,.35); border-color: rgba(255,255,255,.15); }

  .cta { display:flex; gap:.5rem; align-items:center; margin-top:.5rem }
  .cta .btn { padding:.55rem .9rem }

  /* ---- Image carousel ---- */
  .carousel {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: .9rem;
  }
  .carousel img {
    display:block;
    width:100%;
    height:auto;
    object-fit:cover;
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
    cursor:pointer;
  }
  .carousel .dot.active { background: rgba(255,255,255,.9); }
  .carousel.hidden-arrows .nav { display:none; } 
</style>




<div class="tiles">

  <!-- SHIELD -->
  <article class="tile" id="shield">
    <span class="badge green">Low risk threat profile</span>
    <h3>PX8-A Shield — <span class="price-inline">$1600 AUD</span></h3>

    <div class="carousel"
      data-images='[
        "/assets/img/pixel8a-grapheneos.jpg"
      ]'>
      <img src="/assets/img/pixel8a-grapheneos.jpg" alt="PX8-A Shield">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <ul>
      <li>GrapheneOS Pixel 8a</li>
      <li>BYO SIM</li>
      <li>Privacy app suite</li>
      <li>Baseline privacy</li>
    </ul>

    <div class="cta">
      <a class="btn" href="/armoury/shield.html">View kit</a>
    </div>
  </article>




  <!-- SHADOW -->
  <article class="tile" id="shadow">
    <span class="badge amber">Moderate-high risk threat profile</span>
    <h3>PX8-A Shadow — <span class="price-inline">$1800 AUD</span></h3>

    <div class="carousel"
      data-images='[
        "/assets/img/pixel8a-grapheneos.jpg",
        "/assets/img/esim.png",
        "/assets/img/faraday-medium.jpeg"
      ]'>
      <img src="/assets/img/pixel8a-grapheneos.jpg" alt="PX8-A Shadow">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <ul>
      <li>GrapheneOS Pixel 8a</li>
      <li>Anonymous SIM</li>
      <li>Encrypted app suite</li>
      <li>Faraday bag (medium)</li>
    </ul>

    <div class="cta">
      <a class="btn" href="/armoury/shadow.html">View kit</a>
    </div>
  </article>




  <!-- GHOST -->
  <article class="tile" id="ghost">
    <span class="badge red">High risk threat profile</span>
    <h3>PX8-A Ghost — <span class="price-inline">$2500 AUD</span></h3>

    <div class="carousel"
      data-images='[
        "/assets/img/pixel8a-grapheneos.jpg",
        "/assets/img/esim.png",
        "/assets/img/faraday-large.jpeg",
        "/assets/img/nw750.jpg"
      ]'>
      <img src="/assets/img/pixel8a-grapheneos.jpg" alt="PX8-A Ghost">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <ul>
      <li>GrapheneOS Pixel 8a</li>
      <li>NW750 privacy router</li>
      <li>Anonymous SIM</li>
      <li>Faraday bag (large)</li>
    </ul>

    <div class="cta">
      <a class="btn" href="/armoury/ghost.html">View kit</a>
    </div>
  </article>




  <!-- PRIVACY SIM -->
  <article class="tile" id="privacy-sim">
    <span class="badge esim">eSIM — Global</span>
    <h3>Privacy SIM recharge</h3>

    <div class="carousel"
      data-images='[
        "/assets/img/esim.png"
      ]'>
      <img src="/assets/img/esim.png" alt="eSIM">
      <button class="nav prev">‹</button>
      <button class="nav next">›</button>
      <div class="dots"></div>
    </div>

    <ul>
      <li>Anonymous registration</li>
      <li>Global coverage</li>
      <li>Unlimited expiry</li>
      <li>$10AUD/GB</li>
    </ul>

    <div class="cta">
      <a class="btn" href="/armoury/privacy-sim.html">View SIM</a>
    </div>
  </article>

</div>




<script>
(function(){
  function initCarousel(root){
    try {
      var images = JSON.parse(root.getAttribute('data-images'));
      var imgEl = root.querySelector('img');
      var prev = root.querySelector('.prev');
      var next = root.querySelector('.next');
      var dotsWrap = root.querySelector('.dots');
      var i = 0;

      if (!images || images.length <= 1) {
        root.classList.add('hidden-arrows');
      }

      dotsWrap.innerHTML = '';
      images.forEach(function(_, idx){
        var d = document.createElement('span');
        d.className = 'dot' + (idx === 0 ? ' active' : '');
        d.addEventListener('click', function(){ i = idx; render(); });
        dotsWrap.appendChild(d);
      });

      function render(){
        imgEl.src = images[i];
        dotsWrap.querySelectorAll('.dot').forEach(function(dot, idx){
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
