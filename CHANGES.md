## Changelog

### Unreleased
* Changed: Requires WordPress 7.0+ and PHP 8.2+.
* Changed: Rebuilt the PHP as namespaced classes (`Mai\ColumnOrder\`) with strict types, loaded by the Composer autoloader.
* Added: Update checks authenticate with `MAI_GITHUB_API_TOKEN` when it is defined.
* Changed: Updated @wordpress/scripts from 30.9 to 36.1, which takes the npm audit from 118 findings (5 critical) down to 29 (none critical).
* Changed: Added npm overrides for serialize-javascript, uuid, katex, smol-toml, and js-yaml so build tools use their patched versions.
* Changed: Rebuilt the editor script. The code is the same; only the minifier's output changed.
* Note: The 29 findings left come from two packages, braces and postcss-selector-parser. Both are build tools only, and braces has no fixed version published. None of them ship to sites (`npm audit --omit=dev` finds 0).

### 0.1.2 (2026-05-26)
* Changed: Updated the updater for PHP 8.4 support.
* Changed: Switched to tag-based updates.

### 0.1.1 (2025-01-29)
* Added: Automatic updates via GitHub.

### 0.1.0 (2025-01-27)
* Initial release