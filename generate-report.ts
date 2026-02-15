const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./reports/json/",
  reportPath: "./reports/html",
  metadata: {
    browser: { name: "chrome", version: "latest" },
    device: "Local Machine",
    platform: { name: "ubuntu" }
  }
});