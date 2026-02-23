/* ============================================
   EarthPatchers — Audience Mode (public/partners)
   ============================================ */

const Audience = {
  mode: 'public',

  restrictedHashes: new Set([
    '#next-steps',
    '#module/activity-hut',
    '#module/eco-shops',
    '#module/green-wall',
    '#module/org-scientists',
    '#module/new-cities',
    '#module/games-room',
    '#module/patcher-camp'
  ]),

  init() {
    const params = new URLSearchParams(window.location.search);
    const byQuery = params.get('view') === 'partners';
    const path = window.location.pathname.toLowerCase();
    const byPath = path.endsWith('/partners.html') || path.endsWith('/partners');

    this.mode = (byQuery || byPath) ? 'partners' : 'public';

    document.documentElement.setAttribute('data-audience', this.mode);
    if (document.body) {
      document.body.setAttribute('data-audience', this.mode);
    }

    this.applyVisibility();
    window.addEventListener('hashchange', () => this.updateSwitchLinks());
  },

  applyVisibility() {
    document.querySelectorAll('[data-audience]').forEach((el) => {
      const visible = el.getAttribute('data-audience') === this.mode;
      el.hidden = !visible;
    });

    this.updateSwitchLinks();
  },

  isPartners() {
    return this.mode === 'partners';
  },

  canAccessHash(hash) {
    if (this.isPartners()) return true;
    return !this.restrictedHashes.has(hash);
  },

  fallbackHash() {
    return '#overview';
  },

  normalizeHash(hash) {
    if (this.canAccessHash(hash)) return hash;
    return this.fallbackHash();
  },

  updateSwitchLinks() {
    const hash = window.location.hash || '#overview';
    const normalizedHash = this.normalizeHash(hash);

    const toPartnersHref = `partners.html${normalizedHash}`;
    const toPublicHref = `index.html${normalizedHash}`;

    const desktopPartners = document.getElementById('audience-switch-to-partners');
    const desktopPublic = document.getElementById('audience-switch-to-public');
    const mobile = document.getElementById('audience-switch-mobile');

    if (desktopPartners) desktopPartners.setAttribute('href', toPartnersHref);
    if (desktopPublic) desktopPublic.setAttribute('href', toPublicHref);

    if (mobile) {
      if (this.isPartners()) {
        mobile.setAttribute('href', toPublicHref);
        mobile.setAttribute('data-i18n', 'audience.switch.public-mobile');
        mobile.textContent = 'Public';
      } else {
        mobile.setAttribute('href', toPartnersHref);
        mobile.setAttribute('data-i18n', 'audience.switch.partners-mobile');
        mobile.textContent = 'Partners';
      }
    }
  }
};
