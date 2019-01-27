const eShipmentTypes = require('./options').UniqueShipmentTypes;

/**
 * Loads and retrieves destination data
 * @author Benny Megidish
 */
class Destinations {
    // TODO: disjoint json source files to save memory and improve loading speed!!!?
    constructor() {
        // load mapping lazily to save time
        this.globalDestinationMap = undefined;
        this.parcelDestinationMap = undefined;
        this.emsDestinationMap = undefined;
        this.economicDestinationMap = undefined;

        for (let i = 0; i < arguments.length; i++) {
            let argument = arguments[i];
            
            if (typeof argument === 'string' || argument instanceof String) {
                if (Object.values(eShipmentTypes).includes(argument)) {
                    this.loadDestinationMap(argument);
                }
            }
        }
    }

    /**
     * loads the current destination mapping in a lazy manner
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     */
    loadDestinationMap(shipmentType) {
        switch (shipmentType) { 
            case "חבילה":
                this.parcelDestinationMap = require('../mapping/data/destination-map-parcel.json');
                break;
            case "EMS":
                this.emsDestinationMap = require('../mapping/data/destination-map-ems.json');
                break;
            case "eco post":
                this.economicDestinationMap = require('../mapping/data/destination-map-eco.json');
                break;
            //case "":
            default:
                this.globalDestinationMap = require('../mapping/data/destination-map.json'); 
                break;
        }
    }

    /**
     * return destination object for the hebrew postal service API
     * @param {string} destination destination name in Camel-Case format
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {object} destination object (if exists), or an empty string
     */
    getDestinationHe(destination, shipmentType) {
        let result = "";
        this._verifyDestinationMapLoaded(shipmentType);

        switch (shipmentType) { 
            case "חבילה":
                result = this.parcelDestinationMap[destination];
                break;
            case "EMS":
                result = this.emsDestinationMap[destination];
                break;
            case "eco post":
                result = this.economicDestinationMap[destination];
                break;
            //case "":
            default:
                result = this.globalDestinationMap[destination];
                break;
        }

        return result;
    }

    /**
     * return all the available destination for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {array} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType) {
        let result;
        this._verifyDestinationMapLoaded(shipmentType);
                
        switch (shipmentType) { 
            case "חבילה":
                result = Object.keys(this.parcelDestinationMap);
                break;
            case "EMS":
                result = Object.keys(this.emsDestinationMap);
                break;
            case "eco post":
                result = Object.keys(this.economicDestinationMap);
                break;
            //case "":
            default:
                result = Object.keys(this.globalDestinationMap);
                break;
        }

        return result;
    }

    /**
     * verifies that the appropriate mapping for the shipment type is loaded, if not, it loads it.
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {boolean} true, if the appropriate mapping was already loaded, false otherwise
     */
    _verifyDestinationMapLoaded(shipmentType) {
        let isLoaded = true;

        switch (shipmentType) { 
            case "חבילה":
                if (!this.parcelDestinationMap) {
                    isLoaded = false;
                    this.loadDestinationMap(shipmentType);
                }

                break;
            case "EMS":
                if (!this.emsDestinationMap) {
                    isLoaded = false;
                    this.loadDestinationMap(shipmentType);
                }

                break;
            case "eco post":
                if (!this.economicDestinationMap) {
                    isLoaded = false;
                    this.loadDestinationMap(shipmentType); 
                }

                break;
            //case "":
            default:
                if (!this.globalDestinationMap) {
                    isLoaded = false;
                    this.loadDestinationMap(shipmentType);
                }

                break;
        }

        return isLoaded;
    }
}

module.exports.Destinations = Destinations;