/* ============================================
   EarthPatchers — Visitor Widget
   ============================================ */

(function initVisitorWidget() {
  const countEl = document.getElementById('visitor-count');
  if (!countEl) return;

  const namespace = 'earthpatchers-org';
  const key = 'unique-visitors-v1';
  const countedKey = 'ep-visitor-counted-v1';
  const localCountKey = 'ep-visitor-local-count-v1';
  const lastKnownKey = 'ep-visitor-last-known-count-v1';

  const hitUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;
  const getUrl = `https://api.countapi.xyz/get/${namespace}/${key}`;

  const formatCount = (value) => {
    try {
      return new Intl.NumberFormat(document.documentElement.lang || 'en').format(value);
    } catch (_) {
      return String(value);
    }
  };

  const updateCount = (value) => {
    if (typeof value === 'number' && Number.isFinite(value)) {
      countEl.textContent = formatCount(value);
      return;
    }
    countEl.textContent = '--';
  };
  let currentValue = null;

  const isCounted = () => {
    try {
      return localStorage.getItem(countedKey) === '1';
    } catch (_) {
      return false;
    }
  };

  const markCounted = () => {
    try {
      localStorage.setItem(countedKey, '1');
    } catch (_) {
      // ignore
    }
  };

  const getLocalCount = () => {
    try {
      const value = Number(localStorage.getItem(localCountKey) || '0');
      return Number.isFinite(value) && value > 0 ? value : 0;
    } catch (_) {
      return 0;
    }
  };

  const setLocalCount = (value) => {
    try {
      localStorage.setItem(localCountKey, String(value));
    } catch (_) {
      // ignore
    }
  };

  const getLastKnownCount = () => {
    try {
      const value = Number(localStorage.getItem(lastKnownKey) || '0');
      return Number.isFinite(value) && value > 0 ? value : 0;
    } catch (_) {
      return 0;
    }
  };

  const setLastKnownCount = (value) => {
    try {
      localStorage.setItem(lastKnownKey, String(value));
    } catch (_) {
      // ignore
    }
  };

  const fetchCount = async (url) => {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Visitor counter failed: ${response.status}`);
    const data = await response.json();
    return data && typeof data.value === 'number' ? data.value : null;
  };

  const run = async () => {
    const firstVisitOnThisBrowser = !isCounted();

    try {
      const value = firstVisitOnThisBrowser
        ? await fetchCount(hitUrl)
        : await fetchCount(getUrl);

      if (typeof value === 'number' && Number.isFinite(value)) {
        if (firstVisitOnThisBrowser) markCounted();
        setLastKnownCount(value);
        // Keep local count monotonic in this browser.
        setLocalCount(Math.max(getLocalCount(), value));
      }
      currentValue = value;
      updateCount(value);
    } catch (_) {
      // Fallback order: last known global value -> local value -> 1.
      // If first global hit fails, we keep browser as uncounted and retry on next page load.
      const fallback = getLastKnownCount() || getLocalCount() || 1;
      currentValue = fallback;
      updateCount(fallback);
    }
  };

  run();

  const observer = new MutationObserver(() => {
    if (currentValue !== null) updateCount(currentValue);
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
