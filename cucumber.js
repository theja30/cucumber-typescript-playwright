// cucumber.js
module.exports = {
  default: {
    parallel: 3, // Change based on your machine's CPU
    format: [
      "progress-bar",
      "json:reports/json/cucumber-report.json",
      "html:reports/html/cucumber-report.html"
    ],
    requireModule: ["ts-node/register"],
    require: ["test/steps/*.ts", "test/utils/hooks.ts"],
    paths: ["test/features/*.feature"],
    formatOptions: { snippetInterface: "async-await" }
  }
};