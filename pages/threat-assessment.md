---
layout: default
title: Threat Assessment
permalink: /threat-assessment.html
---

# Threat Assessment

<p class="muted">Answer 22 quick questions to generate your personalised Threat Profile and see whether Shield, Shadow, or Ghost fits your situation.</p>

<section class="card ta-card">

  <div class="ta-progress">
    <div class="ta-progress-header">
      <span>Progress</span>
      <span id="ta-progress-percent">0%</span>
    </div>
    <div class="ta-progress-track">
      <div id="ta-progress-bar"></div>
    </div>
    <p class="ta-progress-note" id="ta-progress-note">
      Answer each question to unlock your Threat Profile.
    </p>
  </div>

  <form id="ta-form" class="ta-form" novalidate>
    
    <!-- Q1 -->
    <div class="ta-question" data-question-id="1">
      <h3 class="ta-question-title">
        1. Are you facing any adversary who is intentionally trying to identify, monitor, or obtain your communications?
      </h3>
      <div class="ta-options" role="radiogroup" aria-label="Intentional adversary">
        <label class="ta-option">
          <input type="radio" name="q1" value="yes" required>
          <span class="ta-option-inner">✅ Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q1" value="no">
          <span class="ta-option-inner">❌ No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q1" value="unsure">
          <span class="ta-option-inner">🤔 Unsure</span>
        </label>
      </div>
    </div>

    <!-- Q2 -->
    <div class="ta-question" data-question-id="2">
      <h3 class="ta-question-title">
        2. Who do you believe your adversary could be? <span class="ta-sub">Select all that apply</span>
      </h3>
      <div class="ta-options" aria-label="Possible adversaries">
        <label class="ta-option">
          <input type="checkbox" name="q2" value="data-brokers">
          <span class="ta-option-inner">🧮 Data brokers / Big Tech</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q2" value="stalker">
          <span class="ta-option-inner">🕵️ Stalker / Harassing individual</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q2" value="scammers">
          <span class="ta-option-inner">🎣 Scammers / Hackers</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q2" value="criminal">
          <span class="ta-option-inner">💣 Criminal / Organised crime</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q2" value="law-enforcement">
          <span class="ta-option-inner">⚖️ Law enforcement / Intelligence</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q2" value="employer">
          <span class="ta-option-inner">🏢 Employer / Workplace investigation</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q2" value="none">
          <span class="ta-option-inner">🌱 No specific adversary</span>
        </label>
      </div>
    </div>

    <!-- Q3 -->
    <div class="ta-question" data-question-id="3">
      <h3 class="ta-question-title">
        3. Do you believe you are being targeted right now?
      </h3>
      <div class="ta-options" role="radiogroup" aria-label="Currently targeted">
        <label class="ta-option">
          <input type="radio" name="q3" value="yes">
          <span class="ta-option-inner">🎯 Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q3" value="no">
          <span class="ta-option-inner">🕊️ No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q3" value="unsure">
          <span class="ta-option-inner">🤷 Unsure</span>
        </label>
      </div>
    </div>

    <!-- Q4 -->
    <div class="ta-question" data-question-id="4">
      <h3 class="ta-question-title">
        4. Your communications are protected, but advanced adversaries can still exploit where and when your device connects.<br>
        Would it cause issues if someone knew your device connected at a protest, workplace, or other sensitive location?
      </h3>
      <div class="ta-options" role="radiogroup" aria-label="Location exposure issues">
        <label class="ta-option">
          <input type="radio" name="q4" value="yes">
          <span class="ta-option-inner">📍 Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q4" value="no">
          <span class="ta-option-inner">👌 No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q4" value="unsure">
          <span class="ta-option-inner">❓ Unsure</span>
        </label>
      </div>
    </div>

    <!-- Q5 -->
    <div class="ta-question" data-question-id="5">
      <h3 class="ta-question-title">
        5. If your location during device use was exposed, what would the consequence be?
      </h3>
      <div class="ta-options" role="radiogroup" aria-label="Location consequence">
        <label class="ta-option">
          <input type="radio" name="q5" value="none">
          <span class="ta-option-inner">🙂 No real consequence</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q5" value="mild">
          <span class="ta-option-inner">📊 Mild inconvenience or unwanted profiling</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q5" value="reputation">
          <span class="ta-option-inner">🧱 Reputation or employment risk</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q5" value="legal">
          <span class="ta-option-inner">⚠️ Financial loss or legal trouble</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q5" value="physical">
          <span class="ta-option-inner">🚨 Physical harm, arrest, or serious danger</span>
        </label>
      </div>
    </div>

    <!-- Q6 -->
    <div class="ta-question" data-question-id="6">
      <h3 class="ta-question-title">
        6. What is your main privacy/security goal for this device?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q6" value="general-privacy">
          <span class="ta-option-inner">🛡️ General privacy</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q6" value="protect-identity">
          <span class="ta-option-inner">🕶️ Protect identity</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q6" value="protect-content">
          <span class="ta-option-inner">🔐 Protect communication content</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q6" value="avoid-locations">
          <span class="ta-option-inner">📍 Avoid linking device to my routine/locations</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q6" value="second-device">
          <span class="ta-option-inner">📲 Dedicated second device / compartment</span>
        </label>
      </div>
    </div>

    <!-- Q7 -->
    <div class="ta-question" data-question-id="7">
      <h3 class="ta-question-title">
        7. How will you use this device?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q7" value="daily-driver">
          <span class="ta-option-inner">📱 Daily driver (primary phone)</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q7" value="second-device">
          <span class="ta-option-inner">📲 Second device for sensitive comms</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q7" value="one-purpose">
          <span class="ta-option-inner">🎯 Highly compartmentalised one-purpose device</span>
        </label>
      </div>
    </div>

    <!-- Q8 -->
    <div class="ta-question" data-question-id="8">
      <h3 class="ta-question-title">
        8. Do you work in an area that increases your privacy/security risk?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q8" value="yes">
          <span class="ta-option-inner">📰 Yes (journalism, activism, legal, finance, government, etc.)</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q8" value="no">
          <span class="ta-option-inner">🙅 No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q8" value="prefer-not">
          <span class="ta-option-inner">🙈 Prefer not to say</span>
        </label>
      </div>
    </div>

    <!-- Q9 -->
    <div class="ta-question" data-question-id="9">
      <h3 class="ta-question-title">
        9. Which assets matter most to protect? <span class="ta-sub">Select all that apply</span>
      </h3>
      <div class="ta-options">
        <label class="ta-option">
          <input type="checkbox" name="q9" value="identity">
          <span class="ta-option-inner">🪪 Identity</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q9" value="location">
          <span class="ta-option-inner">🗺️ Location / movements</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q9" value="content">
          <span class="ta-option-inner">💬 Communication content</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q9" value="relationships">
          <span class="ta-option-inner">👥 Relationships / contacts</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q9" value="files">
          <span class="ta-option-inner">📁 Files, photos, documents</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q9" value="metadata">
          <span class="ta-option-inner">📡 Metadata + patterns</span>
        </label>
      </div>
    </div>

    <!-- Q10 -->
    <div class="ta-question" data-question-id="10">
      <h3 class="ta-question-title">
        10. What would the impact be if these assets were exposed?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q10" value="embarrassing">
          <span class="ta-option-inner">😬 Embarrassing or inconvenient</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q10" value="reputation">
          <span class="ta-option-inner">📉 Reputational harm</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q10" value="job">
          <span class="ta-option-inner">💼 Job or contract loss</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q10" value="financial">
          <span class="ta-option-inner">💸 Financial loss</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q10" value="legal">
          <span class="ta-option-inner">⚖️ Legal consequences</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q10" value="physical-harm">
          <span class="ta-option-inner">🚨 Physical harm or imprisonment</span>
        </label>
      </div>
    </div>

    <!-- Q11 -->
    <div class="ta-question" data-question-id="11">
      <h3 class="ta-question-title">
        11. Do you store or handle sensitive information that could interest an adversary?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q11" value="yes">
          <span class="ta-option-inner">📂 Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q11" value="no">
          <span class="ta-option-inner">📭 No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q11" value="unsure">
          <span class="ta-option-inner">❓ Unsure</span>
        </label>
      </div>
    </div>

    <!-- Q12 -->
    <div class="ta-question" data-question-id="12">
      <h3 class="ta-question-title">
        12. How do you usually connect to the internet?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q12" value="public-wifi">
          <span class="ta-option-inner">📶 Public Wi-Fi</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q12" value="home-wifi">
          <span class="ta-option-inner">🏠 Home Wi-Fi</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q12" value="personal-sim">
          <span class="ta-option-inner">📡 Personal SIM in my name</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q12" value="shared-network">
          <span class="ta-option-inner">👨‍👩‍👧 Shared family/work network</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q12" value="always-vpn">
          <span class="ta-option-inner">🧱 Always-on VPN</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q12" value="anonymous-sim">
          <span class="ta-option-inner">🕵️ Anonymous SIM / data-only eSIM</span>
        </label>
      </div>
    </div>

    <!-- Q13 -->
    <div class="ta-question" data-question-id="13">
      <h3 class="ta-question-title">
        13. Which of these behaviours apply to you? <span class="ta-sub">Select all that apply</span>
      </h3>
      <div class="ta-options">
        <label class="ta-option">
          <input type="checkbox" name="q13" value="always-on">
          <span class="ta-option-inner">📲 Keep phone powered on all day</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q13" value="predictable-locations">
          <span class="ta-option-inner">📍 Use device in predictable locations</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q13" value="keep-devices-together">
          <span class="ta-option-inner">📦 Keep personal and private phone together</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q13" value="scanning-on">
          <span class="ta-option-inner">📡 Leave Bluetooth/Wi-Fi scanning on</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q13" value="public-charging">
          <span class="ta-option-inner">🔌 Charge device in public places</span>
        </label>
        <label class="ta-option">
          <input type="checkbox" name="q13" value="none">
          <span class="ta-option-inner">🙅 None of these</span>
        </label>
      </div>
    </div>

    <!-- Q14 -->
    <div class="ta-question" data-question-id="14">
      <h3 class="ta-question-title">
        14. Does anyone else have access to your devices, even briefly?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q14" value="yes">
          <span class="ta-option-inner">🔑 Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q14" value="no">
          <span class="ta-option-inner">🔒 No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q14" value="unsure">
          <span class="ta-option-inner">🤷 Unsure</span>
        </label>
      </div>
    </div>

    <!-- Q15 -->
    <div class="ta-question" data-question-id="15">
      <h3 class="ta-question-title">
        15. How would you rate your technical skill level?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q15" value="basic">
          <span class="ta-option-inner">📗 Basic</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q15" value="intermediate">
          <span class="ta-option-inner">📘 Intermediate</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q15" value="advanced">
          <span class="ta-option-inner">📙 Advanced</span>
        </label>
      </div>
    </div>

    <!-- Q16 -->
    <div class="ta-question" data-question-id="16">
      <h3 class="ta-question-title">
        16. How confident are you in following OPSEC (operational security) steps if needed?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q16" value="not-confident">
          <span class="ta-option-inner">😅 Not confident</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q16" value="reasonably">
          <span class="ta-option-inner">🙂 Reasonably confident</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q16" value="highly">
          <span class="ta-option-inner">🧠 Highly confident / experienced</span>
        </label>
      </div>
    </div>

    <!-- Q17 -->
    <div class="ta-question" data-question-id="17">
      <h3 class="ta-question-title">
        17. Do you need reliable voice calling from this device?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q17" value="voice-regular">
          <span class="ta-option-inner">📞 Yes (regular voice calls)</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q17" value="voice-voip">
          <span class="ta-option-inner">📲 Yes (VoIP only is fine)</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q17" value="no-voice">
          <span class="ta-option-inner">💬 No (messaging only)</span>
        </label>
      </div>
    </div>

    <!-- Q18 -->
    <div class="ta-question" data-question-id="18">
      <h3 class="ta-question-title">
        18. Do you need SMS capability?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q18" value="sms-yes">
          <span class="ta-option-inner">✉️ Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q18" value="sms-no">
          <span class="ta-option-inner">🚫 No</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q18" value="sms-optional">
          <span class="ta-option-inner">🔁 Optional / don’t mind switching to VoIP</span>
        </label>
      </div>
    </div>

    <!-- Q19 -->
    <div class="ta-question" data-question-id="19">
      <h3 class="ta-question-title">
        19. Are you comfortable using VoIP apps (with or without KYC)?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q19" value="voip-yes">
          <span class="ta-option-inner">📲 Yes, happy to use VoIP</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q19" value="voip-nonkyc">
          <span class="ta-option-inner">🕵️ Yes, but prefer KYC-free options</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q19" value="voip-unsure">
          <span class="ta-option-inner">🤔 Unsure</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q19" value="voip-not-comfortable">
          <span class="ta-option-inner">🙅 Not comfortable</span>
        </label>
      </div>
    </div>

    <!-- Q20 -->
    <div class="ta-question" data-question-id="20">
      <h3 class="ta-question-title">
        20. How structured is your daily routine?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q20" value="predictable">
          <span class="ta-option-inner">🗓️ Very predictable</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q20" value="some-routine">
          <span class="ta-option-inner">📅 Some routine</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q20" value="unpredictable">
          <span class="ta-option-inner">🎲 Mostly unpredictable</span>
        </label>
      </div>
    </div>

    <!-- Q21 -->
    <div class="ta-question" data-question-id="21">
      <h3 class="ta-question-title">
        21. Are you willing to follow simple OPSEC steps (e.g., keeping devices separate, short connection sessions)?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q21" value="yes">
          <span class="ta-option-inner">✅ Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q21" value="maybe">
          <span class="ta-option-inner">🤔 Maybe</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q21" value="no">
          <span class="ta-option-inner">🙅 No</span>
        </label>
      </div>
    </div>

    <!-- Q22 -->
    <div class="ta-question" data-question-id="22">
      <h3 class="ta-question-title">
        22. Would you tolerate commsite-style usage (short, deliberate sessions) if your situation required it?
      </h3>
      <div class="ta-options" role="radiogroup">
        <label class="ta-option">
          <input type="radio" name="q22" value="yes">
          <span class="ta-option-inner">📡 Yes</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q22" value="maybe">
          <span class="ta-option-inner">😐 Maybe</span>
        </label>
        <label class="ta-option">
          <input type="radio" name="q22" value="no">
          <span class="ta-option-inner">🚫 No</span>
        </label>
      </div>
    </div>

    <div class="ta-actions">
      <button type="button" id="ta-submit" class="btn">Generate Threat Profile</button>
      <p class="ta-error" id="ta-error" aria-live="polite"></p>
    </div>

  </form>

  <div id="ta-result" class="ta-result ta-hidden" aria-live="polite"></div>

