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
</style>

<div class="tiles">

  <!-- SHIELD -->
  <article class="tile" id="shield">
    <span class="badge">Low risk threat profile</span>
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
