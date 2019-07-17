var path = require('path');
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["react", "@typescript-eslint"],
  env: {
    "browser": true,
    "node": true
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    "camelcase": "off",
    "arrow-parens": ["error", "as-needed"],
    "import/extensions": "off",
    "lines-between-class-members": "off",
    "indent": ["error", 2],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "import/newline-after-import": "off",
    "global-require": "off",
    "prefer-template": "off",
    "max-len": ["error", 200],
    "no-console":  "off",
    "no-debugger": "warn",
    "newline-per-chained-call": "off",
    "object-curly-newline": "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-underscore-dangle": "off",
    "semi": ["warn", "never"],
  },
};
