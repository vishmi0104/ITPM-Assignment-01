// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 120000,
  retries: 0,
  workers: 1,

  use: {
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 30000,
    navigationTimeout: 60000,
  },

  // ❌ REMOVE firefox + webkit
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  reporter: [['html'], ['list']],
});
