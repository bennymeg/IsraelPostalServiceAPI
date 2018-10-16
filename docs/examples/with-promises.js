const Options = require('israel-postal-service-api').Options;
const IPS = require('israel-postal-service-api').IPS;


// define package characteristics
let weightInGrams = 20;
let serviceType = Options.AbroadMailOptions.PARCEL.shipmentType;
let serviceSubtype = Options.AbroadMailOptions.PARCEL.shipmentSubtypes.regular;
let option = null;
let ips = new IPS();


// calculate package shipping rate asynchronously
ips.calculateAbroadShippingRate("Spain", weightInGrams, serviceType, serviceSubtype, option).then((response) => {
    // check out ResponseParser API to see all the available functions
    console.log(response.getTotalPrice());
}).catch((error) => {
    console.error('Error:', error);
});