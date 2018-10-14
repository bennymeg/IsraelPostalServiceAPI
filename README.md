# IsrealPostalServiceAPI
An API for Israel postal service

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