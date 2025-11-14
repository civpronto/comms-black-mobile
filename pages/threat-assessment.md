---
layout: default
title: Threat Assessment
permalink: /threat-assessment.html
---

# Threat Assessment

Find out whether your situation calls for **Shield**, **Shadow** or **Ghost** in around 5–7 minutes.

This assessment gives you a **kit recommendation** based on:
- Whether you’re facing a real adversary  
- How dangerous it would be if your device use was linked to a time and place  

No names, emails, or personal details are collected.

<p style="text-align:center"><small>Last updated: 14 Nov 2025</small></p>

<style>
  #threat-assessment-form {
    max-width: 780px;
    margin: 2rem auto;
    line-height: 1.6;
  }
  #threat-assessment-form .ta-section {
    border: 1px solid #333;
    border-radius: 12px;
    padding: 1.4rem 1.6rem;
    margin-bottom: 1.2rem;
    display: none;
  }
  #threat-assessment-form .ta-section.active {
    display: block;
  }
  #threat-assessment-form .ta-section h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
  #threat-assessment-form .ta-question {
    margin: 0.8rem 0 1rem 0;
    padding-bottom: 0.55rem;
    border-bottom: 1px dashed rgba(255,255,255,0.08);
  }
  #threat-assessment-form .ta-question:last-child {
    border-bottom: none;
  }
  #threat-assessment-form .ta-question-title {
    margin: 0 0 0.35rem 0;
    font-weight: 600;
  }
  #threat-assessment-form small {
    opacity: 0.75;
  }
  #threat-assessment-form label {
    display: block;
    margin: 0.15rem 0;
    cursor: pointer;
  }
  #threat-assessment-form input[type="radio"],
  #threat-assessment-form input[type="checkbox"] {
    margin-right: 0.35rem;
  }
  #threat-assessment-form .ta-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
    gap: 0.75rem;
  }
  #threat-assessment-form .ta-progress {
    font-size: 0.85rem;
    opacity: 0.8;
  }
  #threat-assessment-form button[type="button"],
  #threat-assessment-form button[type="submit"] {
    padding: 0.55rem 1.3rem;
    border-radius: 999px;
    border: 1px solid #444;
    background: #111;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
  }
  #threat-assessment-form button[type="button"]:hover,
  #threat-assessment-form button[type="submit"]:hover {
    background: #181818;
  }
  #threat-assessment-form button[disabled] {
    opacity: 0.4;
    cursor: default;
  }
  .ta-result {
    max-width: 780px;
    margin: 2rem auto 4rem auto;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 1.5rem 1.75rem;
  }
  .ta-result h2 {
    margin-top: 0;
  }
  .ta-result ul {
    padding-left: 1.2rem;
  }
  .ta-result ul li {
    margin: 0.25rem 0;
  }
  .ta-note {
    max-width: 780px;
    margin: 0 auto 1.5rem auto;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  #threat-assessment-form .ta-question label {
    display: block;
    border: 1px solid #444;
    padding: 0.55rem 0.75rem;
    margin: 0.2rem 0;
    border-radius: 8px;
  }
  #threat-assessment-form .ta-question label:hover {
    background: #1b1b1b;
  }

</style>

---

## Quick kit overview

- **Shield** – Hardened daily driver for people with **no active adversary**, but who want out of the default tracking ecosystem.  
- **Shadow** – Identity-separated comms device for people with a **real adversary or situation** where content and identity matter.  
- **Ghost** – Operational anonymity stack for people who could face **serious consequences** if their device can be tied to a time and place.

---

> ⏱️ **Time:** 5–7 minutes &nbsp;&nbsp; 🧾 **No signup** &nbsp;&nbsp; 🔐 **No identifying information**

<form id="threat-assessment-form" action="#" method="get">

