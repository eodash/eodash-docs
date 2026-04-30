import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

const brandId = "eodash";
const brandConfig = await baseConfig(brandId);
// override the logo until we merge to main to have an absolute path
brandConfig.themeConfig.logo = {
  light: "/logos/eodash-light.svg",
  dark: "/logos/eodash-dark.svg",
};

export default defineConfig({
  extends: brandConfig,
  title: "eodash ecosystem",
  description: "Publishing and integrating earth observation data in a dashboard application through this flexible and customizable ecosystem",
  themeConfig: {
    search: {
      provider: "local"
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features', items: [
          { text: 'Client-side Rendering', link: '/features/client-side-rendering?indicator=client_side_rendering&x=12.0837&y=44.8289&z=9.5' },
          { text: 'Process Definition', link: '/features/process-definition?indicator=N2_CO2_mean' },
          { text: 'Endpoint Integration', link: '/features/endpoint-integration?indicator=endpoint_integration' },
          { text: 'Widget Extension', link: '/features/widget-extension' },
          { text: 'Web Component', link: '/features/web-component' },
          { text: 'Customizable Themes', link: '/features/customizable-themes' },
        ]
      },
      { text: 'Documentation', link: '/welcome' },
      { text: 'Technology', link: '/technology' },
      { text: 'Get Started', link: '/first_steps', action: 'primary' },
      { text: 'Learn More', link: '/welcome', action: 'alt' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'eodash client documentation', link: 'https://eodash.github.io/eodash/' },
        ]
      },
      {
        text: 'Ecosystem setup',
        items: [
          { text: 'First steps', link: '/first_steps' },
          { text: 'Catalog backend', link: '/catalog' },
          { text: 'eodash instance', link: '/eodash' },
        ]
      },
      {
        text: 'Content creation',
        items: [
          { text: 'Content integration', link: '/content' },
          { text: 'Data configuration', link: '/data' },
          { text: 'Styling', link: '/styling' },
          { text: 'Storytelling', link: '/storytelling' },
          { 
            text: 'Processing / API integration',
            link: '/processing',
            items: [
              { text: 'Input definition', link: '/processing_inputs' },
            ]
           },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eodash' }
    ],
    theme: {
      brandConfig: {
        legal: {
            termsAndConditions: "https://eox.at/service-terms-and-conditions/",
        },
      },
    },
  },
});
