const V=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};V();class h{constructor(){this.eventsListeners={},this.changeDetections=new Array}on(e,n){return this.eventsListeners[e]||(this.eventsListeners[e]=[]),this.eventsListeners[e].push(n),this}detectChanges(){this.changeDetections.forEach(e=>{e()})}onChangesDetected(e){this.changeDetections.push(e)}getEventsListeners(){return this.eventsListeners}}class u extends h{constructor(...e){super();this.content=e}getContent(){return this.content}setContent(...e){this.content=e,this.detectChanges()}}class x extends u{}class f extends u{}class p extends u{}class L extends h{}class P extends h{getValue(){return this.value}setValue(e){return this.value=e,this.detectChanges(),this}}class A extends P{}class b extends u{constructor(){super(...arguments);this.align="row"}getAlign(){return this.align}setAlign(e){return this.align=e,this}}class g extends h{constructor(){super(...arguments);this.items=new Array}getItems(){return this.items}setItems(e){return this.items=e,this.detectChanges(),this}addItem(e){return this.items.push(e),this.detectChanges(),this}removeItem(e){return this.items=this.items.filter(n=>n!==e),this.detectChanges(),this}}class c extends u{}class E extends u{}class l extends u{constructor(){super(...arguments);this.size="xl"}getSize(){return this.size}setSize(e){return this.size=e,this}}function S(t,e){let n=t;return!!(e==null?void 0:e.applyOnChangeCallbackAfterInit)&&!!(e==null?void 0:e.onChange)&&e.onChange(n),[()=>n,o=>{n=o,(e==null?void 0:e.onChange)&&e.onChange(n)}]}const F={name:"Octopus",version:"0.0.0",fontFamily:"Arial",primaryColor:"#2e2ed6",darkTextColor:"#313131",lightTextColor:"#fdfdfd"};let z;function H(t){const e=document.createElement("style");document.head.appendChild(e);const{fontFamily:n,primaryColor:s,lightTextColor:i,darkTextColor:o}=t,r=e.sheet;if(!r)throw new Error;r.insertRule(`
body{
    font-family: '${n}';
    color: ${o};
    background-color: ${i};
    font-size: 1rem;
    padding: 0;
    margin: 0;
}
`),r.insertRule(`
h1, h2, h3, h4, h5, h6, p, hr {
    margin-top: 0;
    margin-bottom: 1rem;
}
`),r.insertRule(`
.box {
    color: ${i};
    background-color: ${s};
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
}
`),r.insertRule(`
.layout {
    display: flex;
    flex-direction: row;
    align-items: center;
}
`),r.insertRule(`
.container {
margin: auto;
padding: 0 1rem;
box-sizing: border-box;
}
`),r.insertRule(`
button {
    color: ${i};
    background-color: ${s};
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
}
`),r.insertRule(`
@media screen and (min-width: 1000px){
    .container {
        width: 1000px;
    }
}
`),r.insertRule(`
@media screen and (min-width: 800px) and (max-width: 999px){
    .container {
        width: 800px;
    }
}
`),r.insertRule(`
@media screen and (min-width: 600px) and (max-width: 799px){
    .container {
        width: 600px;
    }
}
`),r.insertRule(`
@media screen and (max-width: 599px){
    .container {
        width: 100%;
    }
}
`),z=t.name}class v extends h{constructor(e){super();this.config=e,this.activeRoute=Object.keys(this.config.routes)[0]}navigate(e){if(this.activeRoute!==e){if(!Object.keys(this.config.routes).includes(e))throw new Error(`"${e} is not defined as route in your router.`);this.activeRoute=e,this.detectChanges()}}getActiveRouteController(){return this.config.routes[this.activeRoute]}}const M={[Text.name]:"p",[f.name]:"button",[g.name]:"ul",[c.name]:"li",[v.name]:"div",[x.name]:"div",[p.name]:"div",[L.name]:"hr",[b.name]:"div",[A.name]:"input"};function N(t){return M[t.constructor.name]}function R(t,e){if(t instanceof u&&(e.innerHTML="",t.getContent().forEach(n=>{n!=null&&(n instanceof h?C(e,n):e.appendChild(new Text(n)))})),t instanceof g&&(e.innerHTML="",C(e,...t.getItems())),t instanceof v){e.innerHTML="";const n={mount(...s){C(e,...s)}};t.getActiveRouteController()(n)}t instanceof x&&e.classList.add("box"),t instanceof p&&e.classList.add("container"),t instanceof b&&e.classList.add("layout")}function j(t){let e;if(t instanceof l)switch(t.getSize()){case"xs":e="h6";break;case"s":e="h5";break;case"sm":e="h4";break;case"m":e="h3";break;case"l":e="h2";break;case"xl":default:e="h1";break}else e=N(t);if(!e)throw new Error("Element not defined");const n=document.createElement(e);return R(t,n),n}let O=!0;function C(t,...e){if(O&&(O=!1,z||H(F)),!t)throw new Error("Root is undefined");e.forEach(n=>{const s=j(n);t.appendChild(s);const i=n.getEventsListeners();Object.keys(i).forEach(o=>{i[o].forEach(r=>{s.addEventListener(o,r)})}),n.onChangesDetected(()=>{R(n,s)})})}function I(t){document.title=t}const k="Ouikit - documentation";function q({mount:t}){const e=new x("I am a text in a box"),n=new x(new l("I am a title in a box"),new L,new E("I'm a text in a box"));t(e,n)}function K({mount:t}){const e=new f("I am a button");t(e)}function U({mount:t}){const e=new p(new l("I am a title in a container"));t(e)}function G({mount:t}){const e=new L;t(e)}function J({mount:t}){const e=new g,n=new c("I am an item of the list");e.addItem(n);const s=new c("I am a second item of the list");e.addItem(s),t(e)}var a;(function(t){t.box="box",t.title="title",t.text="text",t.container="container",t.divider="divider",t.button="button",t.list="list"})(a||(a={}));function Q({mount:t}){const e=new E("I'm a paragraph !"),n=new E("I'm an other paragraph.");t(e,n)}function W({mount:t}){const e=new l("I'm a title"),n=new l("I'm a sub title").setSize("l"),s=new l("I'm a sub sub title").setSize("m"),i=new l("I'm a smaller title").setSize("sm"),o=new l("I'm a smaller title").setSize("s"),r=new l("I'm a smaller title").setSize("xs");t(e,n,s,i,o,r)}function X({mount:t}){I("Components | "+k);const e=new g().addItem(new c("Box").on("click",()=>{n.navigate(a.box)})).addItem(new c("Title").on("click",()=>{n.navigate(a.title)})).addItem(new c("Text").on("click",()=>{n.navigate(a.text)})).addItem(new c("Container").on("click",()=>{n.navigate(a.container)})).addItem(new c("Divider").on("click",()=>{n.navigate(a.divider)})).addItem(new c("Button").on("click",()=>{n.navigate(a.button)})).addItem(new c("List").on("click",()=>{n.navigate(a.list)})),n=new v({routes:{[a.box]:q,[a.title]:W,[a.text]:Q,[a.container]:U,[a.divider]:G,[a.button]:K,[a.list]:J}});t(e,n)}function Y({mount:t}){const e=new f,[n,s]=S({count:0},{applyOnChangeCallbackAfterInit:!0,onChange:({count:i})=>{e.setContent(`Click to increment : +${i}`)}});e.on("click",()=>{s({count:n().count+1})}),t(e)}var w;(function(t){t.counter="counter",t.todolist="todolist"})(w||(w={}));function Z({mount:t}){const e=new g,[n,s]=S({tasks:new Array},{onChange({tasks:d}){e.setItems(d.map(T=>{const D=new c(T.content);return D.on("click",()=>s({tasks:d.filter(B=>B.id!==T.id)})),D}))}}),i=()=>{const d=n().tasks.length;s({tasks:n().tasks.concat([{id:d,content:"Nouvelle t\xE2che "+d}])})},o=new f("Create a new task").on("click",i),r=new A().on("keypress",d=>{(d==null?void 0:d.code)==="Enter"&&(i(),r.setValue(""))}),$=new b(r,o);t($,e)}function _({mount:t}){I("Examples | "+k);const e=new g,n=new v({routes:{[w.counter]:Y,[w.todolist]:Z}}),s=new c("Counter").on("click",()=>{n.navigate(w.counter)});e.addItem(s);const i=new c("Todolist").on("click",()=>{n.navigate(w.todolist)});e.addItem(i),t(e,n)}function ee({mount:t}){I("Home | "+k),t(new l("In progress"))}var m;(function(t){t.landingPage="",t.components="components",t.examples="examples"})(m||(m={}));const y=new v({routes:{[m.landingPage]:ee,[m.components]:X,[m.examples]:_}}),te=new x(new p(new b(new l("Documentation").on("click",()=>{y.navigate(m.landingPage)}),new b(new f("Components").on("click",()=>{y.navigate(m.components)}),new f("Examples").on("click",()=>{I("Examples | "+k),y.navigate(m.examples)}))))),ne=new p(y);C(document.querySelector("#root"),te,ne);