</section>

<style>
/* Threat Assessment — scoped styles using existing theme variables */

.ta-card{
  margin-top:1.5rem;
  position:relative;
  overflow:visible;
}

/* Progress bar (base – now clean, no gradient) */
.ta-progress{
  margin-bottom:1.5rem;
  padding-bottom:0.75rem;
  background:none;
  transition:box-shadow .15s ease-out, background .15s ease-out;
}

/* When JS pins it under the header */
.ta-progress-fixed{
  background:var(--bg, transparent);
  box-shadow:none; /* remove awkward shadow */
}

.ta-progress-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:.9rem;
  color:var(--muted);
  margin-bottom:.25rem;
}
.ta-progress-track{
  position:relative;
  width:100%;
  height:0.6rem;
  border-radius:999px;
  background:rgba(0,0,0,.2);
  overflow:hidden;
}
:root[data-theme="light"] .ta-progress-track{
  background:rgba(0,0,0,.06);
}
#ta-progress-bar{
  width:0%;
  height:100%;
  border-radius:999px;
  background:var(--accent);
  transition:width .25s ease-out;
}
.ta-progress-note{
  margin-top:.35rem;
  font-size:.85rem;
  color:var(--muted);
}

.ta-form{
  display:flex;
  flex-direction:column;
  gap:1rem;
}

