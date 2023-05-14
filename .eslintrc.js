// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ["plugin:react/recommended", "airbnb", "plugin:react/jsx-runtime"],
//   overrides: [
//     {
//       files: ["global.d.ts"],
//       rules: {
//         "no-undef": "off",
//       },
//     },
//   ],
//   parserOptions: {
//     parser: "@typescript-eslint/parser",
//     project: ["./tsconfig.json"],
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: "latest",
//     sourceType: "module",
//   },
//   plugins: ["react", "@typescript-eslint"],
//   rules: {
//     indent: [2, 2],
//     "react/jsx-indent": [2, 2],
//     "react/jsx-indent-props": [
//       2,
//       { indentMode: 4, ignoreTernaryOperator: true },
//     ],
//     "react/jsx-filename-extension": [
//       2,
//       { extensions: ["js", "jsx", "ts", "tsx"] },
//     ],
//     "import/no-unresolved": "off",
//     "import/prefer-default-export": "off",
//     "no-unused-vars": "warn",
//     "react-require-default-props": "off",
//     "react/react-in-jsx-scope": "off",
//     "react/jsx-props-no-spreading": "warn",
//     "react/function-component-definition": "off",
//     "no-shadow": "off",
//     "no-undef": "warn",
//     "import/extensions": "off",
//     "object-curly-spacing": ["warn", "always"],
//     "react/jsx-curly-brace-presence": "off",
//     "react/jsx-tag-spacing": "off",
//     "@typescript-eslint/consistent-type-imports": "off",
//     "@typescript-eslint/explicit-function-return-type": "off",
//     "@typescript-eslint/semi": "off",
//     "@typescript-eslint/member-delimiter-style": "off",
//     "@typescript-eslint/no-floating-promises": "off",
//     "@typescript-eslint/strict-boolean-expressions": "off",
//     "no-underscore-dangle": "off",
//     quotes: 0,
//   },
//   settings: {
//     react: {
//       createClass: "createReactClass",
//       pragma: "React",
//       fragment: "Fragment",
//       version: "detect",
//     },
//   },
//   globals: {
//     __IS_DEV__: true,
//   },
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommend"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    indent: [2, 2],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["data-testid"] },
    ],
    quotes: 0,
    "max-len": ["error", { ignoreCommetns: true, code: 100 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts, tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