<div class="ta-section active" data-step="1">
  <h3>Section 1 — Threat presence</h3>

  <div class="ta-question">
    <p class="ta-question-title">1. Are you facing any adversary who is intentionally trying to identify, monitor, or obtain your communications?</p>
    <label><input type="radio" name="q1_adversary" value="yes"> Yes</label>
    <label><input type="radio" name="q1_adversary" value="no"> No</label>
    <label><input type="radio" name="q1_adversary" value="unsure"> Unsure</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">2. Who do you believe your adversary could be?</p>
    <small>Select all that apply.</small>
    <label><input type="checkbox" name="q2_adv[]" value="bigtech"> Data brokers / Big Tech</label>
    <label><input type="checkbox" name="q2_adv[]" value="stalker"> Stalker / harassing individual</label>
    <label><input type="checkbox" name="q2_adv[]" value="scammers"> Scammers / hackers</label>
    <label><input type="checkbox" name="q2_adv[]" value="crime"> Criminal / organised crime</label>
    <label><input type="checkbox" name="q2_adv[]" value="le_intel"> Law enforcement / intelligence</label>
    <label><input type="checkbox" name="q2_adv[]" value="employer"> Employer / workplace</label>
    <label><input type="checkbox" name="q2_adv[]" value="none"> No specific adversary</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">3. Do you believe you are being targeted right now?</p>
    <label><input type="radio" name="q3_targeted" value="yes"> Yes</label>
    <label><input type="radio" name="q3_targeted" value="no"> No</label>
    <label><input type="radio" name="q3_targeted" value="unsure"> Unsure</label>
  </div>
</div>

<div class="ta-section" data-step="2">
  <h3>Section 2 — Location risk (Ghost threshold)</h3>

  <div class="ta-question">
    <p class="ta-question-title">
      4. Your communications are protected, but advanced adversaries can still exploit <em>where and when</em> your device connects.
      Would it cause issues if someone knew your device connected at a protest, workplace, or other sensitive location?
    </p>
    <label><input type="radio" name="q4_location_risk" value="yes"> Yes</label>
    <label><input type="radio" name="q4_location_risk" value="no"> No</label>
    <label><input type="radio" name="q4_location_risk" value="unsure"> Unsure</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">5. If your location during device use was exposed, what would the consequence be?</p>
    <label><input type="radio" name="q5_consequence" value="none"> No real consequence</label>
    <label><input type="radio" name="q5_consequence" value="mild"> Mild inconvenience or unwanted profiling</label>
    <label><input type="radio" name="q5_consequence" value="reputation"> Reputation or employment risk</label>
    <label><input type="radio" name="q5_consequence" value="financial"> Financial loss or legal trouble</label>
    <label><input type="radio" name="q5_consequence" value="danger"> Physical harm, arrest, or serious danger</label>
  </div>
</div>

<div class="ta-section" data-step="3">
  <h3>Section 3 — Goals &amp; use case</h3>

  <div class="ta-question">
    <p class="ta-question-title">6. What is your main privacy/security goal for this device?</p>
    <label><input type="radio" name="q6_goal" value="privacy"> General privacy</label>
    <label><input type="radio" name="q6_goal" value="identity"> Protect identity</label>
    <label><input type="radio" name="q6_goal" value="content"> Protect communication content</label>
    <label><input type="radio" name="q6_goal" value="location"> Avoid linking device to routine/locations</label>
    <label><input type="radio" name="q6_goal" value="compartment"> Dedicated second device / compartment</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">7. How will you use this device?</p>
    <label><input type="radio" name="q7_use" value="daily"> Daily driver (primary phone)</label>
    <label><input type="radio" name="q7_use" value="second"> Second device for sensitive comms</label>
    <label><input type="radio" name="q7_use" value="one_purpose"> Highly compartmentalised one-purpose device</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">8. Do you work in an area that increases your privacy/security risk?</p>
    <label><input type="radio" name="q8_work" value="yes"> Yes (journalism, activism, legal, finance, government, etc.)</label>
    <label><input type="radio" name="q8_work" value="no"> No</label>
    <label><input type="radio" name="q8_work" value="na"> Prefer not to say</label>
  </div>
</div>

<div class="ta-section" data-step="4">
  <h3>Section 4 — Assets &amp; impact</h3>

  <div class="ta-question">
    <p class="ta-question-title">9. Which assets matter most to protect?</p>
    <small>Select all that apply.</small>
    <label><input type="checkbox" name="q9_assets[]" value="identity"> Identity</label>
    <label><input type="checkbox" name="q9_assets[]" value="location"> Location / movements</label>
    <label><input type="checkbox" name="q9_assets[]" value="content"> Communication content</label>
    <label><input type="checkbox" name="q9_assets[]" value="relationships"> Relationships / contacts</label>
    <label><input type="checkbox" name="q9_assets[]" value="files"> Files, photos, documents</label>
    <label><input type="checkbox" name="q9_assets[]" value="metadata"> Metadata and patterns</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">10. What would the impact be if these assets were exposed?</p>
    <label><input type="radio" name="q10_impact" value="embarrassing"> Embarrassing or inconvenient</label>
    <label><input type="radio" name="q10_impact" value="reputational"> Reputational harm</label>
    <label><input type="radio" name="q10_impact" value="job"> Job or contract loss</label>
    <label><input type="radio" name="q10_impact" value="financial"> Financial loss</label>
    <label><input type="radio" name="q10_impact" value="legal"> Legal consequences</label>
    <label><input type="radio" name="q10_impact" value="harm"> Physical harm or imprisonment</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">11. Do you store or handle sensitive information that could interest an adversary?</p>
    <label><input type="radio" name="q11_sensitive" value="yes"> Yes</label>
    <label><input type="radio" name="q11_sensitive" value="no"> No</label>
    <label><input type="radio" name="q11_sensitive" value="unsure"> Unsure</label>
  </div>
