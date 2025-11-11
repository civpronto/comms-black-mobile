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

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.product-tile {
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1rem;
  background: #111;
  color: #fff;
}

.product-tile img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.product-tile h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.product-tile p {
  margin-bottom: 0.5rem;
}

.product-price {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.btn-buy {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: #fff;
  color: #000;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
}
.btn-buy:hover {
  opacity: 0.85;
}
</style>

<div class="product-grid">

  <!-- PX8-A SHIELD -->
  <div class="product-tile">
    <img src="/assets/armoury/px8a-shield.jpg" alt="PX8-A Shield">
    <h3>PX8-A Shield</h3>
    <p class="product-price">$1600 AUD</p>
    <p>Designed for low-risk workflows; protects against app-level surveillance & physical seizure.</p>
    <a href="#px8-a-shield" class="btn-buy">View Details</a>
  </div>

  <!-- PX8-A SHADOW -->
  <div class="product-tile">
    <img src="/assets/armoury/px8a-shadow.jpg" alt="PX8-A Shadow">
    <h3>PX8-A Shadow</h3>
    <p class="product-price">$1800 AUD</p>
    <p>Designed for moderate–high risk workflows; enhances defence against passive dragnet surveillance.</p>
    <a href="#px8-a-shadow" class="btn-buy">View Details</a>
  </div>

  <!-- PX8-A GHOST -->
  <div class="product-tile">
    <img src="/assets/armoury/px8a-ghost.jpg" alt="PX8-A Ghost">
    <h3>PX8-A Ghost</h3>
    <p class="product-price">$2500 AUD</p>
    <p>Designed for high-risk workflows; protects against targeted surveillance & location correlation.</p>
    <a href="#px8-a-ghost" class="btn-buy">View Details</a>
  </div>

  <!-- PRIVACY SIM -->
  <div class="product-tile">
    <img src="/assets/armoury/privacy-sim.png" alt="Privacy SIM">
    <h3>Privacy SIM</h3>
    <p class="product-price">$150 AUD</p>
    <p>Anonymous global data-only SIM with 10GB & unlimited expiry.</p>
    <a href="#privacy-sim" class="btn-buy">View Details</a>
  </div>

</div>


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
