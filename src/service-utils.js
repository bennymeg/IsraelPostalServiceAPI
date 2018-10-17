const ResponseParser = require('./response-parser').ResponseParser;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/**
 * Utilities module
 * @author Benny Megidish
 */

/**
 * calculate shipping rate for all the shipment types
 * @param {object} destination destination object
 * @param {float} weight weight of the shipment in grams
 * @param {string} serviceType type of service 
 * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
 * @param {string} serviceOption additional service options (nullable) (as generated in {@link generateServiceOption})
 * @param {integer} quantity amount of packages
 * @param {string} language API language
 * @param {string} shipmentQuantity shipment quantity
 * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
 */
function calculateShippingRate(destination, weight, serviceType, serviceSubtype, option, quantity=1, language="HE", shipmentQuantity="0") {
    let serviceOption = generateServiceOption(destination, serviceSubtype, option);
    
    // request parameters
    let parameters = { 
        lang: language,
        menuChosen: serviceType,
        serviceoption: serviceOption,   // ignore wired naming, due to bad postal service API
        qty: quantity,
        shipqty: shipmentQuantity,      // ignore wired naming, due to bad postal service API
        weight: weight,
        cname: destination.name
    };

    // generate request
    //"http://www.israelpost.co.il/npostcalc.nsf/CalcPrice?openagent&lang=HE&menuChosen=%D7%9E%D7%A9%D7%9C%D7%95%D7%97+%D7%93%D7%95%D7%90%D7%A8+%D7%9C%D7%97%D7%95%22%D7%9C~%D7%A6%D7%A8%D7%95%D7%A8+%D7%A7%D7%98%D7%9F&serviceoption=%D7%93%D7%95%D7%90%D7%A8+%D7%90%D7%95%D7%99%D7%A8~%D7%9E%D7%A9%D7%9C%D7%95%D7%97+%D7%A8%D7%92%D7%99%D7%9C~C29&qty=1&shipqty=0&weight=33&cname=%D7%90%D7%A1%D7%A0%D7%A1%D7%99%D7%95%D7%9F%0A&_=1538931508025"
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

/**
 * generate service options string
 * @param {object} destination destination object
 * @param {object} serviceSubtype service subtype as describes in the {@class Options} class
 * @param {string} option additional service options
 * @returns {string} service options string
 */
function generateServiceOption(destination, serviceSubtype, option) {
    let serviceOption = serviceSubtype.name;   
    let availableOptions = serviceSubtype.options;

    if (option) {
        // concatenate option if provided
        serviceOption += "~" + option;
    } else if (!option && availableOptions) {
        // concatenate first option (default) if available
        serviceOption += "~" + availableOptions[Object.keys(availableOptions)[0]];
    }
 
    if (destination != "")
        serviceOption += "~C" + destination.id;

    return serviceOption;
}

/**
 * generate request object for the  provided method and url
 * @param {string} method request method (i.e. 'GET')
 * @param {string} url request url
 * @return {object} {@class XMLHttpRequest} or {@class XDomainRequest} or null if not available
 */
function createCORSRequest(method, url) {
    let xhr = new XMLHttpRequest();

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