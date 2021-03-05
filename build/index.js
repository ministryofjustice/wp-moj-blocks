!function(e){var t={};function c(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=t,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(o,a,function(t){return e[t]}.bind(null,a));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.domReady}()},function(e,t,c){"use strict";c.r(t);var o=c(0),a=c(1),l=c(3),n=c(2);Object(l.registerBlockType)("mojblocks/highlights-list",{title:Object(a.__)("Highlights List","mojblocks"),icon:"list-view",category:"mojblocks",example:{attributes:{listTitle:"This is a highlights list title",listText:"This is a list item"}},attributes:{listTitle:{type:"string",source:"html",selector:".mojblocks-highlights-list__heading-text"},listText:{type:"array",source:"children",multiline:"li",selector:".mojblocks-highlights-list__content > ul"}},edit:function(e){var t=e.attributes,c=t.listTitle,l=t.listText,r=e.className,s=e.setAttributes;return Object(o.createElement)("div",{className:"".concat(r)},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"mojblocks-highlights-list__heading-container"},Object(o.createElement)("h2",{className:"mojblocks-highlights-list__heading"},Object(o.createElement)("span",{role:"text"},Object(o.createElement)("span",{className:"mojblocks-highlights-list__heading-text"},Object(o.createElement)(n.RichText,{placeholder:Object(a.__)("Highlights title","mojblocks"),keepPlaceholderOnFocus:!0,value:c,onChange:function(e){s({listTitle:e})}}))))),Object(o.createElement)("div",{className:"mojblocks-highlights-list__content"},Object(o.createElement)(n.RichText,{tagName:"ul",multiline:"li",placeholder:Object(a.__)("Highlights item","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){s({listText:e})},value:l})))))},save:function(e){var t=e.attributes,c=t.listTitle,a=t.listText;return Object(o.createElement)("div",{className:"mojblocks-highlights-list"},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"mojblocks-highlights-list__heading-container"},Object(o.createElement)("h2",{className:"mojblocks-highlights-list__heading"},Object(o.createElement)("span",{role:"text"},Object(o.createElement)("span",{className:"mojblocks-highlights-list__heading-text"},Object(o.createElement)(n.RichText.Content,{value:c}))))),Object(o.createElement)("div",{className:"mojblocks-highlights-list__content"},Object(o.createElement)(n.RichText.Content,{tagName:"ul",multiline:"li",value:a})))))}}),Object(l.registerBlockStyle)("mojblocks/highlights-list",{name:"moj-blue",label:"MoJ Blue",isDefault:!0}),Object(l.registerBlockStyle)("mojblocks/highlights-list",{name:"judicial-teal",label:"Judicial Teal"}),Object(l.registerBlockType)("mojblocks/cta",{title:Object(a.__)("Call to Action","mojblocks"),icon:"megaphone",category:"mojblocks",keywords:[Object(a.__)("cta"),Object(a.__)("Call to Action"),Object(a.__)("banner")],example:{attributes:{ctaTitle:"Interact with this amazing CTA!",ctaText:"This is the CTA text",buttonLabel:"Click me now!",buttonLink:"https://intranet.justice.gov.uk/"}},attributes:{ctaTitle:{type:"string",source:"html",selector:".mojblocks-cta__heading-text"},ctaText:{type:"string",source:"html",selector:".mojblocks-cta__content"},buttonLabel:{type:"string",source:"html",selector:".mojblocks-button"},buttonLink:{type:"string",source:"attribute",selector:"a.mojblocks-button",attribute:"href"}},edit:function(e){var t=e.attributes,c=t.ctaTitle,l=t.ctaText,r=t.buttonLabel,s=t.buttonLink,i=e.className,m=e.setAttributes;return Object(o.createElement)("div",{className:"".concat(i)},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{class:"govuk-grid-column-three-quarters"},Object(o.createElement)("div",{className:"mojblocks-cta__heading-container"},Object(o.createElement)("h2",{className:"mojblocks-cta__heading"},Object(o.createElement)("span",{role:"text"},Object(o.createElement)("span",{className:"mojblocks-cta__heading-text"},Object(o.createElement)(n.RichText,{placeholder:Object(a.__)("A great call-to-action title","mojblocks"),keepPlaceholderOnFocus:!0,value:c,onChange:function(e){m({ctaTitle:e})}}))))),Object(o.createElement)("div",{className:"mojblocks-cta__content"},Object(o.createElement)(n.RichText,{multiline:"p",placeholder:Object(a.__)("Some compelling text to send the message home!","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){m({ctaText:e})},value:l})),Object(o.createElement)(n.URLInputButton,{className:"mojblocks-dropdown__input",label:Object(a.__)("CTA Link","mojblocks"),onChange:function(e){m({buttonLink:e})},url:s}),Object(o.createElement)(n.RichText,{className:"mojblocks-button",value:r,onChange:function(e){m({buttonLabel:e})},placeholder:"Button label"})))))},save:function(e){var t=e.attributes,c=t.ctaTitle,a=t.ctaText,l=t.buttonLabel,r=t.buttonLink;return Object(o.createElement)("div",{className:"mojblocks-cta"},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{class:"govuk-grid-column-three-quarters"},Object(o.createElement)("div",{className:"mojblocks-cta__heading-container"},Object(o.createElement)("h2",{className:"mojblocks-cta__heading"},Object(o.createElement)("span",{role:"text"},Object(o.createElement)("span",{className:"mojblocks-cta__heading-text"},Object(o.createElement)(n.RichText.Content,{value:c}))))),Object(o.createElement)("div",{className:"mojblocks-cta__content"},Object(o.createElement)(n.RichText.Content,{value:a,multiline:"p"})),Object(o.createElement)("a",{href:r,className:"mojblocks-button"},Object(o.createElement)(n.RichText.Content,{value:l}))))))}}),Object(l.registerBlockStyle)("mojblocks/cta",{name:"moj-blue",label:"MoJ Blue",isDefault:!0}),Object(l.registerBlockStyle)("mojblocks/cta",{name:"judicial-teal",label:"Judicial Teal"});var r=wp.i18n.__,s=wp.blocks.registerBlockType,i=wp.blockEditor,m=i.RichText,b=i.InspectorControls,u=i.MediaUpload;i.InnerBlocks;s("mojblocks/hero",{title:r("Hero","mojblocks"),description:r("Full width hero banner with title and text","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{backgroundImage:{type:"string"},heroTitle:{type:"string"},heroText:{type:"string"},heroClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,c=e.attributes,a=c.backgroundImage,l=c.heroTitle,n=c.heroText,s=e.className;t({heroClassName:s});return[Object(o.createElement)(b,null,Object(o.createElement)("div",{className:"block-editor-block-card"},Object(o.createElement)(u,{onSelect:function(e){t({backgroundImage:e.sizes.full.url})},type:"image",value:a,render:function(e){var t=e.open;return Object(o.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Upload background image")}}))),Object(o.createElement)("section",{className:"".concat(s,"  mojblocks-hero")},Object(o.createElement)("div",{className:"mojblocks-hero__image",style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center"}}),Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"mojblocks-hero__overlay"},Object(o.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(o.createElement)(m,{tagName:"h2",className:"mojblocks-hero__title",value:l,keepPlaceholderOnFocus:!0,onChange:function(e){t({heroTitle:e})},placeholder:"Enter your hero title"}),Object(o.createElement)("div",{className:"mojblocks-hero__content intro"},Object(o.createElement)(m,{placeholder:r("Enter your hero text","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({heroText:e})},value:n})))))))]},save:function(){return null}});var d=wp.i18n.__,g=wp.blocks.registerBlockType,j=wp.blockEditor.RichText,k=wp.blockEditor.InnerBlocks;g("mojblocks/accordion",{title:d("Accordion","mojblocks"),description:d("Display content in an accordion component."),icon:"list-view",category:"mojblocks",keywords:[d("accordion"),d("sections"),d("lists")],edit:function(e){return Object(o.createElement)("div",{className:"govuk-accordion","data-module":"govuk-accordion",id:"accordion-default"},Object(o.createElement)(k,{template:[["mojblocks/accordion-section",{}]],allowedBlocks:["mojblocks/accordion-section"]}))},save:function(e){return Object(o.createElement)("div",{className:"govuk-accordion","data-module":"govuk-accordion",id:"accordion-default"},Object(o.createElement)(k.Content,null))}}),g("mojblocks/accordion-section",{title:d("Accordion Section","mojblocks"),category:"mojblocks",parent:["mojblocks/accordion"],attributes:{accordionSectionTitle:{type:"string",source:"html",selector:".govuk-accordion__section-button"},accordionSectionTextArea:{type:"string",source:"html",selector:".govuk-body"}},edit:function(e){var t=e.attributes,c=t.accordionSectionTitle,a=t.accordionSectionTextArea,l=e.setAttributes;return Object(o.createElement)("div",{className:"govuk-accordion__section"},Object(o.createElement)("div",{className:"govuk-accordion__section-header"},Object(o.createElement)("h3",{className:"govuk-accordion__section-heading"},Object(o.createElement)("span",{className:"govuk-accordion__section-button",id:"accordion-default-heading-1"},Object(o.createElement)(j,{placeholder:d("Add section title","mojblocks"),value:c,onChange:function(e){l({accordionSectionTitle:e})},keepPlaceholderOnFocus:!0})))),Object(o.createElement)("div",{id:"accordion-default-content-1",className:"govuk-accordion__section-content","aria-labelledby":"accordion-default-heading-1"},Object(o.createElement)("div",{className:"govuk-body"},Object(o.createElement)(j,{placeholder:d("Add section content","mojblocks"),value:a,onChange:function(e){l({accordionSectionTextArea:e})},keepPlaceholderOnFocus:!0}),Object(o.createElement)(k,{allowedBlocks:["core/heading","core/list","core/paragraph"]}))))},save:function(e){var t=e.attributes,c=t.accordionSectionTitle,a=t.accordionSectionTextArea;return Object(o.createElement)("div",{className:"govuk-accordion__section"},Object(o.createElement)("div",{className:"govuk-accordion__section-header"},Object(o.createElement)("h3",{className:"govuk-accordion__section-heading"},Object(o.createElement)("span",{className:"govuk-accordion__section-button",id:"accordion-default-heading-1"},Object(o.createElement)(j.Content,{value:c})))),Object(o.createElement)("div",{id:"accordion-default-content-1",className:"govuk-accordion__section-content","aria-labelledby":"accordion-default-heading-1"},Object(o.createElement)("div",{className:"govuk-body"},Object(o.createElement)(j.Content,{value:a}),Object(o.createElement)(k.Content,null))))}});var h=wp.i18n.__,_=wp.blocks,v=_.registerBlockType,p=_.registerBlockStyle,O=wp.element.Fragment,E=wp.blockEditor,N=E.RichText,x=E.MediaUpload,f=E.InspectorControls,y=E.URLInputButton,T=["image"];v("mojblocks/staggered-box",{title:h("Staggered Box","mojblocks"),description:h("Display content on top of a staggered background image"),category:"mojblocks",icon:"admin-page",keywords:[h("staggered box"),h("photo block")],attributes:{staggeredBoxTitle:{type:"string",source:"html",selector:".mojblocks-staggered-box__title"},staggeredBoxContent:{type:"string",source:"html",selector:".mojblocks-staggered-box__content"},staggeredBoxButtonText:{type:"string",source:"html",selector:".mojblocks-staggered-box__button"},staggeredBoxButtonLink:{type:"string",source:"attribute",attribute:"href",selector:"a.mojblocks-staggered-box__button"},staggeredBoxImageURL:{type:"string",default:""},staggeredBoxImageAltText:{type:"string",source:"attribute",attribute:"alt",default:""}},edit:function(e){var t=e.attributes,c=t.staggeredBoxContent,a=t.staggeredBoxImageURL,l=t.staggeredBoxButtonText,n=t.staggeredBoxButtonLink,r=t.staggeredBoxTitle,s=t.staggeredBoxImageAltText,i=t.className,m=e.setAttributes;return Object(o.createElement)(O,null,Object(o.createElement)(f,null,Object(o.createElement)(x,{onSelect:function(e){m({staggeredBoxImageURL:e.sizes.full.url}),m({staggeredBoxImageAltText:e.alt})},allowedTypes:T,type:"image",value:a,render:function(e){var t=e.open;return Object(o.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Open Media Library")}})),Object(o.createElement)("div",{className:"".concat(i," mojblocks-staggered-box")},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "},Object(o.createElement)("img",{className:"mojblocks-staggered-block__image",src:a,alt:s})),Object(o.createElement)("div",{className:"mojblocks-staggered-box__text-container govuk-grid-column-one-half"},Object(o.createElement)(N,{tagName:"h2",value:r,onChange:function(e){m({staggeredBoxTitle:e})},className:"mojblocks-staggered-box__title",placeholder:h("Add staggered box title","mojblocks"),keepPlaceholderOnFocus:!0}),Object(o.createElement)(N,{tagName:"p",value:c,onChange:function(e){m({staggeredBoxContent:e})},className:"mojblocks-staggered-box__content",placeholder:h("Add staggered box content","mojblocks"),keepPlaceholderOnFocus:!0}),Object(o.createElement)(y,{label:h("Button link","mojblocks"),onChange:function(e){m({staggeredBoxButtonLink:e})},url:n}),Object(o.createElement)(N,{value:l,onChange:function(e){m({staggeredBoxButtonText:e})},className:"mojblocks-staggered-box__button",placeholder:h("Add staggered box button","mojblocks")}))))))},save:function(e){var t=e.attributes,c=t.staggeredBoxTitle,a=t.staggeredBoxContent,l=t.staggeredBoxButtonText,n=t.staggeredBoxButtonLink,r=t.staggeredBoxImageURL,s=t.staggeredBoxImageAltText;return Object(o.createElement)("div",{className:"mojblocks-staggered-box"},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "},Object(o.createElement)("img",{className:"mojblocks-staggered-block__image",src:r,alt:s})),Object(o.createElement)("div",{className:"mojblocks-staggered-box__text-container govuk-grid-column-one-half"},Object(o.createElement)(N.Content,{className:"mojblocks-staggered-box__title",tagName:"h2",value:c}),Object(o.createElement)(N.Content,{className:"mojblocks-staggered-box__content",tagName:"p",value:a}),Object(o.createElement)("a",{href:n,className:"mojblocks-staggered-box__button"},Object(o.createElement)(N.Content,{value:l}))))))}}),p("mojblocks/staggered-box",{name:"image-left",label:"Image aligned on the left",isDefault:!0}),p("mojblocks/staggered-box",{name:"staggered-box-image-right",label:"Image aligned on right"});var w=c(4),C=c(5),B=c.n(C),I={};I.upload=Object(o.createElement)("svg",{width:"32px",height:"32px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("path",{d:"m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"}),Object(o.createElement)("path",{d:"m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"}),Object(o.createElement)("path",{d:"m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"}),Object(o.createElement)("path",{d:"m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"}));var q=I,A=["image"];Object(l.registerBlockType)("mojblocks/quote",{title:Object(a.__)("Quote","mojblocks"),description:Object(a.__)("A user quote block with an optional image background, quote text and name","mojblocks"),category:"mojblocks",icon:"format-quote",keywords:[Object(a.__)("quote","mojblocks"),Object(a.__)("testimonial","mojblocks"),Object(a.__)("moj","mojblocks")],attributes:{quoteImgURL:{type:"string"},quoteContent:{type:"string"},quoteName:{type:"string"},quoteAlignment:{type:"string"},quoteImgId:{type:"number"},quoteClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,c=e.attributes,l=c.quoteImgURL,r=c.quoteContent,s=c.quoteName,i=c.quoteAlignment,m=c.quoteImgId,b=e.className;t({quoteClassName:b});var u=function(){t({quoteImgURL:null,quoteImgId:null})};return[Object(o.createElement)(n.BlockControls,{key:"controls"},Object(o.createElement)(n.AlignmentToolbar,{value:i,onChange:function(e){return t({quoteAlignment:e})}})),Object(o.createElement)("div",{className:"mojblocks-quote","data-src":l},Object(o.createElement)("div",{className:"".concat(b," mojblocks-quote__image ")+(m?"mojblocks-quote__image-selected":""),style:{backgroundImage:"url(".concat(l,")")}},Object(o.createElement)(n.MediaUpload,{buttonProps:{className:"change-image"},onSelect:function(e){return t({quoteImgId:e.id,quoteImgURL:e.url})},allowed:A,type:"image",value:m,render:function(e){var t=e.open;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(w.Button,{className:"mojblocks-quote__image__button "+(m?"mojblocks-quote__image__button-change":"mojblocks-quote__image__button-add"),onClick:t},q.upload),m&&Object(o.createElement)(w.Button,{className:"mojblocks-quote__image__button mojblocks-quote__image__button-remove",onClick:u},Object(o.createElement)(w.Dashicon,{icon:"dismiss"})))}})),Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"mojblocks-quote__content",style:{textAlign:i}},Object(o.createElement)("div",{className:"mojblocks-quote__content__icon"},Object(o.createElement)(w.Dashicon,{icon:"format-quote"})),Object(o.createElement)(n.RichText,{tagName:"q",multiline:"span",placeholder:Object(a.__)("Add quotation text...","mojblocks"),keepPlaceholderOnFocus:!0,value:r,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"],className:"mojblocks-quote__content__quote",onChange:function(e){return t({quoteContent:e})}}),Object(o.createElement)(n.RichText,{tagName:"p",placeholder:Object(a.__)("Add name","mojblocks"),keepPlaceholderOnFocus:!0,value:s,className:"mojblocks-quote__content__name",onChange:function(e){return t({quoteName:e})}}))))]},save:function(){return null}}),B()((function(){Object(l.unregisterBlockType)("core/quote")})),Object(l.registerBlockType)("mojblocks/intro",{title:Object(a.__)("Intro Text","mojblocks"),icon:"editor-paragraph",category:"mojblocks",attributes:{introText:{type:"string"},introClassName:{type:"string"}},edit:function(e){var t=e.attributes.introText,c=e.className,l=e.setAttributes;l({introClassName:c});return Object(o.createElement)("div",{className:"".concat(c)},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(o.createElement)("div",{className:"mojblocks-intro--type"},Object(o.createElement)("div",{className:"mojblocks-intro__content intro"},Object(o.createElement)(n.RichText,{multiline:"p",placeholder:Object(a.__)("Some compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){l({introText:e})},value:t})))))))},save:function(){return null}}),Object(l.registerBlockType)("mojblocks/reveal",{title:Object(a.__)("Reveal","mojblocks"),description:Object(a.__)("Arrow toggle to reveal text","mojblocks"),icon:"controls-play",category:"mojblocks",attributes:{revealTitle:{type:"string"},revealContent:{type:"string"},revealClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,c=e.attributes,l=c.revealTitle,r=c.revealContent,s=e.className;t({revealClassName:s});return[Object(o.createElement)("div",{className:"mojblocks-reveal"},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(o.createElement)("details",{className:"govuk-details","data-module":"govuk-details",open:!0},Object(o.createElement)("summary",{className:"govuk-details__summary"},Object(o.createElement)("span",{className:"mojblocks-reveal__title govuk-details__summary-text",onkeypress:"return RestrictSpace()"},Object(o.createElement)(n.RichText,{value:l,placeholder:Object(a.__)("Add reveal title","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({revealTitle:e})}}))),Object(o.createElement)("div",{className:"mojblocks-reveal__content govuk-details__text"},Object(o.createElement)(n.RichText,{multiline:"p",placeholder:Object(a.__)("Add reveal content","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({revealContent:e})},value:r})))))))]},save:function(){return null}});var R=["image"];Object(l.registerBlockType)("mojblocks/card",{title:Object(a.__)("Card","mojblocks"),description:Object(a.__)("Add a card pattern to a default page","mojblocks"),category:"mojblocks",icon:"table-row-after",keywords:[Object(a.__)("card","navigation","mojblocks")],supports:{align:["wide","full"]},attributes:{cardTitle:{type:"string",source:"html",selector:".mojblocks-card-title"},cardExcerpt:{type:"string",source:"html",selector:".mojblocks-card-excerpt"},cardImageURL:{type:"string",source:"attribute",selector:".mojblocks-card-image",attribute:"data-src"},cardImageId:{type:"number"}},edit:function(e){var t=e.setAttributes,c=e.attributes,l=c.cardTitle,r=c.cardExcerpt,s=c.cardImageURL,i=c.cardImageId,m=e.className,b=function(){t({cardImageURL:null,cardImageId:null})};return Object(o.createElement)("div",{className:"".concat(m," mojblocks-card mojblocks-card-image"),"data-src":s},Object(o.createElement)("div",{className:"".concat(m," mojblocks-card__image")+" "+(i?"mojblocks-card__image-selected":""),style:{backgroundImage:"url(".concat(s,")")}},Object(o.createElement)(n.MediaUpload,{buttonProps:{className:"change-image"},onSelect:function(e){return t({cardImageId:e.id,cardImageURL:e.url})},allowed:R,type:"image",value:i,render:function(e){var t=e.open;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(w.Button,{className:"mojblocks-card__image__button "+(i?"mojblocks-card__image__button-change":"mojblocks-card__image__button-add"),onClick:t},q.upload),i&&Object(o.createElement)(w.Button,{className:"mojblocks-card__image__button mojblocks-card__image__button-remove",onClick:b},Object(o.createElement)(w.Dashicon,{icon:"dismiss"})))}})),Object(o.createElement)(n.RichText,{tagName:"h2",placeholder:Object(a.__)("Add header text...","mojblocks"),keepPlaceholderOnFocus:!0,value:l,className:"mojblocks-card-title",onChange:function(e){return t({cardTitle:e})}}),Object(o.createElement)(n.RichText,{tagName:"p",placeholder:Object(a.__)("Add excerpt text...","mojblocks"),keepPlaceholderOnFocus:!0,value:r,className:"mojblocks-card-excerpt",onChange:function(e){return t({cardExcerpt:e})}}))},save:function(e){var t=e.attributes,c=t.cardTitle,a=t.cardExcerpt,l=t.cardImageURL,r=e.className;return Object(o.createElement)("div",{className:"".concat(r," mojblocks-card mojblocks-card-image"),"data-src":l},"string"==typeof l&&Object(o.createElement)("div",{className:"mojblocks-card__image mojblocks-card__image-selected",style:{backgroundImage:"url(".concat(l,")")}}),Object(o.createElement)(n.RichText.Content,{tagName:"h2",value:c,className:"mojblocks-card-title"}),Object(o.createElement)(n.RichText.Content,{tagName:"p",value:a,className:"mojblocks-card-excerpt"}))}});var L=wp.i18n.__,S=wp.blocks.registerBlockType,P=wp.blockEditor.RichText;S("mojblocks/banner",{title:L("Banner","mojblocks"),description:L("Banner with title and button","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{bannerTitle:{type:"string"},buttonLink:{type:"string"},buttonLabel:{type:"string"},bannerClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,c=e.attributes,a=c.bannerTitle,l=c.buttonLink,r=c.buttonLabel,s=e.className;t({bannerClassName:s});return[Object(o.createElement)("div",{className:"".concat(s,"  mojblocks-banner")},Object(o.createElement)("div",{className:"govuk-width-container"},Object(o.createElement)("div",{className:"govuk-grid-row"},Object(o.createElement)("div",{className:"govuk-grid-column-two-thirds"},Object(o.createElement)(P,{tagName:"h1",className:"mojblocks-banner__title",value:a,keepPlaceholderOnFocus:!0,onChange:function(e){t({bannerTitle:e})},placeholder:"Enter your banner title"})),Object(o.createElement)("div",{className:"govuk-grid-column-one-third"},Object(o.createElement)(n.URLInputButton,{className:"mojblocks-dropdown__input",label:L("Button Link","mojblocks"),onChange:function(e){t({buttonLink:e})},url:l}),Object(o.createElement)(P,{className:"mojblocks-banner__button",value:r,onChange:function(e){t({buttonLabel:e})},placeholder:"Button label"})))))]},save:function(){return null}})}]);