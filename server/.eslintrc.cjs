module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "jsx-expressions"],
  rules: {
    "jsx-expressions/strict-logical-expressions": "error",
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-empty": [
      "warn",
      {
        allowEmptyCatch: true,
      },
    ],
    "no-underscore-dangle": [
      "error",
      { allow: ["_paq", "_id", "__REDUX_DEVTOOLS_EXTENSION__", "hj"] },
    ],
    "arrow-parens": ["warn", "always"],
    "no-plusplus": 0,
    "no-console": [
      "warn",
      { allow: ["warn", "error", "info", "group", "groupEnd", "trace"] },
    ],
    "linebreak-style": 0,
    "eol-last": 0,
    indent: ["error", 4],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: ["draft"],
      },
    ],
    curly: ["error", "all"],
    camelcase: 0,
    "import/extensions": [
      0,
      "never",
      {
        ts: "never",
      },
    ],
    "no-continue": 0,
    "no-cond-assign": ["error", "except-parens"],
    "import/prefer-default-export": 0,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/array-type": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/interactive-supports-focus": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        handlers: ["onClick"],
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "off",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "both",
        depth: 25,
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        components: [],
        required: {
          some: ["nesting", "id"],
        },
        allowChildren: false,
      },
    ],
  },
};
