import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelRow, PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Adds attributes to the blocks.
 *
 * @since 0.1.0
 * @param {Object} settings The block settings.
 * @param {string} name    The block name.
 * @return {Object} The filtered block settings.
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
 * Filter the BlockEdit object and add inspector controls to blocks.
 *
 * @since 0.1.0
 * @param {Object} BlockEdit
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

// Update the editor styles filter
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

// Update the save props filter.
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