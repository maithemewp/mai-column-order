# Mai Column Order

Adds column order and direction controls for mobile layouts in the WordPress block editor.

## Description

Mai Column Order enhances the WordPress block editor by adding responsive column ordering capabilities. This plugin allows you to:

* Reverse the direction of all columns on mobile views
* Change the order of individual columns on mobile views
* Maintain desktop layouts while customizing mobile experiences

Perfect for creating responsive layouts where content needs to appear in a different order on smaller screens.

## Installation

1. Upload the plugin files to the `/wp-content/plugins/mai-column-order` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Use the Column block settings sidebar to configure column order and direction for mobile views

## Usage

After installation:

1. Add or edit a Columns block in the WordPress editor
2. Select the parent Columns block to enable direction reversal for mobile views
3. Select individual Column blocks to set their order on mobile using the sidebar controls
4. Preview your page to see the responsive ordering in action

## Frequently Asked Questions

### Can I reverse the entire column order?

Yes! Select the parent Columns block and toggle "Reverse direction on mobile" in the sidebar.

### How do I change the order of a specific column?

Select the individual Column block and use the "Order on mobile" control in the sidebar. Lower numbers appear first, higher numbers appear last.

## Screenshots

1. Column order controls in the block editor sidebar
2. Mobile direction controls for column groups

![Column order controls in the block editor sidebar](screenshot.png)

## Technical Notes

This plugin adds custom attributes and styles to core Column and Columns blocks. It uses CSS order properties and flex-direction to achieve responsive reordering without affecting the semantic HTML structure.

For developers, the plugin:
* Adds custom attributes to core blocks
* Implements responsive CSS using modern CSS features
* Uses React components for the block editor interface
