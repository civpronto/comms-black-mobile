---
layout: default
title: Module 04 — Metadata Minimisation
permalink: /training/module-04-metadata.html
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

    <h1>Module 04 — Metadata Minimisation</h1>

    <hr>


<section>
  <h2>🔎 1. Understanding Metadata</h2>
  <p>
    Metadata is “data about data” — the who, when, where and how often of your
    activity. Even when content is encrypted, metadata is usually still visible
    to someone along the path.
  </p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Channel</th>
          <th>Content</th>
          <th>Metadata</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Messaging</td>
          <td>What you typed.</td>
          <td>Who, when, how often, from which device/IP.</td>
        </tr>
        <tr>
          <td>Web</td>
          <td>Page contents.</td>
          <td>Sites visited, timestamps, request sizes, user agent.</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>Call audio.</td>
          <td>Caller/receiver, duration, cell towers, SIM.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2>🧠 2. Metadata Awareness in Daily Life</h2>
  <ul>
    <li>Message bursts can imply relationships and urgency.</li>
    <li>
      Repeated logins from a location can build a picture of where you live or
      work.
    </li>
    <li>
      Using the same device and account across roles ties those roles
      together, even if the content is “harmless” in each context.
    </li>
  </ul>
</section>

<section>
  <h2>🧼 3. Account &amp; Session Hygiene</h2>
  <ul>
    <li>Use separate accounts for clearly different identities or roles.</li>
    <li>
      Avoid logging into personal accounts from Shadow or Ghost environments
      unless there is a very clear reason.
    </li>
    <li>
      Restart devices between roles to clear temporary state and reduce cross-linking.
    </li>
    <li>
      Periodically review where you are logged in and revoke old sessions.
    </li>
  </ul>
</section>

<section>
  <h2>📊 4. Traffic Shape &amp; Noise</h2>
  <p>
    You cannot realistically hide <em>all</em> metadata, but you can avoid being
    an outlier. Consistency is your friend.
  </p>
  <ul>
    <li>
      Avoid sudden, unusual spikes in activity that do not match your normal
      pattern for that device or role.
    </li>
    <li>
      Prefer steady, predictable use over long periods rather than big,
      attention-grabbing bursts.
    </li>
    <li>
      Some advanced tools add “padding” traffic; these can help, but only when
      used correctly and lawfully.
    </li>
  </ul>
</section>

<section>
  <h2>✅ 5. Practical Checklist</h2>
  <ul>
    <li>List your main roles (personal, work, project, etc.).</li>
    <li>Ensure each has clearly separated accounts and devices/profiles.</li>
    <li>
      Decide which roles belong on Shield, which on Shadow, and which — if any —
      justify Ghost.
    </li>
  </ul>
</section>

  </main>
