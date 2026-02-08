/* ============================================
   EarthPatchers — Main Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language system
  I18n.init();

  // Initialize sidebar
  Sidebar.init();

  // Initialize router (must be after sidebar)
  Router.init();
});