</div>

<div class="ta-section" data-step="5">
  <h3>Section 5 — Network &amp; device setup</h3>

  <div class="ta-question">
    <p class="ta-question-title">12. How do you usually connect to the internet?</p>
    <small>Select all that apply.</small>
    <label><input type="checkbox" name="q12_net[]" value="public_wifi"> Public Wi-Fi</label>
    <label><input type="checkbox" name="q12_net[]" value="home_wifi"> Home Wi-Fi</label>
    <label><input type="checkbox" name="q12_net[]" value="personal_sim"> Personal SIM in my name</label>
    <label><input type="checkbox" name="q12_net[]" value="shared_net"> Shared family/work network</label>
    <label><input type="checkbox" name="q12_net[]" value="always_vpn"> Always-on VPN</label>
    <label><input type="checkbox" name="q12_net[]" value="anon_sim"> Anonymous SIM / data-only eSIM</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">13. Which of these behaviours apply to you?</p>
    <small>Select all that apply.</small>
    <label><input type="checkbox" name="q13_behaviour[]" value="always_on"> Keep phone powered on all day</label>
    <label><input type="checkbox" name="q13_behaviour[]" value="predictable_locations"> Use device in predictable locations</label>
    <label><input type="checkbox" name="q13_behaviour[]" value="co_located"> Keep personal and private phone together</label>
    <label><input type="checkbox" name="q13_behaviour[]" value="scanning_on"> Leave Bluetooth/Wi-Fi scanning on</label>
    <label><input type="checkbox" name="q13_behaviour[]" value="public_charging"> Charge device in public places</label>
    <label><input type="checkbox" name="q13_behaviour[]" value="none"> None of these</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">14. Does anyone else have access to your devices, even briefly?</p>
    <label><input type="radio" name="q14_access" value="yes"> Yes</label>
    <label><input type="radio" name="q14_access" value="no"> No</label>
    <label><input type="radio" name="q14_access" value="unsure"> Unsure</label>
  </div>
</div>

<div class="ta-section" data-step="6">
  <h3>Section 6 — Technical capability</h3>

  <div class="ta-question">
    <p class="ta-question-title">15. How would you rate your technical skill level?</p>
    <label><input type="radio" name="q15_skill" value="basic"> Basic</label>
    <label><input type="radio" name="q15_skill" value="intermediate"> Intermediate</label>
    <label><input type="radio" name="q15_skill" value="advanced"> Advanced</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">16. How confident are you in following OPSEC (operational security) steps if needed?</p>
    <label><input type="radio" name="q16_opsec" value="low"> Not confident</label>
    <label><input type="radio" name="q16_opsec" value="medium"> Reasonably confident</label>
    <label><input type="radio" name="q16_opsec" value="high"> Highly confident / experienced</label>
  </div>
</div>

<div class="ta-section" data-step="7">
  <h3>Section 7 — Communication needs</h3>

  <div class="ta-question">
    <p class="ta-question-title">17. Do you need reliable voice calling from this device?</p>
    <label><input type="radio" name="q17_voice" value="yes_regular"> Yes (regular voice calls)</label>
    <label><input type="radio" name="q17_voice" value="yes_voip"> Yes (VoIP only is fine)</label>
    <label><input type="radio" name="q17_voice" value="no"> No (messaging only)</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">18. Do you need SMS capability?</p>
    <label><input type="radio" name="q18_sms" value="yes"> Yes</label>
    <label><input type="radio" name="q18_sms" value="no"> No</label>
    <label><input type="radio" name="q18_sms" value="optional"> Optional / don’t mind switching to VoIP</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">19. Are you comfortable using VoIP apps (internet calling)?</p>
    <label><input type="radio" name="q19_voip" value="yes"> Yes, happy to use VoIP</label>
    <label><input type="radio" name="q19_voip" value="yes_nokyc"> Yes, but prefer KYC-free options</label>
    <label><input type="radio" name="q19_voip" value="unsure"> Unsure</label>
    <label><input type="radio" name="q19_voip" value="no"> Not comfortable</label>
  </div>
