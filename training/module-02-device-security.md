---
layout: default
title: Module 02 — Device Security & Kits
permalink: /training/module-02-device-security.html
---

  <main class="container training-module">

    <p class="breadcrumb">
      <a class="btn" href="/training.html">← Back to CommsBlack Training</a>
    </p>


<style>
  .training-module .table-wrap {
    margin: 1.5rem 0;
    overflow-x: auto;
  }
  .training-module table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }
  .training-module th,
  .training-module td {
    border: 1px solid rgba(148, 163, 184, 0.6);
    padding: 0.45rem 0.7rem;
    text-align: left;
  }
  .training-module thead th {
    background: #020617;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.8rem;
  }
  .training-module tbody tr:nth-child(even) {
    background: rgba(15, 23, 42, 0.8);
  }
</style>

    <h1>Module 02 — Device Security & Kits</h1>

    <hr>


<section>
  <h2>🧩 1. Standard Device vs CommsBlack Kits</h2>
  <p>
    A normal smartphone is built for convenience and data collection. A
    CommsBlack device is built for <strong>control</strong> and
    <strong>predictability</strong>.
  </p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Standard device</th>
          <th>CommsBlack kit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>OS &amp; firmware</td>
          <td>Stock Android, vendor apps, unknown configuration history.</td>
          <td>GrapheneOS, curated hardware, repeatable configuration.</td>
        </tr>
        <tr>
          <td>Attack surface</td>
          <td>Many preinstalled services and integrations.</td>
          <td>Minimal extras, hardened defaults, stripped-down services.</td>
        </tr>
        <tr>
          <td>Threat model clarity</td>
          <td>Unclear what it’s hardened against.</td>
          <td>Explicit assumptions per kit (Shield, Shadow, Ghost).</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2>🛡️ 2. Shield Configuration</h2>
  <p>
    <strong>Shield</strong> is a hardened daily-driver: familiar enough to live
    with, but far stricter than a stock phone.
  </p>
  <h3>Capabilities</h3>
  <ul>
    <li>Supports common apps with carefully set permissions.</li>
    <li>Improved protection against common theft, malware and data brokerage.</li>
    <li>Configured to reduce “background noise” data leakage.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Still participates in your normal life — contacts, locations, habits.</li>
    <li>Not intended for activities that must be strongly separated from identity.</li>
  </ul>
</section>

<section>
  <h2>🌒 3. Shadow Configuration</h2>
  <p>
    <strong>Shadow</strong> assumes higher scrutiny and more risk. It trades
    comfort for separation.
  </p>
  <h3>Capabilities</h3>
  <ul>
    <li>Lean app set focused on specific tasks.</li>
    <li>Compartmented profiles to split roles cleanly.</li>
    <li>Stricter network assumptions (e.g. Tor, dedicated VPN).</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Less convenience; more friction to do common tasks.</li>
    <li>Requires more discipline to avoid “just this once” crossover.</li>
  </ul>
</section>

<section>
  <h2>👻 4. Ghost Configuration</h2>
  <p>
    <strong>Ghost</strong> is for operations that need the strongest practical
    separation you can reasonably maintain.
  </p>
  <h3>Capabilities</h3>
  <ul>
    <li>Heavily restricted apps, storage and network behaviours.</li>
    <li>Designed for short-lived, tightly scoped tasks.</li>
    <li>Assumes you are willing to sacrifice convenience for risk reduction.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Not a general-purpose daily phone.</li>
    <li>Cannot guarantee safety against the most capable state-level actors.</li>
  </ul>
</section>

<section>
  <h2>🚨 5. Theft &amp; Seizure Basics</h2>
  <ul>
    <li>Prefer a strong PIN over biometrics where device seizure is a concern.</li>
    <li>Enable auto-reboot or power-down habits when idle in risky settings.</li>
    <li>
      After any loss or suspicious incident, assume visible data may have been
      copied and rotate accounts appropriately.
    </li>
  </ul>
</section>

  </main>
