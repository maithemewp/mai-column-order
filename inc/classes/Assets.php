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
	 * @since 0.1.0
	 *
	 * @return void
	 */
	public function enqueue_editor_script(): void {
		wp_enqueue_script(
			'mai-column-order',
			plugins_url( 'build/index.js', MAI_COLUMN_ORDER_FILE ),
			[ 'wp-blocks', 'wp-hooks', 'wp-dom-ready', 'wp-edit-post' ],
			(string) filemtime( MAI_COLUMN_ORDER_DIR . 'build/index.js' ),
			true
		);
	}

	/**
	 * Attaches the ordering CSS to core/columns.
	 *
	 * wp_enqueue_block_style() only prints the CSS on pages that contain a
	 * Columns block, and the 'path' lets core inline it instead of adding a
	 * separate request.
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
				'ver'    => wp_get_theme()->get( 'Version' ),
				'path'   => MAI_COLUMN_ORDER_DIR . 'build/style.css',
			]
		);
	}
}