.ta-question{
  padding:1rem;
  border-radius:1rem;
  background:var(--card);
  box-shadow:0 4px 12px rgba(0,0,0,.22);
}
.ta-question-title{
  margin:0 0 .6rem;
  font-size:1rem;
}
.ta-sub{
  font-size:.85rem;
  color:var(--muted);
}

.ta-options{
  display:flex;
  flex-wrap:wrap;
  gap:.5rem;
}

/* Answer tiles – shrink-wrap to content */
.ta-option{
  position:relative;
  display:inline-flex;
  flex:0 0 auto;
  max-width:100%;
  cursor:pointer;
}
.ta-option input{
  position:absolute;
  opacity:0;
  pointer-events:none;
}
.ta-option-inner{
  width:auto;
  padding:.55rem .75rem;
  border-radius:.9rem;
  border:1px solid rgba(255,255,255,.07);
  background:rgba(0,0,0,.18);
  font-size:.9rem;
  display:flex;
  align-items:center;
  gap:.35rem;
  transition:background .15s ease-out, border-color .15s ease-out, box-shadow .15s ease-out, transform .08s ease-out;
  user-select:none;
  white-space:normal;
}
:root[data-theme="light"] .ta-option-inner{
  background:rgba(255,255,255,.65);
  border-color:rgba(0,0,0,.08);
}

