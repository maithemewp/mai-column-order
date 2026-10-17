<?php

declare( strict_types=1 );

namespace Mai\ColumnOrder;

defined( 'ABSPATH' ) || exit;

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

/**
 * Updates come from GitHub releases and tags. PUC checks the latest release,
 * then the highest version tag, and only falls back to a branch (master, since
 * setBranch() is not called) when neither exists. The repo has no master
 * branch, so commits on develop or main never reach sites. Don't create a
 * master branch or call setBranch(), or sites will track that branch.
 */
final class Updater {

	/**
	 * Hooks the updater.
	 *
	 * @since 0.2.0
	 *
	 * @return void
	 */
	public function register(): void {
		add_action( 'plugins_loaded', [ $this, 'init' ] );
	}

	/**
	 * Builds the update checker.
	 *
	 * @since 0.1.1
	 *
	 * @uses https://github.com/YahnisElsts/plugin-update-checker/
	 *
	 * @return void
	 */
	public function init(): void {
		if ( ! class_exists( PucFactory::class ) ) {
			return;
		}

		$updater = PucFactory::buildUpdateChecker( 'https://github.com/maithemewp/mai-column-order/', MAI_COLUMN_ORDER_FILE, 'mai-column-order' );

		// Authenticate when a token is set. Updates keep working if the repo goes private,
		// and checks use GitHub's authenticated rate limit instead of the 60-per-hour anonymous one.
		if ( defined( 'MAI_GITHUB_API_TOKEN' ) ) {
			$updater->setAuthentication( MAI_GITHUB_API_TOKEN );
		}
	}
}
