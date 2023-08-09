(()=>{var e={895:()=>{const e=document.createElement("span"),t=document.createElement("div"),l=e.cloneNode();l.classList.add("show-hide-arrow");const a=e.cloneNode();a.classList.add("show-hide-text");const o=document.createTextNode(""),s=l.cloneNode(),n=a.cloneNode();n.appendChild(o);const r=t.cloneNode();r.appendChild(s),r.appendChild(n),r.classList.add("hideThis"),r.classList.add("showHideThis");const c=document.createTextNode(""),i=l.cloneNode(),m=a.cloneNode();m.appendChild(c);const d=t.cloneNode();var u;d.appendChild(i),d.appendChild(m),d.classList.add("hideAll"),d.classList.add("showHideAll"),(u=".govuk-accordion",new Promise((e=>{if(document.querySelector(u))return e(document.querySelector(u));const t=new MutationObserver((l=>{document.querySelector(u)&&(e(document.querySelector(u)),t.disconnect())}));t.observe(document.body,{childList:!0,subtree:!0})}))).then((e=>{document.querySelectorAll(".govuk-accordion").forEach((e=>{let t=d.cloneNode(!0);e.insertBefore(t,e.firstChild),e.querySelectorAll(".govuk-accordion__section").forEach((t=>{let l=r.cloneNode(!0);t.insertBefore(l,t.lastChild),t.querySelector(".showHideThis").onclick=function(){t.querySelector(".showHideThis").classList.contains("hideThis")?(t.classList.add("accordion-hidden"),t.querySelector(".showHideThis").classList.add("showThis"),t.querySelector(".showHideThis").classList.remove("hideThis"),0==e.getElementsByClassName("hideThis").length&&(e.querySelector(".showHideAll").classList.add("showAll"),e.querySelector(".showHideAll").classList.remove("hideAll"))):(t.classList.remove("accordion-hidden"),t.querySelector(".showHideThis").classList.add("hideThis"),t.querySelector(".showHideThis").classList.remove("showThis"),e.querySelector(".showHideAll").classList.add("hideAll"),e.querySelector(".showHideAll").classList.remove("showAll"))}})),e.querySelector(".showHideAll").onclick=function(){e.querySelector(".showHideAll").classList.contains("hideAll")?(e.querySelectorAll(".govuk-accordion__section").forEach((e=>{e.classList.add("accordion-hidden"),e.querySelectorAll(".showHideThis").forEach((e=>{e.classList.add("showThis"),e.classList.remove("hideThis")}))})),e.querySelector(".showHideAll").classList.add("showAll"),e.querySelector(".showHideAll").classList.remove("hideAll")):(e.querySelectorAll(".govuk-accordion__section").forEach((e=>{e.classList.remove("accordion-hidden"),e.querySelectorAll(".showHideThis").forEach((e=>{e.classList.add("hideThis"),e.classList.remove("showThis")}))})),e.querySelector(".showHideAll").classList.remove("showAll"),e.querySelector(".showHideAll").classList.add("hideAll"))}}))}))}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,l),s.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.wp.i18n,a=window.wp.blocks,o=window.wp.blockEditor,{InspectorControls:s}=wp.blockEditor,{PanelBody:n,PanelRow:r,ToggleControl:c}=wp.components;(0,a.registerBlockType)("mojblocks/highlights-list",{title:(0,t.__)("Highlights List","mojblocks"),icon:"list-view",category:"mojblocks",example:{attributes:{listTitle:"This is a highlights list title",listItems:"This is a list item",flushBottom:!1}},attributes:{listTitle:{type:"string"},listItems:{type:"string"},flushBottom:{type:"boolean"},listClassName:{type:"string"}},edit:l=>{const{attributes:{listTitle:a,listItems:i,flushBottom:m},className:d,setAttributes:u}=l;return u({listClassName:d}),(0,e.createElement)("div",{className:`${d}  mojblocks-highlights-list`},(0,e.createElement)(s,null,(0,e.createElement)(n,{title:"Bottom Margin",initialOpen:!1},(0,e.createElement)(r,null,(0,e.createElement)(c,{label:"Flush bottom",help:m?"Gap removed from beneath this block":"Normal gap beneath this block",checked:m,onChange:e=>u({flushBottom:e})})))),(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{className:"mojblocks-highlights-list__heading-container"},(0,e.createElement)("h2",{className:"mojblocks-highlights-list__heading"},(0,e.createElement)("span",{role:"text"},(0,e.createElement)("span",{className:"mojblocks-highlights-list__heading-text"},(0,e.createElement)(o.RichText,{placeholder:(0,t.__)("Add highlights title","mojblocks"),keepPlaceholderOnFocus:!0,value:a,onChange:e=>{u({listTitle:e})}}))))),(0,e.createElement)("div",{className:"mojblocks-highlights-list__content"},(0,e.createElement)(o.RichText,{tagName:"ul",multiline:"li",placeholder:(0,t.__)("Add list item","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{u({listItems:e})},value:i})))))},save:()=>null});const{InspectorControls:i}=wp.blockEditor,{PanelBody:m,PanelRow:d,ToggleControl:u}=wp.components;(0,a.registerBlockType)("mojblocks/cta",{title:(0,t.__)("Call to Action","mojblocks"),icon:"megaphone",category:"mojblocks",keywords:[(0,t.__)("cta"),(0,t.__)("Call to Action"),(0,t.__)("banner")],example:{attributes:{ctaTitle:"Add a Call to Action banner to your site",ctaText:"Call To Action text",buttonLabel:"Click me now",buttonLink:"https://intranet.justice.gov.uk/",flushBottom:!1}},attributes:{ctaTitle:{type:"string"},ctaText:{type:"string"},buttonLabel:{type:"string"},buttonLink:{type:"string"},flushBottom:{type:"boolean"},ctaClassName:{type:"string"}},edit:l=>{const{setAttributes:a,attributes:{ctaTitle:s,ctaText:n,buttonLink:r,buttonLabel:c,flushBottom:g},className:b}=l;return a({ctaClassName:b}),(0,e.createElement)("div",{className:`${b}  mojblocks-cta`},(0,e.createElement)(i,null,(0,e.createElement)(m,{title:"Bottom Margin",initialOpen:!1},(0,e.createElement)(d,null,(0,e.createElement)(u,{label:"Flush bottom",help:g?"Gap removed from beneath this block":"Normal gap beneath this block",checked:g,onChange:e=>a({flushBottom:e})})))),(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{class:"govuk-grid-column-three-quarters"},(0,e.createElement)("div",{className:"mojblocks-cta__heading-container"},(0,e.createElement)("h2",{className:"mojblocks-cta__heading"},(0,e.createElement)("span",{role:"text"},(0,e.createElement)("span",{className:"mojblocks-cta__heading-text"},(0,e.createElement)(o.RichText,{placeholder:(0,t.__)("Add a Call To Action title","mojblocks"),keepPlaceholderOnFocus:!0,value:s,onChange:e=>{a({ctaTitle:e})}}))))),(0,e.createElement)("div",{className:"mojblocks-cta__content"},(0,e.createElement)(o.RichText,{multiline:"p",placeholder:(0,t.__)("Add compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{a({ctaText:e})},value:n})),(0,e.createElement)(o.URLInputButton,{className:"mojblocks-dropdown__input",label:(0,t.__)("CTA Link","mojblocks"),onChange:e=>{a({buttonLink:e})},url:r}),(0,e.createElement)(o.RichText,{className:"mojblocks-button govuk-button",value:c,onChange:e=>{a({buttonLabel:e})},placeholder:"Button label"})))))},save:()=>null});const g=window.wp.components,{__}=wp.i18n,{registerBlockType:b}=wp.blocks,{InspectorControls:h,MediaUpload:p,InnerBlocks:k}=wp.blockEditor,{PanelBody:v,PanelRow:_}=wp.components;b("mojblocks/hero",{title:__("Hero","mojblocks"),description:__("Full width hero banner with title and text","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{backgroundImage:{type:"string"},heroClassName:{type:"string"},heroImagePosition:{type:"string"}},edit:t=>{const{setAttributes:l,attributes:{backgroundImage:a,heroImagePosition:o},className:s}=t;l({heroClassName:s});const n=(0,e.useState)("center");return[(0,e.createElement)(h,null,(0,e.createElement)(v,{title:__("Choose hero block banner image","mojblocks"),initialOpen:!0},(0,e.createElement)("label",{className:"block-editor-block-hero"},(0,e.createElement)("p",null,"For best results, uploaded images must meet a minimum size of 1366×683 pixels (or aspect ratio of 2:1).")),(0,e.createElement)(_,null,(0,e.createElement)(p,{onSelect:e=>{var t=e.sizes,a=void 0!==t.hero?t.hero.url:t.full.url;l({backgroundImage:a})},type:"image",value:a,render:({open:t})=>(0,e.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Upload image")})),(0,e.createElement)(_,null,(0,e.createElement)(g.SelectControl,{label:"Image position",help:"",value:o,options:[{label:"Centre",value:"center"},{label:"Top",value:"top"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top left",value:"top left"},{label:"Top right",value:"top right"},{label:"Bottom left",value:"bottom left"},{label:"Bottom right",value:"bottom right"}],onChange:e=>{l({heroImagePosition:e}),n(e)}})))),(0,e.createElement)("section",{className:`${s}  mojblocks-hero`},(0,e.createElement)("div",{className:"mojblocks-hero__image",style:{backgroundImage:`url(${a})`,backgroundSize:"cover",backgroundPosition:`${o}`}}),(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{className:"mojblocks-hero__overlay"},(0,e.createElement)("div",{className:"govuk-grid-column-three-quarters"},(0,e.createElement)(k,{allowedBlocks:["core/heading","core/list","core/paragraph","mojblocks/intro"]}))))))]},save:()=>(0,e.createElement)(k.Content,null)}),l(895);const{__:w}=wp.i18n,{registerBlockType:y}=wp.blocks,{RichText:E}=wp.blockEditor,{InnerBlocks:N}=wp.blockEditor,{InspectorControls:j}=wp.blockEditor,{PanelBody:f,PanelRow:T,ToggleControl:C}=wp.components;y("mojblocks/accordion",{title:w("Accordion","mojblocks"),description:w("Display content in an accordion component."),icon:"list-view",category:"mojblocks",keywords:[w("accordion"),w("sections"),w("lists")],example:{attributes:{controlLanguageWelsh:!1}},attributes:{controlLanguageWelsh:{type:"boolean"},accordionClassName:{type:"string"}},edit:t=>{const{setAttributes:l,attributes:{controlLanguageWelsh:a},className:o}=t;return l({accordionClassName:o}),[(0,e.createElement)(j,null,(0,e.createElement)(f,{title:"Language",initialOpen:!1},(0,e.createElement)(T,null,(0,e.createElement)(C,{label:"Set controls to Welsh",help:a?"Controls are in Welsh":"Controls are in English",checked:a,onChange:e=>l({controlLanguageWelsh:e})})))),(0,e.createElement)("div",{className:"govuk-accordion preview-welsh-"+a+" "+o,"data-module":"govuk-accordion",id:"accordion-default",key:"accordion-block"},(0,e.createElement)(N,{template:[["mojblocks/accordion-section",{}]],allowedBlocks:["mojblocks/accordion-section"]}))]},save:()=>(0,e.createElement)(N.Content,null)}),y("mojblocks/accordion-section",{title:w("Accordion Section","mojblocks"),category:"mojblocks",parent:["mojblocks/accordion"],attributes:{accordionSectionTitle:{type:"string"},accordionSectionTextArea:{type:"string"},accordionSectionClassName:{type:"string"}},edit:t=>{const{attributes:{accordionSectionTitle:l,accordionSectionTextArea:a},className:o,setAttributes:s}=t;return s({accordionSectionClassName:o}),[(0,e.createElement)("div",{className:`${o} govuk-accordion__section`,key:"accordion-block-section"},(0,e.createElement)("div",{className:"govuk-accordion__section-header"},(0,e.createElement)("h3",{className:"govuk-accordion__section-heading"},(0,e.createElement)("span",{className:"govuk-accordion__section-button",id:"accordion-default-heading-1"},(0,e.createElement)(E,{placeholder:w("Add accordion section title","mojblocks"),value:l,onChange:e=>{s({accordionSectionTitle:e})},keepPlaceholderOnFocus:!0})))),(0,e.createElement)("div",{id:"accordion-default-content-1",className:"govuk-accordion__section-content","aria-labelledby":"accordion-default-heading-1"},(0,e.createElement)("div",{className:"govuk-body"},(0,e.createElement)(E,{placeholder:w("Add accordion section content","mojblocks"),value:a,onChange:e=>{s({accordionSectionTextArea:e})},keepPlaceholderOnFocus:!0}),(0,e.createElement)(N,{allowedBlocks:["core/heading","core/list","core/paragraph"]}))))]},save:()=>(0,e.createElement)(N.Content,null)});const{__:x}=wp.i18n,{registerBlockType:B,registerBlockStyle:A}=wp.blocks,{Fragment:I}=wp.element,{RichText:L,MediaUpload:S,InspectorControls:q,URLInputButton:D}=wp.blockEditor,R=["image"];B("mojblocks/staggered-box",{title:x("Staggered Box","mojblocks"),description:x("Display content on top of a staggered background image"),category:"mojblocks",icon:"admin-page",keywords:[x("staggered box"),x("photo block")],attributes:{staggeredBoxTitle:{type:"string"},staggeredBoxContent:{type:"string"},staggeredBoxButtonText:{type:"string"},staggeredBoxButtonLink:{type:"string"},staggeredBoxImageURL:{type:"string"},staggeredBoxImageAltText:{type:"string"},staggeredBoxClassName:{type:"string"}},edit:t=>{const{attributes:{staggeredBoxContent:l,staggeredBoxImageURL:a,staggeredBoxButtonText:o,staggeredBoxButtonLink:s,staggeredBoxTitle:n,staggeredBoxImageAltText:r},className:c,setAttributes:i}=t;return i({staggeredBoxClassName:c}),(0,e.createElement)(I,null,(0,e.createElement)(q,null,(0,e.createElement)(S,{onSelect:e=>{i({staggeredBoxImageURL:e.sizes.full.url}),i({staggeredBoxImageAltText:e.alt})},allowedTypes:R,type:"image",value:a,render:({open:t})=>(0,e.createElement)("button",{className:"button button-primary button-hero",onClick:t},"Open Media Library")})),(0,e.createElement)("div",{className:`${c} mojblocks-staggered-box`},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{className:"mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "},(0,e.createElement)("img",{className:"mojblocks-staggered-block__image",src:a,alt:r})),(0,e.createElement)("div",{className:"mojblocks-staggered-box__text-container govuk-grid-column-one-half"},(0,e.createElement)(L,{tagName:"h2",value:n,onChange:e=>{i({staggeredBoxTitle:e})},className:"mojblocks-staggered-box__title",placeholder:x("Add staggered box title","mojblocks"),keepPlaceholderOnFocus:!0}),(0,e.createElement)(L,{tagName:"p",value:l,onChange:e=>{i({staggeredBoxContent:e})},className:"mojblocks-staggered-box__content",placeholder:x("Add staggered box content","mojblocks"),keepPlaceholderOnFocus:!0}),(0,e.createElement)(D,{label:x("Button link","mojblocks"),onChange:e=>{i({staggeredBoxButtonLink:e})},url:s}),(0,e.createElement)(L,{value:o,onChange:e=>{i({staggeredBoxButtonText:e})},className:"mojblocks-staggered-box__button",placeholder:x("Add staggered box button","mojblocks")}))))))},save:()=>null}),A("mojblocks/staggered-box",{name:"image-left",label:"Image aligned on the left",isDefault:!0}),A("mojblocks/staggered-box",{name:"staggered-box-image-right",label:"Image aligned on right"});const P=window.wp.domReady;var F=l.n(P);const O={};O.upload=(0,e.createElement)("svg",{width:"32px",height:"32px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"}),(0,e.createElement)("path",{d:"m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"}),(0,e.createElement)("path",{d:"m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"}),(0,e.createElement)("path",{d:"m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"}));const H=O,$=["image"];(0,a.registerBlockType)("mojblocks/quote",{title:(0,t.__)("Quote","mojblocks"),description:(0,t.__)("A user quote block with an optional image background, quote text and name","mojblocks"),category:"mojblocks",icon:"format-quote",keywords:[(0,t.__)("quote","mojblocks"),(0,t.__)("testimonial","mojblocks"),(0,t.__)("moj","mojblocks")],attributes:{quoteImgURL:{type:"string"},quoteContent:{type:"string"},quoteName:{type:"string"},quoteAlignment:{type:"string"},quoteImgId:{type:"number"},quoteClassName:{type:"string"}},edit:l=>{const{setAttributes:a,attributes:{quoteImgURL:s,quoteContent:n,quoteName:r,quoteAlignment:c,quoteImgId:i},className:m}=l;a({quoteClassName:m});const d=()=>{a({quoteImgURL:null,quoteImgId:null})};return[(0,e.createElement)(o.BlockControls,{key:"controls"},(0,e.createElement)(o.AlignmentToolbar,{value:c,onChange:e=>a({quoteAlignment:e})})),(0,e.createElement)("div",{className:"mojblocks-quote","data-src":s},(0,e.createElement)("div",{className:`${m} mojblocks-quote__image `+(i?"mojblocks-quote__image-selected":""),style:{backgroundImage:`url(${s})`}},(0,e.createElement)(o.MediaUpload,{buttonProps:{className:"change-image"},onSelect:e=>a({quoteImgId:e.id,quoteImgURL:e.url}),allowed:$,type:"image",value:i,render:({open:t})=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g.Button,{className:"mojblocks-quote__image__button "+(i?"mojblocks-quote__image__button-change":"mojblocks-quote__image__button-add"),onClick:t},H.upload),i&&(0,e.createElement)(g.Button,{className:"mojblocks-quote__image__button mojblocks-quote__image__button-remove",onClick:d},(0,e.createElement)(g.Dashicon,{icon:"dismiss"})))})),(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"mojblocks-quote__content",style:{textAlign:c}},(0,e.createElement)("div",{className:"mojblocks-quote__content__icon"},(0,e.createElement)(g.Dashicon,{icon:"format-quote"})),(0,e.createElement)(o.RichText,{tagName:"q",multiline:"span",placeholder:(0,t.__)("Add quotation text...","mojblocks"),keepPlaceholderOnFocus:!0,value:n,allowedFormats:["core/bold","core/italic","core/strikethrough","core/link"],className:"mojblocks-quote__content__quote",onChange:e=>a({quoteContent:e})}),(0,e.createElement)(o.RichText,{tagName:"p",placeholder:(0,t.__)("Add name","mojblocks"),keepPlaceholderOnFocus:!0,value:r,className:"mojblocks-quote__content__name",onChange:e=>a({quoteName:e})}))))]},save:()=>null}),F()((function(){(0,a.unregisterBlockType)("core/quote")})),(0,a.registerBlockType)("mojblocks/intro",{title:(0,t.__)("Intro Text","mojblocks"),icon:"editor-paragraph",category:"mojblocks",attributes:{introText:{type:"string"},introClassName:{type:"string"}},edit:l=>{const{attributes:{introText:a},className:s,setAttributes:n}=l;return n({introClassName:s}),(0,e.createElement)("div",{className:`${s} mojblocks-intro`},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{className:"govuk-grid-column-three-quarters"},(0,e.createElement)("div",{className:"mojblocks-intro--type"},(0,e.createElement)("div",{className:"mojblocks-intro__content intro"},(0,e.createElement)(o.RichText,{multiline:"p",placeholder:(0,t.__)("Some compelling text to send the message home","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{n({introText:e})},value:a})))))))},save:()=>null}),(0,a.registerBlockType)("mojblocks/reveal",{title:(0,t.__)("Reveal","mojblocks"),description:(0,t.__)("Arrow toggle to reveal text","mojblocks"),icon:"controls-play",category:"mojblocks",attributes:{revealTitle:{type:"string"},revealContent:{type:"string"},revealClassName:{type:"string"}},edit:l=>{const{setAttributes:a,attributes:{revealTitle:s,revealContent:n},className:r}=l;return a({revealClassName:r}),[(0,e.createElement)("div",{className:"mojblocks-reveal"},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{className:"govuk-grid-column-three-quarters"},(0,e.createElement)("details",{className:"govuk-details","data-module":"govuk-details",open:!0},(0,e.createElement)("summary",{className:"govuk-details__summary"},(0,e.createElement)("span",{className:"mojblocks-reveal__title govuk-details__summary-text"},(0,e.createElement)(o.RichText,{value:s,placeholder:(0,t.__)("Add reveal title","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{a({revealTitle:e})}}))),(0,e.createElement)("div",{className:"mojblocks-reveal__content govuk-details__text"},(0,e.createElement)(o.RichText,{multiline:"p",placeholder:(0,t.__)("Add reveal content","mojblocks"),keepPlaceholderOnFocus:!0,onChange:e=>{a({revealContent:e})},value:n})))))))]},save:()=>null});const U=["image"],M=[["core/heading",{placeholder:"Card heading"}]];(0,a.registerBlockType)("mojblocks/card",{apiVersion:1,title:(0,t.__)("Card","mojblocks"),description:(0,t.__)("Add a card pattern to a default page","mojblocks"),category:"mojblocks",icon:"table-row-after",keywords:[(0,t.__)("card","navigation","mojblocks")],supports:{align:["wide","full"],html:!1},attributes:{cardTitle:{type:"string"},cardExcerpt:{type:"string"},cardImageURL:{type:"string"},cardImageId:{type:"number"},cardClassName:{type:"string"},cardImagePosition:{type:"string"},cardImageShape:{type:"string"}},edit:function(l){const{setAttributes:a,className:s}=l,{cardExcerpt:n,cardImageURL:r,cardImageId:c,cardImageShape:i,cardImagePosition:m}=l.attributes,d=()=>{a({cardImageURL:null,cardImageId:null})},u=(0,e.useState)("square"),b=(0,e.useState)("center"),h=(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(g.PanelBody,{title:(0,t.__)("Image settings"),initialOpen:!0},(0,e.createElement)(g.SelectControl,{label:"Image shape",help:"",value:i,options:[{label:"1:1 (square)",value:"square"},{label:"4:3 (rectangle)",value:"rectangle"},{label:"16:9 (widescreen)",value:"widescreen"},{label:"21:9 (letterbox)",value:"letterbox"}],onChange:e=>{a({cardImageShape:e}),u(e)}}),(0,e.createElement)(g.SelectControl,{label:"Image position",help:"",value:m,options:[{label:"Top",value:"top"},{label:"Centre",value:"center"},{label:"Bottom",value:"bottom"},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top left",value:"top left"},{label:"Top right",value:"top right"},{label:"Bottom left",value:"bottom left"},{label:"Bottom right",value:"bottom right"}],onChange:e=>{a({cardImagePosition:e}),b(e)}})));return(0,e.createElement)("div",{className:`${s} mojblocks-card mojblocks-card-image`,"data-src":r},h,(0,e.createElement)("div",{className:`${s} mojblocks-card__image mojblocks-card__image--shape-${i} `+(c?"mojblocks-card__image-selected":""),style:{backgroundImage:`url(${r})`,backgroundPosition:m}},(0,e.createElement)(o.MediaUpload,{buttonProps:{className:"change-image"},onSelect:e=>a({cardImageId:e.id,cardImageURL:e.url}),allowedTypes:U,type:"image",value:c,render:({open:t})=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(g.Button,{className:"mojblocks-card__image__button "+(c?"mojblocks-card__image__button-change":"mojblocks-card__image__button-add"),onClick:t},H.upload),c&&(0,e.createElement)(g.Button,{className:"mojblocks-card__image__button mojblocks-card__image__button-remove",onClick:d},(0,e.createElement)(g.Dashicon,{icon:"dismiss"})))})),(0,e.createElement)(o.InnerBlocks,{template:M,templateLock:"all"}),(0,e.createElement)(o.RichText,{tagName:"p",placeholder:(0,t.__)("Add excerpt text...","mojblocks"),keepPlaceholderOnFocus:!0,value:n,className:"mojblocks-card-excerpt",onChange:e=>a({cardExcerpt:e})}))},save:()=>(0,e.createElement)(o.InnerBlocks.Content,null)});const{__:z}=wp.i18n,{registerBlockType:J}=wp.blocks,{RichText:W,InnerBlocks:G}=wp.blockEditor;J("mojblocks/banner",{title:z("Banner","mojblocks"),description:z("Banner with title and button","mojblocks"),category:"mojblocks",icon:"schedule",attributes:{bannerTitle:{type:"string"},buttonLink:{type:"string"},buttonLabel:{type:"string"},bannerClassName:{type:"string"}},edit:t=>{const{setAttributes:l,attributes:{bannerTitle:a,buttonLink:s,buttonLabel:n},className:r}=t;return l({bannerClassName:r}),[(0,e.createElement)("div",{className:`${r}  mojblocks-banner`},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)("div",{className:"govuk-grid-row"},(0,e.createElement)("div",{className:"govuk-grid-column-two-thirds"},(0,e.createElement)("div",{className:"mojblocks-banner__title"},(0,e.createElement)(G,{allowedBlocks:["core/heading"],template:[["core/heading",{placeholder:"Banner Title"}]],templateLock:"all"}))),(0,e.createElement)("div",{className:"govuk-grid-column-one-third"},(0,e.createElement)(o.URLInputButton,{className:"mojblocks-dropdown__input",label:z("Button Link","mojblocks"),onChange:e=>{l({buttonLink:e})},url:s}),(0,e.createElement)(W,{className:"mojblocks-banner__button govuk-button",value:n,onChange:e=>{l({buttonLabel:e})},placeholder:"Button label"})))))]},save:()=>(0,e.createElement)(G.Content,null)});const{__:Y}=wp.i18n,{registerBlockType:Q,registerBlockStyle:V}=wp.blocks,{Fragment:K}=wp.element,{RichText:X,MediaUpload:Z,InspectorControls:ee,URLInputButton:te}=wp.blockEditor,{PanelBody:le}=wp.components,ae=[["core/heading",{placeholder:"Add latest news section title"}]];new Date,Q("mojblocks/latest-news",{title:Y("Latest News","mojblocks"),description:Y("Display latest news items"),category:"mojblocks",icon:"slides",keywords:[Y("latest news"),Y("recent news"),Y("headlines")],attributes:{latestNewsHasDate:{type:"boolean",default:!0},latestNewsExpiry:{type:"numeric",default:0},latestNewsEmptyText:{type:"string",default:"No news to display."}},edit:t=>{const{setAttributes:l,attributes:{latestNewsExpiry:a,latestNewsEmptyText:s,latestNewsHasDate:n},className:r}=t;return(0,e.createElement)(K,null,(0,e.createElement)(ee,null,(0,e.createElement)(le,{title:Y("News settings"),initialOpen:!0},(0,e.createElement)(g.ToggleControl,{label:"Show/hide article dates",help:!1===n?"Dates will be hidden":"Dates will be displayed",checked:n,onChange:e=>{l({latestNewsHasDate:e})}}),(0,e.createElement)(g.TextControl,{label:"Text for no news",help:""===s?"If there are no news articles to display, the block will be blank.":"This will be shown if there are no articles to display.",value:s,onChange:e=>{l({latestNewsEmptyText:e})}}),(0,e.createElement)(g.__experimentalNumberControl,{label:"Auto-hide after how many weeks",value:a,min:"0",onChange:e=>{l({latestNewsExpiry:e})}}),(0,e.createElement)(g.__experimentalText,null,a?"Articles will expire after "+a+" weeks.":"Articles will not expire."))),(0,e.createElement)("div",{className:`mojblocks-latest-news mojblocks-latest-news--expiry-weeks-${a} ${r}`},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)(o.InnerBlocks,{template:ae,templateLock:"all"}),(0,e.createElement)("div",{className:`govuk-grid-row ${!1===n?"mojblocks-latest-news-hide-date":""} `},(0,e.createElement)("div",{className:"mojblocks-latest-news__item"},(0,e.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},(0,e.createElement)("a",{href:"#"},"Title automatically updated on preview page")),(0,e.createElement)("div",{className:"mojblocks-latest-news__date"},"Date")),(0,e.createElement)("div",{className:"mojblocks-latest-news__item"},(0,e.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},(0,e.createElement)("a",{href:"#"},"Title automatically updated on preview page")),(0,e.createElement)("div",{className:"mojblocks-latest-news__date"},"Date")),(0,e.createElement)("div",{className:"mojblocks-latest-news__item"},(0,e.createElement)("div",{className:"govuk-body mojblocks-latest-news__headline"},(0,e.createElement)("a",{href:"#"},"Title automatically updated on preview page")),(0,e.createElement)("div",{className:"mojblocks-latest-news__date"},"Date"))))))},save:()=>(0,e.createElement)(o.InnerBlocks.Content,null)}),window.wp.date;const oe=window.wp.data,se=window.wp.coreData,{Fragment:ne}=wp.element,re=new Date,ce=[["core/heading",{placeholder:"Add featured news section title"}]],{registerBlockType:ie,registerBlockStyle:me}=wp.blocks,{__:de}=wp.i18n;ie("mojblocks/featured-news",{title:de("Featured News","mojblocks"),description:de("Display featured news item"),category:"mojblocks",icon:"id-alt",keywords:[de("featured news"),de("headline news"),de("headlines")],attributes:{featuredNewsHasDate:{type:"boolean",default:!0},featuredNewsID:{type:"string",default:"0"}},edit:function({attributes:l,setAttributes:a}){const{featuredNewsID:s,featuredNewsHasDate:n,className:r}=l,{latestNews:c}=(0,oe.useSelect)((e=>{const{getEntityRecords:t,getMedia:l,getUsers:a}=e(se.store),{getSettings:s}=e(o.store),{imageSizes:n,imageDimensions:r}=s();return{latestNews:t("postType","news",{per_page:20})}})),{featuredNewsArticle:i}=(0,oe.useSelect)((e=>{if(s.length>0){const{getEntityRecord:t}=e(se.store);return{featuredNewsArticle:t("postType","news",s)}}return{featuredNewsArticle:!1}}));let m=[{label:"None",value:"0"}],d=[{title:"No news article selected",summary:"",date:"date",image:""}];if(Array.isArray(c)){for(let e=0;e<c.length;e++)c[e].summary_meta.news_story_summary&&(d[c[e].id]={title:c[e].title.rendered,summary:c[e].summary_meta.news_story_summary,date:c[e].date,image:c[e].featured_image_url},m.push({label:c[e].title.rendered,value:c[e].id}));null!=i&&s.length>0&&0==d.hasOwnProperty(s)&&(d[s]={title:i.title.rendered,summary:i.summary_meta.news_story_summary,date:i.date,image:i.featured_image_url},m.push({label:i.title.rendered,value:i.id}))}const u=(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(g.PanelBody,{title:(0,t.__)("News settings"),initialOpen:!0},(0,e.createElement)(g.SelectControl,{label:"Select news",help:"Only news articles with a summary are available for selection",value:s,options:m,onChange:e=>{a({featuredNewsID:e})}}),(0,e.createElement)(g.ToggleControl,{label:"Show/hide article dates",help:!1===n?"The date will be hidden":"The date will be displayed",checked:n,onChange:e=>{a({featuredNewsHasDate:e})}})));return Array.isArray(c)&&Array.isArray(d)?(0,e.createElement)(ne,null,u,(0,e.createElement)("div",{className:`mojblocks-featured-news mojblocks-featured-news--${s} ${r}`},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)(o.InnerBlocks,{template:ce,templateLock:"all"}),(0,e.createElement)("div",{className:`govuk-grid-row ${n?"":"mojblocks-featured-news-hide-date"} ${"0"==s||d[s].image?"":"mojblocks-featured-news--no-image"} `},(0,e.createElement)("div",{class:"mojblocks-featured-news__item"},(0,e.createElement)("div",{className:"mojblocks-featured-news__image",styles:`background:url('${d[s].image}')`},(0,e.createElement)("img",{src:d[s].image,alt:"Feature image for news article"})),(0,e.createElement)("div",{className:"mojblocks-featured-news__text"},(0,e.createElement)("div",{className:"mojblocks-featured-news__headline"},(0,e.createElement)("a",{href:"#",className:"govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline-link"},d[s].title)),(0,e.createElement)("div",{className:"govuk-body mojblocks-featured-news__summary"},d[s].summary),(0,e.createElement)("div",{className:"govuk-body-s mojblocks-featured-news__date"},function(e,t){if(!e)return"Date";if((a=new Array)[1]="January",a[2]="February",a[3]="March",a[4]="April",a[5]="May",a[6]="June",a[7]="July",a[8]="August",a[9]="September",a[10]="October",a[11]="November",a[12]="December",3!=(e=e.split("-")).length)return t.toLocaleString("en-GB",{day:"2-digit",month:"long"});var l=e[2].substring(0,2),a=" "+a[parseInt(e[1])],o=" "+e[0];return t.getFullYear()==e[0]?l+a:l+a+o}(d[s].date,re)),(0,e.createElement)("div",{className:"mojblocks-featured-news__link"},(0,e.createElement)("a",{className:"govuk-link"},"Read full article")))))))):(0,e.createElement)(ne,null,(0,e.createElement)("div",{class:"mojblocks-spinner"}),(0,e.createElement)("div",{class:"mojblocks-spinner-text govuk-body"},"Loading"))},save:()=>(0,e.createElement)(o.InnerBlocks.Content,null)});const{Fragment:ue}=wp.element,ge=new Date,be=[["core/heading",{placeholder:"Add featured document section title"}]],{registerBlockType:he,registerBlockStyle:pe}=wp.blocks,{__:ke}=wp.i18n;he("mojblocks/featured-document",{title:ke("Featured Document","mojblocks"),description:ke("Display featured document"),category:"mojblocks",icon:"id-alt",keywords:[ke("featured document")],attributes:{featuredDocumentHasDate:{type:"boolean",default:!0},featuredDocumentID:{type:"string",default:"0"}},edit:function({attributes:l,setAttributes:a}){const{featuredDocumentID:s,featuredDocumentHasDate:n,className:r}=l,{allDocuments:c}=(0,oe.useSelect)((e=>{const{getEntityRecords:t,getMedia:l,getUsers:a}=e(se.store),{getSettings:s}=e(o.store),{imageSizes:n,imageDimensions:r}=s();return{allDocuments:t("postType","document",{per_page:-1})}}));let i=[{label:"None",value:"0"}],m=[{title:"No document selected",summary:"",date:"date",image:""}];if(Array.isArray(c))for(let e=0;e<c.length;e++)m[c[e].id]={title:c[e].title.rendered,date:c[e].date},i.push({label:c[e].title.rendered,value:c[e].id});const d=(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(g.PanelBody,{title:(0,t.__)("Featured Document settings"),initialOpen:!0},(0,e.createElement)(g.SelectControl,{label:"Select document",value:s,options:i,onChange:e=>{a({featuredDocumentID:e})}}),(0,e.createElement)(g.ToggleControl,{label:"Show/hide publish date",help:!1===n?"The date will be hidden":"The date will be displayed",checked:n,onChange:e=>{a({featuredDocumentHasDate:e})}})));return Array.isArray(c)&&Array.isArray(m)?(0,e.createElement)(ue,null,d,(0,e.createElement)("div",{className:`mojblocks-featured-document ${r}`},(0,e.createElement)("div",{className:"govuk-width-container"},(0,e.createElement)(o.InnerBlocks,{template:be,templateLock:"all"}),(0,e.createElement)("div",{className:`govuk-grid-row ${n?"":"mojblocks-featured-document-hide-date"} `},(0,e.createElement)("div",{class:"mojblocks-featured-document__item"},(0,e.createElement)("div",{className:"mojblocks-featured-document__text"},(0,e.createElement)("div",{className:"mojblocks-featured-document__headline"},(0,e.createElement)("a",{href:"#",className:"govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-document__headline-link"},m[s].title)),(0,e.createElement)("div",{className:"govuk-body-s mojblocks-featured-document__date"},function(e,t){if(!e)return"Date";if((a=new Array)[1]="January",a[2]="February",a[3]="March",a[4]="April",a[5]="May",a[6]="June",a[7]="July",a[8]="August",a[9]="September",a[10]="October",a[11]="November",a[12]="December",3!=(e=e.split("-")).length)return t.toLocaleString("en-GB",{day:"2-digit",month:"long"});var l=e[2].substring(0,2),a=" "+a[parseInt(e[1])],o=" "+e[0];return t.getFullYear()==e[0]?l+a:l+a+o}(m[s].date,ge)))))))):(0,e.createElement)(ue,null,(0,e.createElement)("div",{class:"mojblocks-spinner"}),(0,e.createElement)("div",{class:"mojblocks-spinner-text govuk-body"},"Loading"))},save:()=>(0,e.createElement)(o.InnerBlocks.Content,null)}),F()((()=>{(0,a.unregisterBlockStyle)("core/button",["outline","squared","fill"]),(0,a.registerBlockStyle)("core/button",[{name:"mojblocks-cta-button",label:(0,t.__)("Button - CTA style","mojblocks"),isDefault:!0}]),(0,a.registerBlockStyle)("core/buttons",[{name:"mojblocks-cta-button",label:(0,t.__)("Button - CTA style","mojblocks"),isDefault:!0}])}));const{addFilter:ve}=wp.hooks,{createHigherOrderComponent:_e}=wp.compose;ve("editor.BlockEdit","core/file",_e((t=>l=>{if("core/file"!==l.name)return(0,e.createElement)(t,{...l});const a="("+function(e=""){return e.slice(2+(e.lastIndexOf(".")-1>>>0))}(l.attributes.href).toUpperCase()+")";return l.attributes.downloadButtonText=a,(0,e.createElement)(t,{...l})}),"addFileExtention"))})()})();