// Convert AUD to XMR using CoinGecko, with fallback & offline safety
(async function () {
  const PRICE_AUD = Number(document.querySelector('[data-price-aud]').getAttribute('data-price-aud'));
  const address = document.querySelector('[data-xmr-address]').getAttribute('data-xmr-address');
  const priceEl = document.querySelector('#priceAud');
  const amtEl = document.querySelector('#xmrAmount');
  const errEl = document.querySelector('#priceError');

  priceEl.textContent = `A$${PRICE_AUD.toLocaleString('en-AU')}`;

  async function fetchPrice() {
    // Primary: CoinGecko
    try {
      const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=aud', { cache: 'no-store' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const data = await r.json();
      if (data && data.monero && data.monero.aud) return data.monero.aud;
    } catch (e) {}
    // Fallback: CoinPaprika (if available)
    try {
      const r2 = await fetch('https://api.coinpaprika.com/v1/tickers/xmr-monero', { cache: 'no-store' });
      if (!r2.ok) throw new Error('HTTP ' + r2.status);
      const data2 = await r2.json();
      if (data2 && data2.quotes && data2.quotes.AUD && data2.quotes.AUD.price) return data2.quotes.AUD.price;
    } catch (e) {}
    return null;
  }

  const audPerXmr = await fetchPrice();
  if (audPerXmr) {
    const xmr = PRICE_AUD / audPerXmr;
    amtEl.textContent = xmr.toFixed(12);
    // Wallet URI (many wallets recognise 'monero:' address only; amount may be ignored)
    const link = document.querySelector('#walletLink');
    if (link) {
      link.href = `monero:${address}`;
    }
  } else {
    errEl.hidden = false;
    amtEl.textContent = '—';
  }
})();