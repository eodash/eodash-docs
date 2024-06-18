import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eodash ecosystem",
  description: "Central documentation point for all aspects that make up the eodash ecosystem",
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
          { text: 'Storytelling', link: '/storytelling' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/eodash' }
    ]
  }
})
