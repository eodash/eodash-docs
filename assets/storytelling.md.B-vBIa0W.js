import{_ as t,c as e,o,a4 as a}from"./chunks/framework.ttppV29E.js";const s="/assets/storytelling_screenshot.B3tAJwOa.png",g=JSON.parse('{"title":"Storytelling","description":"","frontmatter":{},"headers":[],"relativePath":"storytelling.md","filePath":"storytelling.md"}'),n={name:"storytelling.md"},r=a('<h1 id="storytelling" tabindex="-1">Storytelling <a class="header-anchor" href="#storytelling" aria-label="Permalink to &quot;Storytelling&quot;">​</a></h1><p>Storytelling is a tool provided by EOxElements. It is an editor and renderer based on Markdown. It allows integration of the same widgets as used in eodash. The Markdown is extended by allowing special configuration expressions that are evaluated to setup and show the different widgets. The great aspect is that the Markdown file can still be displayed by any normal Markdown interpreter, so the stories written can be still utilized across many frameworks.</p><p><img src="'+s+'" alt="storytelling example screenshot"></p><p>We want to make sure information to a wider audience can be presented in a guided and understandable manner, for within the core functionality of eodash we want to provide easy ways to export the state of the dashboard to be easily added to a story.</p><p>An instance of the story editor can be deployed independently, you can have a look at an example in the EOxElement documentation <a href="https://eox-a.github.io/EOxElements/?path=/story/elements-eox-storytelling--markdown-with-editor#section-why-storytelling" target="_blank" rel="noreferrer">here</a>. You can open and directly edit the information shown by clicking the toggle button on the bottom right. The example story already describes many of the capabilities</p><p>An example on how to export the state of an eodash instance would look like this:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## Map Example &lt;!--{as=&quot;eox-map&quot; style=&quot;width: 100%; height: 500px;&quot; layers=&#39;[{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;Overlay labels&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;XYZ&quot;,&quot;urls&quot;:[&quot;//s2maps-tiles.eu/wmts/1.0.0/overlay_base_bright_3857/default/g/{z}/{y}/{x}.jpg&quot;]}},{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;NO2-2023-11-28T00:00:00Z&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;TileWMS&quot;,&quot;urls&quot;:[&quot;https://eccharts.ecmwf.int/wms/?token=public&amp;&quot;],&quot;params&quot;:{&quot;layers&quot;:&quot;composition_europe_no2_analysis_surface&quot;,&quot;styles&quot;:&quot;sh_OrangesTransparent40_surface_concentration&quot;,&quot;format&quot;:&quot;image/png&quot;,&quot;time&quot;:&quot;2023-11-28T00:00:00Z&quot;}}},{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;Terrain light&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;XYZ&quot;,&quot;urls&quot;:[&quot;//s2maps-tiles.eu/wmts/1.0.0/terrain-light_3857/default/g/{z}/{y}/{x}.jpg&quot;]}}]&#39; zoom=&quot;4.932639746597878&quot; center=[9.143518788034312,44.52383030819641] }--&gt;</span></span></code></pre></div><p>You can paste this code directly into the storytelling editor linked above.</p><p>Once a content creator is happy with the story, it can be exported as Markdown file and added as rendered version to an eodash instance. An example of how these stories could be added is shown in the <a href="https://github.com/eodash/eodash-pages-template" target="_blank" rel="noreferrer">eodash-pages-template</a>.</p>',9),i=[r];function u(l,d,p,q,h,c){return o(),e("div",null,i)}const m=t(n,[["render",u]]);export{g as __pageData,m as default};
