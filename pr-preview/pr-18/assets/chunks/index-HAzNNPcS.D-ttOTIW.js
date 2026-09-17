import"./main.BEXRprpe.js";import"./main.zuPm4Ryo.js";import"./main.35hqDN6G.js";import{_ as V,ap as A,u as K,aZ as q,a_ as z,l as F,i as M,a as G,bU as Z,ar as T,bV as H,b0 as Q,o as W,q as X,d as Y,e as $}from"./eo-dash.3Rxg4kn_.js";import{c as ee,j as te,P as oe}from"./ProcessList-BPpCTKWR.HBa2aqUO.js";import ae from"./EodashChart-CRwi63zw.BLKBcIFM.js";import{i as J,u as se,h as re}from"./handling-BxOpxry-.Df8s2zhG.js";import{g as ne,u as ie,m as le}from"./async-CHvUorS-.DVr7Vv1t.js";import{a4 as ce,q as B,o as g,c as R,j as pe,E as de,k as S,e as k,b as I,w as D,a as N,v as me,P as U,x as ue,p as b,h as _}from"./framework.C60uwX8x.js";import"./lit-element.CBn2YVps.js";import"./addCommonStyleSheet.CnmexYTt.js";import"./sequential.BcvVcPN9.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.Bj3rQkfn.js";import"./when.BR7zwNJC.js";import"./Object.DnEsKloU.js";import"./getElement.COiK8z0h.js";import"./GeoJSON.B0rcp-Pn.js";import"./WKT.D1EzgXDt.js";import"./browser.BW5Boyef.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./index.BIJR-IiI.js";import"./migrate.DY-H0OwY.js";import"./main.BdCXm4s0.js";import"./repeat.Duc9p3Ra.js";import"./unsafe-html.C2DIGSw-.js";import"./map.DiiNQ3pp.js";import"./XYZ.CHdMdQ9Y.js";import"./index.BUIxO2d3.js";import"./index-MiXNUVYd.DsiJQ5lC.js";import"./VTooltip-CRmqT1qY.Cu10QtZY.js";import"./forwardRefs-DxtjU0ld.Dzo37y1n.js";import"./transition-DxOcWt_X.DlurfjIp.js";const fe=({selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o})=>{me(async()=>{var s;await J({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})}),Q(async s=>{var E,h,f;const c=((E=o.value)==null?void 0:E.id)==="compare",u=c?"compareLayers:updated":"layers:updated";if((c?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const y=await se({jsonformSchema:a.value,newLayers:c?W():X(),enableCompare:c,mapElement:o.value});y&&(Object.values(y.properties??{}).some(w=>{var L,C;return(C=(L=w==null?void 0:w.options)==null?void 0:L.drawtools)==null?void 0:C.layerId})&&!((f=(h=o.value)==null?void 0:h.selectInteractions)!=null&&f.SelectLayerClickInteraction)&&(a.value=null,await U()),a.value=y)}s===u&&await J({enableCompare:c,selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:p,isPolling:m,mapElement:o.value})})};function ve(r,a,i,l){const p=async o=>{await l()};B(i,o=>{var s;r.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=B([r,a],async([o,s],[c,u])=>{u&&u.removeEventListener("change",p),o&&s&&(s.removeEventListener("change",p),await U(),s.addEventListener("change",p))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",p),m()})}const he="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},ge=[".schema"],be={key:0,class:"eodash-process-actions"},we={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const a=b(!1),i=b(null),l=ce("jsonformEl");B(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,e.shadowRoot.appendChild(n)}const d=()=>{var v;const n=(v=e==null?void 0:e.shadowRoot)==null?void 0:v.querySelector("eox-drawtools");if(n&&n.shadowRoot&&!n.shadowRoot.getElementById("eodash-drawtools-indent-style")){const x=document.createElement("style");return x.id="eodash-drawtools-indent-style",x.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,n.shadowRoot.appendChild(x),!0}return!1};if(!d()){const n=new MutationObserver(()=>{d()&&n.disconnect()});n.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const p=_(()=>{var e;return(e=P.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=b(!1),o=b(!1),s=b(!1),c=b([]),u=_(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:P,selectedCompareStac:E}=A(K()),h=r.enableCompare?E:P,f=r.enableCompare?q:z,y=r.enableCompare?F:M,j=r.enableCompare?ee:te,w=_(()=>{var e;return y.value+((e=f.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:h,mapElement:f,jsonformSchema:i,isProcessed:a,processResults:c,loading:m,isPolling:s});const L=()=>{c.value.forEach(e=>{var d;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((d=h.value)==null?void 0:d.id)+"_process_results.json",le(t,e)})},C=async()=>{var n;if(ne(i.value).some(v=>{var x,O;return Array.isArray((x=l.value)==null?void 0:x.value[v])&&!((O=l.value)!=null&&O.value[v].length)})){a.value=!1;const v=r.enableCompare?Y:$;v.value=null;return}const d=(n=l.value)==null?void 0:n.editor.validate();if(d!=null&&d.length){console.warn("[eodash] Form validation failed",d);return}c.value=[],await re({jobs:j,selectedStac:h,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:c,mapElement:f.value}),a.value=!0,p.value&&ie(j,y.value)};return ve(o,l,i,C),(e,t)=>(g(),R("div",ye,[pe("div",xe,[de(oe,{"map-element":S(f),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),i.value?(g(),R("eox-jsonform",{key:w.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,ge)):k("v-if",!0),S(G)?k("v-if",!0):(g(),I(ae,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||c.value.length&&a.value&&!p.value?(g(),R("div",be,[u.value?(g(),I(T,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[S(Z)],density:"comfortable",size:"small",onClick:C},{default:D(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):k("v-if",!0),c.value.length&&a.value&&!p.value?(g(),I(T,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(H)],size:"small",density:"comfortable",onClick:L},{default:D(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):k("v-if",!0)])):k("v-if",!0)],512))}},rt=V(we,[["styles",[he]]]);export{rt as default};
