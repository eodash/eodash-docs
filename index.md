---
layout: home
hero:
  name: eodash
  text: eodash ecosystem
  tagline: Publish and integrate EO data in a dashboard application through this flexible and customizable ecosystem
  background:
    src: /assets/hero_background.svg
    alt: Background
  actions:
    - theme: brand
      text: Get Started
      link: /first_steps
    - theme: alt
      text: Learn More
      link: /welcome
---

This project was developed by EOX, with funding and support from the European Space Agency (ESA) in the frame of the Euro Data Cube, RACE, EO Dashboard, and GTIF activities. We are grateful for the financial contributions and ongoing support provided by ESA, NASA, JAXA, and the European Commission, which enabled the development and maturation of this project to its current state.

<div class="large-space"></div>
<h4 class="center-align">Trusted By</h4>
<LogoSection
  :logos="logos"
  :baseHeight="4"
/>

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

<FeatureSection
  icon="mdi-application-brackets-outline"
  image="/assets/chart_selection.gif"
  landing
  reverse
  primaryButton="Learn more"
  primaryLink="/features/process-definition"
  tagline="Show customized charts to visualize your results"
  title="Integrate your APIs"
>
Define and execute data processing workflows with ease using a structured and powerful configuration.
</FeatureSection>

<FeatureSection
  icon="mdi-application-brackets-outline"
  image="/assets/endpoint_integration.gif"
  landing
  dark
  primaryButton="Learn more"
  primaryLink="/features/endpoint-integration"
  tagline="Integrate all your data sources"
  title="Endpoint Integration"
>
Seamlessly connect to various data sources and APIs, bringing all your earth observation data into one place.
</FeatureSection>

<FeatureSection
  primary-button="See all features"
  primary-link="/features"
  title="And much more..."
  reverse
>
Explore advanced capabilities like customizable themes, widget extensions, and embedding your dashboard as a web component.
</FeatureSection>

<CTASection
  dark
  title="Ready to get started?"
  tagline="Discover how to bring your data to life with our tutorials."
  primaryButton="See Documentation"
  primaryLink="/welcome"
/>

<script setup>
import { withBase } from "vitepress"
const logos = [
  {
    alt:'RACE', 
    image: withBase('/logos/race.jpg'),
    link:'https://race.esa.int',
    target:'_blank' 
  },
  {
    alt:'EOPF Explorer',
    image: withBase('/logos/eopf_explorer.svg'),
    link:'https://explorer.eopf.copernicus.eu',
    target: "_blank"
  },
  {
    alt:'GTIF Austria', 
    image: withBase('/logos/gtif_austria.svg'),
    link:'https://gtif-austria.info',
    target: "_blank"
  },
  {
    alt:'Baltic GTIF', 
    image: withBase('/logos/baltic_gtif.png'),
    link:'https://gtif-baltic.info',
    target: "_blank"
  },
  {
    alt:'Cerulean IF', 
    image: withBase('/logos/cerulean.png'),
    link:'https://cif.eox.at',
    target: "_blank"
  },
  {
    alt:'eodashboard', 
    image: withBase('/logos/eodashboard.jpg'),
    link:'https://eodashboard.org',
    target: "_blank"
  },
  {
    alt:'GTIF UKIF', 
    image: withBase('/logos/gtif_ukif.svg'),
    link:'https://gtif-ukif.github.io/gtif-ukif-client/',
    target: "_blank"
  }
  ]

</script>
