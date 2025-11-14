---
layout: default
title: Threat Assessment
permalink: /threat-assessment.html
---

# Threat Assessment

Find out whether your situation calls for **Shield**, **Shadow** or **Ghost** in under 10 minutes.

This assessment is designed to do one thing well: map your **real-world situation** to the **right kit**, without asking for your name, email, or anything that can identify you.

---

## What this assessment is (and isn’t)

This isn’t a personality quiz or marketing gimmick.

It’s a short operational check that answers three questions:

1. Do you actually need a hardened device at all?
2. Do you need **identity–separated communications** (Shadow)?
3. Do you need **location–anonymised communications** (Ghost)?

We focus on:

- The kind of adversary you might be dealing with  
- What happens if things go wrong  
- How you *actually* use your device day to day  

We **don’t** ask for names, emails, addresses, or details that could identify you.

---

## How it works

1. **Answer honestly**  
   We ask about your threat environment, device use, and the consequences if something is exposed.

2. **We model your threat level**  
   Behind the scenes, your answers map onto real adversary classes – from general tracking all the way up to advanced surveillance.

3. **You get a kit recommendation**  
   The engine decides if you sit best in **Shield**, **Shadow** or **Ghost**, and explains *why* in clear language.

> ⚠️ Note: The interactive logic and recommendations will be wired up after this content goes live. For now, this page gives you the full question set and explains how each kit is positioned.

---

## The three kits at a glance

### Shield — Hardened daily driver (Low risk)

For people with **no active adversary**, but who want a privacy-respecting phone instead of a tracking device.

- GrapheneOS, hardened and privacy-focused  
- Strong defaults without OPSEC overhead  
- Use your SIM, maps and apps as normal  
- Optional privacy upgrades (VPN, secure chat) if you want them

Good if you want: **“less data harvesting, more control”**.

---

### Shadow — Identity–separated comms device (Medium risk)

For people with an **active or likely adversary** – harassment, legal disputes, sensitive work – where **identity and content** need serious protection.

- Identity–separated GrapheneOS handset  
- Encrypted messaging environment  
- Optional VoIP (with or without ID)  
- Can be a hardened daily driver or a dedicated second device

Built for people who **can’t afford sloppy privacy**.

---

### Ghost — Operational anonymity stack (High risk)

For people who face **serious consequences** if their **location or routine** can be tied to their communications.

- SIM lives in a privacy router – not the phone  
- Handset runs in permanent airplane mode, USB–tethered  
- Traffic padding, VPN + Tor chaining, identity rotation  
- Short, deliberate "comms site" sessions instead of always–on presence

For when being placed at the **wrong time and place** is the risk.

---

## Start the assessment

> ⏱️ **Time:** 6–8 minutes  
> 🧾 **No signup required**  
> 🔐 **No identifying information collected**

Below is the full question set that will power the interactive assessment. You can already work through it manually to get a sense of where you sit.

When the logic is wired up, your answers will automatically generate a personalised breakdown and kit recommendation.

---

<form id="threat-assessment-form" action="#" method="get">

### Section 1 — Threat presence

**1. Are you facing any adversary who is intentionally trying to identify, monitor, or obtain your communications?**

<label><input type="radio" name="q1_adversary" value="yes"> Yes</label><br>
<label><input type="radio" name="q1_adversary" value="no"> No</label><br>
<label><input type="radio" name="q1_adversary" value="unsure"> Unsure</label>

---

**2. Who do you believe your adversary could be?**<br>
<small>Select all that apply.</small><br>

<label><input type="checkbox" name="q2_adv[]" value="bigtech"> Data brokers / Big Tech</label><br>
<label><input type="checkbox" name="q2_adv[]" value="stalker"> Stalker / harassing individual</label><br>
<label><input type="checkbox" name="q2_adv[]" value="scammers"> Scammers / hackers</label><br>
<label><input type="checkbox" name="q2_adv[]" value="crime"> Criminal / organised crime</label><br>
<label><input type="checkbox" name="q2_adv[]" value="le_intel"> Law enforcement / intelligence</label><br>
<label><input type="checkbox" name="q2_adv[]" value="employer"> Employer / workplace</label><br>
<label><input type="checkbox" name="q2_adv[]" value="none"> No specific adversary</label>

---

**3. Do you believe you are being targeted right now?**

<label><input type="radio" name="q3_targeted" value="yes"> Yes</label><br>
<label><input type="radio" name="q3_targeted" value="no"> No</label><br>
<label><input type="radio" name="q3_targeted" value="unsure"> Unsure</label>