</div>

<div class="ta-section" data-step="8">
  <h3>Section 8 — Usability &amp; lifestyle</h3>

  <div class="ta-question">
    <p class="ta-question-title">20. How structured is your daily routine?</p>
    <label><input type="radio" name="q20_routine" value="predictable"> Very predictable</label>
    <label><input type="radio" name="q20_routine" value="some"> Some routine</label>
    <label><input type="radio" name="q20_routine" value="unpredictable"> Mostly unpredictable</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">21. Are you willing to follow simple OPSEC steps (e.g. keeping devices separate, short connection sessions)?</p>
    <label><input type="radio" name="q21_willing" value="yes"> Yes</label>
    <label><input type="radio" name="q21_willing" value="maybe"> Maybe</label>
    <label><input type="radio" name="q21_willing" value="no"> No</label>
  </div>

  <div class="ta-question">
    <p class="ta-question-title">22. Would you tolerate comms-site style usage (short, deliberate sessions) if your situation required it?</p>
    <label><input type="radio" name="q22_commsite" value="yes"> Yes</label>
    <label><input type="radio" name="q22_commsite" value="maybe"> Maybe</label>
    <label><input type="radio" name="q22_commsite" value="no"> No</label>
  </div>
</div>

<div class="ta-nav">
  <button type="button" id="ta-prev">Back</button>
  <button type="button" id="ta-next">Next</button>
  <button type="submit" id="ta-submit">Get my recommendation</button>
  <div class="ta-progress" id="ta-progress">Step 1 of 8</div>
</div>

</form>

<div class="ta-note">
  <p><em>Your answers are processed in your browser. The core kit recommendation follows the logic designed for Shield (low risk), Shadow (medium risk) and Ghost (high risk). Future versions may use more of your answers to further customise wording.</em></p>
</div>

## Your results

<div id="ta-result" class="ta-result">
  <p><em>Work through the sections above and click “Get my recommendation” on the last step to see your result here.</em></p>
</div>

