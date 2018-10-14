const Options = require('./src/options');
const ResponseParser = require('./src/response-parser').ResponseParser;
const Destinations = require('./src/destenations').Destinations;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Exposes Isreal postal service API
 * @author Benny Megidish
 */
class IPS {
    constructor() {
        this.destinations = new Destinations();
    }

    async calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestenetionHe(destination, shipmentType);
        let type = "משלוח דואר לחו\"ל";
        let serviceType = type + "~" + shipmentType;

        return calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    async calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = "";
        let type = "משלוח דואר בארץ";
        let serviceType = type + "~" + shipmentType;

        return calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestenetionHe(destination, shipmentType);
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;

        return calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }
}

function calculateShippingRate(destination, weight, serviceType, serviceSubtype, option, quantity=1, language="HE", shipmentQuantity="0") {
    let serviceOption = generateServiceOption(destination, serviceSubtype, option);
    //console.log("Opt: " + serviceOption);
    
    // request parameters
    let parameters = { 
        lang: language,
        menuChosen: serviceType,
        serviceoption: serviceOption,
        qty: quantity,
        shipqty: shipmentQuantity,
        weight: weight,
        cname: destination["name"]
    }
    //console.log("Param: " + parameters);

    // send request
    let url = "http://www.israelpost.co.il/npostcalc.nsf/CalcPrice?openagent";
    let queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
    let encodedUrlQuery = encodeURI(url + "&" + queryString.replace(/\s/g, "+"));
    //console.log("q: ", encodedUrlQuery+"%0A");
    
    let xhr = createCORSRequest('GET', encodedUrlQuery);

    return new Promise((accept, reject) => {
        xhr.onload = () => {
            accept(new ResponseParser(xhr.responseText));
        };
        
        xhr.onerror = reject;
        
        xhr.send();
    });
}

function generateServiceOption(destination, serviceSubtype, option) {
    let serviceOption = serviceSubtype["name"];

    if (option) {
        // concatinate option if provided
        serviceOption += "~" + option;
    } else if (!option && serviceSubtype["option"]) {
        // concatinate first option (default) if available
        serviceOption += "~" + serviceSubtype["option"][0]; //???
    }
 
    if (destination != "")
        serviceOption += "~C" + destination["id"];

    return serviceOption;
}

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
        // Most browsers.
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS not supported.
        xhr = null;
    }

    return xhr;
}

module.exports.IPS = IPS;
module.exports.ResponseParser = ResponseParser;
module.exports.Options = Options;