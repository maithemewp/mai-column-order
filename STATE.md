# State
Updated: 2026-10-16 by Claude Opus 5.5

## Now
Unreleased on top of 0.1.2, committed locally, not pushed or tagged:
- @wordpress/scripts 36.1 plus npm overrides. Audit 118 to 29, none critical, 0 in shipped code.
- PHP rebuilt as `Mai\ColumnOrder\` classes in inc/classes/, strict types. Floors are WP 7.0 and PHP 8.2.
- Editor script deps come from build/index.asset.php. Stylesheet version is the CSS file's mtime.

## Next
- Pick a version (0.2.0 fits the floor raise), then push and tag once Mike says yes. The new classes say `@since 0.2.0`; change them if the version differs.
- Dismiss the leftover Dependabot alerts (braces, postcss-selector-parser) on GitHub as dev only.

## Blocked / waiting on
Mike's go on the version, push, and tag.

## Verify
- `npm audit --omit=dev` shows 0 vulnerabilities.
- `php vendor/bin/deployable-guard check --root=.` prints OK.
- Smoke test (Playwright, on a local site with the plugin): Columns shows "Reverse direction on mobile", Column shows "Order on mobile", saved markup carries the class and `--order-mobile`, and at 400px wide the front end shows `column-reverse` and the order.

## Gotchas
- Five live sites ran this plugin in Oct 2026, all on WP 7.1.3 and PHP 8.4+ on the CLI. `mai-sites plugins list mai-column-order` lists them.
- Some local copies can't run editor tests: a debug handler there turns another plugin's PHP deprecation into a full error page. Pick a site whose wp-admin loads cleanly.
- Some themes open pages in template view. Switch to post-only (`setRenderingMode( 'post-only' )`) before inserting blocks from a script.
- An npm override keyed on a version range left the tree invalid. Nest it under the parent instead (`"markdownlint-cli": { "js-yaml": "^5.5.0" }`).
- Don't use a stub package to prune tooling. stretchy-pants-grid-gallery tried it in 0.5.4 and reverted.
