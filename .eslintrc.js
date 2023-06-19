module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
  rules: {
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    indent: "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "no-restricted-globals": "warn",
    "object-curly-newline": "off",
    "no-multiple-empty-lines": "warn",
    "comma-dangle": "warn",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "implicit-arrow-linebreak": "off",
    "no-undef": "off",
    "operator-linebreak": "warn",
    "react/no-array-index-key": "warn",
    "max-len": [
      "warn",
      {
        ignoreComments: true,
        code: 300,
      },
    ],
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        ignoreAttribute: ["data-testid", "to"],
      },
    ],
    quotes: 0,
  },
  globals: { __IS_DEV__: true, __API__: true, __PROJECT__: true },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts, tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      },
    },
  ],
};
