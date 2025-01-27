import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelRow, PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Adds custom attributes to the core/columns and core/column blocks.
 *
 * @since 0.1.0
 * @param {Object} settings The block settings object.
 * @param {string} name    The block name/type (e.g., 'core/columns' or 'core/column').
 * @return {Object} Modified block settings with additional attributes.
 */
addFilter(
	'blocks.registerBlockType',
	'mai-column-order/add-attributes',
	( settings, name ) => {
		if ( 'core/columns' === name ) {
			return {
				...settings,
				attributes: {
					...settings.attributes,
					isReversedDirectionOnMobile: {
						type: 'boolean',
						default: false,
					},
				},
			};
		}

		if ( 'core/column' === name ) {
			return {
				...settings,
				attributes: {
					...settings.attributes,
					orderMobile: {
						type: 'number',
						default: 0,
					},
				},
			};
		}

		return settings;
	}
);

/**
 * Adds inspector controls to the core/columns and core/column blocks.
 * Allows configuring mobile direction and order settings.
 *
 * @since 0.1.0
 * @param {Function} BlockEdit Original block edit component.
 * @return {Function} Enhanced block edit component with additional controls.
 */
addFilter(
	'editor.BlockEdit',
	'mai-column-order/add-inspector-controls',
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			const { name, attributes, setAttributes } = props;
			const { isReversedDirectionOnMobile, orderMobile } = attributes;

			// Handle columns block.
			if ( 'core/columns' === name ) {
				return (
					<>
						<BlockEdit {...props} />
						<InspectorControls>
							<div style={{ padding: '0 16px 8px' }}>
								<ToggleControl
									label={__('Reverse direction on mobile', 'mai-column-order')}
									checked={isReversedDirectionOnMobile}
									onChange={() => {
										setAttributes({
											isReversedDirectionOnMobile: !isReversedDirectionOnMobile,
										});
									}}
								/>
							</div>
						</InspectorControls>
					</>
				);
			}

			// Handle column block.
			if ( 'core/column' === name ) {
				return (
					<>
						<BlockEdit {...props} />
						<InspectorControls>
							<div style={{ padding: '0 16px 8px' }}>
								<RangeControl
									label={__('Order on mobile', 'mai-column-order')}
									value={orderMobile}
									onChange={(value) => {
										setAttributes({
											orderMobile: value
										});
									}}
									min={-4}
									max={8}
									allowReset={true}
									resetFallbackValue={0}
								/>
							</div>
						</InspectorControls>
					</>
				);
			}

			return <BlockEdit {...props} />;
		};
	})
);

/**
 * Applies custom styles and classes to blocks in the editor.
 * Handles mobile direction for columns and order for individual columns.
 *
 * @since 0.1.0
 * @param {Function} BlockListBlock Original block list block component.
 * @return {Function} Enhanced block list block component with additional styles.
 */
addFilter(
	'editor.BlockListBlock',
	'mai-column-order/with-styles',
	createHigherOrderComponent((BlockListBlock) => {
		return (props) => {
			const { name, attributes } = props;
			const {
				isReversedDirectionOnMobile,
				orderMobile,
			} = attributes;

			// Return early if not our blocks.
			if ( ! ['core/columns', 'core/column'].includes(name) ) {
				return <BlockListBlock {...props} />;
			}

			// Handle columns block.
			if ('core/columns' === name) {
				const classes = [];

				if (isReversedDirectionOnMobile) {
					classes.push('is-reversed-direction-on-mobile');
				}

				if (classes.length) {
					return (
						<BlockListBlock
							{...props}
							className={`${props.className || ''} ${classes.join(' ')}`.trim()}
						/>
					);
				}
			}

			// Handle column block.
			if ('core/column' === name) {
				const style = {};

				if (orderMobile) {
					style['--order-mobile'] = String(orderMobile);
				}

				if (Object.keys(style).length) {
					return (
						<BlockListBlock
							{...props}
							wrapperProps={{
								...props.wrapperProps,
								style: {
									...(props.wrapperProps?.style || {}),
									...style
								}
							}}
						/>
					);
				}
			}

			return <BlockListBlock {...props} />;
		};
	})
);

/**
 * Modifies the saved content props for columns and column blocks.
 * Adds custom classes and styles for mobile responsiveness.
 *
 * @since 0.1.0
 * @param {Object} extraProps     Additional props to be applied to the block's save element.
 * @param {Object} blockType      The block type configuration object.
 * @param {Object} attributes     The block's attributes.
 * @return {Object} Modified extra props to be applied to the block's save element.
 */
addFilter(
	'blocks.getSaveContent.extraProps',
	'mai-column-order/save-props',
	( extraProps, blockType, attributes ) => {
		// Return early if not our blocks.
		if ( ! ['core/columns', 'core/column'].includes(blockType.name)) {
			return extraProps;
		}

		// Handle columns block.
		if ( 'core/columns' === blockType.name ) {
			const classes = [];

			if ( attributes.isReversedDirectionOnMobile ) {
				classes.push('is-reversed-direction-on-mobile');
			}

			if ( classes.length ) {
				return {
					...extraProps,
					className: `${extraProps.className || ''} ${classes.join(' ')}`.trim()
				};
			}
		}

		// Handle column block.
		if ( 'core/column' === blockType.name ) {
			const style = { ...extraProps.style };

			if ( attributes.orderMobile ) {
				style['--order-mobile'] = String(attributes.orderMobile);
			}

			if ( Object.keys(style).length ) {
				return {
					...extraProps,
					style
				};
			}
		}

		return extraProps;
	}
);