declare const _default: {
  extends: [
    "b2broker",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ];
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array" }];
    "@typescript-eslint/ban-tslint-comment": "error";
    "@typescript-eslint/explicit-function-return-type": "error";
    "@typescript-eslint/explicit-member-accessibility": "warn";
    "@typescript-eslint/no-extraneous-class": "warn";
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error";
    "@typescript-eslint/no-unnecessary-type-constraint": "error";
    "@typescript-eslint/prefer-for-of": "error";
    "@typescript-eslint/prefer-includes": "error";
    "@typescript-eslint/prefer-nullish-coalescing": "error";
    "@typescript-eslint/prefer-optional-chain": "error";
    "@typescript-eslint/prefer-readonly": "error";
    "@typescript-eslint/prefer-ts-expect-error": "error";
    "@typescript-eslint/unified-signatures": "warn";
    "dot-notation": "off";
    "@typescript-eslint/dot-notation": "error";
    "no-loss-of-precision": "off";
    "@typescript-eslint/no-loss-of-precision": "error";
    "no-redeclare": "off";
    "@typescript-eslint/no-redeclare": "error";
    "no-unused-expressions": "off";
    "@typescript-eslint/no-unused-expressions": "error";
    "no-use-before-define": "off";
    "@typescript-eslint/no-use-before-define": "error";
    "no-useless-constructor": "off";
    "no-shadow": "off";
    "@typescript-eslint/no-shadow": "error";
    "@typescript-eslint/no-useless-constructor": "error";
    "@typescript-eslint/no-invalid-void-type": "warn";
    "@typescript-eslint/no-parameter-properties": "error";
  };
};

export = _default;
