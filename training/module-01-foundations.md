  ---
  layout: default
  title: Module 01 — Foundations & GrapheneOS
  permalink: /training/module-01-foundations.html
  ---

  <main class="container training-module">

    <p class="breadcrumb">
      <a class="btn" href="/training.html">← Back to CommsBlack Training</a>
    </p>

    <h1>Module 01 — Foundations & GrapheneOS</h1>
    <p class="meta">
      Level: Core · Recommended for: Shield / Shadow / Ghost · Est. time: ~25–30 minutes
    </p>

    <hr>


<section>
  <h2>📚 1. Why Foundations Matter</h2>
  <p>
    If you get the basics wrong, no amount of tools will save you. This module
    gives you a mental model for how CommsBlack Training thinks about protection:
    <strong>security</strong>, <strong>privacy</strong> and <strong>anonymity</strong> are
    related but not the same.
  </p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Goal</th>
          <th>What it means</th>
          <th>Typical focus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Security 🔐</td>
          <td>Keep your device and accounts from being compromised.</td>
          <td>Updates, hardened OS, lockscreen, strong authentication.</td>
        </tr>
        <tr>
          <td>Privacy 🕶️</td>
          <td>Limit who can see your data and digital activity.</td>
          <td>End‑to‑end encryption, data minimisation, permissions.</td>
        </tr>
        <tr>
          <td>Anonymity 🕵️</td>
          <td>Hide who you are, even if someone can see activity.</td>
          <td>Compartmented devices, Tor, careful behaviour.</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    Most mistakes come from assuming one of these automatically gives you the
    others. A hardened phone can still leak identity; an anonymous account can
    still be compromised if security is weak.
  </p>
</section>

<section>
  <h2>📱 2. GrapheneOS in Plain Language</h2>
  <p>
    GrapheneOS is a hardened Android‑based operating system focused on
    <strong>exploit resistance</strong> and <strong>privacy controls</strong> rather than
    eye‑candy or vendor bloat.
  </p>
  <h3>✅ Capabilities</h3>
  <ul>
    <li>Hardened memory management to make many exploits significantly harder.</li>
    <li>Stronger app sandboxing and strict permission controls.</li>
    <li>Improved lockscreen and full‑disk encryption defaults.</li>
    <li>Per‑app network, sensor and storage controls.</li>
    <li>Profile separation for clean “compartments” on one device.</li>
  </ul>
  <h3>🛡️ What it mitigates</h3>
  <ul>
    <li>Reduces success rate of remote and local exploitation attempts.</li>
    <li>Makes quiet, background data exfiltration by apps more difficult.</li>
    <li>Improves protection of data at rest when the device is powered off.</li>
  </ul>
  <h3>🚫 Limitations</h3>
  <ul>
    <li>Cannot fix risky behaviour or poor choices in apps and accounts.</li>
    <li>Does not make you anonymous by itself.</li>
    <li>
      Content visible on an unlocked device can still be read, photographed or
      recorded by someone nearby.
    </li>
  </ul>
  <p>
    Think of GrapheneOS as the <strong>foundation</strong> of your kit: it removes many
    “easy win” attack paths so you can focus on higher‑level risks.
  </p>
</section>

<section>
  <h2>🚨 3. Duress PIN: Last‑Resort Protection</h2>
  <p>
    A duress PIN is a special code you can enter on the lockscreen that looks
    like a normal unlock attempt but instead triggers a defensive action
    (for example, wiping a profile). It is designed for high‑pressure
    situations where you are being forced to unlock a device.
  </p>
  <h3>How it helps</h3>
  <ul>
    <li>Lets you respond under pressure in a way you have rehearsed.</li>
    <li>
      Can rapidly protect the highest‑risk data if you no longer expect to
      control the device.
    </li>
    <li>
      Creates a clear mental rule: <em>“If X happens, I enter this PIN, not my
      everyday one.”</em>
    </li>
  </ul>
  <h3>When it is realistic</h3>
  <ul>
    <li>You still physically hold the device long enough to enter a code.</li>
    <li>
      You have decided in advance what will be destroyed and what will remain.
    </li>
    <li>
      You understand that it protects local data, not information already
      stored with third‑party services.
    </li>
  </ul>
  <h3>Important cautions</h3>
  <ul>
    <li>
      It is <strong>not</strong> a magic reset button; it cannot undo actions already
      taken on an unlocked device.
    </li>
    <li>
      It does not remove past backups, logs or records held by providers or
      authorities.
    </li>
    <li>
      Laws and expectations around device access vary by jurisdiction; always
      consider the legal and ethical context before using such features.
    </li>
  </ul>
  <p>
    You will see how duress strategies fit into broader anti‑forensics
    thinking later in
    <a href="/training/module-12-anti-forensics.html">Module 12 — Anti‑Forensics Awareness</a>.
  </p>
</section>

<section>
  <h2>✅ 4. Quick Self‑Check</h2>
  <ul>
    <li>Can you clearly explain the difference between security, privacy and anonymity?</li>
    <li>Do you understand what GrapheneOS gives you — and what it doesn’t?</li>
    <li>
      Have you decided whether a duress PIN is appropriate for <em>your</em>
      situation, and if so, practiced when you would use it?
    </li>
  </ul>
</section>

  </main>
