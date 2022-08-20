const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://trader-beta.vercel.app',
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
