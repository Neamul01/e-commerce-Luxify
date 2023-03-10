module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  overrides: [],
  // parserOptions: {
  //   ecmaVersion: "latest",
  //   sourceType: "module",
  // },
  plugins: [],
  rules: {},
  settings: {
    react: {
      version: "18.2.0",
    },
  },
};
