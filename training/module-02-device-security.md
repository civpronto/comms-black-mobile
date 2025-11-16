    ---
    layout: default
    title: Module 02 — Device Security & Kits
    permalink: /training/module-02-device-security.html
    ---

    <main class="container training-module">
      <p class="breadcrumb"><a href="/training.html">← Back to CommsBlack Academy</a></p>
      <h1>Module 02 — Device Security & Kits</h1>
      <p class="meta">
        Level: Core · Recommended for: Shield / Shadow / Ghost · Est. time: ~25 minutes
      </p>

    <section>
  <h2>1. Standard Device vs CommsBlack Kits</h2>
  <p>
    This section compares a normal Android device with hardened CommsBlack devices.
  </p>
  <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
    <thead>
      <tr>
        <th style="border-bottom:1px solid #222; text-align:left; padding:4px;">Aspect</th>
        <th style="border-bottom:1px solid #222; text-align:left; padding:4px;">Standard Device</th>
        <th style="border-bottom:1px solid #222; text-align:left; padding:4px;">CommsBlack Kit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:4px;">OS &amp; firmware</td>
        <td style="padding:4px;">Stock Android, vendor apps, unclear patch state.</td>
        <td style="padding:4px;">GrapheneOS, curated hardware, controlled setup.</td>
      </tr>
      <tr>
        <td style="padding:4px;">Attack surface</td>
        <td style="padding:4px;">Broad — many preinstalled apps and services.</td>
        <td style="padding:4px;">Reduced — minimal extras, hardened defaults.</td>
      </tr>
      <tr>
        <td style="padding:4px;">Threat model clarity</td>
        <td style="padding:4px;">Unclear; unknown history and tracking.</td>
        <td style="padding:4px;">Clear; known configuration and workflows.</td>
      </tr>
    </tbody>
  </table>
</section>

<section>
  <h2>2. Shield Configuration</h2>
  <h3>Capabilities</h3>
  <ul>
    <li>Hardened daily-driver with improved privacy defaults.</li>
    <li>Supports common apps with tighter permissions.</li>
  </ul>
  <h3>Mitigations</h3>
  <ul>
    <li>Protects against casual theft, malware and basic data brokerage.</li>
    <li>Reduces background tracking compared to stock devices.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Still operates in normal social/work contexts.</li>
    <li>Not designed for high-risk anonymous operations.</li>
  </ul>
</section>

<section>
  <h2>3. Shadow Configuration</h2>
  <h3>Capabilities</h3>
  <ul>
    <li>Low-profile device with stricter app selection and compartments.</li>
    <li>Designed to interact with higher-risk environments.</li>
  </ul>
  <h3>Mitigations</h3>
  <ul>
    <li>Reduces linkage between this device and your day-to-day identity.</li>
    <li>Improved resilience against investigative or corporate threats.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Less convenient: fewer apps, tighter rules, stricter workflows.</li>
  </ul>
</section>

<section>
  <h2>4. Ghost Configuration</h2>
  <h3>Capabilities</h3>
  <ul>
    <li>High-friction device for operations requiring stronger anonymity.</li>
    <li>Heavily restricted apps, networks and behaviours.</li>
  </ul>
  <h3>Mitigations</h3>
  <ul>
    <li>Reduces metadata and identity exposure as much as practical.</li>
    <li>Supports highly compartmented, time-bounded operations.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Not suitable as a daily driver.</li>
    <li>Still cannot defeat all state-level capabilities.</li>
  </ul>
</section>

<section>
  <h2>5. Device Seizure &amp; Theft</h2>
  <p style="margin-bottom:0.4rem;">Simple decision flow:</p>
  <ol>
    <li>If travelling or protesting, prefer PIN over biometrics.</li>
    <li>If device is out of sight, power it down or enable auto-reboot.</li>
    <li>If coerced to unlock and safe to do so, use the duress PIN.</li>
    <li>After any incident, assume all visible data may be copied.</li>
  </ol>
</section>

    </main>
