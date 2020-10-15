module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ["./tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "jest", "unicorn", "import"],
    extends: [
      "airbnb-typescript/base",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "prettier",
      "prettier/@typescript-eslint",
      "plugin:jest/recommended",
      "plugin:unicorn/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
    ],
  };
  