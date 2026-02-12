/* ============================================
   EarthPatchers — Hash Router
   ============================================ */

const Router = {
  currentPage: null,

  init() {
    window.addEventListener('hashchange', () => this.navigate());
    this.navigate();
  },

  navigate() {
    const hash = location.hash || '#overview';
    const pageId = this.hashToPageId(hash);

    // Hide any active pages (including the server-rendered default)
    document.querySelectorAll('.page.active').forEach(page => {
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
    Sidebar.setActive(hash);

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile sidebar
    Sidebar.close();
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
