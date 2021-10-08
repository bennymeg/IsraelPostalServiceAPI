"use strict";
// Copyright 2019 Benny Megidish
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPS = exports.Options = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const destinations_1 = require("./src/destinations");
const utils = require("./src/service-utils");
exports.Options = require('./src/options');
/**
 * Exposes Israel postal service API
 * @author Benny Megidish
 */
class IPS {
    constructor() {
        this.destinations = new destinations_1.Destinations();
    }
    /**
     * calculate shipping rate for regular (non bulk) shipments
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption = null, quantity = 1) {
        let isLocal = this.isLocalShipment(destination);
        return isLocal ?
            this.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) :
            this.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity);
    }
    /**
     * calculate shipping rate for bulk shipments
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption = null, quantity = 1) {
        let isLocal = this.isLocalShipment(destination);
        return isLocal ?
            this.calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) :
            this.calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity);
    }
    /**
     * calculate shipping rate for abroad shipments
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateShippingRate} instead
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption = null, quantity = 1) {
        let destinationHE = this.destinations.getDestinationHe(destination, shipmentType);
        let type = "משלוח דואר לחו\"ל";
        let serviceType = type + "~" + shipmentType;
        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }
    /**
     * calculate shipping rate for local shipments (in Israel)
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateShippingRate} instead
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption = null, quantity = 1) {
        let destinationHE = { id: "0", name: "" };
        let type = "משלוח דואר בארץ";
        let serviceType = type + "~" + shipmentType;
        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }
    /**
     * calculate bulk shipping rate for abroad bulk shipments
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateBulkShippingRate} instead
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption = null, quantity = 1) {
        let destinationHE = this.destinations.getDestinationHe(destination, shipmentType);
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;
        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }
    /**
     * calculate bulk shipping rate for local bulk shipments (in Israel)
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateBulkShippingRate} instead
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption = null, quantity = 1) {
        let destinationHE = { id: "0", name: "" };
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;
        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }
    /**
     * pre-loads the destinations for the requested shipment method
     * by default, the destinations are loaded lazily on-demand
     * @param {string} shipmentMethod method of shipment as defined in the {@class Options#ShipmentMethods} class
     */
    preloadDestinations(shipmentMethod) {
        this.destinations.loadDestinationMap(shipmentMethod);
    }
    /**
     * return all the available destinations for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestinations(shipmentType) {
        return this.destinations.getAllDestination(shipmentType);
    }
    /**
     * verify if the shipment is eligible for economic shipment
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @param {string} destination destination country name (in CamelCase English)
     * @returns {boolean} true, if the shipment is eligible for economic shipment, otherwise, false
     */
    isEligibleForExpressShipment(shipmentType, destination) {
        const abroadOptions = exports.Options.AbroadMailOptions;
        this.destinations._verifyDestinationMapLoaded(abroadOptions.EMS.shipmentType);
        return (shipmentType == abroadOptions.EMS.shipmentType || shipmentType == abroadOptions.PARCEL.shipmentType)
            && this.destinations.emsDestinationMap.has(destination);
    }
    /**
     * verify if the shipment is eligible for economic shipment
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @param {string} destination destination country name (in CamelCase English)
     * @returns {boolean} true, if the shipment is eligible for economic shipment, otherwise, false
     */
    isEligibleForEconomicShipment(shipmentType, destination) {
        const abroadOptions = exports.Options.AbroadMailOptions;
        this.destinations._verifyDestinationMapLoaded(abroadOptions.ECO.shipmentType);
        return (shipmentType == abroadOptions.ECO.shipmentType || shipmentType == abroadOptions.PARCEL.shipmentType)
            && this.destinations.economicDestinationMap.has(destination);
    }
    isLocalShipment(destination) {
        return destination.toLowerCase() === 'israel';
    }
}
exports.IPS = IPS;
