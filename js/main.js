/* ============================================
   EarthPatchers — Main Initialization
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof MenuTrail !== 'undefined' && MenuTrail && typeof MenuTrail.init === 'function') {
    MenuTrail.init();
  }

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
  const patchCounters = Array.from(document.querySelectorAll('[data-patch-counter]'));

  const getText = (key, fallback) => {
    return (typeof I18n !== 'undefined' && I18n && typeof I18n.t === 'function')
      ? I18n.t(key)
      : fallback;
  };

  const pageOrderByAudience = {
    public: [
      '#about',
      '#overview',
      '#mvp',
      '#module/missions-hq',
      '#module/patch-coins',
      '#module/small-missions',
      '#module/medium-missions',
      '#module/large-missions',
      '#module/tribes',
      '#contact'
    ],
    partners: [
      '#about',
      '#overview',
      '#mvp',
      '#module/missions-hq',
      '#module/patch-coins',
      '#module/small-missions',
      '#module/medium-missions',
      '#module/large-missions',
      '#module/tribes',
      '#module/earth-side',
      '#module/market-hut',
      '#next-steps',
      '#module/activity-hut',
      '#module/eco-shops',
      '#module/green-wall',
      '#module/org-scientists',
      '#module/new-cities',
      '#module/games-room',
      '#module/patcher-camp',
      '#contact'
    ]
  };

  const pageTitleKeyByHash = {
    '#about': 'about.title',
    '#overview': 'nav.overview',
    '#mvp': 'nav.mvp',
    '#next-steps': 'nav.next-steps',
    '#contact': 'contact.title',
    '#donate': 'donate.title',
    '#module/missions-hq': 'mod.missions-hq',
    '#module/patch-coins': 'mod.patch-coins',
    '#module/small-missions': 'mod.small-missions',
    '#module/medium-missions': 'mod.medium-missions',
    '#module/recycling-images': 'mod.recycling-images',
    '#module/large-missions': 'mod.large-missions',
    '#module/tribes': 'mod.tribes',
    '#module/market-hut': 'mod.market-hut',
    '#module/earth-side': 'mod.earth-side',
    '#module/games-room': 'mod.games-room',
    '#module/activity-hut': 'mod.activity-hut',
    '#module/eco-shops': 'mod.eco-shops',
    '#module/green-wall': 'mod.green-wall',
    '#module/org-scientists': 'mod.org-scientists',
    '#module/new-cities': 'mod.new-cities',
    '#module/patcher-camp': 'mod.patcher-camp'
  };

  const getAudienceMode = () => {
    if (typeof Audience !== 'undefined' && Audience && typeof Audience.isPartners === 'function') {
      return Audience.isPartners() ? 'partners' : 'public';
    }
    return 'public';
  };

  const getTitleForHash = (hash) => {
    const key = pageTitleKeyByHash[hash];
    return key ? getText(key, hash) : hash;
  };

  const createNavLink = (hash, direction) => {
    if (!hash) {
      const spacer = document.createElement('span');
      spacer.className = 'module-nav__spacer';
      spacer.setAttribute('aria-hidden', 'true');
      return spacer;
    }

    const link = document.createElement('a');
    link.href = hash;
    link.className = `module-nav__link module-nav__${direction}`;
    link.textContent = direction === 'prev'
      ? `← ${getTitleForHash(hash)}`
      : `${getTitleForHash(hash)} →`;
    return link;
  };

  const ensurePageNav = (page) => {
    let nav = page.querySelector('.module-nav');
    if (!nav) {
      nav = document.createElement('div');
      nav.className = 'module-nav page-nav';
      const anchor =
        page.querySelector('.page-footer-note, .footer-note, .page-end-cta, .cta-strip') || null;
      if (anchor) {
        page.insertBefore(nav, anchor);
      } else {
        page.appendChild(nav);
      }
    }
    return nav;
  };

  const renderPageNavigation = () => {
    const audience = getAudienceMode();
    const pageOrder = pageOrderByAudience[audience];
    const pages = document.querySelectorAll('.page');

    pages.forEach((page) => {
      const pageHash = page.id.replace(/^page-module-/, '#module/').replace(/^page-/, '#');
      if (!pageOrder.includes(pageHash)) {
        const existingNav = page.querySelector('.module-nav');
        if (existingNav) {
          existingNav.remove();
        }
        return;
      }

      const currentIndex = pageOrder.indexOf(pageHash);
      const prevHash = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
      const nextHash = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
      const nav = ensurePageNav(page);
      nav.innerHTML = '';
      nav.appendChild(createNavLink(prevHash, 'prev'));
      nav.appendChild(createNavLink(nextHash, 'next'));
    });
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

  const initPatchCounter = () => {
    if (!patchCounters.length) return;

    const closeAllPatchCounters = () => {
      patchCounters.forEach((counter) => {
        const trigger = counter.querySelector('.patch-counter__trigger');
        const popover = counter.querySelector('.patch-counter__popover');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        if (popover) popover.hidden = true;
      });
    };

    patchCounters.forEach((counter) => {
      const trigger = counter.querySelector('.patch-counter__trigger');
      const popover = counter.querySelector('.patch-counter__popover');
      if (!trigger || !popover) return;

      trigger.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        closeAllPatchCounters();
        trigger.setAttribute('aria-expanded', String(!isOpen));
        popover.hidden = isOpen;
      });
    });

    document.addEventListener('click', (event) => {
      if (event.target.closest('[data-patch-counter]')) return;
      closeAllPatchCounters();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAllPatchCounters();
      }
    });
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

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      if (link.closest('.sidebar__accordion-toggle')) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      event.preventDefault();
      if (typeof link.blur === 'function') {
        link.blur();
      }
      const isModulePagerLink = !!link.closest('.module-nav');
      if (isModulePagerLink) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      if (typeof Router !== 'undefined' && Router && typeof Router.goTo === 'function') {
        Router.goTo(hash);
        if (isModulePagerLink) {
          requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          });
        }
      } else {
        location.hash = hash;
      }
    });

    if (donateBackBtn) {
      donateBackBtn.addEventListener('click', () => {
        location.hash = lastNonDonateHash || '#overview';
      });
    }
  };

  const initTheme = () => {
    applyAutoThemeOnEntry();
    initPatchCounter();

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

  const initJourneyTableControls = () => {
    const shells = Array.from(document.querySelectorAll('.journey-table-shell'));
    if (!shells.length) return;

    const updateLabels = () => {
      document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (!key) return;
        el.setAttribute('aria-label', getText(key, el.getAttribute('aria-label') || ''));
      });
    };

    const updateWrapControls = (shell) => {
      const wrap = shell.querySelector('.journey-table-wrap');
      const leftBtn = shell.querySelector('[data-journey-scroll="left"]');
      const rightBtn = shell.querySelector('[data-journey-scroll="right"]');
      if (!wrap || !leftBtn || !rightBtn) return;

      const maxScrollLeft = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
      const canScroll = maxScrollLeft > 4;
      shell.classList.toggle('journey-table-wrap--scrollable', canScroll);

      leftBtn.hidden = false;
      rightBtn.hidden = false;
      leftBtn.disabled = !canScroll || wrap.scrollLeft <= 4;
      rightBtn.disabled = !canScroll || wrap.scrollLeft >= maxScrollLeft - 4;
      leftBtn.setAttribute('aria-hidden', 'false');
      rightBtn.setAttribute('aria-hidden', 'false');
    };

    shells.forEach((shell) => {
      const wrap = shell.querySelector('.journey-table-wrap');
      const leftBtn = shell.querySelector('[data-journey-scroll="left"]');
      const rightBtn = shell.querySelector('[data-journey-scroll="right"]');
      if (!wrap || !leftBtn || !rightBtn) return;

      const scrollStep = () => Math.max(220, Math.round(wrap.clientWidth * 0.72));

      leftBtn.addEventListener('click', () => {
        wrap.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
      });

      rightBtn.addEventListener('click', () => {
        wrap.scrollBy({ left: scrollStep(), behavior: 'smooth' });
      });

      wrap.addEventListener('scroll', () => updateWrapControls(shell), { passive: true });
      updateWrapControls(shell);

      if (typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(() => updateWrapControls(shell));
        observer.observe(wrap);
        const table = wrap.querySelector('.journey-table');
        if (table) observer.observe(table);
      }
    });

    updateLabels();
    window.addEventListener('resize', () => shells.forEach(updateWrapControls));
    window.addEventListener('load', () => shells.forEach(updateWrapControls));
    document.addEventListener('i18n:applied', () => {
      updateLabels();
      shells.forEach(updateWrapControls);
    });
    requestAnimationFrame(() => shells.forEach(updateWrapControls));
    setTimeout(() => shells.forEach(updateWrapControls), 120);
    setTimeout(() => shells.forEach(updateWrapControls), 320);
  };

  const initDynamicPageNavigation = () => {
    renderPageNavigation();
    window.addEventListener('hashchange', renderPageNavigation);
    document.addEventListener('i18n:applied', renderPageNavigation);
  };

  // Apply audience mode before navigation setup.
  if (typeof Audience !== 'undefined' && Audience && typeof Audience.init === 'function') {
    Audience.init();
  }

  if (typeof MenuTrail !== 'undefined' && MenuTrail && typeof MenuTrail.layoutAll === 'function') {
    MenuTrail.layoutAll();
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
  initDynamicPageNavigation();
  initJourneyTableControls();
  if (typeof renderSmallMissions === 'function') {
    renderSmallMissions();
  }

  if (typeof renderMediumMissions === 'function') {
    renderMediumMissions();
  }

  if (typeof renderLargeMissions === 'function') {
    renderLargeMissions();
  }

  if (typeof MenuTrail !== 'undefined' && MenuTrail && typeof MenuTrail.layoutAll === 'function') {
    MenuTrail.layoutAll();
  }
});
