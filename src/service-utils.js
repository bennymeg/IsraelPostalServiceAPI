const ResponseParser = require('./response-parser').ResponseParser;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Utilities module
 * @author Benny Megidish
 */
function calculateShippingRate(destination, weight, serviceType, serviceSubtype, option, quantity=1, language="HE", shipmentQuantity="0") {
    let serviceOption = generateServiceOption(destination, serviceSubtype, option);
    
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

    // generate request
    let url = "http://www.israelpost.co.il/npostcalc.nsf/CalcPrice?openagent";
    let queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
    let encodedUrlQuery = encodeURI(url + "&" + queryString.replace(/\s/g, "+"));
    
    let xhr = createCORSRequest('GET', encodedUrlQuery);

    // send request and return a promise
    return new Promise((accept, reject) => {
        xhr.onload = () => {
            accept(new ResponseParser(xhr.responseText));
        };
        
        xhr.onerror = () => {
            reject(xhr.statusText);
        };
        
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

module.exports.calculateShippingRate = calculateShippingRate;
module.exports.generateServiceOption = generateServiceOption;
module.exports.createCORSRequest = createCORSRequest;