---

### Section 2 — Location risk (Ghost threshold)

**4. Your communications are protected, but advanced adversaries can still exploit *where and when* your device connects. For example, would it cause issues if someone knew your device connected at a protest, workplace, or other sensitive location?**

<label><input type="radio" name="q4_location_risk" value="yes"> Yes</label><br>
<label><input type="radio" name="q4_location_risk" value="no"> No</label><br>
<label><input type="radio" name="q4_location_risk" value="unsure"> Unsure</label>

---

**5. If your location during device use was exposed, what would the consequence be?**

<label><input type="radio" name="q5_consequence" value="none"> No real consequence</label><br>
<label><input type="radio" name="q5_consequence" value="mild"> Mild inconvenience or unwanted profiling</label><br>
<label><input type="radio" name="q5_consequence" value="reputation"> Reputation or employment risk</label><br>
<label><input type="radio" name="q5_consequence" value="financial"> Financial loss or legal trouble</label><br>
<label><input type="radio" name="q5_consequence" value="danger"> Physical harm, arrest, or serious danger</label>

---

### Section 3 — Goals & use case

**6. What is your main privacy/security goal for this device?**

<label><input type="radio" name="q6_goal" value="privacy"> General privacy</label><br>
<label><input type="radio" name="q6_goal" value="identity"> Protect identity</label><br>
<label><input type="radio" name="q6_goal" value="content"> Protect communication content</label><br>
<label><input type="radio" name="q6_goal" value="location"> Avoid linking device to routine/locations</label><br>
<label><input type="radio" name="q6_goal" value="compartment"> Dedicated second device / compartment</label>

---

**7. How will you use this device?**

<label><input type="radio" name="q7_use" value="daily"> Daily driver (primary phone)</label><br>
<label><input type="radio" name="q7_use" value="second"> Second device for sensitive comms</label><br>
<label><input type="radio" name="q7_use" value="one_purpose"> Highly compartmentalised one-purpose device</label>

---

**8. Do you work in an area that increases your privacy/security risk?**

<label><input type="radio" name="q8_work" value="yes"> Yes (journalism, activism, legal, finance, government, etc.)</label><br>
<label><input type="radio" name="q8_work" value="no"> No</label><br>
<label><input type="radio" name="q8_work" value="na"> Prefer not to say</label>

---

### Section 4 — Assets & impact

**9. Which assets matter most to protect?**<br>
<small>Select all that apply.</small><br>

<label><input type="checkbox" name="q9_assets[]" value="identity"> Identity</label><br>
<label><input type="checkbox" name="q9_assets[]" value="location"> Location / movements</label><br>
<label><input type="checkbox" name="q9_assets[]" value="content"> Communication content</label><br>
<label><input type="checkbox" name="q9_assets[]" value="relationships"> Relationships / contacts</label><br>
<label><input type="checkbox" name="q9_assets[]" value="files"> Files, photos, documents</label><br>
<label><input type="checkbox" name="q9_assets[]" value="metadata"> Metadata and patterns</label>

---

**10. What would the impact be if these assets were exposed?**

<label><input type="radio" name="q10_impact" value="embarrassing"> Embarrassing or inconvenient</label><br>
<label><input type="radio" name="q10_impact" value="reputational"> Reputational harm</label><br>
<label><input type="radio" name="q10_impact" value="job"> Job or contract loss</label><br>
<label><input type="radio" name="q10_impact" value="financial"> Financial loss</label><br>
<label><input type="radio" name="q10_impact" value="legal"> Legal consequences</label><br>
<label><input type="radio" name="q10_impact" value="harm"> Physical harm or imprisonment</label>

---

**11. Do you store or handle sensitive information that could interest an adversary?**

<label><input type="radio" name="q11_sensitive" value="yes"> Yes</label><br>
<label><input type="radio" name="q11_sensitive" value="no"> No</label><br>
<label><input type="radio" name="q11_sensitive" value="unsure"> Unsure</label>

---

### Section 5 — Network & device setup

**12. How do you usually connect to the internet?**<br>
<small>Select all that apply.</small><br>

<label><input type="checkbox" name="q12_net[]" value="public_wifi"> Public Wi‑Fi</label><br>
<label><input type="checkbox" name="q12_net[]" value="home_wifi"> Home Wi‑Fi</label><br>
<label><input type="checkbox" name="q12_net[]" value="personal_sim"> Personal SIM in my name</label><br>
<label><input type="checkbox" name="q12_net[]" value="shared_net"> Shared family/work network</label><br>
<label><input type="checkbox" name="q12_net[]" value="always_vpn"> Always-on VPN</label><br>
<label><input type="checkbox" name="q12_net[]" value="anon_sim"> Anonymous SIM / data-only eSIM</label>

