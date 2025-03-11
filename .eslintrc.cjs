module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended", "plugin:import/recommended"],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["import"],
    rules: {
      "quotes": ["error", "single"],
      "import/order": ["error", { "newlines-between": "always" }],
      "import/no-duplicates": "error",
      "indent": ["error", 2],
      "semi": ["error", "always"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
      "padded-blocks": ["error", "never"],
      "eol-last": ["error", "always"],
      "space-infix-ops": "error",
      "no-param-reassign": "error",
      "default-case": "error",
      "no-else-return": "error",
      "comma-dangle": ["error", "always-multiline"],
      "operator-linebreak": ["error", "before"],
    },
  };
  