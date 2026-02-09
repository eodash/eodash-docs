var x=Object.defineProperty;var G=e=>{throw TypeError(e)};var z=(e,s,t)=>s in e?x(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var v=(e,s,t)=>z(e,typeof s!="symbol"?s+"":s,t),J=(e,s,t)=>s.has(e)||G("Cannot "+t);var h=(e,s,t)=>(J(e,s,"read from private field"),t?t.call(e):s.get(e)),g=(e,s,t)=>s.has(e)?G("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),f=(e,s,t,r)=>(J(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t);import{A as L,a as O,b as n}from"./lit-element.CBn2YVps.js";import{e as W,i as Q}from"./directive.CvdRHFdJ.js";import{p as X}from"./directive-helpers.Bj3rQkfn.js";import{n as B}from"./when.BR7zwNJC.js";import{e as Y,a as D}from"./addCommonStyleSheet.oXwlTwx_.js";import{e as E,g as T,f as ee,h as te}from"./GeoJSON.BWWGcl_h.js";import{g as se}from"./getElement.CdRlZPdn.js";import{W as re}from"./WKT.CzA654-4.js";import"./extent.B6zYA2nd.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=W(class extends Q{constructor(){super(...arguments),this.key=L}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(X(e),this.key=s),t}}),ae=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},ne=(e,s,t)=>{if(e.clickId===s)return;const r=t?[]:[s];e.hoverInteraction.highlightById(r)},le=(e,s,t)=>{e.stopPropagation();const r=Number(e.target.getAttribute("index")),i=s.drawLayer.getSource().getFeatures()[r];s.drawLayer.getSource().removeFeature(i),s.drawnFeatures.splice(r,1),t.emitDrawnFeatures(),s.requestUpdate()},U={duration:750,padding:[20,20,20,20]},q={type:"FeatureCollection",features:[]},oe=(e,s)=>{const{clickId:t,drawLayer:r,olMap:i,clickInteraction:a}=s,l=a.getId(e);if(t===l){const c=r.getSource().getExtent();i.getView().fit(c,U),a.highlightById([])}else{const c=s.eoxMap.projection||"EPSG:3857",p=s.eoxDrawTools.projection,y=e.clone().getGeometry().transform(p,c).getExtent();a.highlightById([l]),i.getView().fit(y,U)}s.requestUpdate()};class _ extends O{constructor(){super();v(this,"hoverInteraction");v(this,"clickInteraction");v(this,"hoverId");v(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){le(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){oe(t,this)}_handleHoverFeature(t,r=!1){ne(this,t,r)}firstUpdated(){ae(this)}createRenderRoot(){return this}render(){var r,i;this.hoverId=(r=this.hoverInteraction)==null?void 0:r.selectedFids[0],this.clickId=(i=this.clickInteraction)==null?void 0:i.selectedFids[0];const t=n`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return n`
      <ul class="list no-space">
        ${this.drawnFeatures.map((a,l)=>{var d;const o=l+1,c=Object.values(this.eoxMap.selectInteractions)[0].getId(a),p=this.hoverId===c,y=this.clickId===c,m=p?"surface-container-low":y?"fill":L,w=(d=this.featureNameKey)==null?void 0:d.split("."),b=a.get(this.featureNameKey)||(w==null?void 0:w.reduce((u,j)=>u==null?void 0:u[j],{...a.getProperties()})),C=b||`${this.featureName} ${o}`;return ie(o,n`
              <li
                class="${m} no-round"
                @mouseover=${()=>this._handleHoverFeature(c)}
                @mouseout=${()=>this._handleHoverFeature(c,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
              >
                <div class="max">
                  <span class="title">${C}</span>
                </div>
                <button
                  index=${l}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":n`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}v(_,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",_);const ce=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:r}=e,i=!s&&(t==null?void 0:t.length)>0||r,a=!(t!=null&&t.length)&&!r;return{drawDisabled:i,discardDisabled:a}};function de(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const ue=(e,s)=>new E().writeFeaturesObject(e,s),he=(e,s)=>new re().writeFeatures(e,s);var M,$;class K extends O{constructor(){super();g(this,M,!0);g(this,$,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:r}=ce(this);f(this,M,t),f(this,$,r)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",r={Polygon:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            ?disabled="${h(this,M)||L}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:n`
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
            ?disabled="${h(this,$)||L}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":n`
                  <i class="small">${a}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${B(this.showEditor,()=>n`
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
        ${B(this.importFeatures,()=>n`
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
      ${B(this.showEditor,()=>n`
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
              @click=${()=>de(this.geoJSON)}
            >
              ${this.unstyled?"copy":n`
                    <i class="tiny">${c}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}M=new WeakMap,$=new WeakMap,v(K,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",K);D();const pe=`
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
`,ye=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const i=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!i)return;e.drawLayer.getSource().addFeature(i),e.drawnFeatures=[i]}})(),e.requestUpdate()},fe=e=>{const s=()=>{var r;e.drawLayer.set("isDrawingEnabled",!0),(r=e.draw)==null||r.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t(),document.addEventListener("keydown",({key:r})=>{var i;r==="Escape"&&e.currentlyDrawing&&((i=e.draw)==null||i.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())})},N=(e,s,t)=>{var c,p,y,m;if(!t||!s)return;const r=s.getLayerById(t),i=r?JSON.parse(JSON.stringify(r.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${t} not found`);return}const a={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((c=e.featureStyles)==null?void 0:c.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},l={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((p=e.featureStyles)==null?void 0:p.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[a,l],s.addOrUpdateLayer(i),P(s.layers,t,[i]);const o=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,o==null||o.setActive(!1),(y=s.selectInteractions.SelectLayerClickInteraction)==null||y.setActive(!1),(m=s.selectInteractions.SelectLayerHoverInteraction)==null||m.setActive(!1)};function P(e,s,t){const r=e.findIndex(i=>i.properties.id===s);if(r!==-1)return e.splice(r,1,...t),e;for(const i of e)if(i.type==="Group"){const a=P(i.layers,s,t);a!=null&&a.length&&(i.layers=a)}return e}const H=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const r=T(s);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const r=ee(s);r>1e3?t=(r/1e3).toFixed(2)+" km":t=r.toFixed(2)+" m"}else if(s.getType()==="Circle"){const r=s.getRadius(),i=Math.PI*Math.pow(r,2);i>1e6?t=(i/1e6).toFixed(2)+" km²":t=i.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},ge=e=>{const s=e.drawLayer.getSource(),t=r=>{const i=r.feature;i&&(H(i),i.getGeometry().on("change",()=>H(i)))};s.on("addfeature",t),s.getFeatures().forEach(r=>{H(r),r.getGeometry().on("change",()=>H(r))})},A=(e,s)=>{var p,y,m,w,b,C;const r=se(e.for),i=r.map,a="0, 65, 112";e.drawLayer=r.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((p=e.featureStyles)==null?void 0:p.layer)||{"fill-color":`rgba(${a}, 0.1)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${a}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${a}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((y=e.featureStyles)==null?void 0:y.layer)||{"fill-color":`rgba(${a}, 0.1)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${a}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${a}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((m=e.featureStyles)==null?void 0:m.hover)||{"fill-color":`rgba(${a}, 0.2)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((w=e.featureStyles)==null?void 0:w.click)||{"fill-color":`rgba(${a}, 0.2)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2}}}]}),e.draw=r.interactions.drawInteraction,e.modify=r.interactions.drawInteractionmodify,N(e,r,e.layerId),e.measure&&ge(e);const l=()=>e.onModifyEnd(),o=()=>ye(e);return(b=e.modify)==null||b.on("modifyend",l),e.measure&&((C=e.draw)==null||C.on("drawstart",d=>{const u=d.feature;H(u),u.getGeometry().on("change",()=>H(u))})),r.addEventListener("addfeatures",o),e.drawnFeatures&&e.drawLayer.getSource().addFeatures(e.drawnFeatures),{EoxMap:r,OlMap:i,reset:d=>{var u;!d.eoxMap||!d.drawLayer||(d.drawLayer.getSource().clear(),d.eoxMap.map.removeLayer(d.drawLayer),(u=d.modify)==null||u.un("modifyend",l),d.eoxMap.removeEventListener("addfeatures",o),d.layerId||(d.draw=null),d.modify=null)}}},me=e=>{const s=()=>{var i;e.drawnFeatures=[],(i=e.draw)==null||i.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},ve=(e,s)=>{setTimeout(()=>{const r=e.drawLayer.getSource().getFeatures(),i=e.eoxMap.projection||"EPSG:3857",a=e.projection;e.drawnFeatures=a?r.map(o=>{o=o.clone();const c=o.getGeometry().transform(i,a);return o.setGeometry(c),o}):r;let l;switch(e.format){case"geojson":l=ue(e.drawnFeatures);break;case"wkt":l=he(e.drawnFeatures);break;case"feature":l=e.drawnFeatures;break;default:l=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(l)},0)},we=e=>{const s=i=>{(i==null?void 0:i.detail.id)!=="SelectLayerClickInteraction"||!i.detail.feature||(typeof i.detail.feature.getGeometry().getCoordinates!="function"&&(i.detail.feature=te(i.detail.feature)),e.drawLayer.getSource().addFeature(i.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const i=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;i==null||i.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var a;const i=(a=e.eoxMap.selectInteractions)==null?void 0:a.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i==null||i.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},He=(e,s,t,r)=>{if(s){if(t){r&&t!==r&&R(e,s),N(e,s,t);return}if(!t&&r){R(e,s);return}}};function R(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}function Fe(e,s){function t(a){a.preventDefault(),a.stopPropagation()}function r(a){a.srcElement.style.opacity="0.4"}function i(a){a.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(a=>{s.addEventListener(a,t,!1),["dragenter","dragover"].includes(a)?s.addEventListener(a,r,!1):s.addEventListener(a,i,!1)}),s.addEventListener("drop",a=>Z(a,e),!1)}function Ve(e){e.preventDefault(),e.stopPropagation()}function Z(e,s){Ve(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(r=>Se(r,s)),e.target&&"value"in e.target&&(e.target.value="")}function Se(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var F,V,I,S,k;class be extends O{constructor(){super();g(this,F);g(this,V);g(this,I);g(this,S);g(this,k);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){f(this,k,t),t&&(this.multipleFeatures=!0)}get continuous(){return h(this,k)}set layerId(t){He(this,this.eoxMap,t,h(this,S)),f(this,S,t)}get layerId(){return h(this,S)}startDrawing(){fe(this)}discardDrawing(){me(this)}handleFeatureChange(t,r=!1,i=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(q),this.drawLayer,this.eoxMap,r,i)}handleFilesChange(t){Z(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){f(this,I,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||q,void 0,2))}emitDrawnFeatures(){ve(this,r=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:r}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:t,OlMap:r,reset:i}=A(this,this.multipleFeatures);this.resetLayer=i,this.eoxMap=t,f(this,V,r),this.selectionEvents=we(this),this.importFeatures&&Fe(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(t){if(t.has("for")){const{EoxMap:r,OlMap:i}=A(this,this.multipleFeatures);this.eoxMap=r,f(this,V,i)}(t.get("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.resetLayer(this),this.firstUpdated(),this.currentlyDrawing=!1)}get eoxMap(){return h(this,F)}set eoxMap(t){const r=h(this,F);f(this,F,t),this.requestUpdate("eoxMap",r)}connectedCallback(){if(super.connectedCallback(),this.drawLayer&&this.eoxMap){const{reset:t}=A(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return n`
      <style>
        :host { display: block; }
        ${!this.unstyled&&pe}
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
        .geoJSON=${h(this,I)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?n`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${h(this,V)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:L}
    `}}F=new WeakMap,V=new WeakMap,I=new WeakMap,S=new WeakMap,k=new WeakMap;customElements.define("eox-drawtools",be);export{be as EOxDrawTools};
