---
 
---

# Armoury
Purpose-built secure communication kits tailored to your threat profile. Conduct our <a href="/threat-assessment.html" style="text-decoration:underline;font-weight:600;">Threat Assessment</a> to discover your threat profile.

<style>
  .tiles { display:grid; gap:1.25rem; margin:1.5rem 0; }
  @media (min-width:720px){ .tiles{ grid-template-columns:repeat(3,1fr);} }
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
  .tile ul{ margin:.5rem 0 1rem 1.1rem }
  .tile li{ margin:.25rem 0 }
  .badge{
    display:inline-block; font-size:.72rem; letter-spacing:.02em;
    padding:.2rem .5rem; border-radius:999px; margin-bottom:.4rem;
    background: rgba(0,0,0,.25); border:1px solid rgba(255,255,255,.12);
  }
  .cta { display:flex; gap:.5rem; align-items:center; margin-top:.5rem }
  .cta .btn { padding:.55rem .9rem; border:1px solid rgba(255,255,255,.12); border-radius:999px; text-decoration:none }
  .cta .btn:hover{ border-color: rgba(255,255,255,.18) }

  /* Details reveal */
  .details { display:none; margin-top:.75rem }
  .tile.open .details { display:block }
  .toggle { cursor:pointer }
</style>

<div class="tiles">

  <!-- SHIELD -->
  <article class="tile" id="shield" data-tile>
    <span class="badge">Pixel 8a — GrapheneOS</span>
    <h3>PX8-A Shield — Low risk — $1600 AUD</h3>
    <div class="sub">Designed for low risk workflows; protects against app-level surveillance & physical theft/seizure.</div>

    <div class="cta">
      <a class="btn toggle" data-toggle>View details</a>
    </div>

    <div class="details">
      <h4>Hardware</h4>
      <ul>
        <li>Pixel 8a handset</li>
        <li>Shockproof phone case</li>
        <li>Privacy screen protector</li>
      </ul>

      <h4>Software (GrapheneOS)</h4>
      <ul>
        <li><strong>Hardened kernel & libc</strong>: improved memory-safety (zero-initialization, hardened malloc), stronger control-flow integrity, stack protections.</li>
        <li><strong>Verified Boot & firmware integrity</strong>: ensures bootloader, system and firmware haven’t been tampered with.</li>
        <li><strong>Attack surface reduction</strong>: disables/restricts optional hardware (USB-C data when locked, pogo-pins, NFC/UWB, sensors) and limits background services.</li>
        <li><strong>USB-C control</strong>: charging-only mode when locked to block data-connection attacks.</li>
        <li><strong>Improved sandboxing & isolation</strong>: stronger app/process isolation beyond standard Android.</li>
        <li><strong>Fine-grained permission controls</strong>: one-time permissions, foreground-only access, sensor toggles, storage & contact scopes, per-app revocable network access.</li>
        <li><strong>Network & sensor toggles + default MAC randomisation</strong> (Wi-Fi/Bluetooth; mic/camera/sensors).</li>
        <li><strong>No built-in Google services/telemetry</strong> by default; optional sandboxed Play services.</li>
        <li><strong>Privacy-focused apps</strong>: hardened browser, secure camera (removes EXIF), secure PDF viewer, encrypted backups (SeedVault).</li>
        <li><strong>Timely OS updates & device support</strong> (focused device set).</li>
        <li><strong>App compatibility</strong> via alternative stores or optional sandboxed Google Play.</li>
        <li><strong>Duress PIN/Password</strong>: irreversible wipe (encryption keys & installed eSIMs) and power-off.</li>
        <li><strong>Encrypted storage & backups</strong> with strong key-management.</li>
      </ul>
    </div>
  </article>

  <!-- SHADOW -->
  <article class="tile" id="shadow" data-tile>
    <span class="badge">Pixel 8a — GrapheneOS</span>
    <h3>PX8-A Shadow — Moderate/High risk — $1800 AUD</h3>
    <div class="sub">Defends against passive dragnet surveillance; stronger posture against targeted surveillance.</div>

    <div class="cta">
      <a class="btn toggle" data-toggle>View details</a>
    </div>

    <div class="details">
      <h4>Hardware</h4>
      <ul>
        <li>Pixel 8a — 6.1" Gorilla Glass, Tensor G3, 8GB RAM, 128GB encrypted storage</li>
        <li>NW750 NitroWall — IMEI, BSSID and MAC randomised/re-rollable to evade IMSI catcher/cell-tower tracking</li>
        <li>Shockproof case & privacy screen protector — extends device lifetime; deters shoulder-surfing</li>
        <li>Medium Faraday bag — total device isolation during travel & storage between sessions</li>
      </ul>

      <h4>Software</h4>
      <ul>
        <li>GrapheneOS — privacy & security-focused encrypted OS</li>
        <li>Mullvad VPN — always-on kill switch; encrypts traffic and protects against local eavesdropping/manipulation</li>
        <li>Privacy SIM (in handset) — global coverage, anonymously registered eSIM (data-only, unlimited expiry, 10GB included)</li>
        <li>Signal & Threema — gold-standard encrypted messaging/calls/file sharing</li>
        <li>KeePassDX — offline encrypted password manager</li>
        <li>OpenKeychain — PGP encryption/decryption toolkit</li>
        <li>Cake Wallet — anonymous crypto storage & transactions, separated from real-world identity</li>
      </ul>
    </div>
  </article>

  <!-- GHOST -->
  <article class="tile" id="ghost" data-tile>
    <span class="badge">Pixel 8a — GrapheneOS/OpenWrt</span>
    <h3>PX8-A Ghost — High risk — $2500 AUD</h3>
    <div class="sub">Built for high-risk workflows; resists targeted surveillance & advanced location correlation.</div>

    <div class="cta">
      <a class="btn toggle" data-toggle>View details</a>
    </div>

    <div class="details">
      <h4>Hardware</h4>
      <ul>
        <li>Pixel 8a — 6.1" Gorilla Glass, Tensor G3, 8GB RAM, 128GB encrypted storage</li>
        <li>NW750 NitroWall — IMEI, BSSID and MAC randomised/re-rollable to evade IMSI catcher/cell-tower tracking</li>
        <li>Shockproof phone case & privacy screen protector — extends device lifetime; deters shoulder-surfing</li>
        <li>Large Faraday bag — total multi-device isolation during travel & storage between sessions</li>
      </ul>

      <h4>Software</h4>
      <ul>
        <li>GrapheneOS — privacy & security-focused encrypted OS</li>
        <li>OpenWrt — integrated VPN/Tor; encrypts traffic and protects against local eavesdropping/manipulation</li>
        <li>Privacy SIM (in router) — global coverage, anonymously registered eSIM (data-only, unlimited expiry, 10GB included)</li>
        <li>Signal & Threema — gold-standard encrypted communications suite</li>
        <li>KeePassDX — offline encrypted password manager</li>
        <li>OpenKeychain — PGP encryption/decryption toolkit</li>
        <li>Cake Wallet — anonymous crypto storage & transactions separated from real-world identity</li>
      </ul>
    </div>
  </article>

</div>

<script>
  // Simple toggle for details reveal per tile
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-tile]').forEach(function(tile){
      var btn = tile.querySelector('[data-toggle]');
      if(!btn) return;
      btn.addEventListener('click', function(e){
        e.preventDefault();
        tile.classList.toggle('open');
        btn.textContent = tile.classList.contains('open') ? 'Hide details' : 'View details';
      });
    });
  });
</script>

---

## Privacy SIM — $150 AUD

**Short description / features**  
Anonymous data-only eSIM protects against phone-number-based SIM-swap attacks and purchase-record identity correlation.  
Global coverage footprint and unlimited expiry enhance operational flexibility across borders and ensure unused data never expires.  
10GB data included with SIM for ease of use straight out of the box.

### Data Top-Up
- 1GB — $10 ($10/GB)  
- 10GB — $100 ($10/GB)  
- 20GB — $180 ($9/GB)  
- 50GB — $400 ($8/GB)  
- 100GB — $700 ($7/GB)
