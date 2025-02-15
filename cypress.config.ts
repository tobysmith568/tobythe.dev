import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",

    viewportHeight: 1080,
    viewportWidth: 1080,

    downloadsFolder: "e2e/downloads",
    fixturesFolder: "e2e/fixtures",
    videosFolder: "e2e/videos",
    supportFile: "e2e/support/e2e.ts",
    specPattern: "e2e/**/*.spec.ts",

    setupNodeEvents(_on, _config) {}
  }
});
