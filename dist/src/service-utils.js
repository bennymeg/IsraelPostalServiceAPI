"use strict";
// Copyright 2019 Benny Megidish
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCORSRequest = exports.generateServiceOption = exports.calculateShippingRate = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const response_parser_1 = require("./response-parser");
// load correct XMLHttpRequest module according to the environment
const request = require('./dynamic/xhr-node').request;
const environment = require('./dynamic/xhr-node').environment;
let XDomainRequest;
/**
 * Utilities module
 * @author Benny Megidish
 */
/**
 * calculate shipping rate for all the shipment types
 * @param {Destination} destination destination object
 * @param {float} weight weight of the shipment in grams
 * @param {string} serviceType type of service
 * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
 * @param {string} serviceOption additional service options (nullable) (as generated in {@link generateServiceOption})
 * @param {integer} quantity amount of packages
 * @param {string} language API language
 * @param {string} shipmentQuantity shipment quantity
 * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
 */
function calculateShippingRate(destination, weight, serviceType, serviceSubtype, option, quantity = 1, language = "HE", shipmentQuantity = "0") {
    let serviceOption = generateServiceOption(destination, serviceSubtype, option);
    // request parameters
    let parameters = {
        lang: language,
        menuChosen: serviceType,
        serviceoption: serviceOption,
        qty: quantity,
        shipqty: shipmentQuantity,
        weight: weight,
        cname: destination.name
    };
    // generate request
    //"https://www.israelpost.co.il/npostcalc.nsf/CalcPrice?openagent&lang=HE&menuChosen=%D7%9E%D7%A9%D7%9C%D7%95%D7%97+%D7%93%D7%95%D7%90%D7%A8+%D7%9C%D7%97%D7%95%22%D7%9C~%D7%A6%D7%A8%D7%95%D7%A8+%D7%A7%D7%98%D7%9F&serviceoption=%D7%93%D7%95%D7%90%D7%A8+%D7%90%D7%95%D7%99%D7%A8~%D7%9E%D7%A9%D7%9C%D7%95%D7%97+%D7%A8%D7%92%D7%99%D7%9C~C29&qty=1&shipqty=0&weight=33&cname=%D7%90%D7%A1%D7%A0%D7%A1%D7%99%D7%95%D7%9F%0A&_=1538931508025"
    let url = "https://www.israelpost.co.il/npostcalc.nsf/CalcPrice?openagent";
    let queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
    let encodedUrlQuery = encodeURI(url + "&" + queryString.replace(/\s/g, "+"));
    // send request and return a promise
    return new Promise((accept, reject) => {
        if (environment != "debug") {
            let useXDR = typeof XDomainRequest != "undefined" ? true : false;
            request.get(encodedUrlQuery, { useXDR: useXDR }, (error, response) => {
                if (error != null) {
                    reject(error);
                }
                else {
                    accept(new response_parser_1.ResponseParser(response.body));
                }
            });
        }
        else {
            // we are running in debug environment
            let request = createCORSRequest('GET', encodedUrlQuery);
            if (request) {
                request.onload = () => {
                    accept(new response_parser_1.ResponseParser(request.responseText));
                };
                request.onerror = () => {
                    reject(request.statusText);
                };
                request.send();
            }
            else {
                reject('CORS is not supported');
            }
        }
    });
}
exports.calculateShippingRate = calculateShippingRate;
/**
 * generate service options string
 * @param {Destination} destination destination object
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
    }
    else if (!option && availableOptions) {
        // concatenate first option (default) if available
        serviceOption += "~" + availableOptions[Object.keys(availableOptions)[0]];
    }
    if (destination && destination.name != "")
        serviceOption += "~C" + destination.id;
    return serviceOption;
}
exports.generateServiceOption = generateServiceOption;
/**
 * generate request object for the  provided method and url (for node environment only)
 * @param {string} method request method (i.e. 'GET')
 * @param {string} url request url
 * @return {object} {@class XMLHttpRequest} or {@class XDomainRequest} or null if not available
 */
function createCORSRequest(method, url) {
    let request = null;
    if (environment == "debug") {
        request = new request();
        if ("withCredentials" in request) {
            // Most browsers.
            request.open(method, url, true);
        }
        else if (typeof XDomainRequest != "undefined") {
            // IE8 & IE9
            request = new XDomainRequest();
            request.open(method, url);
        }
        else {
            // CORS not supported.
            request = null;
            console.error('CORS request is not supported');
        }
    }
    return request;
}
exports.createCORSRequest = createCORSRequest;
