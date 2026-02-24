---
layout: home
---
<script setup>
  import { withBase } from 'vitepress'
  const searchParams = new URLSearchParams(window.location.search);
  // sets the indicator selected via URL query params
  searchParams.set("indicator", "endpoint_integration");
  const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
  history.pushState(null, "", newRelativePathQuery);
</script>

# Endpoint Integration

eodash is designed to be highly interoperable, allowing you to integrate a multitude of endpoint types.

Supported endpoint types include:
- **WMS (Web Map Service)**
- **XYZ tiles**
- **Vector tiles**
- And many more...

This flexibility allows you to bring in data from various sources and create rich, composite applications.

### Demo

The demo combines heterogeneous data sources into a single, coherent view by presenting four layers simultaneously with both a shared datetime control and optional per layer time selection.

It brings together:
- Open Infrastructure Map vector tile layer rendered via a third-party Mapbox Style Document
- WMS layer providing monthly precipitation data from GSMaP operated by JAXA
- daily XYZ tile layer showing carbon dioxide concentrations produced by NASA,
- custom-styled demo vector tile layer of world countries enriched with interactive tooltips selecting only a subset of fields

Use the layer control on the left side to interact with the individual layers or use the time control at the bottom to change global displayed time.

<eo-dash style="height:calc(70dvh);display: block" :config="withBase(`/eodash-configs/endpointintegration.js`)"/>
