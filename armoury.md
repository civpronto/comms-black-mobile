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
  --tile-bg: #6e8d8a;       /* ✅ new light pill */
  --tile-bg-hover: #5f7b78; /* ✅ darker hover */
  --tile-text: #0d0d0d;     /* ✅ readable on light */
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 2rem 0;
}

.product-tile {
  background: var(--tile-bg);
  color: var(--tile-text);
  border: 1px solid var(--tile-bg);
  padding: 1.25rem;
  border-radius: 9999px;  /* ✅ keep original bubble style */
  transition: background 0.25s ease, transform 0.25s ease;
}

.product-tile:hover {
  background: var(--tile-bg-hover);
  transform: translateY(-2px);
}

.product-tile img {
  width: 100%;
  border-radius: 14px;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(0,0,0,0.12);
}

.product-tile h3 {
  margin: 0.25rem 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.product-tile p {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.product-price {
  display: inline-block;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(0,0,0,0.12);
  color: var(--tile-text);
  margin-bottom: 0.5rem;
}

.btn-buy {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(0,0,0,0.16);
  border: none;
  color: var(--tile-text);
  font-weight: 700;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.25s ease, transform 0.2s ease;
}

.btn-buy:hover {
  background: rgba(0,0,0,0.22);
  transform: translateY(-1px);
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
- Hardened kernel & libc  
- Verified Boot & firmware integrity  
- Attack surface reduction  
- USB-C charging-only mode when locked  
- Strong sandboxing & isolation  
- Fine-grained permission controls  
- Network & sensor toggles + MAC randomisation  
- No built-in Google services / telemetry  
- Privacy-focused system apps  
- Frequent OS security updates  
- Android app compatibility  
- **Duress PIN/Password:** instant cryptographic wipe  
- Encrypted storage & backups  

---

<a id="px8-a-shadow"></a>
## PX8-A Shadow — Moderate / High Risk  
**Price:** $1800 AUD  

Designed for moderate–high-risk workflows; provides greater defence against passive dragnet surveillance.

### Hardware
- Pixel 8a  
- NW750 NitroWall — IMEI/BSSID/MAC identity randomisation  
- Shockproof case + privacy screen  
- Medium Faraday bag  

### Software
- GrapheneOS  
- Mullvad VPN (always-on)  
- Privacy SIM (handset) — 10GB included  
- Signal + Threema  
- KeePassDX  
- OpenKeychain  
- Cake Wallet  

---

<a id="px8-a-ghost"></a>
## PX8-A Ghost — High Risk  
**Price:** $2500 AUD  

Built for hostile environments; defends against targeted surveillance & sophisticated location correlation.

### Hardware
- Pixel 8a  
- NW750 NitroWall  
- Shockproof case + privacy screen  
- **Large Faraday bag** — multi-device isolation  

### Software
- GrapheneOS  
- OpenWrt router with VPN/Tor  
- Privacy SIM (router) — 10GB included  
- Signal + Threema  
- KeePassDX  
- OpenKeychain  
- Cake Wallet  

---

<a id="privacy-sim"></a>
## Privacy SIM  
**Price:** $150 AUD  

Anonymous global data-only eSIM designed to break identity linkage.

### Features
- No personal data / KYC  
- Global coverage  
- Unlimited expiry  
- 10GB included  

---

## Privacy SIM — Data Top-Up  

| Data | Price | Rate |
|------|-------|------|
| 1GB  | $10   | $10/GB |
| 10GB | $100  | $10/GB |
| 20GB | $180  | $9/GB |
| 50GB | $400  | $8/GB |
| 100GB | $700 | $7/GB |

---
