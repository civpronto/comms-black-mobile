---
layout: default
title: Threat Assessment
permalink: /threat-assessment.html
---

# Threat Assessment

Find out whether your situation calls for **Shield**, **Shadow** or **Ghost** in around 5–7 minutes.

This assessment gives you a kit recommendation based on:
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
  }
  #threat-assessment-form .ta-section h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
  #threat-assessment-form .ta-question {
    margin: 0.5rem 0 0.2rem 0;
    padding-bottom: 0.4rem;
    border-bottom: none;
    display: none;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  #threat-assessment-form .ta-question.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
  #threat-assessment-form .ta-question-title {
    margin: 0 0 0.35rem 0;
    font-weight: 600;
  }
  #threat-assessment-form small {
    opacity: 0.75;
  }
  #threat-assessment-form .ta-options {
    margin-top: 0.4rem;
  }
  #threat-assessment-form .ta-card {
    position: relative;
    display: block;
    border: 1px solid #15857a;
    background: rgba(21,133,122,0.08);
    padding: 0.75rem 0.9rem 0.75rem 0.9rem;
    margin: 0.35rem 0;
    border-radius: 999px;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease;
    font-size: 0.95rem;
  }
  #threat-assessment-form .ta-card span.ta-icon {
    margin-right: 0.6rem;
    opacity: 0.95;
  }
  #threat-assessment-form .ta-card input[type="radio"],
  #threat-assessment-form .ta-card input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  #threat-assessment-form .ta-card.selected {
    background: #15857a;
    border-color: #19a08b;
    transform: translateY(-1px);
    box-shadow: 0 0 0 1px #0b4841;
  }
  #threat-assessment-form .ta-card:hover {
    background: rgba(21,133,122,0.22);
  }
  #threat-assessment-form .ta-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
    gap: 0.75rem;
  }
  #threat-assessment-form .ta-buttons {
    display: flex;
    gap: 0.5rem;
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
  #threat-assessment-form .ta-progress-wrapper {
    flex: 1;
    text-align: right;
    font-size: 0.85rem;
    opacity: 0.85;
  }
  #threat-assessment-form .ta-progressbar-bg {
    background: #111;
    border-radius: 999px;
    overflow: hidden;
    height: 6px;
    margin-top: 0.2rem;
  }
  #threat-assessment-form .ta-progressbar-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #888, #fff);
    transition: width 0.25s ease;
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
</style>

---

## Quick kit overview

- **Shield** – Hardened daily driver for people with **no active adversary**, but who want out of the default tracking ecosystem.  
- **Shadow** – Identity-separated comms device for people with a **real adversary or situation** where content and identity matter.  
- **Ghost** – Operational anonymity stack for people who could face **serious consequences** if their device can be tied to a time and place.

---

> ⏱️ **Time:** 5–7 minutes &nbsp;&nbsp; 🧾 **No signup** &nbsp;&nbsp; 🔐 **No identifying information**

<form id="threat-assessment-form" action="#" method="get">

