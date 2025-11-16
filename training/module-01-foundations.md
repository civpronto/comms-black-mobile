---
layout: default
title: Module 01 — Foundations & GrapheneOS
permalink: /training/module-01-foundations.html
---

<main class="container training-module">

  <p class="breadcrumb">
    <a href="/training.html">← Back to CommsBlack Academy</a>
  </p>

  <h1>Module 01 — Foundations &amp; GrapheneOS</h1>
  <p class="meta">
    Level: Core · Recommended for: Shield / Shadow / Ghost · Est. time: ~20 minutes
  </p>

  <hr>

  <section>
    <h2>1. Security vs Privacy vs Anonymity</h2>
    <p>
      Most mistakes happen because these three concepts get blurred. Use this
      section to anchor your expectations.
    </p>
    <table>
      <thead>
        <tr>
          <th>Goal</th>
          <th>Description</th>
          <th>Example focus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Security</td>
          <td>Prevent compromise of device and accounts.</td>
          <td>Lockscreen, patches, hardened OS (GrapheneOS).</td>
        </tr>
        <tr>
          <td>Privacy</td>
          <td>Limit who can see your data and activity.</td>
          <td>Encrypted apps, VPN, minimising data shared.</td>
        </tr>
        <tr>
          <td>Anonymity</td>
          <td>Hide who you are, even if activity is visible.</td>
          <td>Compartmented devices, Tor, strict behaviour.</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>2. GrapheneOS Essentials</h2>
    <h3>Capabilities</h3>
    <ul>
      <li>Hardened memory management and exploit mitigations.</li>
      <li>Strong app sandboxing and fine-grained permission controls.</li>
      <li>Improved lockscreen behaviour and full-disk encryption.</li>
      <li>Network and sensor controls normal Android does not expose.</li>
    </ul>

    <h3>Mitigations</h3>
    <ul>
      <li>Reduces successful remote and local exploits.</li>
      <li>Makes silent data exfiltration by apps harder.</li>
      <li>Strengthens protection when the device is powered off.</li>
    </ul>

    <h3>Limitations</h3>
    <ul>
      <li>Does not fix risky behaviour or bad OPSEC.</li>
      <li>Does not make you anonymous by itself.</li>
      <li>Cannot protect data visible on an unlocked device.</li>
    </ul>
  </section>

  <section>
    <h2>3. Duress PIN for Theft &amp; Seizure</h2>
    <p>
      The duress PIN is one of the strongest features for hostile unlock
      scenarios. It looks like a normal PIN but triggers a defensive action
      instead of simply unlocking the device.
    </p>

    <h3>What it does</h3>
    <ul>
      <li>Acts as a separate PIN that you enter under coercion.</li>
      <li>Can trigger secure wipe or other configured behaviour.</li>
      <li>Protects data during live theft or seizure events.</li>
    </ul>

    <h3>Effective when</h3>
    <ul>
      <li>You still control the device long enough to enter the duress PIN.</li>
      <li>You've rehearsed when to use it and what it will do.</li>
      <li>Your highest-risk data is held in profiles that will be destroyed.</li>
    </ul>

    <h3>Not a magic eraser</h3>
    <ul>
      <li>Doesn't undo actions already taken on an unlocked device.</li>
      <li>Doesn't remove metadata from external services.</li>
      <li>Can't erase historical forensic captures of the device.</li>
    </ul>

    <p>
      You'll see how the duress PIN fits into broader anti-forensics thinking in
      <a href="/training/module-12-anti-forensics.html">
        Module 12 — Anti-Forensics Awareness
      </a>.
    </p>
  </section>

  <section>
    <h2>4. Checkpoint</h2>
    <p>Before moving on, you should be able to answer:</p>
    <ul>
      <li>Which matters more for this kit: security, privacy or anonymity?</li>
      <li>Who your likely adversary is (friend, employer, criminal, state)?</li>
      <li>Whether you will configure and use a duress PIN — and when.</li>
    </ul>
  </section>

</main>
