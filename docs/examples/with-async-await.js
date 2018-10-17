const Options = require('israel-postal-service-api').Options;
const IPS = require('israel-postal-service-api').IPS;


// define package characteristics
let weightInGrams = 20;
let serviceType = Options.AbroadMailOptions.PARCEL.shipmentType;
let serviceSubtype = Options.AbroadMailOptions.PARCEL.shipmentSubtypes.regular;
let option = null;
let ips = new IPS();


// Code here will be ignored by JSHint. until ver. 2.10.0 will be released!
/* jshint ignore:start */

// calculate package shipping rate asynchronously
calculatePrice = async () => {
    try {
        const response = await ips.calculateAbroadShippingRate("United States of America", weightInGrams, serviceType, serviceSubtype, option);
        // check out ResponseParser API to see all the available functions
        console.log(response.getTotalPrice());
    } catch (error) {
        console.error('Error:', error);
    }
}

/* jshint ignore:end */

// invoke the asynchronous method
calculatePrice();