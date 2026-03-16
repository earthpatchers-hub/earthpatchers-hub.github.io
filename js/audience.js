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
    this.bindSwitchHandlers();
    window.addEventListener('hashchange', () => this.updateSwitchLinks());
  },

  applyVisibility() {
    document.querySelectorAll('[data-audience]').forEach((el) => {
      const visible = el.getAttribute('data-audience') === this.mode;
      el.hidden = !visible;
    });

    this.updateSubmenuTrails();
    this.updateSwitchLinks();
  },

  updateSubmenuTrails() {
    document.querySelectorAll('.sidebar__submenu').forEach((submenu) => {
      const items = Array.from(submenu.querySelectorAll(':scope > li'));
      items.forEach((li) => li.removeAttribute('data-last-visible'));
      const visibleItems = items.filter((li) => !li.hidden);
      const lastVisible = visibleItems[visibleItems.length - 1];
      if (lastVisible) {
        lastVisible.setAttribute('data-last-visible', 'true');
      }
    });
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

  getCurrentHash() {
    if (window.location.hash) {
      return window.location.hash;
    }

    const activePage = document.querySelector('.page.active');
    if (!activePage) return '#overview';

    const pageId = activePage.id || '';
    if (pageId.startsWith('page-module-')) {
      return `#module/${pageId.replace('page-module-', '')}`;
    }
    if (pageId.startsWith('page-')) {
      return `#${pageId.replace('page-', '')}`;
    }

    return '#overview';
  },

  getSwitchTargetHref(targetMode) {
    const hash = this.getCurrentHash();
    const normalizedHash = targetMode === 'public'
      ? this.normalizeHash(hash)
      : hash;

    return targetMode === 'partners'
      ? `index.html?view=partners${normalizedHash}`
      : `index.html${normalizedHash}`;
  },

  bindSwitchHandlers() {
    const desktopPartners = document.getElementById('audience-switch-to-partners');
    const desktopPublic = document.getElementById('audience-switch-to-public');
    const mobile = document.getElementById('audience-switch-mobile');

    const bind = (el, targetMode) => {
      if (!el || el.dataset.audienceBound === 'true') return;
      el.dataset.audienceBound = 'true';
      el.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.assign(this.getSwitchTargetHref(targetMode));
      });
    };

    bind(desktopPartners, 'partners');
    bind(desktopPublic, 'public');
    bind(mobile, this.isPartners() ? 'public' : 'partners');
  },

  updateSwitchLinks() {
    const toPartnersHref = this.getSwitchTargetHref('partners');
    const toPublicHref = this.getSwitchTargetHref('public');

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
        mobile.dataset.audienceTarget = 'public';
      } else {
        mobile.setAttribute('href', toPartnersHref);
        mobile.setAttribute('data-i18n', 'audience.switch.partners-mobile');
        mobile.textContent = 'Partners';
        mobile.dataset.audienceTarget = 'partners';
      }
    }
  }
};
