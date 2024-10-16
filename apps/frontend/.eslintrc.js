/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@e-commerce-platform/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
