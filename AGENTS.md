# Mai Column Order

Adds mobile ordering controls to core/columns and core/column. No blocks of its own.

## Layout
- `mai-column-order.php` bootstraps: constants, autoloader, then `register()` on each class.
- `inc/classes/` holds PHP, PSR-4 `Mai\ColumnOrder\`. `src/` is wp-scripts input only, never PHP.
- `build/` is committed. Sites get the raw tree with no build step.

## Invariants
- Saved markup is the contract: `is-reversed-direction-on-mobile` on Columns, `--order-mobile:<n>` inline on Column. Changing either breaks existing posts.
- The CSS breakpoint (781px) matches core/columns' stacking point.
- Commit the autoloader with `composer dump-autoload --no-dev`, then run `php vendor/bin/deployable-guard check --root=.`.

## Dev tooling
- npm audit findings are build-only. `npm audit --omit=dev` must stay at 0.
- Remaining dev findings are handled with `overrides` in package.json, same approach as stretchy-pants-grid-gallery.
