# eslint-config-b2broker-ts ![CI Status](https://github.com/b2broker/typescript-eslint-config/workflows/CI/badge.svg) [![GitHub version](https://badge.fury.io/gh/b2broker%2Ftypescript-eslint-config.svg)](https://badge.fury.io/gh/b2broker%2Ftypescript-eslint-config) [![npm version](https://badge.fury.io/js/eslint-config-b2broker-ts.svg)](https://badge.fury.io/js/eslint-config-b2broker-ts) [![Known Vulnerabilities](https://snyk.io/test/github/b2broker/typescript-eslint-config/badge.svg)](https://snyk.io/test/github/b2broker/typescript-eslint-config) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) ![node version](https://img.shields.io/node/v/eslint-config-b2broker-ts) ![npm downloads](https://img.shields.io/npm/dt/eslint-config-b2broker-ts) ![License](https://img.shields.io/github/license/b2broker/typescript-eslint-config)

Shareable ESLint config.

## Installation

```bash
npm install --save-dev eslint-config-b2broker-ts
```

### Usage

Extend your config in the `.eslintrc.json` file:

```js
{
  "extends": ["b2broker-ts"],
  "parserOptions": {
    "project": "tsconfig.json" // path to your `tsconfig.json` file
  }
}
```
