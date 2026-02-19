/* ============================================
   EarthPatchers — Main Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sidebar/router first so page navigation still works
  // even if i18n content has an error.
  Sidebar.init();
  Router.init();

  // Initialize language system if available.
  if (typeof I18n !== 'undefined' && I18n && typeof I18n.init === 'function') {
    try {
      I18n.init();
    } catch (err) {
      console.error('I18n init failed:', err);
    }
  }

});
