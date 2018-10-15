const Options = require('./src/options');
const Utils = require('./src/service-utils');
const Destinations = require('./src/destenations').Destinations;

/**
 * Exposes Israel postal service API
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

        return Utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    async calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = "";
        let type = "משלוח דואר בארץ";
        let serviceType = type + "~" + shipmentType;

        return Utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption=null, quantity=1) {
        let destinationHE = this.destinations.getDestenetionHe(destination, shipmentType);
        let type = "משלוח דואר כמותי";
        let serviceType = type + "~" + shipmentType;

        return Utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }
}

module.exports.IPS = IPS;
module.exports.Options = Options;