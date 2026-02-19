/* ============================================
   EarthPatchers — Hash Router
   ============================================ */

const Router = {
  currentPage: null,
  initialized: false,

  init() {
    if (this.initialized) return;
    this.initialized = true;
    window.addEventListener('hashchange', () => this.navigate());
    this.navigate();
  },

  navigate() {
    const hash = location.hash || '#overview';
    const pageId = this.hashToPageId(hash);

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
      const fallback = document.getElementById('page-overview');
      if (fallback) {
        fallback.classList.add('active');
        this.currentPage = fallback;
      }
    }

    // Update sidebar active state
    if (typeof Sidebar !== 'undefined' && Sidebar && typeof Sidebar.setActive === 'function') {
      Sidebar.setActive(hash);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile sidebar
    if (typeof Sidebar !== 'undefined' && Sidebar && typeof Sidebar.close === 'function') {
      Sidebar.close();
    }
  },

  hashToPageId(hash) {
    // Remove leading #
    const path = hash.replace(/^#/, '');

    if (path.startsWith('module/')) {
      return 'page-module-' + path.replace('module/', '');
    }

    return 'page-' + (path || 'overview');
  }
};

// Fallback init so routing still works if another script fails before calling Router.init().
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Router !== 'undefined') {
    Router.init();
  }
});
