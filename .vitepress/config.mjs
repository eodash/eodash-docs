import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";

const brandId = "eodash";

export default defineConfig({
  extends: baseConfig(brandId),
  title: "eodash ecosystem",
  description: "Publishing and integrating earth observation data in a dashboard application through this flexible and customizable ecosystem",
  themeConfig: {
    search: {
      provider: "local"
    },
    nav: [
      { text: 'Welcome', link: '/welcome' },
      { text: 'Features', link: '/features', items: [
          { text: 'Client-side Rendering', link: '/features/client-side-rendering' },
          { text: 'Process Definition', link: '/features/process-definition' },
          { text: 'Endpoint Integration', link: '/features/endpoint-integration' },
          { text: 'Customizable Themes', link: '/features/customizable-themes' },
          { text: 'Widget Extension', link: '/features/widget-extension' },
          { text: 'Web Component', link: '/features/web-component' },
        ]
      },
      { text: 'Components', link: '/components' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Technology', link: '/technology' },
    ],
    /*
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Preamble', link: '/preamble' },
          { text: 'Welcome', link: '/welcome' },
          { text: 'Components', link: '/components' },
          { text: 'Roadmap', link: '/roadmap' },
          { text: 'Technology', link: '/technology' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Client-side Rendering', link: '/features/client-side-rendering' },
          { text: 'Process Definition', link: '/features/process-definition' },
          { text: 'Endpoint Integration', link: '/features/endpoint-integration' },
          { text: 'Customizable Themes', link: '/features/customizable-themes' },
          { text: 'Widget Extension', link: '/features/widget-extension' },
          { text: 'Web Component', link: '/features/web-component' },
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
        text: 'Content',
        items: [
          { text: 'Content integration', link: '/content' },
          { text: 'Data configuration', link: '/data' },
          { text: 'Styling', link: '/styling' },
          { text: 'Storytelling', link: '/storytelling' },
        ]
      }
    ],
    */
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
