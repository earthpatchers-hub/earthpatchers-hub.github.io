/* ============================================
   EarthPatchers — Main Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const DONATE_FORM_ENDPOINT = 'https://formsubmit.co/ajax/contact@earthpatchers.org';
  const THEME_NOTE_DATE_KEY = 'ep-theme-energy-note-date';
  const THEME_OVERRIDE_KEY = 'ep-theme-manual-override';
  let lastNonDonateHash = '#overview';
  const donateForm = document.getElementById('donate-form');
  const donateBackBtn = document.getElementById('donate-back-btn');
  const donateStatus = document.getElementById('donate-status');
  const contactCopyEmailBtn = document.getElementById('contact-copy-email-btn');
  const contactCopyStatus = document.getElementById('contact-copy-status');
  const themeToggles = Array.from(document.querySelectorAll('[data-theme-toggle]'));
  const themeEnergyNote = document.getElementById('theme-energy-note');
  const themeEnergyNoteText = document.querySelector('.theme-energy-note__text');
  const themeEnergyNoteClose = document.getElementById('theme-energy-note-close');

  const getText = (key, fallback) => {
    return (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
      ? I18n.t(key)
      : fallback;
  };

  const getTodayKey = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };

  const getAutoTheme = () => {
    const hour = new Date().getHours();
    return (hour >= 18 || hour < 6) ? 'dark' : 'light';
  };

  const getManualThemeOverride = () => {
    const savedTheme = sessionStorage.getItem(THEME_OVERRIDE_KEY);
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : null;
  };

  const setManualThemeOverride = (theme) => {
    sessionStorage.setItem(THEME_OVERRIDE_KEY, theme);
  };

  const setTheme = (resolvedTheme) => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    themeToggles.forEach((toggle) => {
      toggle.checked = resolvedTheme === 'dark';
    });
  };

  const setThemeNoteText = (key, fallback) => {
    if (!themeEnergyNoteText) return;
    themeEnergyNoteText.textContent = getText(key, fallback);
  };

  const showEnergyNote = () => {
    if (!themeEnergyNote) return;
    themeEnergyNote.hidden = false;
  };

  const hideEnergyNote = (rememberForToday = true) => {
    if (!themeEnergyNote) return;
    themeEnergyNote.hidden = true;
    if (rememberForToday) {
      localStorage.setItem(THEME_NOTE_DATE_KEY, getTodayKey());
    }
  };

  const applyAutoThemeOnEntry = () => {
    const autoTheme = getAutoTheme();
    const manualTheme = getManualThemeOverride();
    const resolvedTheme = manualTheme || autoTheme;
    setTheme(resolvedTheme);

    if (manualTheme === 'dark' && autoTheme === 'light') {
      setThemeNoteText(
        'theme.manual.daytime-note',
        'You kept dark mode on. If you prefer, you can switch to light mode for daytime at any time.'
      );
      showEnergyNote();
      return;
    }

    setThemeNoteText(
      'theme.auto.note',
      "Dark mode was auto-enabled to save energy. Friendly reminder: turn off lights you don't need."
    );

    if (resolvedTheme === 'dark' && !manualTheme) {
      const shownDate = localStorage.getItem(THEME_NOTE_DATE_KEY);
      if (shownDate !== getTodayKey()) {
        showEnergyNote();
      }
    } else {
      hideEnergyNote(false);
    }
  };

  const rememberPreviousHash = () => {
    const hash = location.hash || '#overview';
    if (hash !== '#donate') {
      lastNonDonateHash = hash;
    }
  };

  const initNavigationMemory = () => {
    rememberPreviousHash();
    window.addEventListener('hashchange', rememberPreviousHash);

    if (donateBackBtn) {
      donateBackBtn.addEventListener('click', () => {
        location.hash = lastNonDonateHash || '#overview';
      });
    }
  };

  const initTheme = () => {
    applyAutoThemeOnEntry();

    themeToggles.forEach((toggle) => {
      toggle.addEventListener('change', () => {
        if (toggle.checked) {
          setManualThemeOverride('dark');
          setTheme('dark');
          hideEnergyNote();
          return;
        }

        setManualThemeOverride('light');
        setTheme('light');
        hideEnergyNote(false);
      });
    });

    if (themeEnergyNoteClose) {
      themeEnergyNoteClose.addEventListener('click', () => {
        hideEnergyNote();
      });
    }
  };

  const getDonatePayload = () => {
    const name = (document.getElementById('donate-name')?.value || '').trim();
    const email = (document.getElementById('donate-email')?.value || '').trim();
    const phone = (document.getElementById('donate-phone')?.value || '').trim();
    const locationValue = (document.getElementById('donate-location')?.value || '').trim();
    const interest = (document.getElementById('donate-interest')?.selectedOptions?.[0]?.textContent || '').trim();
    const message = (document.getElementById('donate-message')?.value || '').trim();

    return {
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
  };

  const initDonateForm = () => {
    if (!donateForm) return;

    donateForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!donateForm.checkValidity()) {
        donateForm.reportValidity();
        return;
      }

      try {
        const response = await fetch(DONATE_FORM_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(getDonatePayload())
        });

        if (!response.ok) {
          throw new Error(`Donate form submit failed: ${response.status}`);
        }

        donateForm.reset();
        if (donateStatus) {
          donateStatus.textContent = getText('donate.status.sent', 'Thanks. Your donate interest was sent successfully.');
        }
      } catch (error) {
        if (donateStatus) {
          donateStatus.textContent = getText('donate.status.error', 'Could not send right now. Please use the email button above.');
        }
      }
    });
  };

  const copyText = async (value) => {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(value);
      return;
    }

    const helper = document.createElement('textarea');
    helper.value = value;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
  };

  const initCopyEmail = () => {
    if (!contactCopyEmailBtn) return;

    contactCopyEmailBtn.addEventListener('click', async () => {
      const email = 'contact@earthpatchers.org';

      try {
        await copyText(email);
        if (contactCopyStatus) {
          contactCopyStatus.textContent = getText('contact.copy-success', 'Email copied. You can now paste it into your email app.');
        }
      } catch (err) {
        if (contactCopyStatus) {
          contactCopyStatus.textContent = getText('contact.copy-failed', 'Copy failed. Please copy manually: contact@earthpatchers.org');
        }
      }
    });
  };

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

  initNavigationMemory();
  initTheme();
  initDonateForm();
  initCopyEmail();
});
