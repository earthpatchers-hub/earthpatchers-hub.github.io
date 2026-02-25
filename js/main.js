/* ============================================
   EarthPatchers — Main Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const DONATE_FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@earthpatchers.org';
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
  const contactCopyEmailBtn = document.getElementById('contact-copy-email-btn');
  const contactCopyStatus = document.getElementById('contact-copy-status');

  if (donateBackBtn) {
    donateBackBtn.addEventListener('click', () => {
      location.hash = lastNonDonateHash || '#overview';
    });
  }

  if (donateForm) {
    donateForm.addEventListener('submit', async (event) => {
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

      const payload = {
        name,
        email,
        phone: phone || 'Not provided',
        location: locationValue,
        interest,
        message: message || 'None',
        page: window.location.href,
        _subject: 'EarthPatchers Donate Interest',
        _template: 'table',
        _captcha: 'false'
      };

      try {
        const response = await fetch(DONATE_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`Donate form submit failed: ${response.status}`);
        }

        donateForm.reset();
        if (donateStatus) {
          donateStatus.textContent = (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
            ? I18n.t('donate.status.sent')
            : 'Thanks. Your donate interest was sent successfully.';
        }
      } catch (error) {
        if (donateStatus) {
          donateStatus.textContent = (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
            ? I18n.t('donate.status.error')
            : 'Could not send right now. Please use the email button above.';
        }
      }
    });
  }

  if (contactCopyEmailBtn) {
    contactCopyEmailBtn.addEventListener('click', async () => {
      const email = 'contact@earthpatchers.org';
      const successText = (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
        ? I18n.t('contact.copy-success')
        : 'Email copied. You can now paste it into your email app.';
      const failText = (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
        ? I18n.t('contact.copy-failed')
        : 'Copy failed. Please copy manually: contact@earthpatchers.org';

      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(email);
        } else {
          const helper = document.createElement('textarea');
          helper.value = email;
          helper.setAttribute('readonly', '');
          helper.style.position = 'fixed';
          helper.style.opacity = '0';
          document.body.appendChild(helper);
          helper.select();
          document.execCommand('copy');
          document.body.removeChild(helper);
        }

        if (contactCopyStatus) {
          contactCopyStatus.textContent = successText;
        }
      } catch (err) {
        if (contactCopyStatus) {
          contactCopyStatus.textContent = failText;
        }
      }
    });
  }

});
