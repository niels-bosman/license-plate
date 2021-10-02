Dutch license plate formatting and validation in JavaScript.

![npm bundle size](https://img.shields.io/bundlephobia/min/license-plate)
![npm](https://img.shields.io/npm/dt/license-plate)
![GitHub issues](https://img.shields.io/github/issues/niels-bosman/license-plate)
![npm](https://img.shields.io/npm/v/license-plate)
![GitHub Repo stars](https://img.shields.io/github/stars/niels-bosman/license-plate?style=social)

## Installation
Installing using npm
```bash
npm install license-plate
```

Installing using Yarn
```bash
yarn add license-plate
```

## Features

- ✅ Validating a license plate.
- 🚗 Formatting a license plate.
- 🔢 Retrieving sidecode from a license plate.

## How to use
```js
import LicensePlate from 'license-plate';

const plate = new LicensePlate('xx9999');

plate.valid();    // true
plate.pretty();   // 'XX-99-99'
plate.sidecode(); // 1
```
