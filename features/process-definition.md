---
layout: home
---
<script setup>
  import { withBase } from 'vitepress'
  const searchParams = new URLSearchParams(window.location.search);
  // sets the indicator selected via URL query params
  searchParams.set("indicator", "N2_CO2_mean");
  const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
  history.pushState(null, "", newRelativePathQuery);
</script>

# Process Definition

With eodash, you can define processes that allow calling a large set of API endpoints. This enables complex workflows and interactions with backend services.

Key capabilities include:
- **JSON Forms**: Utilize JSON Form definitions for handling user input, making it easy to create intuitive user interfaces for complex processes.
- **Flexible Output**: Define how to visualize the results of a process. You can use an OpenLayers flat style to display results on a map, or a Vega chart definition to create custom charts and graphs.


### Live demo

Try selecting input parameters of the process, click on Execute to trigger a timeseries statistics process. (response will be static no matter the input). You can click on chart points to change current map date.

<eo-dash style="height:calc(70dvh);display: block" :config="withBase(`/eodash-configs/processdefinition.js`)"/>
