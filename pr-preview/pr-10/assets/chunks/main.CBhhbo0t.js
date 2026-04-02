var j=Object.defineProperty;var O=t=>{throw TypeError(t)};var z=(t,s,e)=>s in t?j(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var m=(t,s,e)=>z(t,typeof s!="symbol"?s+"":s,e),J=(t,s,e)=>s.has(t)||O("Cannot "+e);var u=(t,s,e)=>(J(t,s,"read from private field"),e?e.call(t):s.get(t)),f=(t,s,e)=>s.has(t)?O("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),y=(t,s,e,r)=>(J(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e);import{A as b,a as N,b as n}from"./lit-element.CBn2YVps.js";import{e as W,i as Q}from"./directive.CvdRHFdJ.js";import{p as X}from"./directive-helpers.Bj3rQkfn.js";import{n as C}from"./when.BR7zwNJC.js";import{e as Y,a as x}from"./addCommonStyleSheet.oXwlTwx_.js";import{g as D}from"./getElement.CdRlZPdn.js";import{e as E,f as T}from"./GeoJSON.Dl177eAw.js";import{W as tt}from"./WKT.AEVGhZxU.js";import"./extent.B6zYA2nd.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=W(class extends Q{constructor(){super(...arguments),this.key=b}render(t,s){return this.key=t,s}update(t,[s,e]){return s!==this.key&&(X(t),this.key=s),e}}),st=t=>{t.hoverInteraction=t.eoxMap.selectInteractions.SelectLayerHoverInteraction,t.clickInteraction=t.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{t.requestUpdate()};t.hoverInteraction.selectStyleLayer.on("change",s),t.clickInteraction.selectStyleLayer.on("change",s)},rt=(t,s,e)=>{if(t.clickId===s)return;const r=e?[]:[s];t.hoverInteraction.highlightById(r)},it=(t,s,e)=>{t.stopPropagation();const r=Number(t.target.getAttribute("index")),i=s.drawLayer.getSource().getFeatures()[r];s.drawLayer.getSource().removeFeature(i),s.drawnFeatures.splice(r,1),e.emitDrawnFeatures(),s.requestUpdate()},U={duration:750,padding:[20,20,20,20]},G={type:"FeatureCollection",features:[]},at=(t,s)=>{const{clickId:e,drawLayer:r,olMap:i,clickInteraction:a}=s,l=a.getId(t);if(e===l){const c=r.getSource().getExtent();i.getView().fit(c,U),a.highlightById([])}else{const c=s.eoxMap.projection||"EPSG:3857",h=s.eoxDrawTools.projection,p=t.clone().getGeometry().transform(h,c).getExtent();a.highlightById([l]),i.getView().fit(p,U)}s.requestUpdate()};class _ extends N{constructor(){super();m(this,"hoverInteraction");m(this,"clickInteraction");m(this,"hoverId");m(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(e){it(e,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(e){at(e,this)}_handleHoverFeature(e,r=!1){rt(this,e,r)}firstUpdated(){st(this)}createRenderRoot(){return this}render(){var r,i;this.hoverId=(r=this.hoverInteraction)==null?void 0:r.selectedFids[0],this.clickId=(i=this.clickInteraction)==null?void 0:i.selectedFids[0];const e=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return n`
      <ul class="list no-space">
        ${this.drawnFeatures.map((a,l)=>{var S;const o=l+1,c=Object.values(this.eoxMap.selectInteractions)[0].getId(a),h=this.hoverId===c,p=this.clickId===c,g=h?"surface-container-low":p?"fill":b,v=(S=this.featureNameKey)==null?void 0:S.split("."),F=a.get(this.featureNameKey)||(v==null?void 0:v.reduce((k,P)=>k==null?void 0:k[P],{...a.getProperties()})),d=F||`${this.featureName} ${o}`;return et(o,n`
              <li
                class="${g} no-round"
                @mouseover=${()=>this._handleHoverFeature(c)}
                @mouseout=${()=>this._handleHoverFeature(c,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
              >
                <div class="max">
                  <span class="title">${d}</span>
                </div>
                <button
                  index=${l}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":n`<i class="small">${e}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}m(_,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",_);const nt=t=>{const{multipleFeatures:s,drawnFeatures:e,currentlyDrawing:r}=t,i=!s&&(e==null?void 0:e.length)>0||r,a=!(e!=null&&e.length)&&!r;return{drawDisabled:i,discardDisabled:a}};function lt(t){navigator.clipboard.writeText(t).then(function(){},function(s){console.error("Could not copy text: ",s)})}const ot=(t,s)=>new E().writeFeaturesObject(t,s),ct=(t,s)=>new tt().writeFeatures(t,s);var L,M;class K extends N{constructor(){super();f(this,L,!0);f(this,M,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:e,discardDisabled:r}=nt(this);y(this,L,e),y(this,M,r)}createRenderRoot(){return this}render(){this.updateButtonStates();const e=this.currentlyDrawing?"drawing":"draw",r={Polygon:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:n`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},i=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,a=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,l=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,o=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,c=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return n`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${u(this,L)||b}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?e:n`
                  <i class="small"
                    >${this.select?i:r[this.type]}</i
                  >
                  <div class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${u(this,M)||b}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":n`
                  <i class="small">${a}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${C(this.showEditor,()=>n`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":n`
                    <i class="small">${l}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${C(this.importFeatures,()=>n`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Import features":""}"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              ${this.unstyled?"import":n`
                    <i class="small">${o}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${C(this.showEditor,()=>n`
          <div id="editor" class="field textarea border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>lt(this.geoJSON)}
            >
              ${this.unstyled?"copy":n`
                    <i class="tiny">${c}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}L=new WeakMap,M=new WeakMap,m(K,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",K);x();const dt=`
  ${Y}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`,ut=t=>{(()=>{var e;if(t.emitDrawnFeatures(),!t.multipleFeatures)(e=t.draw)==null||e.setActive(!1),t.selectionEvents.removeSelectionEvent(),t.currentlyDrawing=!1;else if(t.continuous)if(!t.layerId)t.drawLayer.getSource().clear(),t.drawnFeatures=[];else{const i=t.drawLayer.getSource().getFeatures().at(-1);if(t.drawLayer.getSource().clear(),!i)return;t.drawLayer.getSource().addFeature(i),t.drawnFeatures=[i]}})(),t.requestUpdate()},ht=t=>{const s=()=>{var r;t.drawLayer.set("isDrawingEnabled",!0),(r=t.draw)==null||r.setActive(!0),t.selectionEvents.addSelectionEvent()},e=()=>{t.currentlyDrawing=!0,t.requestUpdate()};s(),e(),document.addEventListener("keydown",({key:r})=>{var i;r==="Escape"&&t.currentlyDrawing&&((i=t.draw)==null||i.setActive(!1),t.currentlyDrawing=!1,t.requestUpdate())})},B=(t,s)=>{var h,p,g,v,F;const r=D(t.for),i=r.map,a="0, 65, 112";t.drawLayer=r.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((h=t.featureStyles)==null?void 0:h.layer)||{"fill-color":`rgba(${a}, 0.1)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${a}, 1)`},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:t.type,modify:t.allowModify,stopClick:!0,style:((p=t.featureStyles)==null?void 0:p.layer)||{"fill-color":`rgba(${a}, 0.1)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${a}, 1)`}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((g=t.featureStyles)==null?void 0:g.hover)||{"fill-color":`rgba(${a}, 0.2)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((v=t.featureStyles)==null?void 0:v.click)||{"fill-color":`rgba(${a}, 0.2)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2}}}]}),t.draw=r.interactions.drawInteraction,t.modify=r.interactions.drawInteractionmodify,A(t,r,t.layerId);const l=()=>t.onModifyEnd(),o=()=>ut(t);return(F=t.modify)==null||F.on("modifyend",l),r.addEventListener("addfeatures",o),t.drawnFeatures&&t.drawLayer.getSource().addFeatures(t.drawnFeatures),{EoxMap:r,OlMap:i,reset:d=>{var S;!d.eoxMap||!d.drawLayer||(d.drawLayer.getSource().clear(),d.eoxMap.map.removeLayer(d.drawLayer),(S=d.modify)==null||S.un("modifyend",l),d.eoxMap.removeEventListener("addfeatures",o),d.layerId||(d.draw=null),d.modify=null)}}},pt=t=>{const s=()=>{var i;t.drawnFeatures=[],(i=t.draw)==null||i.setActive(!1),!!t.layerId&&t.selectionEvents.removeSelectionEvent(),t.drawLayer.getSource().clear(),t.geoJSON=null},e=()=>{t.emitDrawnFeatures(),t.currentlyDrawing=!1,t.requestUpdate()};s(),e()},yt=(t,s)=>{setTimeout(()=>{const r=t.drawLayer.getSource().getFeatures(),i=t.eoxMap.projection||"EPSG:3857",a=t.projection;t.drawnFeatures=a?r.map(o=>{o=o.clone();const c=o.getGeometry().transform(i,a);return o.setGeometry(c),o}):r;let l;switch(t.format){case"geojson":l=ot(t.drawnFeatures);break;case"wkt":l=ct(t.drawnFeatures);break;case"feature":l=t.drawnFeatures;break;default:l=t.drawnFeatures;break}t.updateGeoJSON(),t.requestUpdate(),s(l)},0)},ft=t=>{const s=i=>{(i==null?void 0:i.detail.id)!=="SelectLayerClickInteraction"||!i.detail.feature||(typeof i.detail.feature.getGeometry().getCoordinates!="function"&&(i.detail.feature=T(i.detail.feature)),t.drawLayer.getSource().addFeature(i.detail.feature),t.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{if(t.layerId){const i=t.eoxMap.selectInteractions.SelectLayerHoverInteraction;i==null||i.setActive(!0),t.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var a;const i=(a=t.eoxMap.selectInteractions)==null?void 0:a.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i==null||i.setActive(!1)),t.eoxMap.removeEventListener("select",s)}}},A=(t,s,e)=>{var c,h,p,g;if(!e||!s)return;const r=s.getLayerById(e),i=r?JSON.parse(JSON.stringify(r.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${e} not found`);return}const a={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((c=t.featureStyles)==null?void 0:c.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},l={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:t.multipleFeatures,modify:t.allowModify,active:!1,style:((h=t.featureStyles)==null?void 0:h.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[a,l],s.addOrUpdateLayer(i),R(s.layers,e,[i]);const o=t.draw;t.draw=s.selectInteractions.SelectLayerClickInteraction,o==null||o.setActive(!1),(p=s.selectInteractions.SelectLayerClickInteraction)==null||p.setActive(!1),(g=s.selectInteractions.SelectLayerHoverInteraction)==null||g.setActive(!1)};function R(t,s,e){const r=t.findIndex(i=>i.properties.id===s);if(r!==-1)return t.splice(r,1,...e),t;for(const i of t)if(i.type==="Group"){const a=R(i.layers,s,e);a!=null&&a.length&&(i.layers=a)}return t}const gt=(t,s,e,r)=>{if(s){if(e){r&&e!==r&&q(t,s),A(t,s,e);return}if(!e&&r){q(t,s);return}}};function q(t,s){s&&(t.discardDrawing(),t.selectionEvents.removeSelectionEvent(),t.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}function mt(t,s){function e(a){a.preventDefault(),a.stopPropagation()}function r(a){a.srcElement.style.opacity="0.4"}function i(a){a.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(a=>{s.addEventListener(a,e,!1),["dragenter","dragover"].includes(a)?s.addEventListener(a,r,!1):s.addEventListener(a,i,!1)}),s.addEventListener("drop",a=>Z(a,t),!1)}function vt(t){t.preventDefault(),t.stopPropagation()}function Z(t,s){vt(t);let e;"dataTransfer"in t&&t.dataTransfer?e=t.dataTransfer.files:t.target&&"files"in t.target?e=t.target.files:e=[],Array.from(e).forEach(r=>wt(r,s)),t.target&&"value"in t.target&&(t.target.value="")}function wt(t,s){const e=new FileReader;e.readAsText(t),e.onloadend=function(){typeof e.result=="string"&&s.handleFeatureChange(e.result)}}var w,H,$,V,I;class Ht extends N{constructor(){super();f(this,w);f(this,H);f(this,$);f(this,V);f(this,I);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(e){y(this,I,e),e&&(this.multipleFeatures=!0)}get continuous(){return u(this,I)}set layerId(e){gt(this,this.eoxMap,e,u(this,V)),y(this,V,e)}get layerId(){return u(this,V)}startDrawing(){ht(this)}discardDrawing(){pt(this)}handleFeatureChange(e,r=!1,i=!0){this.eoxMap.parseTextToFeature(e||JSON.stringify(G),this.drawLayer,this.eoxMap,r,i)}handleFilesChange(e){Z(e,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){y(this,$,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||G,void 0,2))}emitDrawnFeatures(){yt(this,r=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:r}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:e,OlMap:r,reset:i}=B(this,this.multipleFeatures);this.resetLayer=i,this.eoxMap=e,y(this,H,r),this.selectionEvents=ft(this),this.importFeatures&&mt(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(e){if(e.has("for")){const{EoxMap:r,OlMap:i}=B(this,this.multipleFeatures);this.eoxMap=r,y(this,H,i)}e.get("type")&&e.get("type")!==this.type&&(this.resetLayer(this),this.firstUpdated(),this.currentlyDrawing=!1)}get eoxMap(){return u(this,w)}set eoxMap(e){const r=u(this,w);y(this,w,e),this.requestUpdate("eoxMap",r)}connectedCallback(){if(super.connectedCallback(),this.drawLayer&&this.eoxMap){const{reset:e}=B(this,this.multipleFeatures);this.resetLayer=e}}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resetLayer)==null||e.call(this,this)}render(){var e;return n`
      <style>
        :host { display: block; }
        ${!this.unstyled&&dt}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:r=>this.handleFeatureChange(r.target.value,!0),import:r=>this.handleFilesChange(r)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${u(this,$)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((e=this.drawnFeatures)!=null&&e.length)?n`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${u(this,H)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:b}
    `}}w=new WeakMap,H=new WeakMap,$=new WeakMap,V=new WeakMap,I=new WeakMap;customElements.define("eox-drawtools",Ht);export{Ht as EOxDrawTools};
