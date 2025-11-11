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
    border-radius: 16px; padding: 1.25rem 1.25rem 1rem;
    transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  }
  .tile:hover { transform: translateY(-2px); border-color: rgba(255,255,255,.18);
    box-shadow: 0 8px 20px rgba(0,0,0,.25); }
  .tile h3{ margin:.1rem 0 .35rem; font-size:1.15rem }
  .tile .sub{ opacity:.8; font-size:.92rem; margin-bottom:.6rem }
  .badge{
    display:inline-block; font-size:.72rem; letter-spacing:.02em;
    padding:.2rem .5rem; border-radius:999px; margin-bottom:.4rem;
    background: rgba(0,0,0,.25); border:1px solid rgba(255,255,255,.12);
  }
  .cta { display:flex; gap:.5rem; align-items:center; margin-top:.5rem }
  .cta .btn {
    padding:.55rem .9rem; border-radius:999px; text-decoration:none;
    background: #6e8d8a; color: #0d0d0d; border:none;
  }
  .cta .btn:hover{ filter: brightness(0.95); }

</style>

<div class="tiles">

  <article class="tile" id="shield">
    <span class="badge">Pixel 8a &mdash; GrapheneOS</span>
    <h3>PX8-A Shield &mdash; Low risk &mdash; $1600 AUD</h3>
    <div class="sub">Designed for low risk workflows; protects against app-level surveillance & physical theft/seizure.</div>
    <div class="cta">
      <a class="btn" href="/armoury/shield/">View kit</a>
    </div>
  </article>

  <article class="tile" id="shadow">
    <span class="badge">Pixel 8a &mdash; GrapheneOS</span>
    <h3>PX8-A Shadow &mdash; Moderate/High risk &mdash; $1800 AUD</h3>
    <div class="sub">Defends against passive dragnet surveillance; stronger posture against targeted surveillance.</div>
    <div class="cta">
      <a class="btn" href="/armoury/shadow/">View kit</a>
    </div>
  </article>

  <article class="tile" id="ghost">
    <span class="badge">Pixel 8a &mdash; GrapheneOS/OpenWrt</span>
    <h3>PX8-A Ghost &mdash; High risk &mdash; $2500 AUD</h3>
    <div class="sub">Built for high-risk workflows; resists targeted surveillance & advanced location correlation.</div>
    <div class="cta">
      <a class="btn" href="/armoury/ghost/">View kit</a>
    </div>
  </article>

  <article class="tile" id="privacy-sim">
    <span class="badge">eSIM &mdash; Global</span>
    <h3>Privacy SIM &mdash; $150 AUD</h3>
    <div class="sub">Anonymous global data-only eSIM with 10GB and unlimited expiry.</div>
    <div class="cta">
      <a class="btn" href="/armoury/privacy-sim/">View SIM</a>
    </div>
  </article>

</div>

---

## Privacy SIM — Quick Top-Ups

- 1GB — $10 ($10/GB)  
- 10GB — $100 ($10/GB)  
- 20GB — $180 ($9/GB)  
- 50GB — $400 ($8/GB)  
- 100GB — $700 ($7/GB)

printf "\n<!-- sync test: %s -->\n" "$(date)" >> armoury.md
git status -uno
git diff -- armoury.md | sed -n '1,80p'

