    ---
    layout: default
    title: Module 03 — Connection Security
    permalink: /training/module-03-connection-security.html
    ---

    <main class="container training-module">

      <p class="breadcrumb">
        <a class="btn" href="/training.html">← Back to CommsBlack Training</a>
      </p>

      <h1>Module 03 — Connection Security</h1>
      <p class="meta">
        Level: Core · Recommended for: Shield / Shadow / Ghost · Est. time: ~25 minutes
      </p>

      <hr>

    <section>
  <h2>1. VPN</h2>
  <ul>
    <li><strong>Capabilities:</strong> Encrypts traffic between you and the VPN exit.</li>
    <li><strong>Mitigations:</strong> Hides traffic from local Wi-Fi/ISP; blends you into other users.</li>
    <li><strong>Limitations:</strong> VPN provider sees your traffic; does not make you anonymous alone.</li>
    <li><strong>Use cases:</strong> Shield daily use, travel, untrusted Wi-Fi.</li>
  </ul>
</section>

<section>
  <h2>2. Tor</h2>
  <ul>
    <li><strong>Capabilities:</strong> Multi-hop network designed for anonymity.</li>
    <li><strong>Mitigations:</strong> Separates your IP from destination; resists simple tracking.</li>
    <li><strong>Limitations:</strong> Slower; some services block Tor; behaviour can still deanonymise you.</li>
    <li><strong>Use cases:</strong> Shadow/Ghost workflows, high-risk research.</li>
  </ul>
</section>

<section>
  <h2>3. Telecom &amp; Anonymous SIMs</h2>
  <ul>
    <li>Telcos see tower location, call/SMS metadata and SIM identifiers.</li>
    <li>Anonymous SIMs reduce direct identity linkage but not location.</li>
    <li>Best combined with strict compartmentalisation and limited lifespan.</li>
  </ul>
</section>

<section>
  <h2>4. NW750 Router &amp; Faraday Gear</h2>
  <ul>
    <li>NW750 privacy router centralises hardened DNS and outbound policy.</li>
    <li>Faraday bags physically isolate devices during transit or storage.</li>
    <li>Use during border crossings, sensitive meetings and long-term storage.</li>
  </ul>
</section>

<section>
  <h2>5. Device Fingerprinting &amp; Correlation Attacks</h2>
  <p>
    Think of fingerprinting as a chart of your unique device traits: screen size,
    fonts, language, time zone, and installed features.
  </p>
  <ul>
    <li>Repeated logins from similar patterns link compartments together.</li>
    <li>Mitigation: simple, repeatable workflows; avoid mixing roles on one connection.</li>
  </ul>
</section>

    </main>
