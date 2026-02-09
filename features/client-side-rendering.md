---
layout: home
---
<script setup>
  import { withBase } from 'vitepress'
  const searchParams = new URLSearchParams(window.location.search);
  // sets the indicator selected via URL query params
  searchParams.set("indicator", "client_side_rendering");
  const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
  history.pushState(null, "", newRelativePathQuery);
</script>

<FeatureSection
  icon="mdi-application-brackets-outline"
  image="/img/expert_applications.jpg"
  primary-button="Launch workspace"
  primary-link="/launch"
  secondary-button="Contact Sales"
  secondary-link="/contact"
  tagline="Client-side Rendering"
  title="Client-side Rendering"
>
Empower your team with a complete suite of applications through one interface for your geospatial professional & community projects, designed for your EO endeavors.
</FeatureSection>

<a id="applications"></a>


### Client-side Rendering

eodash provides powerful support for direct rendering of raster and vector data on the client-side. This allows for highly interactive visualizations of cloud-optimized data formats.

Key capabilities include:
- **Dynamic Styling**: Specify styles for your data and update them dynamically based on user input, for example through a form.
- **High Performance**: Optimized for performance, ensuring smooth rendering and a great user experience even with large datasets.

### Live demo

Try dragging the sliders for **Biodiversity Indicator** to show only areas within a certain value ranges.

Or try using the sliders for **Water Turbidity** to control the min/max for used color stretch.

<eo-dash style="height:calc(70dvh);display: block" :config="withBase(`/eodash-configs/clientside.js`)"/>
