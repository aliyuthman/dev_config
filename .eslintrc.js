module.exports = {
  extends: [
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "plugin:tailwindcss/recommended",
    "eslint:recommended",
    "prettier",
  ],
  plugins: ["react", "tailwindcss", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "consistent-return": "off",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/jsx-filename-extension": "off",
    // "react/function-component-definition": [
    //   "error",
    //   {
    //     namedComponents: "arrow-function",
    //     unnamedComponents: "arrow-function",
    //   },
    // ],
    "prettier/prettier": "warn",
  },
};
