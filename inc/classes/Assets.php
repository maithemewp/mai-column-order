<?php

declare( strict_types=1 );

namespace Mai\ColumnOrder;

defined( 'ABSPATH' ) || exit;

/**
 * Loads the editor controls and the front-end ordering CSS.
 *
 * The plugin adds no blocks of its own. It extends core/columns and
 * core/column with attributes in the editor (build/index.js) and ships the
 * CSS that turns those attributes into a mobile order (build/style.css).
 */
final class Assets {

	/**
	 * Hooks the asset loaders.
	 *
	 * @since 0.2.0
	 *
	 * @return void
	 */
	public function register(): void {
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_script' ] );
		add_action( 'init', [ $this, 'enqueue_block_style' ] );
	}

	/**
	 * Enqueues the editor script that adds the order controls.
	 *
	 * Dependencies and version come from build/index.asset.php, which
	 * wp-scripts writes from the script's real imports. The old hand-written
	 * list leaned on wp-edit-post, which dragged the post editor's scripts
	 * into the Site Editor and the widgets editor too.
	 *
	 * @since 0.1.0
	 *
	 * @return void
	 */
	public function enqueue_editor_script(): void {
		$asset = require MAI_COLUMN_ORDER_DIR . 'build/index.asset.php';

		wp_enqueue_script(
			'mai-column-order',
			plugins_url( 'build/index.js', MAI_COLUMN_ORDER_FILE ),
			$asset['dependencies'],
			$asset['version'],
			true
		);
	}

	/**
	 * Attaches the ordering CSS to core/columns.
	 *
	 * By default (WP 6.9+, block and classic themes) core only prints this CSS
	 * on pages that render a Columns block. The 'path' lets core inline it
	 * instead of adding a separate request.
	 *
	 * The version is the file's modified time, so browsers fetch new CSS when
	 * the plugin updates. It used to be the theme's version, which only
	 * changed when the theme did.
	 *
	 * @since 0.1.0
	 *
	 * @return void
	 */
	public function enqueue_block_style(): void {
		wp_enqueue_block_style(
			'core/columns',
			[
				'handle' => 'mai-column-order',
				'src'    => plugins_url( 'build/style.css', MAI_COLUMN_ORDER_FILE ),
				'ver'    => (string) filemtime( MAI_COLUMN_ORDER_DIR . 'build/style.css' ),
				'path'   => MAI_COLUMN_ORDER_DIR . 'build/style.css',
			]
		);
	}
}
