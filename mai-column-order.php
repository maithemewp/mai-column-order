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
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Enqueue editor assets.
 *
 * @since 0.1.0
 *
 * @return void
 */
add_action( 'enqueue_block_editor_assets', function() {
	// Enqueue the editor JavaScript
	wp_enqueue_script(
		'mai-column-order',
		plugins_url( 'build/index.js', __FILE__ ),
		[ 'wp-blocks', 'wp-hooks', 'wp-dom-ready', 'wp-edit-post' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
		true
	);

	// // Add editor-specific styles
	// $editor_css = '
	// 	@media (max-width: 781px) {
	// 		.wp-block-column[data-order-mobile] {
	// 			order: var(--order-mobile, 0);
	// 		}
	// 	}
	// ';
	// wp_add_inline_style( 'wp-edit-blocks', $editor_css );
});

add_action( 'init', 'mai_column_order_block_styles' );
/**
 * Enqueue block styles
 * (Applies to both frontend and Editor)
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

// /**
//  * Enqueue frontend assets.
//  *
//  * @return void
//  */
// add_action( 'enqueue_block_assets', function() {
// 	// Add frontend styles
// 	$frontend_css = '
// 		@media (max-width: 781px) {
// 			.wp-block-column[style*="--order-mobile"] {
// 				order: var(--order-mobile, 0);
// 			}
// 		}
// 	';
// 	wp_add_inline_style( 'wp-block-column', $frontend_css );
// });

// add_action( 'init', function() {
// 	wp_enqueue_block_style(
// 		'core/column',
// 		[
// 			'handle' => 'mai-column-order',
// 			'src'    => plugins_url( 'build/style.css', __FILE__ ),
// 			'path'   => plugin_dir_path( __FILE__ ) . 'build/style.css',
// 		]
// 	);
// });


// add_action( 'enqueue_block_assets', 'add_columns_block_inline_style' );
// function add_columns_block_inline_style() {
// 	// Enqueue the existing stylesheet for the columns block (core block styles).
// 	wp_enqueue_style( 'wp-block-library' );

// 	// Add your inline CSS.
// 	$custom_css = '
// 		@media (max-width: 781px) {
// 			.wp-block-column[style*="--order-mobile"] {
// 				order: var(--order-mobile, 0);
// 			}
// 		}
// 	';
// 	wp_add_inline_style( 'wp-block-library', $custom_css );
// }