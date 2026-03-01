# Changelog

All notable changes to this project are documented in this file.

## Unreleased

## v1.12 - 2026-02-28

### Fixed
- Added the missing `Activity Hut` image asset to version control so it appears correctly on live, not only in local/test environments.
- Added the missing `New Cities & Discovery Phase` image asset to version control so it appears correctly on live.
- Removed the audience switch from the mobile top bar and kept view switching in the sidebar, where it remains accessible without crowding the header.
- Reworked the mobile/tablet Overview hero so the top-right logo stays anchored right while the Romanian title falls below it when space is tight instead of overlapping.
- Kept the Romanian Overview hero title locked to two lines and aligned the subtitle width with the rest of the Overview text flow.
- Increased the mobile `Starting in Cluj` icon to match the visual scale of the `What Success Looks Like` icons and aligned its card spacing with the mission card style.
- Replaced the mobile Light/Dark text labels with matching themed lightbulb icons for better fit in the compact header.

### Changed
- Updated the Overview hero subtitle copy in both languages to describe joining Tribes led by Leaders (`MasterPatchers`) or trusted NGO partners.
- Refined Romanian Overview wording for more natural phrasing, including the “lucru de bifat pe listă” and “împrăștiate pe mai multe site-uri” changes.

## v1.11 - 2026-02-28

### Changed
- Fixed page-to-page navigation so switching sections resets scroll position to the top instead of keeping the previous page's scroll offset.
- Improved sidebar accordion behavior so clicking the whole row is easier, opens the destination page and submenu together, and allows collapsing the row on a second click.

## v1.10 - 2026-02-28

### Changed
- Improved theme behavior so manual dark/light selection persists while switching between public and partner views during the current session.
- Removed theme/language flicker on page load by preloading saved language and resolved theme state before CSS paints.
- Simplified Base Camp cards by removing extra subtitles/callouts and aligning descriptions and Explore links consistently.
- Updated Romanian Base Camp and partner CTA wording, including `Pentru mai încolo` and `Schimbă la Varianta Parteneri`.
- Moved Tribes partner roles into the later/planned section and hid that section from public view.
- Reformatted the Overview `Important!` callout into clearer two-paragraph messaging, with stronger emphasis on Tribe leaders and Patch Coins.
- Reformatted the Donate `Coming soon` notice into a title + body callout in both languages.

### Refactored
- Refactored `js/i18n.js` to separate translation application concerns, add section indexing, and prepare public/partner audience overrides.
- Added translation parity checks and audience override validation to reduce future localization regressions.
- Simplified `index.html` by replacing repeated inline styling with reusable classes for Base Camp pillars, cards, page-end CTA/footer hooks, and module navigation hooks.
- Centralized repeated trail divider styling, removed unused CSS, and added reusable semantic hooks in `css/styles.css`.
- Standardized module content structure with reusable `rich-text`, `module-body__intro`, `module-body__why`, and shared module page hooks.

## v1.7 - 2026-02-20

### Changed
- Expanded and refined Overview content with clearer mission explanations and age-group examples.
- Updated mission sizing examples and rewards messaging (small missions now use 10 points in Overview examples).
- Reworked "How It Works" into a 6-step flow, including Tribe leader validation and clearer Earth learning + Market Hut usage path.
- Converted "Starting in Cluj" section to match card-based Overview styling behavior.
- Improved Romanian localization consistency across pages (terminology and phrasing cleanup, including "Monede Patch", "Căsuța de Schimb", and natural-language adventure wording).

## v1.6 - 2026-02-20

### Changed
- Added responsive layout refinements across mobile, tablet, and desktop breakpoints.
- Updated compact module card grid behavior for improved consistency across screen sizes.
- Adjusted module-to-module next/previous navigation links in chapter pages.
- Removed redundant router fallback initialization block in `js/router.js`.

### Notes
- Release based on commit `2857cda` (Style Update).


## v1.5 - 2026-02-19

### Changed
- Reverted the visitor counter widget from production.
- Removed widget UI, styling, and visitor counter script.
- Restored website behavior to the previous version without a visitor counter.

## v1.4 - 2026-02-19

### Added
- Added a fixed "EarthPatchers Visited" widget across the site.
- Added `js/visitor-widget.js` to fetch and display unique visitor count via `countapi.xyz`.
- Added fallback logic so the counter still shows a meaningful value when external requests fail.
- Added a new widget paw icon asset based on the exact user-provided source image.

### Changed
- Updated widget icon styling to restore the golden coin-like background while keeping the provided paw shape.
- Added EN/RO localization keys for the visitor widget title.

## v1.3 - 2026-02-19

### Added
- Added HD image assets for core modules.
- Added themed icon set updates for Overview, About, and MVP-related sections.

### Changed
- Improved Romanian content quality (translation consistency and diacritics).
- Updated responsive behavior and layout polish for better mobile/tablet rendering.
- Refined navigation/page routing behavior and supporting JS/CSS.

## v1.2 - 2026-02-18

### Changed
- Updated MVP content structure and chapter text.
- Improved navigation behavior to prevent incorrect Overview-first rendering.
- Improved text rendering/layout for story content.

## v1.1 - 2026-02-12

### Added
- Major content release with 11 modules.
- Introduced module-based navigation and multilingual content updates.
- Added Loopy story content and related page flows (later removed/reworked in subsequent iterations).
- Added initial themed visual assets for modules.