.ta-option-inner:hover{
  border-color:var(--accent);
  box-shadow:0 0 0 1px rgba(30,182,166,.35);
  transform:translateY(-1px);
}

/* Selected state */
.ta-option input:checked + .ta-option-inner{
  background:rgba(30,182,166,.16);
  border-color:var(--accent);
  box-shadow:0 0 0 1px var(--accent);
}
:root[data-theme="light"] .ta-option input:checked + .ta-option-inner{
  background:rgba(30,182,166,.12);
}

.ta-actions{
  margin-top:1.25rem;
  display:flex;
  flex-direction:column;
  gap:.4rem;
}
.ta-error{
  color:#ff9b9b;
  font-size:.9rem;
  min-height:1.1em;
}

.ta-result{
  margin-top:2rem;
  padding:1.25rem;
  border-radius:1.25rem;
  background:var(--card);
  box-shadow:0 8px 24px rgba(0,0,0,.5);
  border:1px solid rgba(255,255,255,.08);
}
.ta-hidden{display:none;}

.ta-result-badge{
  font-size:.85rem;
  text-transform:uppercase;
  letter-spacing:.08em;
  color:var(--muted);
  margin-bottom:.25rem;
}
.ta-kit-name{
  font-size:1.4rem;
  margin:.1rem 0 .8rem;
}
.ta-kit-pill{
  display:inline-flex;
  align-items:center;
  gap:.35rem;
  padding:.25rem .6rem;
  border-radius:999px;
  background:rgba(30,182,166,.18);
  font-size:.8rem;
  font-weight:700;
}
.ta-kit-pill span:last-child{opacity:.8;}

.ta-result-section{
  margin-top:1rem;
}
.ta-result-section h3{
  margin:.1rem 0 .35rem;
  font-size:1rem;
}
.ta-result-section p{
  margin:.15rem 0;
}
.ta-result-section ul{
  margin:.25rem 0 .25rem 1.1rem;
  padding:0;
}
.ta-result-section li{
  margin:.15rem 0;
}

.ta-highlight{
  color:var(--accent);
  font-weight:600;
}

@media (max-width: 720px){
  .ta-question{
    padding:.9rem;
  }
  .ta-option-inner{
    font-size:.85rem;
  }
}
</style>

