<?php
/**
 * Plugin Name:       Mai Column Order
 * Description:       Adds mobile column order controls to the Columns block.
 * Version:           0.2.0
 * Requires at least: 7.0
 * Requires PHP:      8.2
 * Author:            JiveDig
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mai-column-order
 */

declare( strict_types=1 );

defined( 'ABSPATH' ) || exit;

define( 'MAI_COLUMN_ORDER_FILE', __FILE__ );
define( 'MAI_COLUMN_ORDER_DIR', plugin_dir_path( __FILE__ ) );

require_once __DIR__ . '/vendor/autoload.php';

( new Mai\ColumnOrder\Assets() )->register();
( new Mai\ColumnOrder\Updater() )->register();
