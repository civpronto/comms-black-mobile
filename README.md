# Comms Black Mobile — static site

Optimised GitHub Pages site with accessible, fast, and easy‑to‑maintain HTML.

## What’s inside
- Semantic HTML with shared `header.html` / `footer.html`
- Mobile‑first styles (`styles.css`)
- Simple JS (`js/load.js`, `js/main.js`) — no frameworks
- XMR live conversion on product pages (`js/checkout.js`) with graceful fallback
- SEO & PWA basics: sitemap, robots, web manifest, favicons
- 404 redirect page

## Local preview
Double‑click `index.html` or use a static server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/comms-black-mobile/
```

## Deploy
Commit everything to the root of your `comms-black-mobile` repo (Pages source: `main` branch, `/` root).

## Notes
- Brand spelling is standardised to **Comms Black Mobile** (with a space). If you prefer a different style, search/replace across HTML and footer/header.
- Update the Signal link and XMR address in the product templates if needed.
