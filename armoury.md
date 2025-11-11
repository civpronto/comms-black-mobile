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
  .cta .btn { padding:.55rem .9rem }
</style>

<div class="tiles">

  <article class="tile" id="shield">
    <span class="badge">Pixel 8a &mdash; GrapheneOS</span>
    <h3>PX8-A Shield — Low risk — $1600 AUD</h3>
    <div class="sub">Designed for low risk workflows; protects against app-level surveillance & physical theft/seizure.</div>
    <div class="cta">
      <a class="btn" href="#shield-details">View details</a>
    </div>
  </article>

  <article class="tile" id="shadow">
    <span class="badge">Pixel 8a &mdash; GrapheneOS</span>
    <h3>PX8-A Shadow — Moderate/High risk — $1800 AUD</h3>
    <div class="sub">Defends against passive dragnet surveillance; stronger posture against targeted surveillance.</div>
    <div class="cta">
      <a class="btn" href="#shadow-details">View details</a>
    </div>
  </article>

  <article class="tile" id="ghost">
    <span class="badge">Pixel 8a &mdash; GrapheneOS/OpenWrt</span>
    <h3>PX8-A Ghost — High risk — $2500 AUD</h3>
    <div class="sub">Built for high-risk workflows; resists targeted surveillance & advanced location correlation.</div>
    <div class="cta">
      <a class="btn" href="#ghost-details">View details</a>
    </div>
  </article>

</div>

---

<a id="shield-details"></a>
## PX8-A Shield — Low risk ($1600 AUD)

**Short description**  
Designed for low risk workflows, protects against app level surveillance & physical theft/seizure.

### Hardware
- Pixel 8a handset  
- Shockproof phone case  
- Privacy screen protector

### Software (GrapheneOS)
- Hardened kernel & libc: improved memory-safety (zero-initialization, hardened malloc), stronger control-flow integrity, stack protections.  
- Verified Boot & firmware integrity: ensures bootloader, system and firmware haven’t been tampered with.  
- Attack surface reduction: disables/restricts optional hardware (USB-C data when locked, pogo-pins, NFC/UWB, sensors) and limits background services.  
- USB-C control: charging-only mode when locked to block data-connection attacks.  
- Improved sandboxing & isolation: stronger app/process isolation beyond standard Android.  
- Fine-grained permission controls: one-time permissions, foreground-only access, sensor toggles, storage & contact scopes, per-app revocable network access.  
- Network & sensor toggles + default MAC randomisation (Wi-Fi/Bluetooth, mic/camera/sensors).  
- No built-in Google services/telemetry by default (optional sandboxed Play).  
- Privacy-focused apps: hardened browser, secure camera (removes EXIF), secure PDF viewer, encrypted backups (SeedVault).  
- Timely OS updates & device support (focused device set).  
- App compatibility with alternative stores or optional sandboxed Google Play.  
- **Duress PIN/Password:** irreversible wipe of device (incl. encryption keys & installed eSIMs) and power-off.  
- Encrypted storage & backups with strong key-management.

---

<a id="shadow-details"></a>
## PX8-A Shadow — Moderate/High risk ($1800 AUD)

**Short description**  
Designed for moderate-high risk workflows, protects against passive dragnet surveillance. Enhanced posture against targeted surveillance.

### Hardware
- Pixel 8a handset — 6.1" Gorilla Glass, Tensor G3, 8GB RAM, 128GB encrypted storage.  
- NW750 NitroWall — device IDs (IMEI, BSSID, MAC) randomised and re-rollable to prevent tracking by IMSI catchers/cell towers.  
- Shockproof case & privacy screen protector — extends device lifetime; deters shoulder-surfing.  
- Medium Faraday bag — total device isolation during travel and storage between sessions.

### Software
- GrapheneOS — privacy & security-focused encrypted OS.  
- Mullvad VPN — always-on (kill switch), encrypts traffic; protects against local eavesdropping/manipulation.  
- Privacy SIM (in handset) — global coverage, anonymously registered eSIM (data-only, unlimited expiry, 10GB included).  
- Signal & Threema — gold-standard encrypted messaging/calls/file-sharing.  
- KeePassDX — offline encrypted password manager.  
- OpenKeychain — PGP encryption/decryption toolkit.  
- Cake Wallet — anonymous crypto storage & transactions separated from real-world identity.

---

<a id="ghost-details"></a>
## PX8-A Ghost — High risk ($2500 AUD)

**Short description**  
Designed for high risk workflows, protects against targeted surveillance and advanced location correlation.

### Hardware
- Pixel 8a handset — 6.1" Gorilla Glass, Tensor G3, 8GB RAM, 128GB encrypted storage.  
- NW750 NitroWall — device IDs (IMEI, BSSID, MAC) randomised and re-rollable to prevent tracking by IMSI catchers/cell towers.  
- Shockproof case & privacy screen protector — extends device lifetime; deters shoulder-surfing.  
- Large Faraday bag — total multi-device isolation during travel and storage between sessions.

### Software
- GrapheneOS — privacy & security-focused encrypted OS.  
- OpenWrt — integrated VPN/Tor; encrypts traffic and protects against local eavesdropping/manipulation.  
- Privacy SIM (in router) — global coverage, anonymously registered eSIM (data-only, unlimited expiry, 10GB included).  
- Signal & Threema — gold-standard encrypted communications suite.  
- KeePassDX — offline encrypted password manager.  
- OpenKeychain — PGP encryption/decryption toolkit.  
- Cake Wallet — anonymous crypto storage & transactions separated from real-world identity.

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