<script>
(function(){
  const form = document.getElementById('ta-form');
  const questions = Array.from(document.querySelectorAll('.ta-question'));
  const totalQuestions = questions.length;
  const bar = document.getElementById('ta-progress-bar');
  const pctLabel = document.getElementById('ta-progress-percent');
  const note = document.getElementById('ta-progress-note');
  const errorEl = document.getElementById('ta-error');
  const submitBtn = document.getElementById('ta-submit');
  const resultEl = document.getElementById('ta-result');

  const taCard = document.querySelector('.ta-card');
  const taProgress = document.querySelector('.ta-progress');
  let progressPlaceholder = null;

  if(!form) return;

  /* ---------- Progress percentage ---------- */
  function countAnswered(){
    let count = 0;
    questions.forEach(q => {
      const inputs = q.querySelectorAll('input');
      let answered = false;
      inputs.forEach(inp => {
        if(inp.checked) answered = true;
      });
      if(answered) count++;
    });
    return count;
  }

  function updateProgress(){
    const answered = countAnswered();
    const pct = Math.round((answered / totalQuestions) * 100);
    bar.style.width = pct + '%';
    pctLabel.textContent = pct + '%';

    if(answered === 0){
      note.textContent = 'Answer each question to unlock your Threat Profile.';
    }else if(answered < totalQuestions){
      // Keep the same simple prompt (remove "Progress saved..." text)
      note.textContent = 'Answer each question to unlock your Threat Profile.';
    }else{
      note.textContent = 'All questions answered. Generate your Threat Profile below.';
    }
  }

  /* ---------- Sticky progress under header ---------- */
  function updateProgressSticky(){
    if(!taCard || !taProgress) return;

    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const cardRect = taCard.getBoundingClientRect();
    const progRect = taProgress.getBoundingClientRect();

    const shouldFix =
      cardRect.top < headerHeight &&
      cardRect.bottom > headerHeight + progRect.height;

    if(shouldFix){
      if(!progressPlaceholder){
        progressPlaceholder = document.createElement('div');
        progressPlaceholder.style.height = progRect.height + 'px';
        taProgress.parentNode.insertBefore(progressPlaceholder, taProgress);
      }
      const cardRectNow = taCard.getBoundingClientRect();
      taProgress.classList.add('ta-progress-fixed');

      taProgress.style.position = 'fixed';
      taProgress.style.top = (headerHeight + 4) + 'px';
      taProgress.style.left = cardRectNow.left + 'px';
      taProgress.style.width = cardRectNow.width + 'px';
      taProgress.style.zIndex = 20;
    }else{
      if(progressPlaceholder){
        progressPlaceholder.remove();
        progressPlaceholder = null;
      }
      taProgress.classList.remove('ta-progress-fixed');
      taProgress.style.position = '';
      taProgress.style.top = '';
      taProgress.style.left = '';
      taProgress.style.width = '';
      taProgress.style.zIndex = '';
    }
  }

  window.addEventListener('scroll', updateProgressSticky);
  window.addEventListener('resize', updateProgressSticky);

  /* ---------- Change handler + smooth auto-scroll ---------- */
  form.addEventListener('change', function(e){
    const target = e.target;
    if(!target.matches('input[type="radio"], input[type="checkbox"]')) return;

    errorEl.textContent = '';
    updateProgress();

    if(target.type === 'radio'){
      const qEl = target.closest('.ta-question');
      if(!qEl) return;

      if(!qEl.dataset.answered){
        qEl.dataset.answered = 'true';

        const idx = questions.indexOf(qEl);
        if(idx > -1 && idx < questions.length - 1){
          const nextQ = questions[idx + 1];

          setTimeout(() => {
            const rect = nextQ.getBoundingClientRect();
            const offset = 120;
            const targetY = rect.top + window.scrollY - offset;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }, 160);
        }
      }
    }
  });

  /* ---------- Helpers for reading answers ---------- */
  function getRadio(name){
    const el = form.querySelector('input[name="'+name+'"]:checked');
    return el ? el.value : null;
  }
  function getChecks(name){
    return Array.from(form.querySelectorAll('input[name="'+name+'"]:checked')).map(i => i.value);
  }

  /* ---------- Core kit logic ---------- */
  function inferKit(){
    const q1 = getRadio('q1');
    const q4 = getRadio('q4');
    const q5 = getRadio('q5');

    if(!q1){
      throw new Error('Please answer Question 1 about your adversary.');
    }

    if(q1 === 'no'){
      return 'SHIELD';
    }

    if(!q4){
      throw new Error('Please answer Question 4 about location risk.');
    }

    if(q4 === 'yes'){
      return 'GHOST';
    }
    if(q4 === 'no'){
      return 'SHADOW';
    }

    if(!q5){
      throw new Error('Please answer Question 5 about the consequence of location exposure.');
    }
    if(q5 === 'physical'){
      return 'GHOST';
    }
    return 'SHADOW';
  }

  function buildAnswersObject(){
    const answers = {};
    for(let i=1;i<=22;i++){
      const name = 'q'+i;
      if(i === 2 || i === 9 || i === 13){
        answers[name] = getChecks(name);
      }else{
        answers[name] = getRadio(name);
      }
    }
    return answers;
  }

  function describeImpact(q10){
    switch(q10){
      case 'embarrassing': return 'Embarrassing or inconvenient.';
      case 'reputation': return 'Reputational harm.';
      case 'job': return 'Job or contract loss.';
      case 'financial': return 'Financial loss.';
      case 'legal': return 'Legal consequences.';
      case 'physical-harm': return 'Physical harm or imprisonment.';
      default: return null;
    }
  }

  function mapAssets(list){
    const map = {
      'identity':'Identity and personal data',
      'location':'Location and movements',
      'content':'Communication content',
      'relationships':'Relationships and contact graph',
      'files':'Files, photos, and documents',
      'metadata':'Metadata and patterns of life'
    };
    return list.map(v => map[v]).filter(Boolean);
  }

  function mapAdversaries(list){
    const map = {
      'data-brokers':'Data brokers and Big Tech profiling',
      'stalker':'Stalking, harassment, or abusive individuals',
      'scammers':'Scammers, hackers, and opportunistic attackers',
      'criminal':'Criminal or organised crime activity',
      'law-enforcement':'Law enforcement or intelligence interest',
      'employer':'Employer or workplace monitoring',
      'none':'No clearly identified adversary (general privacy)'
    };
    return list.map(v => map[v]).filter(Boolean);
  }

  function mapBehaviours(list){
    const map = {
      'always-on':'Keeping the device powered on all day',
      'predictable-locations':'Using the device in predictable locations',
      'keep-devices-together':'Keeping personal and private phones together',
      'scanning-on':'Leaving Bluetooth/Wi-Fi scanning on',
      'public-charging':'Charging the device in public places',
      'none':'None of the listed high-risk behaviours'
    };
    return list.map(v => map[v]).filter(Boolean);
  }

  /* ---------- Output builders ---------- */
  function buildShield(answers){
    const assets = mapAssets(answers.q9 || []);
    const impact = describeImpact(answers.q10);

    const assetsList = assets.length
      ? '<ul>' + assets.map(a => '<li>'+a+'</li>').join('') + '</ul>'
      : '<p>You indicated a general concern about privacy and digital wellbeing.</p>';

    const impactLine = impact
      ? '<p>Your answers suggest that exposure would be: <span class="ta-highlight">'+impact+'</span></p>'
      : '';

    return `
      <div class="ta-result-header">
        <div class="ta-result-badge">Recommended kit</div>
        <div class="ta-kit-name">Shield <span class="ta-kit-pill"><span>✔</span><span>Low Risk / Privacy-Focused</span></span></div>
      </div>

      <div class="ta-result-section">
        <h3>1. Your Risk Level</h3>
        <p>Based on your answers, you are <strong>not facing an intentional adversary</strong>. Your concerns are general privacy, digital wellbeing, and reducing unnecessary data exposure.</p>
        <p><strong>Shield</strong> is designed specifically for this environment.</p>
      </div>

      <div class="ta-result-section">
        <h3>2. Why Shield Fits You</h3>
        <p>Your answers indicate that you do not need strong anonymity of movement or location, and you want <strong>strong privacy without complexity</strong>.</p>
        <p>You want protection from tracking, data harvesting, and exploitation – not targeted surveillance – and you want a device that works as a <strong>daily driver with full app support</strong>.</p>
        <p>Shield provides hardened GrapheneOS, strong sandboxing and exploit mitigations, reduced data harvesting by apps and services, and secure defaults <strong>without OPSEC burden</strong>.</p>
      </div>

      <div class="ta-result-section">
        <h3>3. What Shield Protects For You</h3>
        <p>Shield focuses on protecting the things that matter most to you:</p>
        ${assetsList}
        ${impactLine}
      </div>

      <div class="ta-result-section">
        <h3>4. Communication &amp; VoIP Guidance</h3>
        <p>Shield does not require an advanced encrypted comms stack by default, because your threat model does not demand strict identity or content separation.</p>
        <p><strong>KYC VoIP</strong> is suitable and provides a major privacy improvement over SIM calling. It does not encrypt call content, but it removes telco metadata trails while ISPs only see VPN-encrypted traffic.</p>
        <p><strong>Non-KYC VoIP</strong> is generally not necessary for Shield users – it adds complexity without clear benefit at your risk level.</p>
      </div>

      <div class="ta-result-section">
        <h3>5. Behavioural &amp; OPSEC Suggestions</h3>
        <p>At your risk level, OPSEC should feel like <strong>light hygiene</strong>, not a burden. Useful improvements include:</p>
        <ul>
          <li>Disabling Bluetooth/Wi-Fi scanning when you’re not using it.</li>
          <li>Avoiding untrusted public Wi-Fi, or pairing it with a reputable VPN if you do.</li>
          <li>Being selective about app permissions, especially location and microphone.</li>
        </ul>
        <p>Keeping your Shield device and your personal device together is acceptable for most Shield users.</p>
      </div>

      <div class="ta-result-section">
        <h3>6. Optional Improvements</h3>
        <ul>
          <li>Install a reputable VPN provider (optional, not mandatory).</li>
          <li>Avoid installing unnecessary or high-tracking apps.</li>
          <li>Use secure chat apps (Signal, Session) for private conversations if you prefer.</li>
          <li>Periodically review app permissions that can expose your location.</li>
        </ul>
      </div>

      <div class="ta-result-section">
        <h3>7. Summary</h3>
        <p><strong>Shield</strong> gives you exceptional privacy, zero OPSEC burden, and strong daily-driver security without disrupting your lifestyle.</p>
        <p>It is a significant upgrade from mainstream devices while staying easy to live with.</p>
      </div>
    `;
  }

  function buildShadow(answers){
    const adversaries = mapAdversaries(answers.q2 || []);
    const assets = mapAssets(answers.q9 || []);
    const impact = describeImpact(answers.q10);

    const advList = adversaries.length
      ? '<ul>' + adversaries.map(a => '<li>'+a+'</li>').join('') + '</ul>'
      : '';

    const assetsList = assets.length
      ? '<ul>' + assets.map(a => '<li>'+a+'</li>').join('') + '</ul>'
      : '';

    const impactLine = impact
      ? '<p>Exposure of these assets would likely result in: <span class="ta-highlight">'+impact+'</span></p>'
      : '';

    const needsVoip = answers.q17 === 'voice-voip' || answers.q19 === 'voip-yes' || answers.q19 === 'voip-nonkyc';

    let voipBlock = `
      <p>Shadow includes secure messaging options (Signal, Session, or your preferred apps), protecting content and contact graphs.</p>
    `;

    if(needsVoip){
      voipBlock += `
        <p>If you need voice calling, you can choose between:</p>
        <ul>
          <li><strong>KYC VoIP</strong> – registered in your name, suitable if identity exposure via the VoIP provider is not high risk. It improves metadata privacy but does not encrypt call content.</li>
          <li><strong>Non-KYC VoIP</strong> – better for stronger identity separation. It still does not encrypt content, but avoids tying calls to telco identity.</li>
        </ul>
      `;
    }

    const behaviours = mapBehaviours(answers.q13 || []);
    const behaviourList = behaviours.length
      ? '<ul>' + behaviours.map(b => '<li>'+b+'</li>').join('') + '</ul>'
      : '<p>Your answers do not show clear high-risk day-to-day behaviours, which is good.</p>';

    return `
      <div class="ta-result-header">
        <div class="ta-result-badge">Recommended kit</div>
        <div class="ta-kit-name">Shadow <span class="ta-kit-pill"><span>✔</span><span>Medium Risk / Identity &amp; Content Protection</span></span></div>
      </div>

      <div class="ta-result-section">
        <h3>1. Your Risk Level</h3>
        <p>Your answers show you are facing an adversary or situation where your <strong>identity, content, or communications</strong> need protection.</p>
        <p>This may include harassment, workplace monitoring, sensitive personal matters, or adversaries with access to metadata such as logs or account activity.</p>
        <p>You do not face severe consequences from location correlation, which is why <strong>Ghost is not required</strong>.</p>
      </div>

      <div class="ta-result-section">
        <h3>2. Why Shadow Fits You</h3>
        <p>You indicated that you need identity separation, an encrypted communication ecosystem, and safer space for private files and conversations.</p>
        <p>Shadow provides:</p>
        <ul>
          <li>Fully encrypted messaging suite.</li>
          <li>Secure storage and identity separation.</li>
          <li>Encrypted traffic (VPN optional, but recommended).</li>
          <li>Hardened GrapheneOS with enhanced privacy defaults.</li>
        </ul>
      </div>

      <div class="ta-result-section">
        <h3>3. Threats Shadow Helps You With</h3>
        ${advList || '<p>Shadow protects you from targeted or situational adversaries, even when they are not clearly defined.</p>'}
        ${assetsList}
        ${impactLine}
      </div>

      <div class="ta-result-section">
        <h3>4. Communication &amp; VoIP Guidance</h3>
        <p><strong>Encrypted messaging</strong> is a core part of Shadow. It protects sensitive conversations, contacts, and stored message content.</p>
        ${voipBlock}
      </div>

      <div class="ta-result-section">
        <h3>5. OPSEC Notes</h3>
        <p>Shadow is designed to be usable as a daily driver or a dedicated second device.</p>
        <p>For better separation and privacy:</p>
        <ul>
          <li>Avoid installing apps that strongly link to your real-world identity unless necessary.</li>
          <li>Prefer VoIP over SIM calling when communicating about sensitive matters.</li>
          <li>Consider keeping the Shadow device powered off when not in use if your adversary is very observant.</li>
        </ul>
        ${behaviourList}
      </div>

      <div class="ta-result-section">
        <h3>6. Personalised Recommended Practices</h3>
        <ul>
          <li>Keep personal and private contact lists separated.</li>
          <li>Use encrypted messaging for sensitive or high-impact conversations.</li>
          <li>Review which apps can see your contacts, microphone, camera, and location.</li>
        </ul>
      </div>

      <div class="ta-result-section">
        <h3>7. Summary</h3>
        <p><strong>Shadow</strong> gives you strong identity and content protection against low-to-medium adversaries while remaining practical.</p>
        <p>It works well as a daily driver or a compartmented second device, without the full OPSEC weight that Ghost requires.</p>
      </div>
    `;
  }

  function buildGhost(answers){
    const adversaries = mapAdversaries(answers.q2 || []);
    const assets = mapAssets(answers.q9 || []);
    const impact = describeImpact(answers.q10);

    const advList = adversaries.length
      ? '<ul>' + adversaries.map(a => '<li>'+a+'</li>').join('') + '</ul>'
      : '';

    const assetsList = assets.length
      ? '<ul>' + assets.map(a => '<li>'+a+'</li>').join('') + '</ul>'
      : '';

    const impactLine = impact
      ? '<p>Your answers suggest that exposure could lead to: <span class="ta-highlight">'+impact+'</span></p>'
      : '';

    const behaviours = mapBehaviours(answers.q13 || []);
    const behaviourList = behaviours.length
      ? '<ul>' + behaviours.map(b => '<li>'+b+'</li>').join('') + '</ul>'
      : '';

    const lowOpsec = answers.q16 === 'not-confident';

    return `
      <div class="ta-result-header">
        <div class="ta-result-badge">Recommended kit</div>
        <div class="ta-kit-name">Ghost <span class="ta-kit-pill"><span>✔</span><span>High Risk / Location + Identity + Content</span></span></div>
      </div>

      <div class="ta-result-section">
        <h3>1. Your Risk Level</h3>
        <p>Your answers indicate you face serious consequences if your device can be tied to a <strong>place, time, meeting, or routine</strong>.</p>
        <p>This is the threshold for location-based targeting – where adversaries can correlate your presence at a protest, workplace, or sensitive location with your communications.</p>
        ${advList}
      </div>

      <div class="ta-result-section">
        <h3>2. Why Ghost Is Required</h3>
        <p><strong>Shadow protects content and identity</strong>, but in your case, <strong>location and timing must also be hidden</strong>.</p>
        <p>Ghost is designed for adversaries with access to logs, CCTV, telco records, or other correlation data – including state actors, criminal groups, or highly motivated domestic threats.</p>
        <p>Ghost provides:</p>
        <ul>
          <li>Router-based identity rotation.</li>
          <li>Mandatory tethering with an airplane-mode handset.</li>
          <li>Traffic padding and VPN + Tor chaining.</li>
          <li>Faraday isolation and strict OPSEC defaults.</li>
          <li>Fully separated identity + location layers.</li>
        </ul>
      </div>

      <div class="ta-result-section">
        <h3>3. Your Threat Profile</h3>
        ${assetsList}
        ${impactLine}
        <p>Your movements, routines, and presence at specific locations must not be trivially linkable to your communications device.</p>
      </div>

      <div class="ta-result-section">
        <h3>4. Communication &amp; VoIP Guidance</h3>
        <p>Ghost maintains secure, content-protected messaging channels as a baseline.</p>
        <p><strong>Voice calling</strong> is high-risk for Ghost users because it strongly exposes timing and often location.</p>
        <ul>
          <li><strong>Non-KYC VoIP only if absolutely necessary</strong> – used with strict OPSEC, traffic padding, and limited windows.</li>
          <li><strong>KYC VoIP is not recommended</strong>, as it re-introduces identity binding that Ghost is designed to avoid.</li>
        </ul>
      </div>

      <div class="ta-result-section">
        <h3>5. Required OPSEC</h3>
        <p>Ghost assumes disciplined operational security. Key habits include:</p>
        <ul>
          <li>Keeping the Ghost handset powered off and in Faraday when not in use.</li>
          <li>Never co-locating Ghost with personal devices when it is active.</li>
          <li>Using high-traffic connection locations and avoiding predictable schedules.</li>
          <li>Keeping sessions short, deliberate, and focused.</li>
          <li>Not storing highly sensitive material on the handset long-term.</li>
        </ul>
        ${behaviourList}
        ${lowOpsec ? '<p class="ta-highlight">You indicated low confidence with OPSEC – Ghost should be paired with clear training and written procedures.</p>' : ''}
      </div>

      <div class="ta-result-section">
        <h3>6. Personalised Guidance</h3>
        <p>If your routine is currently regular, Ghost will require <strong>varying commsite times and locations</strong> to reduce pattern-of-life signals.</p>
        <p>If you need calling at this level, anonymous VoIP should be tightly controlled, time-boxed, and treated as an exceptional workflow.</p>
      </div>

      <div class="ta-result-section">
        <h3>7. Summary</h3>
        <p><strong>Ghost</strong> gives you maximum identity and location anonymity, strong protection against advanced adversaries, and a fully compartmentalised communication environment.</p>
        <p>It is designed for people who cannot afford to have their device tied to a particular place, time, or pattern of life.</p>
      </div>
    `;
  }

  function renderResult(kit, answers){
    let html;
    if(kit === 'SHIELD'){
      html = buildShield(answers);
    }else if(kit === 'GHOST'){
      html = buildGhost(answers);
    }else{
      html = buildShadow(answers);
    }
    resultEl.innerHTML = html;
    resultEl.classList.remove('ta-hidden');
    resultEl.scrollIntoView({behavior:'smooth', block:'start'});
  }

  /* ---------- Submit handler ---------- */
  submitBtn.addEventListener('click', function(){
    errorEl.textContent = '';

    const incomplete = questions.find(q => {
      const inputs = q.querySelectorAll('input');
      return !Array.from(inputs).some(i => i.checked);
    });

    if(incomplete){
      const title = incomplete.querySelector('.ta-question-title');
      errorEl.textContent = 'Please answer all questions to generate an accurate Threat Profile.';
      if(title){
        title.scrollIntoView({behavior:'smooth', block:'center'});
      }else{
        incomplete.scrollIntoView({behavior:'smooth', block:'center'});
      }
      return;
    }

    try{
      const kit = inferKit();
      const answers = buildAnswersObject();
      renderResult(kit, answers);
    }catch(err){
      errorEl.textContent = err.message || 'Please complete the required questions.';
    }
  });

  // Initialise on load
  updateProgress();
  updateProgressSticky();
})();
</script>
