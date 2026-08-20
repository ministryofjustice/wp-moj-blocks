/**
 * Staggered Box
 *
 * Block metadata — name, title, icon, category, keywords, attributes — lives in
 * block.json and is registered server-side from mojblocks.php. This file only
 * supplies the editor behaviour and the block styles.
 *
 * The staggeredBoxClassName attribute in block.json is legacy: older boxes
 * persisted the editor's generated className there so the PHP could read it
 * back. apiVersion 3 no longer passes className to edit(), and the render
 * callback now uses get_block_wrapper_attributes(), so nothing reads or writes
 * it. It stays registered only so it isn't stripped from content saved before
 * that change.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import {
  RichText,
  MediaUpload,
  InspectorControls,
  URLInputButton,
  useBlockProps,
} from '@wordpress/block-editor';

import metadata from './block.json';

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType(metadata.name, {

  edit: props => {
    const {
      attributes: { staggeredBoxContent, staggeredBoxImageURL, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxTitle, staggeredBoxImageAltText },
        setAttributes
    } = props

    // apiVersion 3: the wrapper element must carry the props returned by
    // useBlockProps. className is no longer passed to edit() as a prop.
    //
    // This is also where the is-style-* class from the registered block styles
    // lands, which style.scss relies on — see .is-style-staggered-box-image-right.
    const blockProps = useBlockProps({ className: 'mojblocks-staggered-box' });

    const onChangeStaggeredBoxTitle = newStaggeredBoxTitle => {
      setAttributes({ staggeredBoxTitle: newStaggeredBoxTitle})
    }

    const onChangeStaggeredBoxContent = newStaggeredBoxContent => {
      setAttributes({ staggeredBoxContent: newStaggeredBoxContent })
    }

    const onChangeStaggeredBoxButtonText = newStaggeredBoxButtonText => {
      setAttributes({ staggeredBoxButtonText: newStaggeredBoxButtonText })
    }

    const onChangeStaggeredBoxButtonLink = newStaggeredBoxButtonLink => {
      setAttributes({ staggeredBoxButtonLink: newStaggeredBoxButtonLink })
    }

    const onStaggeredBoxImageSelect = newStaggeredBoxImageURL => {
      setAttributes({ staggeredBoxImageURL: newStaggeredBoxImageURL.sizes.large ? newStaggeredBoxImageURL.sizes.large.url : newStaggeredBoxImageURL.sizes.full.url })
      setAttributes({ staggeredBoxImageAltText: newStaggeredBoxImageURL.alt})
    }

    return (
      <Fragment >
        <InspectorControls>
          <MediaUpload
            onSelect={onStaggeredBoxImageSelect}
            allowedTypes={ALLOWED_MEDIA_TYPES}
            type="image"
            value={staggeredBoxImageURL}
            render={({ open }) => (
              <button className="button button-primary button-hero" onClick={open}>
                Open Media Library
              </button>
            )}
          />
        </InspectorControls>

        <div { ...blockProps }>
          <div className="govuk-width-container">
            <div className="govuk-grid-row">

              <div className="mojblocks-staggered-box__image-container govuk-grid-column-two-thirds ">
                <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText} />
              </div>

              <div className="mojblocks-staggered-box__text-container govuk-grid-column-one-half" >
                <RichText
                  tagName="h2"
                  value={staggeredBoxTitle}
                  onChange={onChangeStaggeredBoxTitle}
                  className="mojblocks-staggered-box__title"
                  placeholder={__('Add staggered box title', 'mojblocks')}
                  keepPlaceholderOnFocus={true}
                />
                <RichText
                  tagName="p"
                  value={staggeredBoxContent}
                  onChange={onChangeStaggeredBoxContent}
                  className="mojblocks-staggered-box__content"
                  placeholder={__('Add staggered box content', 'mojblocks')}
                  keepPlaceholderOnFocus={true}
                />
                <URLInputButton
                  label={__('Button link', 'mojblocks')}
                  onChange={onChangeStaggeredBoxButtonLink}
                  url={staggeredBoxButtonLink}
                />
                <RichText
                  value={staggeredBoxButtonText}
                  onChange={onChangeStaggeredBoxButtonText}
                  className="mojblocks-staggered-box__button"
                  placeholder={__('Add staggered box button', 'mojblocks')}
                />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  },

    save: () => null
});

registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'image-left',
    label: 'Image aligned on the left',
    isDefault: true,
  }
);
registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'staggered-box-image-right',
    label: 'Image aligned on right'
  }
);
