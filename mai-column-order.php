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

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;

// Include vendor libraries.
require_once __DIR__ . '/vendor/autoload.php';

// Use the update checker.
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// Initialize the plugin.
new Mai_Column_Order_Plugin;

/**
 * Mai Column Order Plugin.
 *
 * @since 0.2.0
 */
class Mai_Column_Order_Plugin {
	/**
	 * Constructor.
	 *
	 * @since 0.2.0
	 *
	 * @return void
	 */
	public function __construct() {
		$this->hooks();
	}

	/**
	 * Hooks.
	 *
	 * @since 0.2.0
	 *
	 * @return void
	 */
	public function hooks() {
		add_action( 'plugins_loaded',              [ $this, 'updater' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'add_editor_assets' ] );
		add_action( 'init',                        [ $this, 'add_block_styles' ] );
	}

	/**
	 * Setup the updater.
	 *
	 * composer require yahnis-elsts/plugin-update-checker
	 *
	 * @uses https://github.com/YahnisElsts/plugin-update-checker/
	 *
	 * @since 0.2.0
	 *
	 * @return void
	 */
	public function updater() {
		$updater = PucFactory::buildUpdateChecker(
			'https://github.com/maithemewp/mai-column-order/',
			__FILE__,
			'mai-column-order'
		);

		// Set the branch.
		$updater->setBranch( 'main' );
	}


	/**
	 * Enqueue editor assets.
	 *
	 * @since 0.1.0
	 *
	 * @return void
	 */
	function add_editor_assets() {
		// Enqueue the editor JavaScript
		wp_enqueue_script(
			'mai-column-order',
			plugins_url( 'build/index.js', __FILE__ ),
			[ 'wp-blocks', 'wp-hooks', 'wp-dom-ready', 'wp-edit-post' ],
			filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
			true
		);
	}

	/**
	 * Add block styles.
	 *
	 * @since 0.1.0
	 *
	 * @return void
	 */
	function add_block_styles() {
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
}
