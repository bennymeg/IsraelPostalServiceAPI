const options = require('./src/options');
const utils = require('./src/service-utils');
const ResponseParser = require('./src/response-parser').ResponseParser;
const Destinations = require('./src/destinations').Destinations;

/**
 * Exposes Israel postal service API
 * @author Benny Megidish
 */
class IPS {
    constructor() {
        this.destinations = new Destinations();
    }
    
    /**
     * calculate shipping rate for abroad shipments
     * @param {string} destination Camel-Case destination name (in english)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestinationHe(destination, shipmentType);
        let type = "משלוח דואר לחו\"ל";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * calculate shipping rate for local shipments (in Israel)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = "";
        let type = "משלוח דואר בארץ";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * calculate bulk shipping rate for abroad and local bulk shipments
     * @param {string} destination Camel-Case destination name (in english) or "" for local shipments
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestinationHe(destination, shipmentType);
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * calculate bulk shipping rate for abroad and local bulk shipments
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = "";
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * return all the available destination for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {string[]} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType) {
        return this.destinations.getAllDestination(shipmentType);
    }
}

module.exports.IPS = IPS;
module.exports.Options = options;