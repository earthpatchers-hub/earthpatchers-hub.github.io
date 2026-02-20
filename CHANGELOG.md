# Changelog

All notable changes to this project are documented in this file.

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
