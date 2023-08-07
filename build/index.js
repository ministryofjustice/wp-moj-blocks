(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.element,a=window.wp.i18n,l=window.wp.blocks,o=window.wp.blockEditor,{InspectorControls:n}=wp.blockEditor,{PanelBody:s,PanelRow:r,ToggleControl:c}=wp.components;(0,l.registerBlockType)("mojblocks/highlights-list",{title:(0,a.__)("Highlights List","mojblocks"),icon:"list-view",category:"mojblocks",example:{attributes:{listTitle:"This is a highlights list title",listItems:"This is a list item",flushBottom:!1}},attributes:{listTitle:{type:"string"},listItems:{type:"string"},flushBottom:{type:"boolean"},listClassName:{type:"string"}},edit:e=>{const{attributes:{listTitle:l,listItems:i,flushBottom:m},className:d,setAttributes:u}=e;return u({listClassName:d}),(0,t.createElement)("div",{className:`${d}  mojblocks-highlights-list`},(0,t.createElement)(n,null,(0,t.createElement)(s,{title:"Bottom Margin",initialOpen:!1},(0,t.createElement)(r,null,(0,t.createElement)(c,{label:"Flush bottom",help:m?"Gap removed from beneath this block":"Normal gap beneath this block",checked:m,onChange:e=>u({flushBottom:e})})))),(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{className:"mojblocks-highlights-list__heading-container"},(0,t.createElement)("h2",{className:"mojblocks-highlights-list__heading"},(0,t.createElement)("span",{role:"text"},(0,t.createElement)("span",{className:"mojblocks-highlights-list__heading-text"},(0,t.createElement)(o.RichText,{placeholder:(0,a.__)("Add highlights title","mojblocks"),keepPlaceholderOnFocus:!0,value:l,onChange:e=>{u({listTitle:e})}}))))),(0,t.createElement)("div",{className:"mojblocks-highlights-list__content"},(0,t.createElement)(o.RichText,{tagName:"ul",multiline:"li",placeholder:(0,a.__)("Add list item","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{u({listItems:e})},value:i})))))},save:()=>null});const{InspectorControls:i}=wp.blockEditor,{PanelBody:m,PanelRow:d,ToggleControl:u}=wp.components;(0,l.registerBlockType)("mojblocks/cta",{title:(0,a.__)("Call to Action","mojblocks"),icon:"megaphone",category:"mojblocks",keywords:[(0,a.__)("cta"),(0,a.__)("Call to Action"),(0,a.__)("banner")],example:{attributes:{ctaTitle:"Add a Call to Action banner to your site",ctaText:"Call To Action text",buttonLabel:"Click me now",buttonLink:"https://intranet.justice.gov.uk/",flushBottom:!1}},attributes:{ctaTitle:{type:"string"},ctaText:{type:"string"},buttonLabel:{type:"string"},buttonLink:{type:"string"},flushBottom:{type:"boolean"},ctaClassName:{type:"string"}},edit:e=>{const{setAttributes:l,attributes:{ctaTitle:n,ctaText:s,buttonLink:r,buttonLabel:c,flushBottom:g},className:b}=e;return l({ctaClassName:b}),(0,t.createElement)("div",{className:`${b}  mojblocks-cta`},(0,t.createElement)(i,null,(0,t.createElement)(m,{title:"Bottom Margin",initialOpen:!1},(0,t.createElement)(d,null,(0,t.createElement)(u,{label:"Flush bottom",help:g?"Gap removed from beneath this block":"Normal gap beneath this block",checked:g,onChange:e=>l({flushBottom:e})})))),(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{class:"govuk-grid-column-three-quarters"},(0,t.createElement)("div",{className:"mojblocks-cta__heading-container"},(0,t.createElement)("h2",{className:"mojblocks-cta__heading"},(0,t.createElement)("span",{role:"text"},(0,t.createElement)("span",{className:"mojblocks-cta__heading-text"},(0,t.createElement)(o.RichText,{placeholder:(0,a.__)("Add a Call To Action title","mojblocks"),keepPlaceholderOnFocus:!0,value:n,onChange:e=>{l({ctaTitle:e})}}))))),(0,t.createElement)("div",{className:"mojblocks-cta__content"},(0,t.createElement)(o.RichText,{multiline:"p",placeholder:(0,a.__)("Add compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{l({ctaText:e})},value:s})),(0,t.createElement)(o.URLInputButton,{className:"mojblocks-dropdown__input",label:(0,a.__)("CTA Link","mojblocks"),onChange:e=>{l({buttonLink:e})},url:r}),(0,t.createElement)(o.RichText,{className:"mojblocks-button govuk-button",value:c,onChange:e=>{l({buttonLabel:e})},placeholder:"Button label"})))))},save:()=>null});const g=window.wp.components,{__}=wp.i18n,{registerBlockType:b}=wp.blocks,{InspectorControls:k,MediaUpload:p,InnerBlocks:h}=wp.blockEditor,{PanelBody:_,PanelRow:v}=wp.components;b("mojblocks/hero",{title:__("Hero","mojblocks"),description:__("Full width hero banner with title and text","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{backgroundImage:{type:"string"},heroClassName:{type:"string"},heroImagePosition:{type:"string"}},edit:e=>{const{setAttributes:a,attributes:{backgroundImage:l,heroImagePosition:o},className:n}=e;a({heroClassName:n});const s=(0,t.useState)("center");return[(0,t.createElement)(k,null,(0,t.createElement)(_,{title:__("Choose hero block banner image","mojblocks"),initialOpen:!0},(0,t.createElement)("label",{className:"block-editor-block-hero"},(0,t.createElement)("p",null,"For best results, uploaded images must meet a minimum size of 1366×683 pixels (or aspect ratio of 2:1).")),(0,t.createElement)(v,null,(0,t.createElement)(p,{onSelect:e=>{var t=e.sizes,l=void 0!==t.hero?t.hero.url:t.full.url;a({backgroundImage:l})},type:"image",value:l,render:({open:e})=>(0,t.createElement)("button",{className:"button button-primary button-hero",onClick:e},"Upload image")})),(0,t.createElement)(v,null,(0,t.createElement)(g.SelectControl,{label:"Image position",help:"",value:o,options:[{label:"Centre",value:"center"},{label:"Top",value:"top"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top left",value:"top left"},{label:"Top right",value:"top right"},{label:"Bottom left",value:"bottom left"},{label:"Bottom right",value:"bottom right"}],onChange:e=>{a({heroImagePosition:e}),s(e)}})))),(0,t.createElement)("section",{className:`${n}  mojblocks-hero`},(0,t.createElement)("div",{className:"mojblocks-hero__image",style:{backgroundImage:`url(${l})`,backgroundSize:"cover",backgroundPosition:`${o}`}}),(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{className:"mojblocks-hero__overlay"},(0,t.createElement)("div",{className:"govuk-grid-column-three-quarters"},(0,t.createElement)(h,{allowedBlocks:["core/heading","core/list","core/paragraph","mojblocks/intro"]}))))))]},save:()=>(0,t.createElement)(h.Content,null)});const{__:E}=wp.i18n,{registerBlockType:w}=wp.blocks,{RichText:y}=wp.blockEditor,{InnerBlocks:N}=wp.blockEditor;w("mojblocks/accordion",{title:E("Accordion","mojblocks"),description:E("Display content in an accordion component."),icon:"list-view",category:"mojblocks",keywords:[E("accordion"),E("sections"),E("lists")],attributes:{},edit:()=>[(0,t.createElement)("div",{className:"govuk-accordion","data-module":"govuk-accordion",id:"accordion-default",key:"accordion-block"},(0,t.createElement)(N,{template:[["mojblocks/accordion-section",{}]],allowedBlocks:["mojblocks/accordion-section"]}))],save:()=>(0,t.createElement)(N.Content,null)}),w("mojblocks/accordion-section",{title:E("Accordion Section","mojblocks"),category:"mojblocks",parent:["mojblocks/accordion"],attributes:{accordionSectionTitle:{type:"string"},accordionSectionTextArea:{type:"string"},accordionSectionClassName:{type:"string"}},edit:e=>{const{attributes:{accordionSectionTitle:a,accordionSectionTextArea:l},className:o,setAttributes:n}=e;return n({accordionSectionClassName:o}),[(0,t.createElement)("div",{className:`${o} govuk-accordion__section`,key:"accordion-block-section"},(0,t.createElement)("div",{className:"govuk-accordion__section-header"},(0,t.createElement)("h3",{className:"govuk-accordion__section-heading"},(0,t.createElement)("span",{className:"govuk-accordion__section-button",id:"accordion-default-heading-1"},(0,t.createElement)(y,{placeholder:E("Add accordion section title","mojblocks"),value:a,onChange:e=>{n({accordionSectionTitle:e})},keepPlaceholderOnFocus:!0})))),(0,t.createElement)("div",{id:"accordion-default-content-1",className:"govuk-accordion__section-content","aria-labelledby":"accordion-default-heading-1"},(0,t.createElement)("div",{className:"govuk-body"},(0,t.createElement)(y,{placeholder:E("Add accordion section content","mojblocks"),value:l,onChange:e=>{n({accordionSectionTextArea:e})},keepPlaceholderOnFocus:!0}),(0,t.createElement)(N,{allowedBlocks:["core/heading","core/list","core/paragraph"]}))))]},save:()=>(0,t.createElement)(N.Content,null)});const{__:j}=wp.i18n,{registerBlockType:f,registerBlockStyle:x}=wp.blocks,{Fragment:C}=wp.element,{RichText:B,MediaUpload:T,InspectorControls:I,URLInputButton:A}=wp.blockEditor,D=["image"];f("mojblocks/staggered-box",{title:j("Staggered Box","mojblocks"),description:j("Display content on top of a staggered background image"),category:"mojblocks",icon:"admin-page",keywords:[j("staggered box"),j("photo block")],attributes:{staggeredBoxTitle:{type:"string"},staggeredBoxContent:{type:"string"},staggeredBoxButtonText:{type:"string"},staggeredBoxButtonLink:{type:"string"},staggeredBoxImageURL:{type:"string"},staggeredBoxImageAltText:{type:"string"},staggeredBoxClassName:{type:"string"}},edit:e=>{const{attributes:{staggeredBoxContent:a,staggeredBoxImageURL:l,staggeredBoxButtonText:o,staggeredBoxButtonLink:n,staggeredBoxTitle:s,staggeredBoxImageAltText:r},className:c,setAttributes:i}=e;return i({staggeredBoxClassName:c}),(0,t.createElement)(C,null,(0,t.createElement)(I,null,(0,t.createElement)(T,{onSelect:e=>{i({staggeredBoxImageURL:e.sizes.full.url}),i({staggeredBoxImageAltText:e.alt})},allowedTypes:D,type:"image",value:l,render:({open:e})=>(0,t.createElement)("button",{className:"button button-primary button-hero",onClick:e},"Open Media Library")})),(0,t.createElement)("div",{className:`${c} mojblocks-staggered-box`},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{className:"mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "},(0,t.createElement)("img",{className:"mojblocks-staggered-block__image",src:l,alt:r})),(0,t.createElement)("div",{className:"mojblocks-staggered-box__text-container govuk-grid-column-one-half"},(0,t.createElement)(B,{tagName:"h2",value:s,onChange:e=>{i({staggeredBoxTitle:e})},className:"mojblocks-staggered-box__title",placeholder:j("Add staggered box title","mojblocks"),keepPlaceholderOnFocus:!0}),(0,t.createElement)(B,{tagName:"p",value:a,onChange:e=>{i({staggeredBoxContent:e})},className:"mojblocks-staggered-box__content",placeholder:j("Add staggered box content","mojblocks"),keepPlaceholderOnFocus:!0}),(0,t.createElement)(A,{label:j("Button link","mojblocks"),onChange:e=>{i({staggeredBoxButtonLink:e})},url:n}),(0,t.createElement)(B,{value:o,onChange:e=>{i({staggeredBoxButtonText:e})},className:"mojblocks-staggered-box__button",placeholder:j("Add staggered box button","mojblocks")}))))))},save:()=>null}),x("mojblocks/staggered-box",{name:"image-left",label:"Image aligned on the left",isDefault:!0}),x("mojblocks/staggered-box",{name:"staggered-box-image-right",label:"Image aligned on right"});const S=window.wp.domReady;var L=e.n(S);const q={};q.upload=(0,t.createElement)("svg",{width:"32px",height:"32px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"}),(0,t.createElement)("path",{d:"m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"}),(0,t.createElement)("path",{d:"m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"}),(0,t.createElement)("path",{d:"m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"}));const R=q,P=["image"];(0,l.registerBlockType)("mojblocks/quote",{title:(0,a.__)("Quote","mojblocks"),description:(0,a.__)("A user quote block with an optional image background, quote text and name","mojblocks"),category:"mojblocks",icon:"format-quote",keywords:[(0,a.__)("quote","mojblocks"),(0,a.__)("testimonial","mojblocks"),(0,a.__)("moj","mojblocks")],attributes:{quoteImgURL:{type:"string"},quoteContent:{type:"string"},quoteName:{type:"string"},quoteAlignment:{type:"string"},quoteImgId:{type:"number"},quoteClassName:{type:"string"}},edit:e=>{const{setAttributes:l,attributes:{quoteImgURL:n,quoteContent:s,quoteName:r,quoteAlignment:c,quoteImgId:i},className:m}=e;l({quoteClassName:m});const d=()=>{l({quoteImgURL:null,quoteImgId:null})};return[(0,t.createElement)(o.BlockControls,{key:"controls"},(0,t.createElement)(o.AlignmentToolbar,{value:c,onChange:e=>l({quoteAlignment:e})})),(0,t.createElement)("div",{className:"mojblocks-quote","data-src":n},(0,t.createElement)("div",{className:`${m} mojblocks-quote__image `+(i?"mojblocks-quote__image-selected":""),style:{backgroundImage:`url(${n})`}},(0,t.createElement)(o.MediaUpload,{buttonProps:{className:"change-image"},onSelect:e=>l({quoteImgId:e.id,quoteImgURL:e.url}),allowed:P,type:"image",value:i,render:({open:e})=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g.Button,{className:"mojblocks-quote__image__button "+(i?"mojblocks-quote__image__button-change":"mojblocks-quote__image__button-add"),onClick:e},R.upload),i&&(0,t.createElement)(g.Button,{className:"mojblocks-quote__image__button mojblocks-quote__image__button-remove",onClick:d},(0,t.createElement)(g.Dashicon,{icon:"dismiss"})))})),(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"mojblocks-quote__content",style:{textAlign:c}},(0,t.createElement)("div",{className:"mojblocks-quote__content__icon"},(0,t.createElement)(g.Dashicon,{icon:"format-quote"})),(0,t.createElement)(o.RichText,{tagName:"q",multiline:"span",placeholder:(0,a.__)("Add quotation text...","mojblocks"),keepPlaceholderOnFocus:!0,value:s,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"],className:"mojblocks-quote__content__quote",onChange:e=>l({quoteContent:e})}),(0,t.createElement)(o.RichText,{tagName:"p",placeholder:(0,a.__)("Add name","mojblocks"),keepPlaceholderOnFocus:!0,value:r,className:"mojblocks-quote__content__name",onChange:e=>l({quoteName:e})}))))]},save:()=>null}),L()((function(){(0,l.unregisterBlockType)("core/quote")})),(0,l.registerBlockType)("mojblocks/intro",{title:(0,a.__)("Intro Text","mojblocks"),icon:"editor-paragraph",category:"mojblocks",attributes:{introText:{type:"string"},introClassName:{type:"string"}},edit:e=>{const{attributes:{introText:l},className:n,setAttributes:s}=e;return s({introClassName:n}),(0,t.createElement)("div",{className:`${n} mojblocks-intro`},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{className:"govuk-grid-column-three-quarters"},(0,t.createElement)("div",{className:"mojblocks-intro--type"},(0,t.createElement)("div",{className:"mojblocks-intro__content intro"},(0,t.createElement)(o.RichText,{multiline:"p",placeholder:(0,a.__)("Some compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{s({introText:e})},value:l})))))))},save:()=>null}),(0,l.registerBlockType)("mojblocks/reveal",{title:(0,a.__)("Reveal","mojblocks"),description:(0,a.__)("Arrow toggle to reveal text","mojblocks"),icon:"controls-play",category:"mojblocks",attributes:{revealTitle:{type:"string"},revealContent:{type:"string"},revealClassName:{type:"string"}},edit:e=>{const{setAttributes:l,attributes:{revealTitle:n,revealContent:s},className:r}=e;return l({revealClassName:r}),[(0,t.createElement)("div",{className:"mojblocks-reveal"},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{className:"govuk-grid-column-three-quarters"},(0,t.createElement)("details",{className:"govuk-details","data-module":"govuk-details",open:!0},(0,t.createElement)("summary",{className:"govuk-details__summary"},(0,t.createElement)("span",{className:"mojblocks-reveal__title govuk-details__summary-text"},(0,t.createElement)(o.RichText,{value:n,placeholder:(0,a.__)("Add reveal title","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{l({revealTitle:e})}}))),(0,t.createElement)("div",{className:"mojblocks-reveal__content govuk-details__text"},(0,t.createElement)(o.RichText,{multiline:"p",placeholder:(0,a.__)("Add reveal content","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{l({revealContent:e})},value:s})))))))]},save:()=>null});const F=["image"],O=[["core/heading",{placeholder:"Card heading"}]];(0,l.registerBlockType)("mojblocks/card",{apiVersion:1,title:(0,a.__)("Card","mojblocks"),description:(0,a.__)("Add a card pattern to a default page","mojblocks"),category:"mojblocks",icon:"table-row-after",keywords:[(0,a.__)("card","navigation","mojblocks")],supports:{align:["wide","full"],html:!1},attributes:{cardTitle:{type:"string"},cardExcerpt:{type:"string"},cardImageURL:{type:"string"},cardImageId:{type:"number"},cardClassName:{type:"string"},cardImagePosition:{type:"string"},cardImageShape:{type:"string"}},edit:function(e){const{setAttributes:l,className:n}=e,{cardExcerpt:s,cardImageURL:r,cardImageId:c,cardImageShape:i,cardImagePosition:m}=e.attributes,d=()=>{l({cardImageURL:null,cardImageId:null})},u=(0,t.useState)("75"),b=(0,t.useState)("center"),k=(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(g.PanelBody,{title:(0,a.__)("Image settings"),initialOpen:!0},(0,t.createElement)(g.SelectControl,{label:"Image shape",help:"",value:i,options:[{label:"1:1 (square)",value:"100"},{label:"4:3 (rectangle)",value:"75"},{label:"16:9 (widescreen)",value:"56"},{label:"21:9 (letterbox)",value:"43"}],onChange:e=>{l({cardImageShape:e}),u(e)}}),(0,t.createElement)(g.SelectControl,{label:"Image position",help:"",value:m,options:[{label:"Centre",value:"center"},{label:"Top",value:"top"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top left",value:"top left"},{label:"Top right",value:"top right"},{label:"Bottom left",value:"bottom left"},{label:"Bottom right",value:"bottom right"}],onChange:e=>{l({cardImagePosition:e}),b(e)}})));return(0,t.createElement)("div",{className:`${n} mojblocks-card mojblocks-card-image`,"data-src":r},k,(0,t.createElement)("div",{className:`${n} mojblocks-card__image `+(c?"mojblocks-card__image-selected":""),style:{backgroundImage:`url(${r})`,paddingBottom:`${i}%`,backgroundPosition:m}},(0,t.createElement)(o.MediaUpload,{buttonProps:{className:"change-image"},onSelect:e=>l({cardImageId:e.id,cardImageURL:e.url}),allowedTypes:F,type:"image",value:c,render:({open:e})=>(0,t.createElement)(t.Fragment,null,(0,t.createElement)(g.Button,{className:"mojblocks-card__image__button "+(c?"mojblocks-card__image__button-change":"mojblocks-card__image__button-add"),onClick:e},R.upload),c&&(0,t.createElement)(g.Button,{className:"mojblocks-card__image__button mojblocks-card__image__button-remove",onClick:d},(0,t.createElement)(g.Dashicon,{icon:"dismiss"})))})),(0,t.createElement)(o.InnerBlocks,{template:O,templateLock:"all"}),(0,t.createElement)(o.RichText,{tagName:"p",placeholder:(0,a.__)("Add excerpt text...","mojblocks"),keepPlaceholderOnFocus:!0,value:s,className:"mojblocks-card-excerpt",onChange:e=>l({cardExcerpt:e})}))},save:()=>(0,t.createElement)(o.InnerBlocks.Content,null)});const{__:$}=wp.i18n,{registerBlockType:U}=wp.blocks,{RichText:M,InnerBlocks:z}=wp.blockEditor;U("mojblocks/banner",{title:$("Banner","mojblocks"),description:$("Banner with title and button","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{bannerTitle:{type:"string"},buttonLink:{type:"string"},buttonLabel:{type:"string"},bannerClassName:{type:"string"}},edit:e=>{const{setAttributes:a,attributes:{bannerTitle:l,buttonLink:n,buttonLabel:s},className:r}=e;return a({bannerClassName:r}),[(0,t.createElement)("div",{className:`${r}  mojblocks-banner`},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)("div",{className:"govuk-grid-row"},(0,t.createElement)("div",{className:"govuk-grid-column-two-thirds"},(0,t.createElement)("div",{className:"mojblocks-banner__title"},(0,t.createElement)(z,{allowedBlocks:["core/heading"],template:[["core/heading",{placeholder:"Banner Title"}]],templateLock:"all"}))),(0,t.createElement)("div",{className:"govuk-grid-column-one-third"},(0,t.createElement)(o.URLInputButton,{className:"mojblocks-dropdown__input",label:$("Button Link","mojblocks"),onChange:e=>{a({buttonLink:e})},url:n}),(0,t.createElement)(M,{className:"mojblocks-banner__button govuk-button",value:s,onChange:e=>{a({buttonLabel:e})},placeholder:"Button label"})))))]},save:()=>(0,t.createElement)(z.Content,null)});const{__:H}=wp.i18n,{registerBlockType:J,registerBlockStyle:G}=wp.blocks,{Fragment:Y}=wp.element,{RichText:Q,MediaUpload:V,InspectorControls:K,URLInputButton:W}=wp.blockEditor,{PanelBody:X}=wp.components,Z=[["core/heading",{placeholder:"Add latest news section title"}]];new Date,J("mojblocks/latest-news",{title:H("Latest News","mojblocks"),description:H("Display latest news items"),category:"mojblocks",icon:"slides",keywords:[H("latest news"),H("recent news"),H("headlines")],attributes:{latestNewsHasDate:{type:"boolean",default:!0},latestNewsExpiry:{type:"numeric",default:0},latestNewsEmptyText:{type:"string",default:"No news to display."}},edit:e=>{const{setAttributes:a,attributes:{latestNewsExpiry:l,latestNewsEmptyText:n,latestNewsHasDate:s},className:r}=e;return(0,t.createElement)(Y,null,(0,t.createElement)(K,null,(0,t.createElement)(X,{title:H("News settings"),initialOpen:!0},(0,t.createElement)(g.ToggleControl,{label:"Show/hide article dates",help:!1===s?"Dates will be hidden":"Dates will be displayed",checked:s,onChange:e=>{a({latestNewsHasDate:e})}}),(0,t.createElement)(g.TextControl,{label:"Text for no news",help:""===n?"If there are no news articles to display, the block will be blank.":"This will be shown if there are no articles to display.",value:n,onChange:e=>{a({latestNewsEmptyText:e})}}),(0,t.createElement)(g.__experimentalNumberControl,{label:"Auto-hide after how many weeks",value:l,min:"0",onChange:e=>{a({latestNewsExpiry:e})}}),(0,t.createElement)(g.__experimentalText,null,l?"Articles will expire after "+l+" weeks.":"Articles will not expire."))),(0,t.createElement)("div",{className:`mojblocks-latest-news mojblocks-latest-news--expiry-weeks-${l} ${r}`},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)(o.InnerBlocks,{template:Z,templateLock:"all"}),(0,t.createElement)("div",{className:`govuk-grid-row ${!1===s?"mojblocks-latest-news-hide-date":""} `},(0,t.createElement)("div",{className:"mojblocks-latest-news__item"},(0,t.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},(0,t.createElement)("a",{href:"#"},"Title automatically updated on preview page")),(0,t.createElement)("div",{className:"mojblocks-latest-news__date"},"Date")),(0,t.createElement)("div",{className:"mojblocks-latest-news__item"},(0,t.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},(0,t.createElement)("a",{href:"#"},"Title automatically updated on preview page")),(0,t.createElement)("div",{className:"mojblocks-latest-news__date"},"Date")),(0,t.createElement)("div",{className:"mojblocks-latest-news__item"},(0,t.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},(0,t.createElement)("a",{href:"#"},"Title automatically updated on preview page")),(0,t.createElement)("div",{className:"mojblocks-latest-news__date"},"Date"))))))},save:()=>(0,t.createElement)(o.InnerBlocks.Content,null)}),window.wp.date;const ee=window.wp.data,te=window.wp.coreData,{Fragment:ae}=wp.element,le=new Date,oe=[["core/heading",{placeholder:"Add featured news section title"}]],{registerBlockType:ne,registerBlockStyle:se}=wp.blocks,{__:re}=wp.i18n;ne("mojblocks/featured-news",{title:re("Featured News","mojblocks"),description:re("Display featured news item"),category:"mojblocks",icon:"id-alt",keywords:[re("featured news"),re("headline news"),re("headlines")],attributes:{featuredNewsHasDate:{type:"boolean",default:!0},featuredNewsID:{type:"string",default:"0"}},edit:function({attributes:e,setAttributes:l}){const{featuredNewsID:n,featuredNewsHasDate:s,className:r}=e,{latestNews:c}=(0,ee.useSelect)((e=>{const{getEntityRecords:t,getMedia:a,getUsers:l}=e(te.store),{getSettings:n}=e(o.store),{imageSizes:s,imageDimensions:r}=n();return{latestNews:t("postType","news",{per_page:20})}})),{featuredNewsArticle:i}=(0,ee.useSelect)((e=>{if(n.length>0){const{getEntityRecord:t}=e(te.store);return{featuredNewsArticle:t("postType","news",n)}}return{featuredNewsArticle:!1}}));let m=[{label:"None",value:"0"}],d=[{title:"No news article selected",summary:"",date:"date",image:""}];if(Array.isArray(c)){for(let e=0;e<c.length;e++)c[e].summary_meta.news_story_summary&&(d[c[e].id]={title:c[e].title.rendered,summary:c[e].summary_meta.news_story_summary,date:c[e].date,image:c[e].featured_image_url},m.push({label:c[e].title.rendered,value:c[e].id}));null!=i&&n.length>0&&0==d.hasOwnProperty(n)&&(d[n]={title:i.title.rendered,summary:i.summary_meta.news_story_summary,date:i.date,image:i.featured_image_url},m.push({label:i.title.rendered,value:i.id}))}const u=(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(g.PanelBody,{title:(0,a.__)("News settings"),initialOpen:!0},(0,t.createElement)(g.SelectControl,{label:"Select news",help:"Only news articles with a summary are available for selection",value:n,options:m,onChange:e=>{l({featuredNewsID:e})}}),(0,t.createElement)(g.ToggleControl,{label:"Show/hide article dates",help:!1===s?"The date will be hidden":"The date will be displayed",checked:s,onChange:e=>{l({featuredNewsHasDate:e})}})));return Array.isArray(c)&&Array.isArray(d)?(0,t.createElement)(ae,null,u,(0,t.createElement)("div",{className:`mojblocks-featured-news mojblocks-featured-news--${n} ${r}`},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)(o.InnerBlocks,{template:oe,templateLock:"all"}),(0,t.createElement)("div",{className:`govuk-grid-row ${s?"":"mojblocks-featured-news-hide-date"} ${"0"==n||d[n].image?"":"mojblocks-featured-news--no-image"} `},(0,t.createElement)("div",{class:"mojblocks-featured-news__item"},(0,t.createElement)("div",{className:"mojblocks-featured-news__image",styles:`background:url('${d[n].image}')`},(0,t.createElement)("img",{src:d[n].image,alt:"Feature image for news article"})),(0,t.createElement)("div",{className:"mojblocks-featured-news__text"},(0,t.createElement)("div",{className:"mojblocks-featured-news__headline"},(0,t.createElement)("a",{href:"#",className:"govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline-link"},d[n].title)),(0,t.createElement)("div",{className:"govuk-body mojblocks-featured-news__summary"},d[n].summary),(0,t.createElement)("div",{className:"govuk-body-s mojblocks-featured-news__date"},function(e,t){if(!e)return"Date";if((l=new Array)[1]="January",l[2]="February",l[3]="March",l[4]="April",l[5]="May",l[6]="June",l[7]="July",l[8]="August",l[9]="September",l[10]="October",l[11]="November",l[12]="December",3!=(e=e.split("-")).length)return t.toLocaleString("en-GB",{day:"2-digit",month:"long"});var a=e[2].substring(0,2),l=" "+l[parseInt(e[1])],o=" "+e[0];return t.getFullYear()==e[0]?a+l:a+l+o}(d[n].date,le)),(0,t.createElement)("div",{className:"mojblocks-featured-news__link"},(0,t.createElement)("a",{className:"govuk-link"},"Read full article")))))))):(0,t.createElement)(ae,null,(0,t.createElement)("div",{class:"mojblocks-spinner"}),(0,t.createElement)("div",{class:"mojblocks-spinner-text govuk-body"},"Loading"))},save:()=>(0,t.createElement)(o.InnerBlocks.Content,null)});const{Fragment:ce}=wp.element,ie=new Date,me=[["core/heading",{placeholder:"Add featured document section title"}]],{registerBlockType:de,registerBlockStyle:ue}=wp.blocks,{__:ge}=wp.i18n;de("mojblocks/featured-document",{title:ge("Featured Document","mojblocks"),description:ge("Display featured document"),category:"mojblocks",icon:"id-alt",keywords:[ge("featured document")],attributes:{featuredDocumentHasDate:{type:"boolean",default:!0},featuredDocumentID:{type:"string",default:"0"}},edit:function({attributes:e,setAttributes:l}){const{featuredDocumentID:n,featuredDocumentHasDate:s,className:r}=e,{allDocuments:c}=(0,ee.useSelect)((e=>{const{getEntityRecords:t,getMedia:a,getUsers:l}=e(te.store),{getSettings:n}=e(o.store),{imageSizes:s,imageDimensions:r}=n();return{allDocuments:t("postType","document",{per_page:-1})}}));let i=[{label:"None",value:"0"}],m=[{title:"No document selected",summary:"",date:"date",image:""}];if(Array.isArray(c))for(let e=0;e<c.length;e++)m[c[e].id]={title:c[e].title.rendered,date:c[e].date},i.push({label:c[e].title.rendered,value:c[e].id});const d=(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(g.PanelBody,{title:(0,a.__)("Featured Document settings"),initialOpen:!0},(0,t.createElement)(g.SelectControl,{label:"Select document",value:n,options:i,onChange:e=>{l({featuredDocumentID:e})}}),(0,t.createElement)(g.ToggleControl,{label:"Show/hide publish date",help:!1===s?"The date will be hidden":"The date will be displayed",checked:s,onChange:e=>{l({featuredDocumentHasDate:e})}})));return Array.isArray(c)&&Array.isArray(m)?(0,t.createElement)(ce,null,d,(0,t.createElement)("div",{className:`mojblocks-featured-document ${r}`},(0,t.createElement)("div",{className:"govuk-width-container"},(0,t.createElement)(o.InnerBlocks,{template:me,templateLock:"all"}),(0,t.createElement)("div",{className:`govuk-grid-row ${s?"":"mojblocks-featured-document-hide-date"} `},(0,t.createElement)("div",{class:"mojblocks-featured-document__item"},(0,t.createElement)("div",{className:"mojblocks-featured-document__text"},(0,t.createElement)("div",{className:"mojblocks-featured-document__headline"},(0,t.createElement)("a",{href:"#",className:"govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-document__headline-link"},m[n].title)),(0,t.createElement)("div",{className:"govuk-body-s mojblocks-featured-document__date"},function(e,t){if(!e)return"Date";if((l=new Array)[1]="January",l[2]="February",l[3]="March",l[4]="April",l[5]="May",l[6]="June",l[7]="July",l[8]="August",l[9]="September",l[10]="October",l[11]="November",l[12]="December",3!=(e=e.split("-")).length)return t.toLocaleString("en-GB",{day:"2-digit",month:"long"});var a=e[2].substring(0,2),l=" "+l[parseInt(e[1])],o=" "+e[0];return t.getFullYear()==e[0]?a+l:a+l+o}(m[n].date,ie)))))))):(0,t.createElement)(ce,null,(0,t.createElement)("div",{class:"mojblocks-spinner"}),(0,t.createElement)("div",{class:"mojblocks-spinner-text govuk-body"},"Loading"))},save:()=>(0,t.createElement)(o.InnerBlocks.Content,null)}),L()((()=>{(0,l.unregisterBlockStyle)("core/button",["outline","squared","fill"]),(0,l.registerBlockStyle)("core/button",[{name:"mojblocks-cta-button",label:(0,a.__)("Button - CTA style","mojblocks"),isDefault:!0}]),(0,l.registerBlockStyle)("core/buttons",[{name:"mojblocks-cta-button",label:(0,a.__)("Button - CTA style","mojblocks"),isDefault:!0}])}));const{addFilter:be}=wp.hooks,{createHigherOrderComponent:ke}=wp.compose;be("editor.BlockEdit","core/file",ke((e=>a=>{if("core/file"!==a.name)return(0,t.createElement)(e,{...a});const l="("+function(e=""){return e.slice(2+(e.lastIndexOf(".")-1>>>0))}(a.attributes.href).toUpperCase()+")";return a.attributes.downloadButtonText=l,(0,t.createElement)(e,{...a})}),"addFileExtention"))})();