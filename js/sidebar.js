/* ============================================
   EarthPatchers — Sidebar Controller
   ============================================ */

const Sidebar = {
  el: null,
  overlay: null,
  toggleBtn: null,
  accordionToggles: null,

  init() {
    this.el = document.getElementById('sidebar');
    this.overlay = document.getElementById('sidebar-overlay');
    this.toggleBtn = document.getElementById('sidebar-toggle');
    this.accordionToggles = document.querySelectorAll('.sidebar__accordion-toggle');

    // Mobile hamburger
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Overlay click closes sidebar
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }

    // Accordion toggles — only the arrow area toggles, the link navigates
    this.accordionToggles.forEach(btn => {
      // Clicking the arrow toggles the submenu
      const arrow = btn.querySelector('.sidebar__accordion-arrow');
      if (arrow) {
        arrow.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const submenu = btn.nextElementSibling;
          btn.classList.toggle('open');
          submenu.classList.toggle('open');
        });
      }

      // Clicking the link part navigates (default behavior) but also opens the accordion
      const link = btn.querySelector('.sidebar__accordion-link');
      if (link) {
        link.addEventListener('click', (e) => {
          // Let the hash navigation happen naturally
          // But also open this accordion
          const submenu = btn.nextElementSibling;
          if (!submenu.classList.contains('open')) {
            btn.classList.add('open');
            submenu.classList.add('open');
          }
        });
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  toggle() {
    if (this.el.classList.contains('open')) {
      this.close();
    } else {
      this.open();
    }
  },

  open() {
    this.el.classList.add('open');
    this.overlay.classList.add('active');
    document.body.classList.add('sidebar-open');
  },

  close() {
    this.el.classList.remove('open');
    this.overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  },

  setActive(hash) {
    // Remove all active states
    document.querySelectorAll('.sidebar__link, .sidebar__sublink, .sidebar__accordion-toggle').forEach(el => {
      el.classList.remove('active');
    });

    // Find and activate matching link
    const selector = `[href="${hash}"]`;

    // Check sidebar links
    const activeLink = this.el.querySelector('.sidebar__link' + selector) ||
                       this.el.querySelector('.sidebar__sublink' + selector) ||
                       this.el.querySelector('.sidebar__accordion-link' + selector);

    if (activeLink) {
      activeLink.classList.add('active');

      // If it's a sublink, make sure the accordion is open and toggle is active
      if (activeLink.classList.contains('sidebar__sublink')) {
        const submenu = activeLink.closest('.sidebar__submenu');
        const toggle = submenu?.previousElementSibling;
        if (submenu && !submenu.classList.contains('open')) {
          submenu.classList.add('open');
          toggle?.classList.add('open');
        }
        toggle?.classList.add('active');
      }

      // If it's an accordion link (MVP or Next Steps), mark the toggle as active
      if (activeLink.classList.contains('sidebar__accordion-link')) {
        const toggle = activeLink.closest('.sidebar__accordion-toggle');
        toggle?.classList.add('active');
      }
    }

    // If it's a module page, find which accordion it belongs to and mark it active
    if (hash.startsWith('#module/')) {
      const sublink = this.el.querySelector(`.sidebar__sublink[href="${hash}"]`);
      if (sublink) {
        const submenu = sublink.closest('.sidebar__submenu');
        const toggle = submenu?.previousElementSibling;
        if (submenu && !submenu.classList.contains('open')) {
          submenu.classList.add('open');
          toggle?.classList.add('open');
        }
        toggle?.classList.add('active');
      }
    }
  }
};
