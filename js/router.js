/* ============================================
   EarthPatchers — Hash Router
   ============================================ */

const Router = {
  currentPage: null,
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.addEventListener('hashchange', () => this.navigate());
    this.navigate();
  },

  resetScrollPosition() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const content = document.querySelector('.content');
    if (content) {
      content.scrollTop = 0;
    }
  },

  stabilizeScrollReset() {
    this.resetScrollPosition();
    requestAnimationFrame(() => this.resetScrollPosition());
    setTimeout(() => this.resetScrollPosition(), 0);
    setTimeout(() => this.resetScrollPosition(), 120);
  },

  navigate() {
    const currentHash = location.hash || '#about';
    const hash = (typeof Audience !== 'undefined' && Audience && typeof Audience.normalizeHash === 'function')
      ? Audience.normalizeHash(currentHash)
      : currentHash;
    const safeHash = hash === '#donate' ? '#contact' : hash;
    const pageId = this.hashToPageId(safeHash);

    // Always reset active state to avoid stacked pages when init order changes.
    document.querySelectorAll('.page.active').forEach((page) => {
      page.classList.remove('active');
    });

    // Show target page
    const target = document.getElementById(pageId);
    if (target) {
      target.classList.add('active');
      this.currentPage = target;
    } else {
      // Fallback to overview
      const fallback = document.getElementById('page-about');
      if (fallback) {
        fallback.classList.add('active');
        this.currentPage = fallback;
      }
    }

    // Keep URL clean and consistent if public mode requested a restricted page.
    if (safeHash !== currentHash) {
      const newUrl = `${window.location.pathname}${window.location.search}${safeHash}`;
      window.history.replaceState(null, '', newUrl);
    }

    // Update sidebar active state
    if (typeof Sidebar !== 'undefined' && Sidebar && typeof Sidebar.setActive === 'function') {
      Sidebar.setActive(safeHash);
    }

    // Scroll to top after layout updates so page switches do not keep prior position.
    this.stabilizeScrollReset();

    // Close mobile sidebar
    if (typeof Sidebar !== 'undefined' && Sidebar && typeof Sidebar.close === 'function') {
      Sidebar.close();
    }

    window.dispatchEvent(new CustomEvent('earthpatchers:routechange', {
      detail: {
        hash: safeHash,
        pageId
      }
    }));
  },

  hashToPageId(hash) {
    // Remove leading #
    const path = hash.replace(/^#/, '');

    if (path.startsWith('module/')) {
      return 'page-module-' + path.replace('module/', '');
    }

    return 'page-' + (path || 'about');
  },

  goTo(hash) {
    if (!hash || !hash.startsWith('#')) return;

    const currentHash = location.hash || '#about';
    if (currentHash === hash) {
      this.navigate();
      return;
    }

    window.history.pushState(null, '', `${window.location.pathname}${window.location.search}${hash}`);
    this.navigate();
  }
};
