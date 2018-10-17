# IsraelPostalServiceAPI
An API for Israel postal service - query shipment price easily.

[![licence](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/israel-postal-service-api.svg)](https://www.npmjs.com/package/israel-postal-service-api)
[![github version](https://img.shields.io/github/package-json/v/badges/shields.svg)](https://github.com/bennymeg/IsraelPostalServiceAPI)
![GitHub repository size in bytes](https://img.shields.io/github/languages/code-size/badges/shields.svg)


## Installation
```bash
npm install --save israel-postal-service-api
```
## Usage

### Import library:
```javascript
const Options = require('israel-postal-service-api').Options;
const IPS = require('israel-postal-service-api').IPS;
```

### Define Package Characteristics:
```javascript
// define package characteristics
let weightInGrams = 20;
let serviceType = Options.AbroadMailOptions.LETTER.shipmentType;
let serviceSubtype = Options.AbroadMailOptions.LETTER.shipmentSubtypes.regular;
let option = serviceSubtype.options.signed;
let ips = new IPS();
```

### Calculate Shipping Rate:
#### _Option 1: with promises_
```javascript
// calculate package shipping rate asynchronously
ips.calculateAbroadShippingRate("Spain", weightInGrams, serviceType, serviceSubtype, option).then((response) => {
    console.log(response.getTotalPrice());
}).catch((error) => {
    console.error('Error:', error);
});
```

#### _Option 2: with async await_
```javascript
// calculate package shipping rate asynchronously
calculatePrice = async () => {
    try {
        const response = await ips.calculateAbroadShippingRate("Spain", weightInGrams, serviceType, serviceSubtype, option);
        console.log(response.getTotalPrice());
    } catch (error) {
        console.error('Error:', error);
    }
}

// invoke function
calculatePrice();
```


## Documentation ##  
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