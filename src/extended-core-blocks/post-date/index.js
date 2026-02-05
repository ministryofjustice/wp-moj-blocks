/* Override a core variation's isActive for core/post-date */
/* global wp */
(function () {
	const {
		blocks: {
			getBlockVariations,
			unregisterBlockVariation,
			registerBlockVariation,
		},
		i18n: { __ },
		domReady,
	} = wp;

	const CORE_VARIATION_NAMES = ["post-date", "post-date-modified"];

	/**
	 * Extend core/post-date with the attributes
	 *
	 * - hasPrefix: a marker to identify if the "with prefix" variation is selected.
	 *   allows us to determine which variation `isActive`.
	 * - prefix: the text to prefix the date with.
	 */
	wp.hooks.addFilter(
		"blocks.registerBlockType",
		"govwind/post-date-extend-attributes",
		(settings, name) => {
			if (name !== "core/post-date") {
				return settings;
			}

			settings.attributes = {
				...settings.attributes,
				hasPrefix: { type: "boolean", default: false },
				prefix: { type: "string", default: "" },
			};

			return settings;
		},
	);

	domReady(() => {
		const variations = getBlockVariations("core/post-date") || [];

		/**
		 * For each of the core/post-date variations, we:
		 * - Unregister the original variation.
		 * - Re-register it with a modified isActive function dependent on hasPrefix.
		 * - Register a new variation that adds the prefix, and is active when hasPrefix is true.
		 */
		CORE_VARIATION_NAMES.forEach((variationName) => {
			const original = variations.find((v) => v.name === variationName);
			if (!original) {
				console.warn(`Original variation not found: ${variationName}`);
				return;
			}

			// Unregister the original variation so we can re-register it with a modified isActive.
			try {
				unregisterBlockVariation("core/post-date", variationName);
			} catch (e) {
				console.error(`Failed to unregister variation ${variationName}`, e);
			}

			const updatedOriginal = {
				...original,

				// Make sure selecting this core variation clears the marker + prefix
				attributes: {
					...(original.attributes || {}),
					hasPrefix: false, // clear marker so core variations can become active
					prefix: "", // optional: avoid leaving stale "Published:" label behind
				},

				// Run the original isActive function, but also check hasPrefix property.
				isActive: (attrs, ...rest) => {
					return (
						original.isActive?.(attrs, ...rest) && attrs.hasPrefix !== true
					);
				},
			};

			const isModified = variationName === "post-date-modified";
			const vTitle = __(`${original.title} with Prefix`, "govwind");
			const vDesc = isModified
				? __("Displays the modified date prefixed with a label.", "govwind")
				: __("Displays the post's date prefixed with a label.", "govwind");
			const defaultPrefix = isModified
				? __("Updated:", "govwind")
				: __("Published:", "govwind");

			const withPrefix = {
				...original,
				name: `${original.name}-with-prefix`,
				title: vTitle,
				attributes: {
					...(original.attributes || {}),
					hasPrefix: true, // our marker to identify the variation in the isActive of the original variations
					prefix: defaultPrefix, // default prefix value, can be changed by the user in the sidebar control
				},
				// Run the original isActive function, but also check hasPrefix property.
				isActive: (attrs, ...rest) => {
					return (
						original.isActive?.(attrs, ...rest) && attrs.hasPrefix === true
					);
				},
				description: vDesc,
			};

			try {
				registerBlockVariation("core/post-date", updatedOriginal);
				registerBlockVariation("core/post-date", withPrefix);
			} catch (e) {
				console.error(
					`Failed to register a block variation ${variationName}`,
					e,
				);
			}
		});
	});

    /**
     * Inline editable prefix in the canvas, with 
     * - bold and italic formatting options
     * - placeholder text.
     * */
	(function () {
		var el = wp.element.createElement;
		var useBlockProps = wp.blockEditor.useBlockProps;
		var RichText = wp.blockEditor.RichText;
		var __ = wp.i18n.__;

		function addPrefixControl(BlockEdit) {
			return function (props) {
				if (props.name !== "core/post-date") {
					return el(BlockEdit, props);
				}

				var attributes = props.attributes || {};
				var prefixValue = attributes.prefix || "";

				if (attributes.hasPrefix !== true) {
					// No prefix → render the block as is, without the control.
					return el(BlockEdit, props);
				}

				// Get block props for selection outline - apply to our wrapper
				var blockProps = useBlockProps({
					className: "govwind-post-date-with-prefix-wrapper",
					style: {
						display: "inline-flex",
						alignItems: "baseline",
						gap: "0.25em",
						flexWrap: "wrap",
					},
				});

				// Canvas: inline editable prefix + original block (with block selection outline)
				return el(
					"div",
					blockProps,
					// Inline editable prefix
					el(RichText, {
						tagName: "span",
						className: "govwind-post-date-prefix",
						value: prefixValue,
						onChange: function (value) {
							props.setAttributes({ prefix: value });
						},
						placeholder: __("Prefix…", "govwind"),
						allowedFormats: ["core/bold", "core/italic"],
						disableLineBreaks: true,
						style: {
							marginRight: "0.25em",
						},
					}),
					// Original block edit component (without its own wrapper)
					el(BlockEdit, Object.assign({}, props, { __unstableDisableBlockWrapper: true })),
				);
			};
		}

		wp.hooks.addFilter(
			"editor.BlockEdit",
			"govwind/post-date-prefix-controls",
			addPrefixControl,
		);
	})();
})();

