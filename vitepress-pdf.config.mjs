/**
 * @type {import('vitepress-export-pdf').UserConfig}
 */
export default {
  routePatterns: [
    "/**",
    "!/404.html",
    "!/404",
    "!/cookie-settings",
    "!/cookie-settings.html",
    "!/features/",
    "!/features/**",
  ],
  puppeteerLaunchOptions: {
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  },
};
