---
layout: default
title: Training
permalink: /training.html
---

<style>
  .tiles { display:grid; gap:1.25rem; margin:1.5rem 0; }
  @media (min-width:720px){ .tiles{ grid-template-columns:repeat(4,1fr);} }

  .tile {
    align-items:center;
    flex-direction:column;
    display:flex;
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 16px;
    padding: 1.25rem 1rem 1rem;
    transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  }

  .tile:hover {
    transform: translateY(-2px);
    border-color: rgba(255,255,255,.18);
    box-shadow: 0 8px 20px rgba(0,0,0,.25);
  }

  .tile h3 {
    align-self:center;
    text-align:center;
    margin:.1rem 0 .5rem;
    font-size:1.15rem;
    font-weight:600;
  }

  .badge {
    margin-right:auto;
    margin-left:auto;
    align-self:center;
    display:inline-block;
    font-size:.72rem;
    letter-spacing:.02em;
    padding:.25rem .6rem;
    border-radius:999px;
    margin-bottom:.5rem;
    font-weight:600;
    border:1px solid rgba(255,255,255,.15);
    backdrop-filter: blur(2px);
  }

  .badge.green { background: rgba(0,170,68,.35); border-color: rgba(0,200,90,.45); }
  .badge.amber { background: rgba(200,130,0,.35); border-color: rgba(233,150,34,.45); }
  .badge.red   { background: rgba(180,0,0,.35); border-color: rgba(230,50,50,.45); }

  .cta {
    align-self:stretch;
    display:flex;
    justify-content:center;
    gap:.5rem;
    align-items:center;
    margin-top:.5rem;
  }

  .cta .btn { padding:.55rem .9rem; }
</style>

<main class="container training">
  <h1>CommsBlack Training</h1>

  <p>
    Learn how to secure your communications, protect your privacy, and operate
    with confidence in a digital-first world. These modules are designed for
    users of Shield, Shadow and Ghost communication kits.
  </p>

  <h2>Training Modules</h2>

  <div class="tiles">

    <article class="tile">
      <span class="badge green">Core · Shield / Shadow / Ghost</span>
      <h3>Module 01 — Foundations &amp; GrapheneOS</h3>
      <p>Security vs privacy vs anonymity, GrapheneOS basics, and duress PIN for theft/seizure.</p>
      <div class="cta">
        <a class="btn" href="/training/module-01-foundations.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge green">Core · Shield / Shadow / Ghost</span>
      <h3>Module 02 — Device Security &amp; Kits</h3>
      <p>Standard vs Shield, Shadow and Ghost device setups and physical seizure considerations.</p>
      <div class="cta">
        <a class="btn" href="/training/module-02-device-security.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge green">Core · Shield / Shadow / Ghost</span>
      <h3>Module 03 — Connection Security</h3>
      <p>VPN, Tor, anonymous SIMs, NW750 privacy router, Faraday usage and correlation attacks.</p>
      <div class="cta">
        <a class="btn" href="/training/module-03-connection-security.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge green">Core · Shield / Shadow / Ghost</span>
      <h3>Module 04 — Metadata Minimisation</h3>
      <p>Metadata awareness, account and session hygiene, traffic padding and data-session habits.</p>
      <div class="cta">
        <a class="btn" href="/training/module-04-metadata.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge green">Core · Shield / Shadow / Ghost</span>
      <h3>Module 05 — Secure Communications (COMMSEC)</h3>
      <p>What COMMSEC is, encrypted app suite configuration and PGP-based high-assurance channels.</p>
      <div class="cta">
        <a class="btn" href="/training/module-05-commsec.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge amber">Applied · Shadow / Ghost</span>
      <h3>Module 06 — Secure Transactions (Crypto Privacy)</h3>
      <p>Cryptocurrency basics, privacy coins, Cake Wallet and practical payment workflows.</p>
      <div class="cta">
        <a class="btn" href="/training/module-06-crypto.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge amber">Applied · All kits</span>
      <h3>Module 07 — Operational Security (OPSEC)</h3>
      <p>Behavioural security, common failure points and Shield / Shadow / Ghost workflows.</p>
      <div class="cta">
        <a class="btn" href="/training/module-07-opsec.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge amber">Context · All kits</span>
      <h3>Module 08 — Global Digital Privacy Awareness</h3>
      <p>Global digital freedom landscape, surveillance powers and real-world case studies.</p>
      <div class="cta">
        <a class="btn" href="/training/module-08-global-privacy.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge amber">Context · Australia</span>
      <h3>Module 09 — Australia: Laws &amp; Reality</h3>
      <p>How Australian surveillance powers work in practice and what it means for CommsBlack users.</p>
      <div class="cta">
        <a class="btn" href="/training/module-09-australia-privacy.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge red">Advanced · Shadow / Ghost</span>
      <h3>Module 10 — Compartmentalisation</h3>
      <p>Identity compartments, cross-contamination risks and mapping compartments to kits.</p>
      <div class="cta">
        <a class="btn" href="/training/module-10-compartments.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge red">Advanced · All kits</span>
      <h3>Module 11 — App Selection &amp; Risk</h3>
      <p>How apps leak data, vetting checklist, safer categories and per-kit app strategies.</p>
      <div class="cta">
        <a class="btn" href="/training/module-11-app-risk.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge red">Advanced · Shadow / Ghost</span>
      <h3>Module 12 — Anti-Forensics Awareness</h3>
      <p>What investigators look for, realistic anti-forensics behaviour and duress workflows.</p>
      <div class="cta">
        <a class="btn" href="/training/module-12-anti-forensics.html">Open module</a>
      </div>
    </article>

    <article class="tile">
      <span class="badge amber">Mapping · All kits</span>
      <h3>Module 13 — Defending by Adversary Class</h3>
      <p>Adversary types, capability mapping and choosing the right CommsBlack workflow.</p>
      <div class="cta">
        <a class="btn" href="/training/module-13-adversaries.html">Open module</a>
      </div>
    </article>

  </div>
</main>
