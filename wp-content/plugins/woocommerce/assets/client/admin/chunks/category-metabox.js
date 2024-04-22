"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[587],{25377:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(69307),n=a(65736),c=a(31709),o=a(96483),l=a(94333),s=a(86020),m=a(74617),i=a(14599),d=a(86989),u=a.n(d);const _={};function p(e,t=[]){for(const a of e){const e={label:a.name,value:a.term_id.toString(),children:[]};_[a.term_id]=a,t.push(e),a.children?.length&&p(a.children,e.children)}return t.sort(((e,t)=>{const a=e.label.toUpperCase(),r=t.label.toUpperCase();return a<r?-1:a>r?1:0})),t}async function g(e){const t=await u()({url:(0,o.addQueryArgs)(new URL("admin-ajax.php",(0,m.getSetting)("adminUrl")).toString(),{term:e,action:"woocommerce_json_search_categories_tree",security:wc_product_category_metabox_params.search_categories_nonce}),method:"GET"});return t?p(Object.values(t)):[]}const h=(0,r.forwardRef)((({selectedCategoryTerms:e,onChange:t},a)=>{const[o,m]=(0,r.useState)(""),[d,u]=(0,r.useState)([]),p=(0,r.useCallback)((e=>{e&&e.length>0&&(0,i.recordEvent)("product_category_search",{page:"product",async:!0,search_string_length:e.length}),g(e).then((e=>{u(Object.values(e))}))}),[u]),h=(0,l.useDebounce)(p,250);return(0,r.useEffect)((()=>{h(o)}),[o]),(0,r.useImperativeHandle)(a,(()=>({resetInitialValues(){g("").then((e=>{u(Object.values(e))}))}})),[]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"product-add-category__tree-control"},(0,r.createElement)(s.TreeSelectControl,{alwaysShowPlaceholder:!0,options:d,value:e.map((e=>e.term_id.toString())),onChange:e=>{t(e.map((e=>_[e]))),(0,i.recordEvent)("product_category_update",{page:"product",async:!0,selected:e.length})},selectAllLabel:!1,onInputChange:m,placeholder:(0,n.__)("Add category","woocommerce"),includeParent:!0,minFilterQueryLength:2,clearOnSelect:!1,individuallySelectParent:!0})),(0,r.createElement)("ul",{className:"categorychecklist form-no-clear tagchecklist",id:c.z5+"checklist"},e.map((a=>(0,r.createElement)("li",{key:a.term_id},(0,r.createElement)("button",{type:"button",className:"ntdelbutton",onClick:()=>{const r=e.filter((e=>e.term_id!==a.term_id));t(r)}},(0,r.createElement)("span",{className:"remove-tag-icon","aria-hidden":"true"}),(0,r.createElement)("span",{className:"screen-reader-text"},(0,n.sprintf)((0,n.__)("Remove term: %s","woocommerce"),a.name))),a.name)))))})),y=({selected:e,onChange:t})=>{const[a,n]=(0,r.useState)([]);(0,r.useEffect)((()=>{u()({url:(0,o.addQueryArgs)(new URL("admin-ajax.php",(0,m.getSetting)("adminUrl")).toString(),{action:"woocommerce_json_search_taxonomy_terms",taxonomy:c.z5,limit:10,orderby:"count",order:"DESC",security:wc_product_category_metabox_params.search_taxonomy_terms_nonce}),method:"GET"}).then((e=>{e&&n(e.filter((e=>e.count>0)))}))}),[]);const l=e.map((e=>e.term_id));return(0,r.createElement)("ul",{className:"categorychecklist form-no-clear",id:c.z5+"checklist-pop"},a.map((a=>{const n=`in-popular-${c.z5}-${a.term_id}`;return(0,r.createElement)("li",{key:a.term_id,className:"popular-category"},(0,r.createElement)("label",{className:"selectit",htmlFor:n},(0,r.createElement)("input",{type:"checkbox",id:n,checked:l.includes(a.term_id),onChange:()=>{l.includes(a.term_id)?t(e.filter((e=>e.term_id!==a.term_id))):t([...e,a])}}),a.name))})))};function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},w.apply(this,arguments)}var b=a(67221);function E(e){return e?.name||""}function v(e){return String(e?.term_id)}const f=({selectedCategoryTerms:e,onChange:t})=>{const[a,l]=(0,r.useState)(!1),[d,_]=(0,r.useState)(""),[p,g]=(0,r.useState)(""),[h,y]=(0,r.useState)(),[f,S]=(0,r.useState)([]),{currentUserCan:C}=(0,b.useUser)(),k=C("edit_product_terms"),N=(0,r.useCallback)((async(e="")=>(S([]),u()({url:(0,o.addQueryArgs)(new URL("admin-ajax.php",(0,m.getSetting)("adminUrl")).toString(),{term:e,action:"woocommerce_json_search_categories",security:wc_product_category_metabox_params.search_categories_nonce}),method:"GET"}).then((e=>(e&&S(Object.values(e)),[]))))),[]),{isFetching:x,...z}=(0,s.useAsyncFilter)({filter:N});return k?(0,r.createElement)("div",{id:c.z5+"-adder"},(0,r.createElement)("a",{id:"product_cat-add-toggle",href:"#taxonomy-"+c.z5,className:"taxonomy-add-new",onClick:()=>l(!a),"aria-label":(0,n.__)("Add new category","woocommerce")},(0,n.__)("+ Add new category","woocommerce")),a&&(0,r.createElement)("div",{id:"product_cat-add",className:"category-add"},(0,r.createElement)("label",{className:"screen-reader-text",htmlFor:"newproduct_cat"},(0,n.__)("Add new category","woocommerce")),(0,r.createElement)("input",{type:"text",name:"newproduct_cat",id:"newproduct_cat",className:"form-required",placeholder:(0,n.__)("New category name","woocommerce"),value:d,onChange:e=>_(e.target.value),"aria-required":"true"}),(0,r.createElement)("label",{className:"screen-reader-text",htmlFor:"newproduct_cat_parent"},(0,n.__)("Parent category:","woocommerce")),(0,r.createElement)(s.__experimentalSelectControl,w({},z,{label:(0,n.__)("Parent category:","woocommerce"),items:f,selected:h||null,placeholder:(0,n.__)("Find category","woocommerce"),onSelect:y,getItemLabel:E,getItemValue:v,onRemove:()=>y(void 0)})),p&&(0,r.createElement)("p",{className:"category-add__error"},p),(0,r.createElement)("input",{type:"button",id:"product_cat-add-submit",className:"button category-add-submit",value:(0,n.__)("Add new category","woocommerce"),disabled:!d.length,onClick:a=>{var r;if(a.preventDefault(),!d)return;const n={name:d,parent:null!==(r=h?.term_id)&&void 0!==r?r:-1};g(""),u()({path:"/wc/v3/products/categories",data:n,method:"POST"}).then((a=>{a&&((0,i.recordEvent)("product_category_add",{category_id:a.id,parent_id:a.parent,parent_category:a.parent>0?"Other":"None",page:"product",async:!0}),t([...e,{term_id:a.id,name:a.name,count:a.count}]),_(""),y(void 0),l(!1))})).catch((e=>{e&&e.message&&g(e.message)}))}}))):null};let S="";window.getUserSetting&&(S=window.getUserSetting(c.z5+"_tab")||"");const C="pop",k="all",N=({initialSelected:e})=>{const[t,a]=(0,r.useState)(e),o=(0,r.useRef)(null),[l,s]=(0,r.useState)(S===C?S:k);return(0,r.createElement)("div",{id:"taxonomy-"+c.z5,className:"categorydiv category-async-metabox"},(0,r.createElement)("ul",{className:"category-tabs"},(0,r.createElement)("li",{className:l===k?"tabs":""},(0,r.createElement)("a",{href:"#"+c.z5+"-"+k,onClick:e=>{e.preventDefault(),s(k),window.deleteUserSetting&&window.deleteUserSetting(c.z5+"_tab")}},(0,n.__)("All items","woocommerce"))),(0,r.createElement)("li",{className:l===C?"tabs":""},(0,r.createElement)("a",{href:"#"+c.z5+"-"+C,onClick:e=>{e.preventDefault(),s(C),window.setUserSetting&&window.setUserSetting(c.z5+"_tab",C)}},(0,n.__)("Most used","woocommerce")))),(0,r.createElement)("div",{className:"tabs-panel",id:c.z5+"-"+C,style:l!==C?{display:"none"}:{}},(0,r.createElement)("ul",{id:c.z5+"checklist-"+C,className:"categorychecklist form-no-clear"},(0,r.createElement)(y,{selected:t,onChange:a}))),(0,r.createElement)("div",{className:"tabs-panel",id:c.z5+"-"+k,style:l!==k?{display:"none"}:{}},(0,r.createElement)(h,{selectedCategoryTerms:t,onChange:a,ref:o})),(t||[]).map((e=>(0,r.createElement)("input",{key:e.term_id,type:"hidden",value:e.term_id,name:"tax_input["+c.z5+"][]"}))),0===t.length&&(0,r.createElement)("input",{type:"hidden",value:"",name:"tax_input["+c.z5+"][]"}),(0,r.createElement)(f,{selectedCategoryTerms:t,onChange:e=>{a(e),o.current&&o.current.resetInitialValues()}}))}}}]);