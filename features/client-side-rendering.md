---
layout: page
---

<FeatureSection
  icon="mdi-application-brackets-outline"
  image="/assets/dynamic_rendering.gif"
  landing
  dark
  primaryButton="Learn more"
  primaryLink="/features/client-side-rendering"
  tagline="Dynamic data visualization"
  title="Client-side Rendering"
>
Fast, responsive, and interactive dashboards rendered directly in the browser, ensuring a smooth user experience.
</FeatureSection>

<script setup>
  import { withBase } from 'vitepress'
  const searchParams = new URLSearchParams(window.location.search);
  // sets the indicator selected via URL query params
  searchParams.set("indicator", "client_side_rendering");
  searchParams.set("x", "12.0837");
  searchParams.set("y", "44.8289");
  searchParams.set("z", "9.5");
  const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
  history.pushState(null, "", newRelativePathQuery);
</script>


### Client-side Rendering

eodash provides powerful support for direct rendering of raster and vector data on the client-side. This allows for highly interactive visualizations of cloud-optimized data formats.

Key capabilities include:
- **Dynamic Styling**: Specify styles for your data and update them dynamically based on user input, for example through a form.
- **High Performance**: Optimized for performance, ensuring smooth rendering and a great user experience even with large datasets.

### Live demo

Try dragging the sliders for **Biodiversity Indicator** to show only areas within a certain value ranges.
For more information about this dataset, please visit the [race.esa.int](https://race.esa.int/explore/?template=expert&indicator=IND2_1).

Or try using the sliders for **Water Turbidity** to control the min/max for used color stretch. You can also hover on the map over this dataset to see original raster values in a tooltip.
For more information about this dataset, visit the [race.esa.int](https://race.esa.int/explore/?template=expert&indicator=CNR_TUR_1).

<eo-dash style="height:calc(70dvh);display: block" :config="withBase(`/eodash-configs/clientside.js`)"/>
