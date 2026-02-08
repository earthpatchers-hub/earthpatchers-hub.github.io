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

    // Accordion toggles
    this.accordionToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        const isOpen = submenu.classList.contains('open');

        // Toggle this accordion
        btn.classList.toggle('open');
        submenu.classList.toggle('open');
      });
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
    document.querySelectorAll('.sidebar__link, .sidebar__sublink').forEach(el => {
      el.classList.remove('active');
    });

    // Find and activate matching link
    const selector = `[href="${hash}"]`;
    const activeLink = this.el.querySelector(selector);
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
    }

    // If it's a module page, mark the accordion toggle as active
    if (hash.startsWith('#module/')) {
      const accToggle = this.el.querySelector('.sidebar__accordion-toggle');
      accToggle?.classList.add('active');
    } else {
      // Remove active from accordion toggle if not on a module page
      const accToggle = this.el.querySelector('.sidebar__accordion-toggle');
      accToggle?.classList.remove('active');
    }
  }
};
