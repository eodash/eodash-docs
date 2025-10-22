import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eodash ecosystem",
  description: "Publish and integrate earth observation data in a dashboard application through this flexible and customizable ecosystem",
  themeConfig: {
    search: {
      provider: "local"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Welcome', link: '/welcome' }
    ],

    sidebar: [
      {
        text: 'Is this for you?',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Components', link: '/components' },
          { text: 'Roadmap', link: '/roadmap' },
          { text: 'Technology', link: '/technology' },
        ]
      },
      {
        text: 'Developers',
        items: [
          { text: 'First steps', link: '/first_steps' },
          { text: 'Catalog backend', link: '/catalog' },
          { text: 'eodash instance', link: '/eodash' },
        ]
      },
      {
        text: 'Data visualization configurator',
        items: [
          { text: 'Content integration', link: '/content' },
          { text: 'Data configuration', link: '/data' },
          { text: 'Styling', link: '/styling', items: [
            { text: 'Examples', link: '/styling#color-maps' },
            { text: 'Other examples', link: '/styling#layer-styles' },]},
          { text: 'Storytelling', link: '/storytelling' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eodash' }
    ]
  }
})