<div class="ta-section" data-section="1">
  <h3>Section 1 — Threat presence</h3>

  <div class="ta-question" data-question="1">
    <p class="ta-question-title">1. Are you facing any adversary who is intentionally trying to identify, monitor, or obtain your communications?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q1_adversary" value="yes">
        <span class="ta-icon">🎯</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q1_adversary" value="no">
        <span class="ta-icon">🌐</span> No
      </label>
      <label class="ta-card">
        <input type="radio" name="q1_adversary" value="unsure">
        <span class="ta-icon">❓</span> Unsure
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="2">
    <p class="ta-question-title">2. Who do you believe your adversary could be?</p>
    <small>Select all that apply.</small>
    <div class="ta-options">
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="bigtech">
        <span class="ta-icon">🏢</span> Data brokers / Big Tech
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="stalker">
        <span class="ta-icon">👤</span> Stalker / harassing individual
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="scammers">
        <span class="ta-icon">🕵️</span> Scammers / hackers
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="crime">
        <span class="ta-icon">💀</span> Criminal / organised crime
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="le_intel">
        <span class="ta-icon">⚖️</span> Law enforcement / intelligence
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="employer">
        <span class="ta-icon">💼</span> Employer / workplace
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q2_adv[]" value="none">
        <span class="ta-icon">➖</span> No specific adversary
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="3">
    <p class="ta-question-title">3. Do you believe you are being targeted right now?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q3_targeted" value="yes">
        <span class="ta-icon">🚨</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q3_targeted" value="no">
        <span class="ta-icon">✅</span> No
      </label>
      <label class="ta-card">
        <input type="radio" name="q3_targeted" value="unsure">
        <span class="ta-icon">❓</span> Unsure
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="2">
  <h3>Section 2 — Location risk (Ghost threshold)</h3>

  <div class="ta-question" data-question="4">
    <p class="ta-question-title">
      4. Your communications are protected, but advanced adversaries can still exploit <em>where and when</em> your device connects.
      Would it cause issues if someone knew your device connected at a protest, workplace, or other sensitive location?
    </p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q4_location_risk" value="yes">
        <span class="ta-icon">📍</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q4_location_risk" value="no">
        <span class="ta-icon">🧭</span> No
      </label>
      <label class="ta-card">
        <input type="radio" name="q4_location_risk" value="unsure">
        <span class="ta-icon">❓</span> Unsure
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="5">
    <p class="ta-question-title">5. If your location during device use was exposed, what would the consequence be?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q5_consequence" value="none">
        <span class="ta-icon">🙂</span> No real consequence
      </label>
      <label class="ta-card">
        <input type="radio" name="q5_consequence" value="mild">
        <span class="ta-icon">😕</span> Mild inconvenience or unwanted profiling
      </label>
      <label class="ta-card">
        <input type="radio" name="q5_consequence" value="reputation">
        <span class="ta-icon">💼</span> Reputation or employment risk
      </label>
      <label class="ta-card">
        <input type="radio" name="q5_consequence" value="financial">
        <span class="ta-icon">💸</span> Financial loss or legal trouble
      </label>
      <label class="ta-card">
        <input type="radio" name="q5_consequence" value="danger">
        <span class="ta-icon">⚠️</span> Physical harm, arrest, or serious danger
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="3">
  <h3>Section 3 — Goals &amp; use case</h3>

  <div class="ta-question" data-question="6">
    <p class="ta-question-title">6. What is your main privacy/security goal for this device?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q6_goal" value="privacy">
        <span class="ta-icon">🛡️</span> General privacy
      </label>
      <label class="ta-card">
        <input type="radio" name="q6_goal" value="identity">
        <span class="ta-icon">🧑‍💼</span> Protect identity
      </label>
      <label class="ta-card">
        <input type="radio" name="q6_goal" value="content">
        <span class="ta-icon">✉️</span> Protect communication content
      </label>
      <label class="ta-card">
        <input type="radio" name="q6_goal" value="location">
        <span class="ta-icon">📍</span> Avoid linking device to routine/locations
      </label>
      <label class="ta-card">
        <input type="radio" name="q6_goal" value="compartment">
        <span class="ta-icon">📦</span> Dedicated second device / compartment
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="7">
    <p class="ta-question-title">7. How will you use this device?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q7_use" value="daily">
        <span class="ta-icon">📱</span> Daily driver (primary phone)
      </label>
      <label class="ta-card">
        <input type="radio" name="q7_use" value="second">
        <span class="ta-icon">📲</span> Second device for sensitive comms
      </label>
      <label class="ta-card">
        <input type="radio" name="q7_use" value="one_purpose">
        <span class="ta-icon">🎯</span> Highly compartmentalised one-purpose device
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="8">
    <p class="ta-question-title">8. Do you work in an area that increases your privacy/security risk?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q8_work" value="yes">
        <span class="ta-icon">📢</span> Yes (journalism, activism, legal, finance, government, etc.)
      </label>
      <label class="ta-card">
        <input type="radio" name="q8_work" value="no">
        <span class="ta-icon">🏠</span> No
      </label>
      <label class="ta-card">
        <input type="radio" name="q8_work" value="na">
        <span class="ta-icon">➖</span> Prefer not to say
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="4">
  <h3>Section 4 — Assets &amp; impact</h3>

  <div class="ta-question" data-question="9">
    <p class="ta-question-title">9. Which assets matter most to protect?</p>
    <small>Select all that apply.</small>
    <div class="ta-options">
      <label class="ta-card">
        <input type="checkbox" name="q9_assets[]" value="identity">
        <span class="ta-icon">🪪</span> Identity
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q9_assets[]" value="location">
        <span class="ta-icon">📍</span> Location / movements
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q9_assets[]" value="content">
        <span class="ta-icon">✉️</span> Communication content
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q9_assets[]" value="relationships">
        <span class="ta-icon">👥</span> Relationships / contacts
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q9_assets[]" value="files">
        <span class="ta-icon">🗂️</span> Files, photos, documents
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q9_assets[]" value="metadata">
        <span class="ta-icon">🔍</span> Metadata and patterns
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="10">
    <p class="ta-question-title">10. What would the impact be if these assets were exposed?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q10_impact" value="embarrassing">
        <span class="ta-icon">😬</span> Embarrassing or inconvenient
      </label>
      <label class="ta-card">
        <input type="radio" name="q10_impact" value="reputational">
        <span class="ta-icon">💼</span> Reputational harm
      </label>
      <label class="ta-card">
        <input type="radio" name="q10_impact" value="job">
        <span class="ta-icon">📉</span> Job or contract loss
      </label>
      <label class="ta-card">
        <input type="radio" name="q10_impact" value="financial">
        <span class="ta-icon">💸</span> Financial loss
      </label>
      <label class="ta-card">
        <input type="radio" name="q10_impact" value="legal">
        <span class="ta-icon">⚖️</span> Legal consequences
      </label>
      <label class="ta-card">
        <input type="radio" name="q10_impact" value="harm">
        <span class="ta-icon">🚨</span> Physical harm or imprisonment
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="11">
    <p class="ta-question-title">11. Do you store or handle sensitive information that could interest an adversary?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q11_sensitive" value="yes">
        <span class="ta-icon">🗄️</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q11_sensitive" value="no">
        <span class="ta-icon">➖</span> No
      </label>
      <label class="ta-card">
        <input type="radio" name="q11_sensitive" value="unsure">
        <span class="ta-icon">❓</span> Unsure
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="5">
  <h3>Section 5 — Network &amp; device setup</h3>

  <div class="ta-question" data-question="12">
    <p class="ta-question-title">12. How do you usually connect to the internet?</p>
    <small>Select all that apply.</small>
    <div class="ta-options">
      <label class="ta-card">
        <input type="checkbox" name="q12_net[]" value="public_wifi">
        <span class="ta-icon">📶</span> Public Wi-Fi
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q12_net[]" value="home_wifi">
        <span class="ta-icon">🏠</span> Home Wi-Fi
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q12_net[]" value="personal_sim">
        <span class="ta-icon">📡</span> Personal SIM in my name
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q12_net[]" value="shared_net">
        <span class="ta-icon">👨‍👩‍👧‍👦</span> Shared family/work network
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q12_net[]" value="always_vpn">
        <span class="ta-icon">🔐</span> Always-on VPN
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q12_net[]" value="anon_sim">
        <span class="ta-icon">🕵️</span> Anonymous SIM / data-only eSIM
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="13">
    <p class="ta-question-title">13. Which of these behaviours apply to you?</p>
    <small>Select all that apply.</small>
    <div class="ta-options">
      <label class="ta-card">
        <input type="checkbox" name="q13_behaviour[]" value="always_on">
        <span class="ta-icon">⏱️</span> Keep phone powered on all day
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q13_behaviour[]" value="predictable_locations">
        <span class="ta-icon">📍</span> Use device in predictable locations
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q13_behaviour[]" value="co_located">
        <span class="ta-icon">📱📱</span> Keep personal and private phone together
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q13_behaviour[]" value="scanning_on">
        <span class="ta-icon">📡</span> Leave Bluetooth/Wi-Fi scanning on
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q13_behaviour[]" value="public_charging">
        <span class="ta-icon">🔌</span> Charge device in public places
      </label>
      <label class="ta-card">
        <input type="checkbox" name="q13_behaviour[]" value="none">
        <span class="ta-icon">➖</span> None of these
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="14">
    <p class="ta-question-title">14. Does anyone else have access to your devices, even briefly?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q14_access" value="yes">
        <span class="ta-icon">👥</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q14_access" value="no">
        <span class="ta-icon">🔒</span> No
      </label>
      <label class="ta-card">
        <input type="radio" name="q14_access" value="unsure">
        <span class="ta-icon">❓</span> Unsure
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="6">
  <h3>Section 6 — Technical capability</h3>

  <div class="ta-question" data-question="15">
    <p class="ta-question-title">15. How would you rate your technical skill level?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q15_skill" value="basic">
        <span class="ta-icon">📗</span> Basic
      </label>
      <label class="ta-card">
        <input type="radio" name="q15_skill" value="intermediate">
        <span class="ta-icon">📘</span> Intermediate
      </label>
      <label class="ta-card">
        <input type="radio" name="q15_skill" value="advanced">
        <span class="ta-icon">📙</span> Advanced
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="16">
    <p class="ta-question-title">16. How confident are you in following OPSEC (operational security) steps if needed?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q16_opsec" value="low">
        <span class="ta-icon">🌱</span> Not confident
      </label>
      <label class="ta-card">
        <input type="radio" name="q16_opsec" value="medium">
        <span class="ta-icon">🌿</span> Reasonably confident
      </label>
      <label class="ta-card">
        <input type="radio" name="q16_opsec" value="high">
        <span class="ta-icon">🌳</span> Highly confident / experienced
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="7">
  <h3>Section 7 — Communication needs</h3>

  <div class="ta-question" data-question="17">
    <p class="ta-question-title">17. Do you need reliable voice calling from this device?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q17_voice" value="yes_regular">
        <span class="ta-icon">📞</span> Yes (regular voice calls)
      </label>
      <label class="ta-card">
        <input type="radio" name="q17_voice" value="yes_voip">
        <span class="ta-icon">📲</span> Yes (VoIP only is fine)
      </label>
      <label class="ta-card">
        <input type="radio" name="q17_voice" value="no">
        <span class="ta-icon">💬</span> No (messaging only)
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="18">
    <p class="ta-question-title">18. Do you need SMS capability?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q18_sms" value="yes">
        <span class="ta-icon">📩</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q18_sms" value="no">
        <span class="ta-icon">❌</span> No</label>
      <label class="ta-card">
        <input type="radio" name="q18_sms" value="optional">
        <span class="ta-icon">♻️</span> Optional / don’t mind switching to VoIP
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="19">
    <p class="ta-question-title">19. Are you comfortable using VoIP apps (internet calling)?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q19_voip" value="yes">
        <span class="ta-icon">📶</span> Yes, happy to use VoIP
      </label>
      <label class="ta-card">
        <input type="radio" name="q19_voip" value="yes_nokyc">
        <span class="ta-icon">🕵️</span> Yes, but prefer KYC-free options
      </label>
      <label class="ta-card">
        <input type="radio" name="q19_voip" value="unsure">
        <span class="ta-icon">❓</span> Unsure
      </label>
      <label class="ta-card">
        <input type="radio" name="q19_voip" value="no">
        <span class="ta-icon">❌</span> Not comfortable
      </label>
    </div>
  </div>
