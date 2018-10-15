/**
 * Loads and retrives destination data
 * @author Benny Megidish
 */

const eShipmentType = {
    // TODO: check all cases in options
    ALL: "",
    PARCEL: "חבילה",        // "parcel"
    EMS: "EMS",             // "ems"
    ECONOMIC: "eco post"    // "eco"
}

// TODO: disjoint json source files to save memory and improve loading speed!!!?
class Destinations {
    constructor() {
        // load mapping lazily to save time
        this.globalDestinationMap = undefined;
        this.parcelDestinationMap = undefined;
        this.emsDestinationMap = undefined;
        this.economicDestinationMap = undefined;

        for (var i = 0; i < arguments.length; i++) {
            let argument = arguments[i];
            
            if (typeof argument === 'string' || argument instanceof String) {
                if (Object.values(eShipmentType).includes(argument)) {
                    this.loadDestinationMap(argument);
                }
            }
        }
    }

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
            case "":
            default:
                this.globalDestinationMap = require('../mapping/data/destination-map.json'); 
                break;
        }
    }

    getDestenetionHe(destination, shipmentType) {
        let result = "";
        this._verifyDesitetionMapLoaded(shipmentType);

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
            case "":
            default:
                result = this.globalDestinationMap[destination];
                break;
        }

        return result;
    }

    getAllDestination(shipmentType) {
        let result;
        this._verifyDesitetionMapLoaded(shipmentType);
                
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
            case "":
            default:
                result = Object.keys(this.globalDestinationMap);
                break;
        }

        return result;
    }

    _verifyDesitetionMapLoaded(shipmentType) {
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
            case "":
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