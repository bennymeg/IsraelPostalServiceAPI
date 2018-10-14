# IsrealPostalServiceAPI
An API for Israel postal service

[![licence](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bennymeg/IsrealPostalServiceAPI/blob/master/LICENSE)
[![size](https://img.shields.io/bundlephobia/min/react.svg)](https://github.com/bennymeg/IsrealPostalServiceAPI)
[![npm version](https://img.shields.io/npm/v/:package.svg)](https://www.npmjs.com/package/isreal-postal-service-api)
[![github version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/bennymeg/IsrealPostalServiceAPI)


## Instalation
```bash
npm install --save isreal-postal-service-api
```
## Usage

### Import library:
```javascript
const Options = require('isreal-postal-service-api').Options;
const IPS = require('isreal-postal-service-api').IPS;
```

### Calculate Shipping Rate:
```javascript
// define package characteristics
let weightInGrams = 20;
let serviceType = Options.AbroadMailOptions.LETTER.shipmentType;
let serviceSubtype = Options.AbroadMailOptions.LETTER.shipmentSubtypes.regular;
let option = serviceSubtype.options.signed;

// calculate package shipping rate asynchronously
calc = async () => {
    try {
        const response = await ips.calculateAbroadShippingRate("Spain", weightInGrams, serviceType, serviceSubtype, option);
        console.log(response.getTotalPrice());
    } catch (error) {
        console.error('Error:', error);
    }
}

calc();
```