</div>

<div class="ta-section" data-section="8">
  <h3>Section 8 — Usability &amp; lifestyle</h3>

  <div class="ta-question" data-question="20">
    <p class="ta-question-title">20. How structured is your daily routine?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q20_routine" value="predictable">
        <span class="ta-icon">📅</span> Very predictable
      </label>
      <label class="ta-card">
        <input type="radio" name="q20_routine" value="some">
        <span class="ta-icon">📆</span> Some routine
      </label>
      <label class="ta-card">
        <input type="radio" name="q20_routine" value="unpredictable">
        <span class="ta-icon">🎲</span> Mostly unpredictable
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="21">
    <p class="ta-question-title">21. Are you willing to follow simple OPSEC steps (e.g. keeping devices separate, short connection sessions)?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q21_willing" value="yes">
        <span class="ta-icon">✅</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q21_willing" value="maybe">
        <span class="ta-icon">🤔</span> Maybe
      </label>
      <label class="ta-card">
        <input type="radio" name="q21_willing" value="no">
        <span class="ta-icon">❌</span> No
      </label>
    </div>
  </div>

  <div class="ta-question" data-question="22">
    <p class="ta-question-title">22. Would you tolerate comms-site style usage (short, deliberate sessions) if your situation required it?</p>
    <div class="ta-options">
      <label class="ta-card">
        <input type="radio" name="q22_commsite" value="yes">
        <span class="ta-icon">📡</span> Yes
      </label>
      <label class="ta-card">
        <input type="radio" name="q22_commsite" value="maybe">
        <span class="ta-icon">🤔</span> Maybe
      </label>
      <label class="ta-card">
        <input type="radio" name="q22_commsite" value="no">
        <span class="ta-icon">❌</span> No
      </label>
    </div>
  </div>
