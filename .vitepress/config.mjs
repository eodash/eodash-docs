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
      { text: 'Introduction', link: '/welcome' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Welcome', link: '/welcome' },
          { text: 'Preamble', link: '/preamble' },
          { text: 'Components', link: '/components' },
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
          { text: 'Data', link: '/data' },
          { text: 'Stories', link: '/stories' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
