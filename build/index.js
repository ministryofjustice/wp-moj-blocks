!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=16)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blocks},function(e,t,o){var a=o(10),n=o(11),c=o(12),l=o(14);e.exports=function(e,t){return a(e)||n(e,t)||c(e,t)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.domReady},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.coreData},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,n,c=[],l=!0,r=!1;try{for(o=o.call(e);!(l=(a=o.next()).done)&&(c.push(a.value),!t||c.length!==t);l=!0);}catch(e){r=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(r)throw n}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,o){var a=o(13);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.date},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(2),c=o(4),l=o(1);Object(c.registerBlockType)("mojblocks/highlights-list",{title:Object(n.__)("Highlights List","mojblocks"),icon:"list-view",category:"mojblocks",example:{attributes:{listTitle:"This is a highlights list title",listItems:"This is a list item"}},attributes:{listTitle:{type:"string"},listItems:{type:"string"},listClassName:{type:"string"}},edit:function(e){var t=e.attributes,o=t.listTitle,c=t.listItems,r=e.className,s=e.setAttributes;return s({listClassName:r}),Object(a.createElement)("div",{className:"".concat(r,"  mojblocks-highlights-list")},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{className:"mojblocks-highlights-list__heading-container"},Object(a.createElement)("h2",{className:"mojblocks-highlights-list__heading"},Object(a.createElement)("span",{role:"text"},Object(a.createElement)("span",{className:"mojblocks-highlights-list__heading-text"},Object(a.createElement)(l.RichText,{placeholder:Object(n.__)("Add highlights title","mojblocks"),keepPlaceholderOnFocus:!0,value:o,onChange:function(e){s({listTitle:e})}}))))),Object(a.createElement)("div",{className:"mojblocks-highlights-list__content"},Object(a.createElement)(l.RichText,{tagName:"ul",multiline:"li",placeholder:Object(n.__)("Add list item","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){s({listItems:e})},value:c})))))},save:function(){return null}}),Object(c.registerBlockType)("mojblocks/cta",{title:Object(n.__)("Call to Action","mojblocks"),icon:"megaphone",category:"mojblocks",keywords:[Object(n.__)("cta"),Object(n.__)("Call to Action"),Object(n.__)("banner")],example:{attributes:{ctaTitle:"Add a Call to Action banner to your site",ctaText:"Call To Action text",buttonLabel:"Click me now",buttonLink:"https://intranet.justice.gov.uk/"}},attributes:{ctaTitle:{type:"string"},ctaText:{type:"string"},buttonLabel:{type:"string"},buttonLink:{type:"string"},ctaClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,c=o.ctaTitle,r=o.ctaText,s=o.buttonLink,i=o.buttonLabel,m=e.className;return t({ctaClassName:m}),Object(a.createElement)("div",{className:"".concat(m,"  mojblocks-cta")},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{class:"govuk-grid-column-three-quarters"},Object(a.createElement)("div",{className:"mojblocks-cta__heading-container"},Object(a.createElement)("h2",{className:"mojblocks-cta__heading"},Object(a.createElement)("span",{role:"text"},Object(a.createElement)("span",{className:"mojblocks-cta__heading-text"},Object(a.createElement)(l.RichText,{placeholder:Object(n.__)("Add a Call To Action title","mojblocks"),keepPlaceholderOnFocus:!0,value:c,onChange:function(e){t({ctaTitle:e})}}))))),Object(a.createElement)("div",{className:"mojblocks-cta__content"},Object(a.createElement)(l.RichText,{multiline:"p",placeholder:Object(n.__)("Add compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({ctaText:e})},value:r})),Object(a.createElement)(l.URLInputButton,{className:"mojblocks-dropdown__input",label:Object(n.__)("CTA Link","mojblocks"),onChange:function(e){t({buttonLink:e})},url:s}),Object(a.createElement)(l.RichText,{className:"mojblocks-button govuk-button",value:i,onChange:function(e){t({buttonLabel:e})},placeholder:"Button label"})))))},save:function(){return null}});var r=wp.i18n.__,s=wp.blocks.registerBlockType,i=wp.blockEditor,m=(i.RichText,i.InspectorControls),u=i.MediaUpload,b=i.InnerBlocks,d=wp.components,g=d.PanelBody,j=d.PanelRow;s("mojblocks/hero",{title:r("Hero","mojblocks"),description:r("Full width hero banner with title and text","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{backgroundImage:{type:"string"},heroClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes.backgroundImage,n=e.className;return t({heroClassName:n}),[Object(a.createElement)(m,null,Object(a.createElement)(g,{title:r("Choose hero block banner image","mojblocks"),initialOpen:!0},Object(a.createElement)("label",{className:"block-editor-block-hero"},Object(a.createElement)("p",null,"For best results, uploaded images must meet a minimum size of 1366x683 pixels (or aspect ratio of 2:1).")),Object(a.createElement)(j,null,Object(a.createElement)(u,{onSelect:function(e){var o=e.sizes,a=void 0!==o.hero?o.hero.url:o.full.url;t({backgroundImage:a})},type:"image",value:o,render:function(e){var t=e.open;return Object(a.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Upload image")}})))),Object(a.createElement)("section",{className:"".concat(n,"  mojblocks-hero")},Object(a.createElement)("div",{className:"mojblocks-hero__image",style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",backgroundPosition:"center"}}),Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{className:"mojblocks-hero__overlay"},Object(a.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(a.createElement)(b,{allowedBlocks:["core/heading","core/list","core/paragraph","mojblocks/intro"]}))))))]},save:function(){return Object(a.createElement)(b.Content,null)}});var p=wp.i18n.__,k=wp.blocks.registerBlockType,h=wp.blockEditor.RichText,v=wp.blockEditor.InnerBlocks;k("mojblocks/accordion",{title:p("Accordion","mojblocks"),description:p("Display content in an accordion component."),icon:"list-view",category:"mojblocks",keywords:[p("accordion"),p("sections"),p("lists")],attributes:{},edit:function(){return[Object(a.createElement)("div",{className:"govuk-accordion","data-module":"govuk-accordion",id:"accordion-default",key:"accordion-block"},Object(a.createElement)(v,{template:[["mojblocks/accordion-section",{}]],allowedBlocks:["mojblocks/accordion-section"]}))]},save:function(){return Object(a.createElement)(v.Content,null)}}),k("mojblocks/accordion-section",{title:p("Accordion Section","mojblocks"),category:"mojblocks",parent:["mojblocks/accordion"],attributes:{accordionSectionTitle:{type:"string"},accordionSectionTextArea:{type:"string"},accordionSectionClassName:{type:"string"}},edit:function(e){var t=e.attributes,o=t.accordionSectionTitle,n=t.accordionSectionTextArea,c=e.className,l=e.setAttributes;return l({accordionSectionClassName:c}),[Object(a.createElement)("div",{className:"".concat(c," govuk-accordion__section"),key:"accordion-block-section"},Object(a.createElement)("div",{className:"govuk-accordion__section-header"},Object(a.createElement)("h3",{className:"govuk-accordion__section-heading"},Object(a.createElement)("span",{className:"govuk-accordion__section-button",id:"accordion-default-heading-1"},Object(a.createElement)(h,{placeholder:p("Add accordion section title","mojblocks"),value:o,onChange:function(e){l({accordionSectionTitle:e})},keepPlaceholderOnFocus:!0})))),Object(a.createElement)("div",{id:"accordion-default-content-1",className:"govuk-accordion__section-content","aria-labelledby":"accordion-default-heading-1"},Object(a.createElement)("div",{className:"govuk-body"},Object(a.createElement)(h,{placeholder:p("Add accordion section content","mojblocks"),value:n,onChange:function(e){l({accordionSectionTextArea:e})},keepPlaceholderOnFocus:!0}),Object(a.createElement)(v,{allowedBlocks:["core/heading","core/list","core/paragraph"]}))))]},save:function(){return Object(a.createElement)(v.Content,null)}});var _=wp.i18n.__,O=wp.blocks,f=O.registerBlockType,w=O.registerBlockStyle,y=wp.element.Fragment,E=wp.blockEditor,N=E.RichText,x=E.MediaUpload,C=E.InspectorControls,T=E.URLInputButton,B=["image"];f("mojblocks/staggered-box",{title:_("Staggered Box","mojblocks"),description:_("Display content on top of a staggered background image"),category:"mojblocks",icon:"admin-page",keywords:[_("staggered box"),_("photo block")],attributes:{staggeredBoxTitle:{type:"string"},staggeredBoxContent:{type:"string"},staggeredBoxButtonText:{type:"string"},staggeredBoxButtonLink:{type:"string"},staggeredBoxImageURL:{type:"string"},staggeredBoxImageAltText:{type:"string"},staggeredBoxClassName:{type:"string"}},edit:function(e){var t=e.attributes,o=t.staggeredBoxContent,n=t.staggeredBoxImageURL,c=t.staggeredBoxButtonText,l=t.staggeredBoxButtonLink,r=t.staggeredBoxTitle,s=t.staggeredBoxImageAltText,i=e.className,m=e.setAttributes;return m({staggeredBoxClassName:i}),Object(a.createElement)(y,null,Object(a.createElement)(C,null,Object(a.createElement)(x,{onSelect:function(e){m({staggeredBoxImageURL:e.sizes.full.url}),m({staggeredBoxImageAltText:e.alt})},allowedTypes:B,type:"image",value:n,render:function(e){var t=e.open;return Object(a.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Open Media Library")}})),Object(a.createElement)("div",{className:"".concat(i," mojblocks-staggered-box")},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{className:"mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "},Object(a.createElement)("img",{className:"mojblocks-staggered-block__image",src:n,alt:s})),Object(a.createElement)("div",{className:"mojblocks-staggered-box__text-container govuk-grid-column-one-half"},Object(a.createElement)(N,{tagName:"h2",value:r,onChange:function(e){m({staggeredBoxTitle:e})},className:"mojblocks-staggered-box__title",placeholder:_("Add staggered box title","mojblocks"),keepPlaceholderOnFocus:!0}),Object(a.createElement)(N,{tagName:"p",value:o,onChange:function(e){m({staggeredBoxContent:e})},className:"mojblocks-staggered-box__content",placeholder:_("Add staggered box content","mojblocks"),keepPlaceholderOnFocus:!0}),Object(a.createElement)(T,{label:_("Button link","mojblocks"),onChange:function(e){m({staggeredBoxButtonLink:e})},url:l}),Object(a.createElement)(N,{value:c,onChange:function(e){m({staggeredBoxButtonText:e})},className:"mojblocks-staggered-box__button",placeholder:_("Add staggered box button","mojblocks")}))))))},save:function(){return null}}),w("mojblocks/staggered-box",{name:"image-left",label:"Image aligned on the left",isDefault:!0}),w("mojblocks/staggered-box",{name:"staggered-box-image-right",label:"Image aligned on right"});var A=o(3),I=o(7),q=o.n(I),L={};L.upload=Object(a.createElement)("svg",{width:"32px",height:"32px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},Object(a.createElement)("path",{d:"m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"}),Object(a.createElement)("path",{d:"m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"}),Object(a.createElement)("path",{d:"m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"}),Object(a.createElement)("path",{d:"m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"}));var S=L,R=["image"];Object(c.registerBlockType)("mojblocks/quote",{title:Object(n.__)("Quote","mojblocks"),description:Object(n.__)("A user quote block with an optional image background, quote text and name","mojblocks"),category:"mojblocks",icon:"format-quote",keywords:[Object(n.__)("quote","mojblocks"),Object(n.__)("testimonial","mojblocks"),Object(n.__)("moj","mojblocks")],attributes:{quoteImgURL:{type:"string"},quoteContent:{type:"string"},quoteName:{type:"string"},quoteAlignment:{type:"string"},quoteImgId:{type:"number"},quoteClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,c=o.quoteImgURL,r=o.quoteContent,s=o.quoteName,i=o.quoteAlignment,m=o.quoteImgId,u=e.className;t({quoteClassName:u});var b=function(){t({quoteImgURL:null,quoteImgId:null})};return[Object(a.createElement)(l.BlockControls,{key:"controls"},Object(a.createElement)(l.AlignmentToolbar,{value:i,onChange:function(e){return t({quoteAlignment:e})}})),Object(a.createElement)("div",{className:"mojblocks-quote","data-src":c},Object(a.createElement)("div",{className:"".concat(u," mojblocks-quote__image ")+(m?"mojblocks-quote__image-selected":""),style:{backgroundImage:"url(".concat(c,")")}},Object(a.createElement)(l.MediaUpload,{buttonProps:{className:"change-image"},onSelect:function(e){return t({quoteImgId:e.id,quoteImgURL:e.url})},allowed:R,type:"image",value:m,render:function(e){var t=e.open;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(A.Button,{className:"mojblocks-quote__image__button "+(m?"mojblocks-quote__image__button-change":"mojblocks-quote__image__button-add"),onClick:t},S.upload),m&&Object(a.createElement)(A.Button,{className:"mojblocks-quote__image__button mojblocks-quote__image__button-remove",onClick:b},Object(a.createElement)(A.Dashicon,{icon:"dismiss"})))}})),Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"mojblocks-quote__content",style:{textAlign:i}},Object(a.createElement)("div",{className:"mojblocks-quote__content__icon"},Object(a.createElement)(A.Dashicon,{icon:"format-quote"})),Object(a.createElement)(l.RichText,{tagName:"q",multiline:"span",placeholder:Object(n.__)("Add quotation text...","mojblocks"),keepPlaceholderOnFocus:!0,value:r,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"],className:"mojblocks-quote__content__quote",onChange:function(e){return t({quoteContent:e})}}),Object(a.createElement)(l.RichText,{tagName:"p",placeholder:Object(n.__)("Add name","mojblocks"),keepPlaceholderOnFocus:!0,value:s,className:"mojblocks-quote__content__name",onChange:function(e){return t({quoteName:e})}}))))]},save:function(){return null}}),q()((function(){Object(c.unregisterBlockType)("core/quote")})),Object(c.registerBlockType)("mojblocks/intro",{title:Object(n.__)("Intro Text","mojblocks"),icon:"editor-paragraph",category:"mojblocks",attributes:{introText:{type:"string"},introClassName:{type:"string"}},edit:function(e){var t=e.attributes.introText,o=e.className,c=e.setAttributes;return c({introClassName:o}),Object(a.createElement)("div",{className:"".concat(o," mojblocks-intro")},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(a.createElement)("div",{className:"mojblocks-intro--type"},Object(a.createElement)("div",{className:"mojblocks-intro__content intro"},Object(a.createElement)(l.RichText,{multiline:"p",placeholder:Object(n.__)("Some compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){c({introText:e})},value:t})))))))},save:function(){return null}}),Object(c.registerBlockType)("mojblocks/reveal",{title:Object(n.__)("Reveal","mojblocks"),description:Object(n.__)("Arrow toggle to reveal text","mojblocks"),icon:"controls-play",category:"mojblocks",attributes:{revealTitle:{type:"string"},revealContent:{type:"string"},revealClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,c=o.revealTitle,r=o.revealContent,s=e.className;return t({revealClassName:s}),[Object(a.createElement)("div",{className:"mojblocks-reveal"},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{className:"govuk-grid-column-three-quarters"},Object(a.createElement)("details",{className:"govuk-details","data-module":"govuk-details",open:!0},Object(a.createElement)("summary",{className:"govuk-details__summary"},Object(a.createElement)("span",{className:"mojblocks-reveal__title govuk-details__summary-text"},Object(a.createElement)(l.RichText,{value:c,placeholder:Object(n.__)("Add reveal title","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({revealTitle:e})}}))),Object(a.createElement)("div",{className:"mojblocks-reveal__content govuk-details__text"},Object(a.createElement)(l.RichText,{multiline:"p",placeholder:Object(n.__)("Add reveal content","mojblocks"),keepPlaceholderOnFocus:!0,onChange:function(e){t({revealContent:e})},value:r})))))))]},save:function(){return null}});var F=["image"],P=[["core/heading",{placeholder:"Card heading"}]];Object(c.registerBlockType)("mojblocks/card",{apiVersion:1,title:Object(n.__)("Card","mojblocks"),description:Object(n.__)("Add a card pattern to a default page","mojblocks"),category:"mojblocks",icon:"table-row-after",keywords:[Object(n.__)("card","navigation","mojblocks")],supports:{align:["wide","full"],html:!1},attributes:{cardTitle:{type:"string"},cardExcerpt:{type:"string"},cardImageURL:{type:"string"},cardImageId:{type:"number"},cardClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.className,c=e.attributes,r=c.cardExcerpt,s=c.cardImageURL,i=c.cardImageId,m=function(){t({cardImageURL:null,cardImageId:null})};return Object(a.createElement)("div",{className:"".concat(o," mojblocks-card mojblocks-card-image"),"data-src":s},Object(a.createElement)("div",{className:"".concat(o," mojblocks-card__image")+" "+(i?"mojblocks-card__image-selected":""),style:{backgroundImage:"url(".concat(s,")")}},Object(a.createElement)(l.MediaUpload,{buttonProps:{className:"change-image"},onSelect:function(e){return t({cardImageId:e.id,cardImageURL:e.url})},allowedTypes:F,type:"image",value:i,render:function(e){var t=e.open;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(A.Button,{className:"mojblocks-card__image__button "+(i?"mojblocks-card__image__button-change":"mojblocks-card__image__button-add"),onClick:t},S.upload),i&&Object(a.createElement)(A.Button,{className:"mojblocks-card__image__button mojblocks-card__image__button-remove",onClick:m},Object(a.createElement)(A.Dashicon,{icon:"dismiss"})))}})),Object(a.createElement)(l.InnerBlocks,{template:P,templateLock:"all"}),Object(a.createElement)(l.RichText,{tagName:"p",placeholder:Object(n.__)("Add excerpt text...","mojblocks"),keepPlaceholderOnFocus:!0,value:r,className:"mojblocks-card-excerpt",onChange:function(e){return t({cardExcerpt:e})}}))},save:function(){return Object(a.createElement)(l.InnerBlocks.Content,null)}});var D=wp.i18n.__,U=wp.blocks.registerBlockType,M=wp.blockEditor.RichText;U("mojblocks/banner",{title:D("Banner","mojblocks"),description:D("Banner with title and button","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{bannerTitle:{type:"string"},buttonLink:{type:"string"},buttonLabel:{type:"string"},bannerClassName:{type:"string"}},edit:function(e){var t=e.setAttributes,o=e.attributes,n=o.bannerTitle,c=o.buttonLink,r=o.buttonLabel,s=e.className;return t({bannerClassName:s}),[Object(a.createElement)("div",{className:"".concat(s,"  mojblocks-banner")},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)("div",{className:"govuk-grid-row"},Object(a.createElement)("div",{className:"govuk-grid-column-two-thirds"},Object(a.createElement)(M,{tagName:"h1",className:"mojblocks-banner__title",value:n,keepPlaceholderOnFocus:!0,onChange:function(e){t({bannerTitle:e})},placeholder:"Enter your banner title"})),Object(a.createElement)("div",{className:"govuk-grid-column-one-third"},Object(a.createElement)(l.URLInputButton,{className:"mojblocks-dropdown__input",label:D("Button Link","mojblocks"),onChange:function(e){t({buttonLink:e})},url:c}),Object(a.createElement)(M,{className:"mojblocks-banner__button govuk-button",value:r,onChange:function(e){t({buttonLabel:e})},placeholder:"Button label"})))))]},save:function(){return null}});var z=o(6),H=o.n(z),J=o(5),G=o.n(J),Q=wp.i18n.__,V=wp.blocks,Y=V.registerBlockType,$=(V.registerBlockStyle,wp.element.Fragment),K=wp.blockEditor,W=(K.RichText,K.MediaUpload,K.InspectorControls),X=(K.URLInputButton,wp.components.PanelBody),Z=[["core/heading",{placeholder:"Add latest news section title"}]];new Date,Y("mojblocks/latest-news",{title:Q("Latest News","mojblocks"),description:Q("Display latest news items"),category:"mojblocks",icon:"slides",keywords:[Q("latest news"),Q("recent news"),Q("headlines")],attributes:{latestNewsNumber:{type:"string"},latestNewsHasDate:{type:"boolean"},latestNewsExpiry:{type:"numeric"},latestNewsEmptyText:{type:"string"}},edit:function(e){e.attributes.latestNewsTitle;var t=e.className,o=e.setAttributes,n=Object(a.useState)("3"),c=G()(n,2),r=(c[0],c[1],Object(a.useState)(0)),s=G()(r,2),i=s[0],m=s[1],u=Object(a.useState)("No news to display."),b=G()(u,2),d=b[0],g=b[1],j=Object(a.useState)(!0),p=G()(j,2),k=p[0],h=p[1];return Object(a.createElement)($,null,Object(a.createElement)(W,null,Object(a.createElement)(X,{title:Q("News settings"),initialOpen:!0},Object(a.createElement)(A.ToggleControl,H()({label:"Show/hide article dates",help:k?"Dates will be displayed":"Dates will be hidden",checked:k,onChange:o({latestNewsHasDate:k})},"onChange",(function(){h((function(e){return!e}))}))),Object(a.createElement)(A.TextControl,H()({label:"Text for no news",help:d?"This will be shown if there are no articles to display.":"If there are no news articles to display, the block will be blank.",value:d,onChange:o({latestNewsEmptyText:d})},"onChange",g)),Object(a.createElement)(A.__experimentalNumberControl,H()({label:"Auto-hide after how many weeks",value:i,min:"0",onChange:o({latestNewsExpiry:i})},"onChange",m)),Object(a.createElement)(A.__experimentalText,null,0==i?"Articles will not expire.":"Articles will expire after "+i+" weeks."))),Object(a.createElement)("div",{className:"mojblocks-latest-news mojblocks-latest-news--expiry-weeks-".concat(i," ").concat(t)},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)(l.InnerBlocks,{template:Z,templateLock:"all"}),Object(a.createElement)("div",{className:"govuk-grid-row ".concat(k?"":"mojblocks-latest-news-hide-date"," ")},Object(a.createElement)("div",{className:"mojblocks-latest-news__item"},Object(a.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},Object(a.createElement)("a",{href:"#"},"Title automatically updated on preview page")),Object(a.createElement)("div",{className:"mojblocks-latest-news__date"},"Date")),Object(a.createElement)("div",{className:"mojblocks-latest-news__item"},Object(a.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},Object(a.createElement)("a",{href:"#"},"Title automatically updated on preview page")),Object(a.createElement)("div",{className:"mojblocks-latest-news__date"},"Date")),Object(a.createElement)("div",{className:"mojblocks-latest-news__item"},Object(a.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},Object(a.createElement)("a",{href:"#"},"Title automatically updated on preview page")),Object(a.createElement)("div",{className:"mojblocks-latest-news__date"},"Date"))))))},save:function(){return Object(a.createElement)(l.InnerBlocks.Content,null)}}),o(15);var ee=o(8),te=o(9),oe=wp.element.Fragment,ae=new Date,ne=[["core/heading",{placeholder:"Add featured news section title"}]],ce=wp.blocks,le=ce.registerBlockType,re=(ce.registerBlockStyle,wp.i18n.__);le("mojblocks/featured-news",{title:re("Featured News","mojblocks"),description:re("Display featured news item"),category:"mojblocks",icon:"id-alt",keywords:[re("featured news"),re("headline news"),re("headlines")],attributes:{featuredNewsHasDate:{type:"boolean"},featuredNewsID:{type:"string"}},edit:function(e){var t=e.attributes,o=e.setAttributes,c=t.featuredNewsLink,r=t.className,s=Object(ee.useSelect)((function(e){var t=e(te.store),o=t.getEntityRecords,a=(t.getMedia,t.getUsers,(0,e(l.store).getSettings)());return a.imageSizes,a.imageDimensions,{latestNews:o("postType","news",{per_page:-1})}})).latestNews,i=[{label:"None",value:"0"}],m=[{title:"No news article selected",summary:"",date:"date",image:""}];if(Array.isArray(s))for(var u=0;u<s.length;u++)s[u].summary_meta.news_story_summary&&(m[s[u].id]={title:s[u].title.rendered,summary:s[u].summary_meta.news_story_summary,date:s[u].date,image:s[u].featured_image_url},i.push({label:s[u].title.rendered,value:s[u].id}));var b=Object(a.useState)(!0),d=G()(b,2),g=d[0],j=d[1],p=Object(a.useState)("0"),k=G()(p,2),h=k[0],v=k[1],_=Object(a.createElement)(l.InspectorControls,null,Object(a.createElement)(A.PanelBody,{title:Object(n.__)("News settings"),initialOpen:!0},Object(a.createElement)(A.SelectControl,H()({label:"Select news",help:"Only news articles with a summary are available for selection",value:h,options:i,onChange:o({featuredNewsID:h})},"onChange",(function(e){return v(e)}))),Object(a.createElement)(A.ToggleControl,H()({label:"Show/hide article dates",help:g?"The date will be displayed":"The date will be hidden",checked:g,onChange:o({featuredNewsHasDate:g})},"onChange",(function(){j((function(e){return!e}))})))));return Array.isArray(s)&&Array.isArray(m)?Object(a.createElement)(oe,null,_,Object(a.createElement)("div",{className:"mojblocks-featured-news mojblocks-featured-news--".concat(h," ").concat(r)},Object(a.createElement)("div",{className:"govuk-width-container"},Object(a.createElement)(l.InnerBlocks,{template:ne,templateLock:"all"}),Object(a.createElement)("div",{className:"govuk-grid-row ".concat(g?"":"mojblocks-featured-news-hide-date"," ").concat("0"==h||m[h].image?"":"mojblocks-featured-news--no-image"," ")},Object(a.createElement)("div",{class:"mojblocks-featured-news__item"},Object(a.createElement)("div",{className:"mojblocks-featured-news__image",styles:"background:url('".concat(m[h].image,"')")},Object(a.createElement)("img",{src:m[h].image,alt:"Feature image for news article"})),Object(a.createElement)("div",{className:"mojblocks-featured-news__text"},Object(a.createElement)("div",{className:"govuk-body govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline"},m[h].title),Object(a.createElement)("div",{className:"govuk-body mojblocks-featured-news__summary"},m[h].summary),Object(a.createElement)("div",{className:"govuk-body-s mojblocks-featured-news__date"},function(e,t){if(!e)return"Date";if((a=new Array)[1]="January",a[2]="February",a[3]="March",a[4]="April",a[5]="May",a[6]="June",a[7]="July",a[8]="August",a[9]="September",a[10]="October",a[11]="November",a[12]="December",3!=(e=e.split("-")).length)return t.toLocaleString("en-GB",{day:"2-digit",month:"long"});var o=e[2].substring(0,2),a=" "+a[parseInt(e[1])],n=" "+e[0];return t.getFullYear()==e[0]?o+a:o+a+n}(m[h].date,ae)),Object(a.createElement)(l.RichText,{tagName:"div",value:c,onChange:function(e){o({featuredNewsLink:e})},className:"govuk-button mojblocks-button mojblocks-featured-news__link",placeholder:Object(n.__)("Read full article","mojblocks"),keepPlaceholderOnFocus:!0}))))))):Object(a.createElement)(oe,null,Object(a.createElement)("div",{class:"mojblocks-spinner"}),Object(a.createElement)("div",{class:"mojblocks-spinner-text govuk-body"},"Loading"))},save:function(){return Object(a.createElement)(l.InnerBlocks.Content,null)}}),(0,wp.hooks.addFilter)("editor.BlockEdit","core/file",(0,wp.compose.createHigherOrderComponent)((function(e){return function(t){if("core/file"!==t.name)return Object(a.createElement)(e,t);var o="("+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.slice(2+(e.lastIndexOf(".")-1>>>0))}(t.attributes.href).toUpperCase()+")";return t.attributes.downloadButtonText=o,Object(a.createElement)(e,t)}}),"addFileExtention"))}]);