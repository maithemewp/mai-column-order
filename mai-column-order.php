<?php
/**
 * Plugin Name:       Mai Column Order
 * Description:       Adds column order control for mobile and tablet to the block editor.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            JiveDig
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mai-column-order
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'enqueue_block_editor_assets', 'mai_column_order_editor_assets' );
/**
 * Enqueue editor assets.
 *
 * @since 0.1.0
 *
 * @return void
 */
function mai_column_order_editor_assets() {
	// Enqueue the editor JavaScript
	wp_enqueue_script(
		'mai-column-order',
		plugins_url( 'build/index.js', __FILE__ ),
		[ 'wp-blocks', 'wp-hooks', 'wp-dom-ready', 'wp-edit-post' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
		true
	);
}

add_action( 'init', 'mai_column_order_block_styles' );
/**
 * Enqueue block styles (Applies to both frontend and Editor).
 *
 * @since 0.1.0
 *
 * @return void
 */
function mai_column_order_block_styles() {
	wp_enqueue_block_style(
		'core/columns',
		[
			'handle' => 'mai-column-order',
			'src'    => untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/build/style.css',
			'ver'    => wp_get_theme()->get( 'Version' ),
			'path'   => untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/build/style.css',
		]
	);
}