---

**13. Which of these behaviours apply to you?**<br>
<small>Select all that apply.</small><br>

<label><input type="checkbox" name="q13_behaviour[]" value="always_on"> Keep phone powered on all day</label><br>
<label><input type="checkbox" name="q13_behaviour[]" value="predictable_locations"> Use device in predictable locations</label><br>
<label><input type="checkbox" name="q13_behaviour[]" value="co_located"> Keep personal and private phone together</label><br>
<label><input type="checkbox" name="q13_behaviour[]" value="scanning_on"> Leave Bluetooth/Wi‑Fi scanning on</label><br>
<label><input type="checkbox" name="q13_behaviour[]" value="public_charging"> Charge device in public places</label><br>
<label><input type="checkbox" name="q13_behaviour[]" value="none"> None of these</label>

---

**14. Does anyone else have access to your devices, even briefly?**

<label><input type="radio" name="q14_access" value="yes"> Yes</label><br>
<label><input type="radio" name="q14_access" value="no"> No</label><br>
<label><input type="radio" name="q14_access" value="unsure"> Unsure</label>

---

### Section 6 — Technical capability

**15. How would you rate your technical skill level?**

<label><input type="radio" name="q15_skill" value="basic"> Basic</label><br>
<label><input type="radio" name="q15_skill" value="intermediate"> Intermediate</label><br>
<label><input type="radio" name="q15_skill" value="advanced"> Advanced</label>

---

**16. How confident are you in following OPSEC (operational security) steps if needed?**

<label><input type="radio" name="q16_opsec" value="low"> Not confident</label><br>
<label><input type="radio" name="q16_opsec" value="medium"> Reasonably confident</label><br>
<label><input type="radio" name="q16_opsec" value="high"> Highly confident / experienced</label>

---

### Section 7 — Communication needs

**17. Do you need reliable voice calling from this device?**

<label><input type="radio" name="q17_voice" value="yes_regular"> Yes (regular voice calls)</label><br>
<label><input type="radio" name="q17_voice" value="yes_voip"> Yes (VoIP only is fine)</label><br>
<label><input type="radio" name="q17_voice" value="no"> No (messaging only)</label>

---

**18. Do you need SMS capability?**

<label><input type="radio" name="q18_sms" value="yes"> Yes</label><br>
<label><input type="radio" name="q18_sms" value="no"> No</label><br>
<label><input type="radio" name="q18_sms" value="optional"> Optional / don’t mind switching to VoIP</label>

---

**19. Are you comfortable using VoIP apps (internet calling)?**

<label><input type="radio" name="q19_voip" value="yes"> Yes, happy to use VoIP</label><br>
<label><input type="radio" name="q19_voip" value="yes_nokyc"> Yes, but prefer KYC‑free options</label><br>
<label><input type="radio" name="q19_voip" value="unsure"> Unsure</label><br>
<label><input type="radio" name="q19_voip" value="no"> Not comfortable</label>

---

### Section 8 — Usability & lifestyle

**20. How structured is your daily routine?**

<label><input type="radio" name="q20_routine" value="predictable"> Very predictable</label><br>
<label><input type="radio" name="q20_routine" value="some"> Some routine</label><br>
<label><input type="radio" name="q20_routine" value="unpredictable"> Mostly unpredictable</label>

---

**21. Are you willing to follow simple OPSEC steps (e.g. keeping devices separate, short connection sessions)?**

<label><input type="radio" name="q21_willing" value="yes"> Yes</label><br>
<label><input type="radio" name="q21_willing" value="maybe"> Maybe</label><br>
<label><input type="radio" name="q21_willing" value="no"> No</label>

---

**22. Would you tolerate comms‑site style usage (short, deliberate sessions) if your situation required it?**

<label><input type="radio" name="q22_commsite" value="yes"> Yes</label><br>
<label><input type="radio" name="q22_commsite" value="maybe"> Maybe</label><br>
<label><input type="radio" name="q22_commsite" value="no"> No</label>

---

<p><em>In the live version of this assessment, your answers will generate a tailored explanation of your risk level and a clear recommendation: Shield, Shadow or Ghost.</em></p>

<p><strong>Next step:</strong> once logic is wired, a results panel will appear here with your personalised breakdown and links to the recommended kit.</p>

</form>

<p style="text-align:center"><small>Last updated: 14 Nov 2025</small></p>
