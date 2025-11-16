  ---
  layout: default
  title: Module 03 — Connection Security
  permalink: /training/module-03-connection-security.html
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

    <h1>Module 03 — Connection Security</h1>

    <hr>


<section>
  <h2>🌐 1. Network Threats at a Glance</h2>
  <p>
    Every time your device talks to the internet, it passes through multiple
    parties: local Wi-Fi, ISP/telco, backbone providers, the destination
    service, and sometimes monitoring or logging systems in between.
  </p>
  <p>
    Connection security is about deciding <strong>who you are willing to
    trust</strong> with which pieces of information.
  </p>
</section>

<section>
  <h2>🕳️ 2. VPN: Encrypted Tunnel with a Trade-Off</h2>
  <h3>Capabilities</h3>
  <ul>
    <li>Encrypts traffic between your device and the VPN provider.</li>
    <li>Hides browsing content from local Wi-Fi and your ISP.</li>
    <li>Lets you appear to be in a different region.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>The VPN provider can see your exit traffic and IP.</li>
    <li>Does not hide activity from the sites you log into.</li>
    <li>Does not automatically provide anonymity.</li>
  </ul>
  <h3>Good use-cases</h3>
  <ul>
    <li>Shield device on untrusted hotel or café Wi-Fi.</li>
    <li>Reducing basic profiling by local network operators.</li>
  </ul>
</section>

<section>
  <h2>🧅 3. Tor: Anonymity-Focused Routing</h2>
  <h3>Capabilities</h3>
  <ul>
    <li>Multi-hop route through Tor relays, separating source from destination.</li>
    <li>Designed to resist simple IP-based tracking.</li>
  </ul>
  <h3>Limitations</h3>
  <ul>
    <li>Slower and sometimes blocked by websites or services.</li>
    <li>
      Behaviour (logins, patterns, unique browser traits) can still reveal identity.
    </li>
  </ul>
  <h3>Good use-cases</h3>
  <ul>
    <li>Shadow/Ghost workflows needing stronger IP separation.</li>
    <li>High-risk research where identity link is a primary concern.</li>
  </ul>
</section>

<section>
  <h2>📡 4. Telcos, SIMs &amp; Location</h2>
  <ul>
    <li>Mobile networks log which towers a device connects to over time.</li>
    <li>SIM registration data can tie activity to an individual or entity.</li>
    <li>
      Anonymous or minimally linked SIMs reduce direct identity linkage but not
      radio-level location information.
    </li>
  </ul>
</section>

<section>
  <h2>📶 5. NW750 &amp; Faraday Use</h2>
  <ul>
    <li>Privacy routers centralise hardened DNS and outbound rules.</li>
    <li>
      Faraday bags physically isolate devices during transit or storage — useful
      for border crossings and sensitive meetings.
    </li>
    <li>
      A Faraday bag is most effective when combined with good device lock and
      power-down practices.
    </li>
  </ul>
</section>

<section>
  <h2>🧬 6. Fingerprinting &amp; Correlation</h2>
  <p>
    A “fingerprint” is a combination of traits: device model, language,
    time zone, fonts, browser quirks and more. Over time, repeated patterns
    can link different sessions together.
  </p>
  <ul>
    <li>Avoid mixing high-risk and personal logins on the same connection.</li>
    <li>
      Keep Shadow and Ghost behaviours simple and consistent to avoid
      creating unique patterns.
    </li>
  </ul>
</section>

  </main>
