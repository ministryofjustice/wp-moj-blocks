!function(e){var t={};function o(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(c,a,function(t){return e[t]}.bind(null,a));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.domReady}()},function(e,t,o){"use strict";o.r(t);var c=o(0),a=o(1),n=o(3),l=o(2);Object(n.registerBlockType)("mojblocks/highlights-list",{title:Object(a.__)("Highlights List","mojblocks"),icon:"list-view",category:"mojblocks",example:{attributes:{listTitle:"This is a highlights list title",listItems:"This is a list item"}},attributes:{listTitle:{type:"string"},listItems:{type:"string"},listClassName:{type:"string"}},edit:function(e){var t=e.attributes,o=t.listTitle,n=t.listItems,r=e.className,s=e.setAttributes;s({listClassName:r});return Object(c.createElement)("div",{className:"".concat(r,"  mojblocks-highlights-list")},Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{className:"mojblocks-highlights-list__heading-container"},Object(c.createElement)("h2",{className:"mojblocks-highlights-list__heading"},Object(c.createElement)("span",{role:"text"},Object(c.createElement)("span",{className:"mojblocks-highlights-list__heading-text"},Object(c.createElement)(l.RichText,{placeholder:Object(a.__)("Add highlights title","mojblocks"),keepPlaceholderOnFocus:!0,value:o,onChange:function(e){s({listTitle:e})}}))))),Object(c.createElement)("div",{className:"mojblocks-highlights-list__content"},Object(c.createElement)(l.RichText,{tagName:"ul",multiline:"li",placeholder:Object(a.__)("Add list item","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){s({listItems:e})},value:n})))))},save:function(){return null}}),Object(n.registerBlockType)("mojblocks/cta",{title:Object(a.__)("Call to Action","mojblocks"),icon:"megaphone",category:"mojblocks",keywords:[Object(a.__)("cta"),Object(a.__)("Call to Action"),Object(a.__)("banner")],example:{attributes:{ctaTitle:"Add a Call to Action banner to your site",ctaText:"Call To Action text",buttonLabel:"Click me now",buttonLink:"https://intranet.justice.gov.uk/"}},attributes:{ctaTitle:{type:"string"},ctaText:{type:"string"},buttonLabel:{type:"string"},buttonLink:{type:"string"},ctaClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,n=o.ctaTitle,r=o.ctaText,s=o.buttonLink,i=o.buttonLabel,m=e.className;t({ctaClassName:m});return Object(c.createElement)("div",{className:"".concat(m,"  mojblocks-cta")},Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{class:"govuk-grid-column-three-quarters"},Object(c.createElement)("div",{className:"mojblocks-cta__heading-container"},Object(c.createElement)("h2",{className:"mojblocks-cta__heading"},Object(c.createElement)("span",{role:"text"},Object(c.createElement)("span",{className:"mojblocks-cta__heading-text"},Object(c.createElement)(l.RichText,{placeholder:Object(a.__)("Add a Call To Action title","mojblocks"),keepPlaceholderOnFocus:!0,value:n,onChange:function(e){t({ctaTitle:e})}}))))),Object(c.createElement)("div",{className:"mojblocks-cta__content"},Object(c.createElement)(l.RichText,{multiline:"p",placeholder:Object(a.__)("Add compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({ctaText:e})},value:r})),Object(c.createElement)(l.URLInputButton,{className:"mojblocks-dropdown__input",label:Object(a.__)("CTA Link","mojblocks"),onChange:function(e){t({buttonLink:e})},url:s}),Object(c.createElement)(l.RichText,{className:"mojblocks-button govuk-button",value:i,onChange:function(e){t({buttonLabel:e})},placeholder:"Button label"})))))},save:function(){return null}});var r=wp.i18n.__,s=wp.blocks.registerBlockType,i=wp.blockEditor,m=(i.RichText,i.InspectorControls),u=i.MediaUpload,b=i.InnerBlocks;s("mojblocks/hero",{title:r("Hero","mojblocks"),description:r("Full width hero banner with title and text","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{backgroundImage:{type:"string"},heroTitle:{type:"string"},heroText:{type:"string"},heroClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,a=o.backgroundImage,n=(o.heroTitle,o.heroText,e.className);t({heroClassName:n});return[Object(c.createElement)(m,null,Object(c.createElement)("div",{className:"block-editor-block-card"},Object(c.createElement)(u,{onSelect:function(e){t({backgroundImage:e.sizes.full.url})},type:"image",value:a,render:function(e){var t=e.open;return Object(c.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Upload background image")}}))),Object(c.createElement)("section",{className:"".concat(n,"  mojblocks-hero")},Object(c.createElement)("div",{className:"mojblocks-hero__image",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center"}}),Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{className:"mojblocks-hero__overlay"},Object(c.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(c.createElement)(b,{allowedBlocks:["core/heading","core/list","core/paragraph","mojblocks/intro"]}))))))]},save:function(){return Object(c.createElement)(b.Content,null)}});var d=wp.i18n.__,g=wp.blocks.registerBlockType,j=wp.blockEditor.RichText,k=wp.blockEditor.InnerBlocks;g("mojblocks/accordion",{title:d("Accordion","mojblocks"),description:d("Display content in an accordion component."),icon:"list-view",category:"mojblocks",keywords:[d("accordion"),d("sections"),d("lists")],attributes:{},edit:function(){return[Object(c.createElement)("div",{className:"govuk-accordion","data-module":"govuk-accordion",id:"accordion-default",key:"accordion-block"},Object(c.createElement)(k,{template:[["mojblocks/accordion-section",{}]],allowedBlocks:["mojblocks/accordion-section"]}))]},save:function(){return Object(c.createElement)(k.Content,null)}}),g("mojblocks/accordion-section",{title:d("Accordion Section","mojblocks"),category:"mojblocks",parent:["mojblocks/accordion"],attributes:{accordionSectionTitle:{type:"string"},accordionSectionTextArea:{type:"string"},accordionSectionClassName:{type:"string"}},edit:function(e){var t=e.attributes,o=t.accordionSectionTitle,a=t.accordionSectionTextArea,n=e.className,l=e.setAttributes;l({accordionSectionClassName:n});return[Object(c.createElement)("div",{className:"".concat(n," govuk-accordion__section"),key:"accordion-block-section"},Object(c.createElement)("div",{className:"govuk-accordion__section-header"},Object(c.createElement)("h3",{className:"govuk-accordion__section-heading"},Object(c.createElement)("span",{className:"govuk-accordion__section-button",id:"accordion-default-heading-1"},Object(c.createElement)(j,{placeholder:d("Add accordion section title","mojblocks"),value:o,onChange:function(e){l({accordionSectionTitle:e})},keepPlaceholderOnFocus:!0})))),Object(c.createElement)("div",{id:"accordion-default-content-1",className:"govuk-accordion__section-content","aria-labelledby":"accordion-default-heading-1"},Object(c.createElement)("div",{className:"govuk-body"},Object(c.createElement)(j,{placeholder:d("Add accordion section content","mojblocks"),value:a,onChange:function(e){l({accordionSectionTextArea:e})},keepPlaceholderOnFocus:!0}),Object(c.createElement)(k,{allowedBlocks:["core/heading","core/list","core/paragraph"]}))))]},save:function(){return Object(c.createElement)(k.Content,null)}});var p=wp.i18n.__,h=wp.blocks,_=h.registerBlockType,v=h.registerBlockStyle,O=wp.element.Fragment,E=wp.blockEditor,N=E.RichText,f=E.MediaUpload,y=E.InspectorControls,x=E.URLInputButton,T=["image"];_("mojblocks/staggered-box",{title:p("Staggered Box","mojblocks"),description:p("Display content on top of a staggered background image"),category:"mojblocks",icon:"admin-page",keywords:[p("staggered box"),p("photo block")],attributes:{staggeredBoxTitle:{type:"string"},staggeredBoxContent:{type:"string"},staggeredBoxButtonText:{type:"string"},staggeredBoxButtonLink:{type:"string"},staggeredBoxImageURL:{type:"string"},staggeredBoxImageAltText:{type:"string"},staggeredBoxClassName:{type:"string"}},edit:function(e){var t=e.attributes,o=t.staggeredBoxContent,a=t.staggeredBoxImageURL,n=t.staggeredBoxButtonText,l=t.staggeredBoxButtonLink,r=t.staggeredBoxTitle,s=t.staggeredBoxImageAltText,i=e.className,m=e.setAttributes;m({staggeredBoxClassName:i});return Object(c.createElement)(O,null,Object(c.createElement)(y,null,Object(c.createElement)(f,{onSelect:function(e){m({staggeredBoxImageURL:e.sizes.full.url}),m({staggeredBoxImageAltText:e.alt})},allowedTypes:T,type:"image",value:a,render:function(e){var t=e.open;return Object(c.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Open Media Library")}})),Object(c.createElement)("div",{className:"".concat(i," mojblocks-staggered-box")},Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{className:"mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "},Object(c.createElement)("img",{className:"mojblocks-staggered-block__image",src:a,alt:s})),Object(c.createElement)("div",{className:"mojblocks-staggered-box__text-container govuk-grid-column-one-half"},Object(c.createElement)(N,{tagName:"h2",value:r,onChange:function(e){m({staggeredBoxTitle:e})},className:"mojblocks-staggered-box__title",placeholder:p("Add staggered box title","mojblocks"),keepPlaceholderOnFocus:!0}),Object(c.createElement)(N,{tagName:"p",value:o,onChange:function(e){m({staggeredBoxContent:e})},className:"mojblocks-staggered-box__content",placeholder:p("Add staggered box content","mojblocks"),keepPlaceholderOnFocus:!0}),Object(c.createElement)(x,{label:p("Button link","mojblocks"),onChange:function(e){m({staggeredBoxButtonLink:e})},url:l}),Object(c.createElement)(N,{value:n,onChange:function(e){m({staggeredBoxButtonText:e})},className:"mojblocks-staggered-box__button",placeholder:p("Add staggered box button","mojblocks")}))))))},save:function(){return null}}),v("mojblocks/staggered-box",{name:"image-left",label:"Image aligned on the left",isDefault:!0}),v("mojblocks/staggered-box",{name:"staggered-box-image-right",label:"Image aligned on right"});var C=o(4),w=o(5),B=o.n(w),I={};I.upload=Object(c.createElement)("svg",{width:"32px",height:"32px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"}),Object(c.createElement)("path",{d:"m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"}),Object(c.createElement)("path",{d:"m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"}),Object(c.createElement)("path",{d:"m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"}));var A=I,q=["image"];Object(n.registerBlockType)("mojblocks/quote",{title:Object(a.__)("Quote","mojblocks"),description:Object(a.__)("A user quote block with an optional image background, quote text and name","mojblocks"),category:"mojblocks",icon:"format-quote",keywords:[Object(a.__)("quote","mojblocks"),Object(a.__)("testimonial","mojblocks"),Object(a.__)("moj","mojblocks")],attributes:{quoteImgURL:{type:"string"},quoteContent:{type:"string"},quoteName:{type:"string"},quoteAlignment:{type:"string"},quoteImgId:{type:"number"},quoteClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,n=o.quoteImgURL,r=o.quoteContent,s=o.quoteName,i=o.quoteAlignment,m=o.quoteImgId,u=e.className;t({quoteClassName:u});var b=function(){t({quoteImgURL:null,quoteImgId:null})};return[Object(c.createElement)(l.BlockControls,{key:"controls"},Object(c.createElement)(l.AlignmentToolbar,{value:i,onChange:function(e){return t({quoteAlignment:e})}})),Object(c.createElement)("div",{className:"mojblocks-quote","data-src":n},Object(c.createElement)("div",{className:"".concat(u," mojblocks-quote__image ")+(m?"mojblocks-quote__image-selected":""),style:{backgroundImage:"url(".concat(n,")")}},Object(c.createElement)(l.MediaUpload,{buttonProps:{className:"change-image"},onSelect:function(e){return t({quoteImgId:e.id,quoteImgURL:e.url})},allowed:q,type:"image",value:m,render:function(e){var t=e.open;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(C.Button,{className:"mojblocks-quote__image__button "+(m?"mojblocks-quote__image__button-change":"mojblocks-quote__image__button-add"),onClick:t},A.upload),m&&Object(c.createElement)(C.Button,{className:"mojblocks-quote__image__button mojblocks-quote__image__button-remove",onClick:b},Object(c.createElement)(C.Dashicon,{icon:"dismiss"})))}})),Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"mojblocks-quote__content",style:{textAlign:i}},Object(c.createElement)("div",{className:"mojblocks-quote__content__icon"},Object(c.createElement)(C.Dashicon,{icon:"format-quote"})),Object(c.createElement)(l.RichText,{tagName:"q",multiline:"span",placeholder:Object(a.__)("Add quotation text...","mojblocks"),keepPlaceholderOnFocus:!0,value:r,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"],className:"mojblocks-quote__content__quote",onChange:function(e){return t({quoteContent:e})}}),Object(c.createElement)(l.RichText,{tagName:"p",placeholder:Object(a.__)("Add name","mojblocks"),keepPlaceholderOnFocus:!0,value:s,className:"mojblocks-quote__content__name",onChange:function(e){return t({quoteName:e})}}))))]},save:function(){return null}}),B()((function(){Object(n.unregisterBlockType)("core/quote")})),Object(n.registerBlockType)("mojblocks/intro",{title:Object(a.__)("Intro Text","mojblocks"),icon:"editor-paragraph",category:"mojblocks",attributes:{introText:{type:"string"},introClassName:{type:"string"}},edit:function(e){var t=e.attributes.introText,o=e.className,n=e.setAttributes;n({introClassName:o});return Object(c.createElement)("div",{className:"".concat(o," mojblocks-intro")},Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(c.createElement)("div",{className:"mojblocks-intro--type"},Object(c.createElement)("div",{className:"mojblocks-intro__content intro"},Object(c.createElement)(l.RichText,{multiline:"p",placeholder:Object(a.__)("Some compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){n({introText:e})},value:t})))))))},save:function(){return null}}),Object(n.registerBlockType)("mojblocks/reveal",{title:Object(a.__)("Reveal","mojblocks"),description:Object(a.__)("Arrow toggle to reveal text","mojblocks"),icon:"controls-play",category:"mojblocks",attributes:{revealTitle:{type:"string"},revealContent:{type:"string"},revealClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,n=o.revealTitle,r=o.revealContent,s=e.className;t({revealClassName:s});return[Object(c.createElement)("div",{className:"mojblocks-reveal"},Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(c.createElement)("details",{className:"govuk-details","data-module":"govuk-details",open:!0},Object(c.createElement)("summary",{className:"govuk-details__summary"},Object(c.createElement)("span",{className:"mojblocks-reveal__title govuk-details__summary-text"},Object(c.createElement)(l.RichText,{value:n,placeholder:Object(a.__)("Add reveal title","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({revealTitle:e})}}))),Object(c.createElement)("div",{className:"mojblocks-reveal__content govuk-details__text"},Object(c.createElement)(l.RichText,{multiline:"p",placeholder:Object(a.__)("Add reveal content","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({revealContent:e})},value:r})))))))]},save:function(){return null}});var L=["image"],R=[["core/heading",{placeholder:"Card heading"}]];Object(n.registerBlockType)("mojblocks/card",{apiVersion:1,title:Object(a.__)("Card","mojblocks"),description:Object(a.__)("Add a card pattern to a default page","mojblocks"),category:"mojblocks",icon:"table-row-after",keywords:[Object(a.__)("card","navigation","mojblocks")],supports:{align:["wide","full"],html:!1},attributes:{cardTitle:{type:"string"},cardExcerpt:{type:"string"},cardImageURL:{type:"string"},cardImageId:{type:"number"},cardClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.className,n=e.attributes,r=n.cardExcerpt,s=n.cardImageURL,i=n.cardImageId,m=function(){t({cardImageURL:null,cardImageId:null})};return Object(c.createElement)("div",{className:"".concat(o," mojblocks-card mojblocks-card-image"),"data-src":s},Object(c.createElement)("div",{className:"".concat(o," mojblocks-card__image")+" "+(i?"mojblocks-card__image-selected":""),style:{backgroundImage:"url(".concat(s,")")}},Object(c.createElement)(l.MediaUpload,{buttonProps:{className:"change-image"},onSelect:function(e){return t({cardImageId:e.id,cardImageURL:e.url})},allowedTypes:L,type:"image",value:i,render:function(e){var t=e.open;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(C.Button,{className:"mojblocks-card__image__button "+(i?"mojblocks-card__image__button-change":"mojblocks-card__image__button-add"),onClick:t},A.upload),i&&Object(c.createElement)(C.Button,{className:"mojblocks-card__image__button mojblocks-card__image__button-remove",onClick:m},Object(c.createElement)(C.Dashicon,{icon:"dismiss"})))}})),Object(c.createElement)(l.InnerBlocks,{template:R,templateLock:"all"}),Object(c.createElement)(l.RichText,{tagName:"p",placeholder:Object(a.__)("Add excerpt text...","mojblocks"),keepPlaceholderOnFocus:!0,value:r,className:"mojblocks-card-excerpt",onChange:function(e){return t({cardExcerpt:e})}}))},save:function(){return Object(c.createElement)(l.InnerBlocks.Content,null)}});var P=wp.i18n.__,F=wp.blocks.registerBlockType,S=wp.blockEditor.RichText;F("mojblocks/banner",{title:P("Banner","mojblocks"),description:P("Banner with title and button","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{bannerTitle:{type:"string"},buttonLink:{type:"string"},buttonLabel:{type:"string"},bannerClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,a=o.bannerTitle,n=o.buttonLink,r=o.buttonLabel,s=e.className;t({bannerClassName:s});return[Object(c.createElement)("div",{className:"".concat(s,"  mojblocks-banner")},Object(c.createElement)("div",{className:"govuk-width-container"},Object(c.createElement)("div",{className:"govuk-grid-row"},Object(c.createElement)("div",{className:"govuk-grid-column-two-thirds"},Object(c.createElement)(S,{tagName:"h1",className:"mojblocks-banner__title",value:a,keepPlaceholderOnFocus:!0,onChange:function(e){t({bannerTitle:e})},placeholder:"Enter your banner title"})),Object(c.createElement)("div",{className:"govuk-grid-column-one-third"},Object(c.createElement)(l.URLInputButton,{className:"mojblocks-dropdown__input",label:P("Button Link","mojblocks"),onChange:function(e){t({buttonLink:e})},url:n}),Object(c.createElement)(S,{className:"mojblocks-banner__button govuk-button",value:r,onChange:function(e){t({buttonLabel:e})},placeholder:"Button label"})))))]},save:function(){return null}}),(0,wp.hooks.addFilter)("editor.BlockEdit","core/file",(0,wp.compose.createHigherOrderComponent)((function(e){return function(t){if("core/file"!==t.name)return Object(c.createElement)(e,t);var o="("+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.slice(2+(e.lastIndexOf(".")-1>>>0))}(t.attributes.href).toUpperCase()+")";return t.attributes.downloadButtonText=o,Object(c.createElement)(e,t)}}),"addFileExtention"))}]);