</div>

<div class="ta-nav">
  <div class="ta-buttons">
    <button type="button" id="ta-prev">Back</button>
    <button type="button" id="ta-next">Next</button>
    <button type="submit" id="ta-submit">Get my recommendation</button>
  </div>
  <div class="ta-progress-wrapper">
    <div id="ta-progress-text">0% complete</div>
    <div class="ta-progressbar-bg">
      <div class="ta-progressbar-fill" id="ta-progressbar-fill"></div>
    </div>
  </div>
</div>

</form>

<div class="ta-note">
  <p><em>Your answers are processed in your browser. The core kit recommendation follows the logic designed for Shield (low risk), Shadow (medium risk) and Ghost (high risk).</em></p>
</div>

## Your results

<div id="ta-result" class="ta-result">
  <p><em>Work through the questions above and click “Get my recommendation” on the last step to see your result here.</em></p>
</div>

<script>
// Card-select behaviour, one-question-at-a-time wizard and kit logic
(function() {
  const form = document.getElementById('threat-assessment-form');
  const resultEl = document.getElementById('ta-result');
  if (!form || !resultEl) return;

  const questions = Array.prototype.slice.call(form.querySelectorAll('.ta-question'));
  const sections  = Array.prototype.slice.call(form.querySelectorAll('.ta-section'));
  const prevBtn   = document.getElementById('ta-prev');
  const nextBtn   = document.getElementById('ta-next');
  const submitBtn = document.getElementById('ta-submit');
  const progressText = document.getElementById('ta-progress-text');
  const progressFill = document.getElementById('ta-progressbar-fill');
  const nav = document.querySelector('.ta-nav');

  const total = questions.length;
  let current = 0;

  // Init card-select: clicking a card selects input and toggles "selected" class
  form.addEventListener('click', function(e) {
    const card = e.target.closest('.ta-card');
    if (!card) return;

    const input = card.querySelector('input');
    if (!input) return;

    if (input.type === 'radio') {
      const name = input.name;
      const groupCards = form.querySelectorAll('.ta-card input[name="' + name + '"]');
      groupCards.forEach(function(inp) {
        inp.closest('.ta-card').classList.remove('selected');
      });
      card.classList.add('selected');
      input.checked = true;
    } else if (input.type === 'checkbox') {
      const selected = card.classList.toggle('selected');
      input.checked = selected;
    }
  });

  function showQuestion(index) {
    questions.forEach(function(q) {
      q.classList.remove('active');
    });
    sections.forEach(function(sec) {
      sec.style.display = 'none';
    });

    const q = questions[index];
    if (!q) return;
    q.classList.add('active');

    const parentSection = q.closest('.ta-section');
    if (parentSection) {
      parentSection.style.display = 'block';
    }

    // Move nav into the active question so controls sit inside the tile
    if (nav && q.contains(nav) === false) {
      q.appendChild(nav);
    }

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.style.display = index === total - 1 ? 'none' : 'inline-block';
    if (submitBtn) submitBtn.style.display = index === total - 1 ? 'inline-block' : 'none';

    const pct = Math.round(((index + 1) / total) * 100);
    if (progressText) progressText.textContent = pct + '% complete';
    if (progressFill) progressFill.style.width = pct + '%';

    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function val(name) {
    const el = form.querySelector('[name="' + name + '"]:checked');
    return el ? el.value : null;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (current > 0) {
        current -= 1;
        showQuestion(current);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (current < total - 1) {
        current += 1;
        showQuestion(current);
      }
    });
  }

  // Start at first question
  showQuestion(current);

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
