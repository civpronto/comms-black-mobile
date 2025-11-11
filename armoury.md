---
title: Armoury
layout: page
---

# Armoury

Purpose-built secure communication kits tailored to your threat profile.  
Conduct our <a href="/threat-assessment.html" style="text-decoration:underline;font-weight:600;">Threat Assessment</a> to discover your threat profile.

<!-- ========================= -->
<!-- PRODUCT TILE GRID SECTION -->
<!-- ========================= -->

{% raw %}
<style>
:root {
  --pill-bg: #6e8d8a;   /* site accent — light sage */
  --pill-bg-hover: #5f7b78;
  --pill-text: #0d0d0d; /* dark text on light pill */
  --tile-border: #6e8d8a;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

/* Light pill card */
.product-tile {
  border: 1px solid var(--tile-border);
  border-radius: 999px;                 /* full pill silhouette */
  padding: 1.25rem;
  background: var(--pill-bg);
  color: var(--pill-text);
  transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.06) inset;
}

/* Subtle lift on hover */
.product-tile:hover {
  background: var(--pill-bg-hover);
  transform: translateY(-1px);
}

.product-tile img {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(0,0,0,0.12);
}

.product-tile h3 {
  margin: 0.25rem 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1px;
}

.product-tile p {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

/* Price badge matches site pill look */
.product-price {
  display: inline-block;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(13,13,13,0.08);
  color: var(--pill-text);
  border: 1px solid rgba(13,13,13,0.16);
  margin-bottom: 0.5rem;
}

/* Button as small pill */
.btn-buy {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(13,13,13,0.12);
  border: 1px solid rgba(13,13,13,0.22);
  color: var(--pill-text);
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
}
.btn-buy:hover {
  background: rgba(13,13,13,0.18);
  border-color: rgba(13,13,13,0.32);
  transform: translateY(-1px);
}

/* Reduce outer pill curvature on small screens so content breathes */
@media (max-width: 420px) {
  .product-tile { border-radius: 28px; }
}
</style>

<div class="product-grid">

  <!-- PX8-A SHIELD -->
  <div class="product-tile">
    <img src="/assets/armoury/px8a-shield.jpg" alt="PX8-A Shield">
    <h3>PX8-A Shield</h3>
    <span class="product-price">$1600 AUD</span>
    <p>Designed for low-risk workflows; protects against app-level surveillance & physical seizure.</p>
    <a href="#px8-a-shield" class="btn-buy">View details</a>
  </div>

  <!-- PX8-A SHADOW -->
  <div class="product-tile">
    <img src="/assets/armoury/px8a-shadow.jpg" alt="PX8-A Shadow">
    <h3>PX8-A Shadow</h3>
    <span class="product-price">$1800 AUD</span>
    <p>Built for moderate–high risk workflows; enhanced passive surveillance defence.</p>
    <a href="#px8-a-shadow" class="btn-buy">View details</a>
  </div>

  <!-- PX8-A GHOST -->
  <div class="product-tile">
    <img src="/assets/armoury/px8a-ghost.jpg" alt="PX8-A Ghost">
    <h3>PX8-A Ghost</h3>
    <span class="product-price">$2500 AUD</span>
    <p>Hardened for high-risk workflows; protects against targeted surveillance & correlation.</p>
    <a href="#px8-a-ghost" class="btn-buy">View details</a>
  </div>

  <!-- PRIVACY SIM -->
  <div class="product-tile">
    <img src="/assets/armoury/privacy-sim.png" alt="Privacy SIM">
    <h3>Privacy SIM</h3>
    <span class="product-price">$150 AUD</span>
    <p>Anonymous global data-only SIM with 10GB & unlimited expiry.</p>
    <a href="#privacy-sim" class="btn-buy">View details</a>
  </div>

</div>
{% endraw %}

---

<!-- ========================= -->
<!-- PRODUCT SECTIONS BELOW   -->
<!-- ========================= -->

<a id="px8-a-shield"></a>
## PX8-A Shield — Low Risk  
**Price:** $1600 AUD  

Designed for low-risk workflows; protects against app-level surveillance and physical theft/seizure.

![PX8-A Shield](/assets/armoury/px8a-shield.jpg)

### Hardware
- Pixel 8a handset
- Shockproof phone case
- Privacy screen protector

### Software — GrapheneOS Stack
- Hardened kernel & libc: improved memory-safety (zero-initialisation, hardened malloc), stronger control-flow integrity & stack protections
- Verified Boot & firmware integrity: detects system/firmware tampering
- Attack surface reduction: restricted hardware features (USB-C data, pogo-pins, NFC/UWB, sensors)
- USB-C control: charging-only mode when locked
- Improved sandboxing & process isolation
- Fine-grained permissions: one-time access, foreground-only, sensor toggles, storage/contact scopes, per-app network access
- Network & sensor toggles + MAC randomisation
- No built-in Google services/telemetry; optional sandboxed Play services
- Privacy-focused apps: hardened browser, secure camera (strips EXIF), secure PDF viewer, encrypted backups (SeedVault)
- Frequent OS security updates
- Android app compatibility (via sandboxed Google Play or F-Droid)
- **Duress PIN/Password:** wipes device + eSIM + encryption keys
- Encrypted storage & backups

---

<a id="px8-a-shadow"></a>
## PX8-A Shadow — Moderate / High Risk  
**Price:** $1800 AUD  

Designed for moderate-high-risk workflows; protects against passive dragnet surveillance and improves resistance to targeted collection.

### Hardware
- Pixel 8a — 6.1" Gorilla Glass, Tensor G3, 8GB RAM, 128GB encrypted storage
- NW750 NitroWall — IMEI/BSSID/MAC randomisation; full re-roll support
- Shockproof case + privacy screen
- Medium Faraday bag — total device isolation during transport/storage

### Software
- GrapheneOS — encrypted & hardened OS
- Mullvad VPN — always-on with kill-switch; shields from local interception
- Privacy SIM (handset): anonymous, global data-only, 10GB included
- Signal + Threema — secure messaging & voice
- KeePassDX — offline encrypted password manager
- OpenKeychain — PGP encryption suite
- Cake Wallet — anonymous crypto wallet

---

<a id="px8-a-ghost"></a>
## PX8-A Ghost — High Risk  
**Price:** $2500 AUD  

Built for high-risk workflows; protects against targeted surveillance and advanced location correlation attacks.

### Hardware
- Pixel 8a — 6.1" Gorilla Glass, Tensor G3, 8GB RAM, 128GB encrypted storage
- NW750 NitroWall — IMEI/BSSID/MAC randomisation
- Shockproof case + privacy screen
- **Large Faraday bag** — multi-device RF isolation for travel/storage

### Software
- GrapheneOS — encrypted & hardened OS
- OpenWrt router — VPN/Tor integrated secure routing
- Privacy SIM (router) — anonymous, data-only, 10GB included
- Signal + Threema — encrypted comms
- KeePassDX — offline encrypted password manager
- OpenKeychain — PGP encryption suite
- Cake Wallet — anonymous crypto wallet

---

<a id="privacy-sim"></a>
## Privacy SIM  
**Price:** $150 AUD  

Anonymous data-only eSIM protects against phone-number-based SIM-swap attacks and metadata correlation through purchase records.

### Features
- Anonymous — No identity / KYC
- Data-only eSIM
- Global coverage footprint
- Unlimited expiry — remains active indefinitely
- 10GB prepaid included

---

## Privacy SIM — Data Top-Up  

| Data | Price | Rate |
|------|-------|------|
| 1GB  | $10   | $10/GB |
| 10GB | $100  | $10/GB |
| 20GB | $180 | $9/GB |
| 50GB | $400 | $8/GB |
| 100GB | $700 | $7/GB |

---
