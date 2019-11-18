<p align="center">
<a href="https://bennymeg.github.io/IsraelPostalServiceAPI/">
<img src="https://raw.githubusercontent.com/bennymeg/IsraelPostalServiceAPI/master/docs/_media/ips-api.png" width="240">
</p>
</a>

<div align="center">

# Israel Postal Service API
An API for Israel postal service - query shipment price easily.
Supports both NodeJS and browser environments.

[![licence](https://img.shields.io/github/license/bennymeg/IsraelPostalServiceAPI.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/israel-postal-service-api.svg)](https://www.npmjs.com/package/israel-postal-service-api)
[![Dependencies status](https://david-dm.org/bennymeg/IsraelPostalServiceAPI/status.svg)](https://david-dm.org/bennymeg/IsraelPostalServiceAPI)
[![Documentation](https://img.shields.io/badge/%F0%9F%93%83-Documentation-blue)](https://bennymeg.github.io/IsraelPostalServiceAPI/)
<!-- [![github version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI) -->
<!-- ![GitHub repository size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg) -->

</div>

<hr></br>

## Installation
```bash
npm install --save israel-postal-service-api
```
## Usage

### Import library:
```javascript
import { IPS, Options } from 'israel-postal-service-api';
```

### Define Package Characteristics:
```javascript
// define package shipment characteristics
let weightInGrams = 20;
let serviceType = Options.AbroadMailOptions.LETTER.shipmentType;
let serviceSubtype = Options.AbroadMailOptions.LETTER.shipmentSubtypes.regular;
let option = serviceSubtype.options.signed;

// initialize service
let postalService = new IPS();
```

### Calculate Shipping Rate:

```javascript
// calculate package shipping rate asynchronously
let response = await postalService.calculateAbroadShippingRate(
    "Spain", weightInGrams, serviceType, serviceSubtype, option);

// see {@class ResponseParser} API to discover the response structure
console.log(response.getTotalPrice()); 
```

## Supported Environments ##
- 💻 Browser (including browserify / webpack based environments [such as Angular])
- 🖥  Node.js

## Documentation ##  
- 📔 [Full Documentation](https://bennymeg.github.io/IsraelPostalServiceAPI/),
- 👨🏼‍💻 [API](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/docs/API.md),  
- 👩🏼‍🏫 [Examples](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/docs/examples),  
- 📜 [Change log](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/docs/CHANGELOG.md),  
- 🖋 [Licence](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/LICENSE)

## Support ##
If you're having any problem, please [raise an issue](https://github.com/bennymeg/IsraelPostalServiceAPI/issues/new) on GitHub and we'll be happy to help.


## Contribute ##
- 👾 [Issue Tracker](https://github.com/bennymeg/IsraelPostalServiceAPI/issues),
- 📦 [Source Code](https://github.com/bennymeg/IsraelPostalServiceAPI/)

Before submitting a pull request, please make sure that you include tests, and that [jshint](http://jshint.com) runs without any warnings: [Download VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint).

## Test ## 
Run the test suite by executing:

```sh
$ npm test
```


___
> ***Note***:
> This API was create as an open source service for makers and entrepreneurs.
> _This is not an official API for Israel Post service_.

**Author:** Benny Megidish.