/* ============================================
   EarthPatchers — Main Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  let lastNonDonateHash = '#overview';

  const rememberPreviousHash = () => {
    const hash = location.hash || '#overview';
    if (hash !== '#donate') {
      lastNonDonateHash = hash;
    }
  };

  rememberPreviousHash();
  window.addEventListener('hashchange', rememberPreviousHash);

  // Apply audience mode before navigation setup.
  if (typeof Audience !== 'undefined' && Audience && typeof Audience.init === 'function') {
    Audience.init();
  }

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

  const donateForm = document.getElementById('donate-form');
  const donateBackBtn = document.getElementById('donate-back-btn');
  const donateStatus = document.getElementById('donate-status');

  if (donateBackBtn) {
    donateBackBtn.addEventListener('click', () => {
      location.hash = lastNonDonateHash || '#overview';
    });
  }

  if (donateForm) {
    donateForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!donateForm.checkValidity()) {
        donateForm.reportValidity();
        return;
      }

      const name = (document.getElementById('donate-name')?.value || '').trim();
      const email = (document.getElementById('donate-email')?.value || '').trim();
      const phone = (document.getElementById('donate-phone')?.value || '').trim();
      const locationValue = (document.getElementById('donate-location')?.value || '').trim();
      const interest = (document.getElementById('donate-interest')?.selectedOptions?.[0]?.textContent || '').trim();
      const message = (document.getElementById('donate-message')?.value || '').trim();

      const subject = 'EarthPatchers Donate Interest';
      const bodyLines = [
        'New donate interest submission:',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `City/Country: ${locationValue}`,
        `Support type: ${interest}`,
        `Notes: ${message || 'None'}`,
        '',
        `Sent from: ${window.location.href}`
      ];

      const mailto = `mailto:contact@earthpatchers.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailto;

      if (donateStatus) {
        const statusText = (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
          ? I18n.t('donate.status.opening')
          : 'Your email app is opening with your donation details prefilled.';
        donateStatus.textContent = statusText;
      }
    });
  }

});
