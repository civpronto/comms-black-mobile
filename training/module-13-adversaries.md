---
layout: default
title: Module 13 — Defending by Adversary Class
permalink: /training/module-13-adversaries.html
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

    <h1>Module 13 — Defending by Adversary Class</h1>

    <hr>


<section>
  <h2>🎯 1. Adversary Classes</h2>
  <ul>
    <li>Opportunistic criminals and scammers.</li>
    <li>Persistent harassers or stalkers.</li>
    <li>Corporate or investigative actors.</li>
    <li>State-level or highly resourced organisations.</li>
  </ul>
</section>

<section>
  <h2>📊 2. Capability vs Kit Mapping</h2>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Adversary</th>
          <th>Likely capability</th>
          <th>Recommended baseline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Scammers / petty criminals</td>
          <td>Phishing, basic malware, device theft.</td>
          <td>Shield with strong hygiene.</td>
        </tr>
        <tr>
          <td>Harassers / doxxers</td>
          <td>Open-source search, social engineering.</td>
          <td>Shield + Shadow for separated roles.</td>
        </tr>
        <tr>
          <td>Corporate / investigative</td>
          <td>Legal requests, logs, some forensics.</td>
          <td>Shadow as primary; Ghost for select operations.</td>
        </tr>
        <tr>
          <td>State-level</td>
          <td>Broad data access, advanced tooling.</td>
          <td>
            Ghost where appropriate, plus conservative assumptions about what
            can still be observed.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2>🧭 3. Building Your Personal Playbook</h2>
  <ul>
    <li>Write down your primary adversary class and their likely tools.</li>
    <li>Choose a default kit (Shield, Shadow or Ghost) that matches that risk.</li>
    <li>
      Note the few situations where you will move “up” a level — and what
      rules change when you do.
    </li>
  </ul>
</section>

  </main>
