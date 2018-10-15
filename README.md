# IsraelPostalServiceAPI
An API for Israel postal service

***Note:*** this package is still under constuction.
if you wish to help, please look at the next milestone at the github repository and submite a pull request.

[![licence](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/LICENSE)
[![size](https://img.shields.io/bundlephobia/min/react.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI)
[![npm version](https://img.shields.io/npm/v/:package.svg)](https://www.npmjs.com/package/israel-postal-service-api)
[![github version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI)


## Instalation
```bash
npm install --save israel-postal-service-api
```
## Usage

### Import library:
```javascript
const Options = require('israel-postal-service-api').Options;
const IPS = require('israel-postal-service-api').IPS;
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