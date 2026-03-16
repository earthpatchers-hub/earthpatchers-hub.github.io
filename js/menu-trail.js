/* ============================================
   EarthPatchers — Reusable SVG Menu Trail
   ============================================ */

const MenuTrail = {
  laneMap: {
    left: { x: 20, pad: 44 },
    mid: { x: 38, pad: 62 },
    right: { x: 56, pad: 80 },
    branch: { x: 74, pad: 98 }
  },

  trailMenus: new Map(),

  configs: {
    'sidebar-primary': [
      {
        kind: 'link',
        href: '#about',
        i18n: 'nav.about',
        text: 'Who We Are'
      },
      {
        kind: 'link',
        href: '#overview',
        i18n: 'nav.overview',
        text: 'What We Do'
      },
      {
        kind: 'accordion',
        href: '#mvp',
        i18n: 'nav.mvp',
        text: 'Base Camp',
        accordion: 'mvp',
        submenu: {
          kind: 'trail',
          items: [
            { id: 'missions-hq', href: '#module/missions-hq', i18n: 'mod.missions-hq', text: 'Missions HQ', lane: 'left' },
            { id: 'patch-coins', href: '#module/patch-coins', i18n: 'mod.patch-coins', text: 'Patch Coins', lane: 'mid' },
            { id: 'small-missions', href: '#module/small-missions', i18n: 'mod.small-missions', text: 'Small Missions', lane: 'right' },
            { id: 'medium-missions', href: '#module/medium-missions', i18n: 'mod.medium-missions', text: 'Medium Missions', lane: 'branch' },
            { id: 'recycling-images', href: '#module/recycling-images', i18n: 'mod.recycling-images', text: 'Recycling through Images', lane: 'right', hidden: true },
            {
              id: 'large-missions',
              href: '#module/large-missions',
              i18n: 'mod.large-missions',
              text: 'Large Missions',
              lane: 'branch',
              laneRules: [
                { ifHidden: ['recycling-images'], lane: 'right' }
              ]
            },
            { id: 'tribes', href: '#module/tribes', i18n: 'mod.tribes', text: 'Tribes', lane: 'mid' },
            { id: 'earth-side', href: '#module/earth-side', i18n: 'mod.earth-side', text: "Earth's Side of the Story", lane: 'left', audience: 'partners' },
            { id: 'market-hut', href: '#module/market-hut', i18n: 'mod.market-hut', text: 'Market Hut', lane: 'mid', audience: 'partners' }
          ],
          mainPath: ['missions-hq', 'tribes', 'earth-side', 'market-hut'],
          detours: [
            ['missions-hq', 'patch-coins', 'small-missions', 'medium-missions', 'recycling-images', 'large-missions', 'tribes']
          ]
        }
      },
      {
        kind: 'accordion',
        href: '#next-steps',
        i18n: 'nav.next-steps',
        text: 'Next Steps',
        accordion: 'next-steps',
        audience: 'partners',
        submenu: {
          kind: 'trail',
          items: [
            { id: 'activity-hut', href: '#module/activity-hut', i18n: 'mod.activity-hut', text: 'Activity Hut', lane: 'left' },
            { id: 'eco-shops', href: '#module/eco-shops', i18n: 'mod.eco-shops', text: 'Eco Shops Directory', lane: 'mid' },
            { id: 'green-wall', href: '#module/green-wall', i18n: 'mod.green-wall', text: 'The Green Wall', lane: 'right' },
            { id: 'org-scientists', href: '#module/org-scientists', i18n: 'mod.org-scientists', text: 'Organisations & Scientists', lane: 'mid' },
            { id: 'new-cities', href: '#module/new-cities', i18n: 'mod.new-cities', text: 'New Cities & Discovery Phase', lane: 'left' },
            { id: 'games-room', href: '#module/games-room', i18n: 'mod.games-room', text: 'Games Room', lane: 'mid' },
            { id: 'patcher-camp', href: '#module/patcher-camp', i18n: 'mod.patcher-camp', text: 'Patcher Camp', lane: 'right' }
          ],
          edges: [
            ['activity-hut', 'eco-shops'],
            ['eco-shops', 'green-wall'],
            ['green-wall', 'org-scientists'],
            ['org-scientists', 'new-cities'],
            ['new-cities', 'games-room'],
            ['games-room', 'patcher-camp']
          ]
        }
      },
      {
        kind: 'link',
        href: '#contact',
        i18n: 'nav.contact',
        text: 'Ways to Get Involved'
      }
    ]
  },

  init() {
    document.querySelectorAll('[data-menu-trail-root]').forEach((root) => {
      const configId = root.getAttribute('data-menu-trail-root');
      const items = this.configs[configId];
      if (!items) return;
      this.render(root, items);
    });

    const relayout = () => this.layoutAll();
    window.addEventListener('resize', relayout);
    document.addEventListener('i18n:applied', relayout);
    window.setTimeout(relayout, 0);
  },

  render(root, items) {
    root.textContent = '';
    root.append(...items.map((item) => this.renderRootItem(item)));
  },

  renderRootItem(item) {
    if (item.kind === 'accordion') {
      return this.renderAccordion(item);
    }

    const li = document.createElement('li');
    if (item.audience) {
      li.setAttribute('data-audience', item.audience);
    }
    li.appendChild(this.createLink(item, 'sidebar__link'));
    return li;
  },

  renderAccordion(item) {
    const li = document.createElement('li');
    li.className = 'sidebar__accordion';
    if (item.audience) {
      li.setAttribute('data-audience', item.audience);
    }

    const toggle = document.createElement('div');
    toggle.className = 'sidebar__accordion-toggle';
    if (item.accordion) {
      toggle.setAttribute('data-accordion', item.accordion);
    }

    toggle.appendChild(this.createLink(item, 'sidebar__accordion-link'));

    const arrow = document.createElement('button');
    arrow.className = 'sidebar__accordion-arrow';
    arrow.type = 'button';
    arrow.setAttribute('aria-label', 'Toggle submenu');
    arrow.setAttribute('aria-expanded', 'false');
    arrow.innerHTML = '&#9654;';
    toggle.appendChild(arrow);

    li.appendChild(toggle);

    if (item.submenu?.kind === 'trail') {
      li.appendChild(this.renderTrailMenu(item.submenu));
    } else {
      li.appendChild(this.renderSimpleList(item.children || []));
    }

    return li;
  },

  renderTrailMenu(config) {
    const list = document.createElement('ul');
    list.className = 'sidebar__submenu sidebar__submenu--trail';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('sidebar__trail-svg');
    svg.setAttribute('aria-hidden', 'true');
    list.appendChild(svg);

    config.items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'sidebar__trail-item';
      li.dataset.trailId = item.id;

      if (item.audience) {
        li.setAttribute('data-audience', item.audience);
      }
      if (item.hidden) {
        li.hidden = true;
      }

      const lane = this.laneMap[item.lane] || this.laneMap.left;
      li.style.setProperty('--lane-x', `${lane.x}px`);
      li.style.setProperty('--label-pad', `${lane.pad}px`);
      li.appendChild(this.createLink(item, 'sidebar__sublink'));
      list.appendChild(li);
    });

    this.trailMenus.set(list, config);
    return list;
  },

  renderSimpleList(items) {
    const list = document.createElement('ul');
    list.className = 'sidebar__submenu';

    items.forEach((item) => {
      const li = document.createElement('li');
      if (item.audience) {
        li.setAttribute('data-audience', item.audience);
      }
      li.appendChild(this.createLink(item, 'sidebar__sublink'));
      list.appendChild(li);
    });

    return list;
  },

  layoutAll() {
    this.trailMenus.forEach((config, list) => {
      this.layoutTrailMenu(list, config);
    });
  },

  layoutTrailMenu(list, config) {
    const svg = list.querySelector('.sidebar__trail-svg');
    if (!svg) return;

    const visibleItems = Array.from(list.querySelectorAll('.sidebar__trail-item')).filter((item) => !item.hidden);
    const itemMap = new Map(visibleItems.map((item) => [item.dataset.trailId, item]));
    const visibleIds = new Set(itemMap.keys());
    const configItems = new Map((config.items || []).map((item) => [item.id, item]));

    visibleItems.forEach((item) => {
      const itemConfig = configItems.get(item.dataset.trailId);
      const laneName = this.resolveLane(itemConfig, visibleIds);
      const lane = this.laneMap[laneName] || this.laneMap.left;
      item.style.setProperty('--lane-x', `${lane.x}px`);
      item.style.setProperty('--label-pad', `${lane.pad}px`);
    });

    const width = Math.ceil(list.clientWidth || 0);
    const height = Math.ceil(list.scrollHeight || 0);

    svg.setAttribute('viewBox', `0 0 ${Math.max(width, 1)} ${Math.max(height, 1)}`);
    svg.setAttribute('width', String(Math.max(width, 1)));
    svg.setAttribute('height', String(Math.max(height, 1)));
    svg.textContent = '';

    this.getTrailEdges(config, visibleIds).forEach(([fromId, toId]) => {
      const from = itemMap.get(fromId);
      const to = itemMap.get(toId);
      if (!from || !to) return;

      const x1 = this.getNodeX(from, list);
      const y1 = this.getNodeY(from, list);
      const x2 = this.getNodeX(to, list);
      const y2 = this.getNodeY(to, list);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${x1} ${y1} L ${x2} ${y2}`);
      path.setAttribute('class', 'sidebar__trail-path');
      svg.appendChild(path);
    });
  },

  resolveLane(item, visibleIds) {
    if (!item) return 'left';

    const matchedRule = (item.laneRules || []).find((rule) =>
      Array.isArray(rule.ifHidden) && rule.ifHidden.every((id) => !visibleIds.has(id))
    );

    return matchedRule?.lane || item.lane || 'left';
  },

  getTrailEdges(config, visibleIds = null) {
    const segments = [];

    const addPath = (path) => {
      if (!Array.isArray(path) || path.length < 2) return;
      const resolvedPath = visibleIds
        ? path.filter((id) => visibleIds.has(id))
        : path;
      for (let index = 0; index < resolvedPath.length - 1; index += 1) {
        segments.push([resolvedPath[index], resolvedPath[index + 1]]);
      }
    };

    addPath(config.mainPath);

    (config.detours || []).forEach((path) => {
      addPath(path);
    });

    (config.edges || []).forEach((edge) => {
      if (visibleIds && (!visibleIds.has(edge[0]) || !visibleIds.has(edge[1]))) {
        return;
      }
      segments.push(edge);
    });

    return segments;
  },

  getNodeX(item, list) {
    const lane = parseFloat(getComputedStyle(item).getPropertyValue('--lane-x'));
    const itemRect = item.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const baseX = Number.isFinite(lane) ? lane : 20;
    return itemRect.left - listRect.left + baseX;
  },

  getNodeY(item, list) {
    const itemRect = item.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    return itemRect.top - listRect.top + 16;
  },

  createLink(item, className) {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = className;
    link.textContent = item.text;

    if (item.i18n) {
      link.setAttribute('data-i18n', item.i18n);
    }

    return link;
  }
};
