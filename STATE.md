# State
Updated: 2026-10-16 by Claude Opus 5.5

## Now
The unreleased work updates @wordpress/scripts to 36.1 and adds npm overrides for patched dev tooling. Not pushed or tagged.

## Next
- Push and tag 0.1.3 once Mike says yes.
- Dismiss the leftover Dependabot alerts (braces, postcss-selector-parser) on GitHub as dev only, or turn on the auto-triage rule for development-scoped dependencies.

## Blocked / waiting on
Mike's go to push and tag.

## Verify
- `npm audit --omit=dev` shows 0 vulnerabilities.
- `npm run build` compiles, and in the editor a Columns block still shows "Reverse direction on mobile" while each Column still shows "Order on mobile".

## Gotchas
- An override keyed on a version range (`js-yaml@>=5 <5.5`) left the npm tree invalid. Nest it under the parent instead (`"markdownlint-cli": { "js-yaml": "^5.5.0" }`).
- A lockfile update alone keeps old nested versions. Delete node_modules and package-lock.json, then reinstall, to get the real count.
- Same approach as stretchy-pants-grid-gallery 0.5.2 and 0.5.5. Don't use a stub package to prune tooling; that was tried there in 0.5.4 and reverted.