<script>
// Wizard-style section navigation + simple kit logic
(function() {
  const form = document.getElementById('threat-assessment-form');
  const resultEl = document.getElementById('ta-result');
  if (!form || !resultEl) return;

  const sections = Array.prototype.slice.call(form.querySelectorAll('.ta-section'));
  const prevBtn = document.getElementById('ta-prev');
  const nextBtn = document.getElementById('ta-next');
  const submitBtn = document.getElementById('ta-submit');
  const progressEl = document.getElementById('ta-progress');

  let current = 0;
  const total = sections.length;

  function showSection(index) {
    sections.forEach((sec, i) => {
      sec.classList.toggle('active', i === index);
    });

    if (progressEl) {
      progressEl.textContent = 'Step ' + (index + 1) + ' of ' + total;
    }

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.style.display = index === total - 1 ? 'none' : 'inline-block';
    if (submitBtn) submitBtn.style.display = index === total - 1 ? 'inline-block' : 'none';

    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (current > 0) {
        current -= 1;
        showSection(current);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (current < total - 1) {
        current += 1;
        showSection(current);
      }
    });
  }

  showSection(current);

  function val(name) {
    const el = form.querySelector('[name="' + name + '"]:checked');
    return el ? el.value : null;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const q1 = val('q1_adversary');
    const q4 = val('q4_location_risk');
    const q5 = val('q5_consequence');

    if (!q1) {
      resultEl.innerHTML = '<p>Please answer the first question about whether you are facing an adversary to get a recommendation.</p>';
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    let kit = 'shield';

    if (q1 && q1 !== 'no') {
      kit = 'shadow';
      if (q4 === 'yes' || q5 === 'danger') {
        kit = 'ghost';
      }
    }

    let html = '';

    if (kit === 'shield') {
      html = `
<h2>Recommended: Shield – Hardened Daily Driver</h2>
<p>You don’t appear to be facing a targeted adversary. Your risks are mainly <strong>corporate tracking, data harvesting, and general digital exposure</strong> – not life- or liberty-threatening surveillance.</p>
<p><strong>Shield</strong> is designed for this environment: a hardened, privacy-first phone that still behaves like a normal phone.</p>

<h3>Why Shield fits you</h3>
<ul>
  <li>No active adversary trying to monitor your communications.</li>
  <li>You want stronger privacy than a stock phone.</li>
  <li>You don’t need to hide where you are when you connect.</li>
  <li>You still want seamless maps, calls and apps.</li>
</ul>

<h3>What Shield does for you</h3>
<ul>
  <li>Runs GrapheneOS with tightened security defaults.</li>
  <li>Reduces tracking from apps, advertisers and data brokers.</li>
  <li>Encrypts device storage by default.</li>
  <li>Cuts down your digital footprint without changing your lifestyle.</li>
</ul>

<h3>Voice &amp; calling options</h3>
<p>You can optionally use a <strong>KYC VoIP service</strong> if you’d like fewer call records stored with your telco. This <strong>doesn’t encrypt call content</strong>, but it does move call metadata off the mobile network. For your risk level, non-KYC VoIP is usually unnecessary.</p>

<p><strong>Next:</strong> learn more about the Shield kit and how it compares to Shadow and Ghost.</p>
`;
    } else if (kit === 'shadow') {
      html = `
<h2>Recommended: Shadow – Identity-Separated Comms Device</h2>
<p>Your answers show you’re facing an adversary or situation where your <strong>identity, content or communications</strong> matter if exposed. You don’t currently need full location anonymity, but you do need a safer place to talk, plan and store sensitive material.</p>

<h3>Why Shadow fits you</h3>
<ul>
  <li>There is a specific person, group or organisation you want protection from, or you’re unsure but concerned.</li>
  <li>You would face consequences if messages or files were exposed.</li>
  <li>You need stronger privacy than a normal phone can offer.</li>
  <li>You don’t yet require high-friction, location-anonymous workflows.</li>
</ul>

<h3>What Shadow does for you</h3>
<ul>
  <li>Protects <strong>what you say</strong> and <strong>who you say it to</strong>.</li>
  <li>Separates sensitive comms from your day-to-day footprint.</li>
  <li>Runs a hardened GrapheneOS build with an encrypted comms stack.</li>
  <li>Can be your daily driver or a dedicated second device.</li>
</ul>

<h3>Voice &amp; calling options</h3>
<p>If you need to make calls from this device:</p>
<ul>
  <li><strong>KYC VoIP</strong>: easier to use, supports SMS and affordable credit; improves privacy over normal SIM calling <em>but does not encrypt call content</em>. Suitable when being linked to the VoIP account isn’t high risk for you.</li>
  <li><strong>Non-KYC VoIP</strong>: no ID attached to the account, no SMS, moderate credit cost; best when you want anonymous calling without your name or telco in the loop. Recommended for Shadow users who must have call capability.</li>
</ul>
<p>Your encrypted messaging apps are what protect call or chat content – VoIP mainly reduces metadata and identity linkage.</p>

<p><strong>Next:</strong> explore the Shadow kit and how to use it as a safe second phone or hardened daily driver.</p>
`;
    } else {
      html = `
<h2>Recommended: Ghost – Operational Anonymity Stack</h2>
<p>Your answers indicate that <strong>where and when your device connects is itself sensitive</strong>. If someone could tie your physical presence to your network activity, you could face serious consequences.</p>

<h3>Why Ghost is required</h3>
<ul>
  <li>Location or timing correlation could put you at legal, professional or physical risk.</li>
  <li>You may be dealing with capable adversaries (with access to metadata, telco logs or surveillance).</li>
  <li>It’s no longer enough to protect just content and identity – your <strong>pattern of use</strong> must also be obscured.</li>
</ul>

<h3>What Ghost does for you</h3>
<ul>
  <li>Takes the SIM out of the phone entirely – all traffic passes through a privacy router.</li>
  <li>Keeps the handset radio-silent (airplane mode) and USB-tethered.</li>
  <li>Uses identity rotation, VPN + Tor and traffic padding to resist correlation.</li>
  <li>Encourages short, deliberate sessions from varied locations instead of always-on presence.</li>
</ul>

<h3>Voice &amp; calling options</h3>
<p>Ghost is designed as a message-first system. If you <em>must</em> make calls:</p>
<ul>
  <li><strong>Non-KYC VoIP only</strong>, and only when strictly necessary. This keeps your real identity off the account but does <em>not</em> encrypt call content.</li>
  <li><strong>KYC VoIP is not recommended</strong> for Ghost – it reintroduces identity binding that Ghost is designed to avoid.</li>
</ul>
<p>For highly sensitive conversations, end-to-end encrypted voice inside your comms apps is preferred, from short sessions and varied locations.</p>

<p><strong>Next:</strong> read more about the Ghost kit and what day-to-day use looks like at this risk level.</p>
`;
    }

    resultEl.innerHTML = html;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
</script>
