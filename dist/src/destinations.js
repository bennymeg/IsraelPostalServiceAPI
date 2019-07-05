"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
/**
 * Loads and retrieves destination data
 * @author Benny Megidish
 */
class Destinations {
    // TODO: disjoint json source files to save memory and improve loading speed!!!?
    constructor(...mappings) {
        // load mapping [arguments] lazily to save time
        for (let i = 0; i < mappings.length; i++) {
            let argument = mappings[i];
            if (Object.values(options_1.UniqueShipmentTypes).includes(argument)) {
                this.loadDestinationMap(argument);
            }
        }
    }
    /**
     * loads the current destination mapping in a lazy manner
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     */
    loadDestinationMap(shipmentType) {
        return __awaiter(this, void 0, void 0, function* () {
            let destinationMapping;
            // dynamic destinations module import
            switch (shipmentType) {
                case "חבילה":
                    destinationMapping = yield Promise.resolve().then(() => require('../mapping/data/destination-map-parcel.json'));
                    this.parcelDestinationMap = new Map(Object.entries(destinationMapping));
                    break;
                case "EMS":
                    destinationMapping = yield Promise.resolve().then(() => require('../mapping/data/destination-map-ems.json'));
                    this.emsDestinationMap = new Map(Object.entries(destinationMapping));
                    break;
                case "eco post":
                    destinationMapping = yield Promise.resolve().then(() => require('../mapping/data/destination-map-eco.json'));
                    this.economicDestinationMap = new Map(Object.entries(destinationMapping));
                    break;
                //case "":
                default:
                    destinationMapping = yield Promise.resolve().then(() => require('../mapping/data/destination-map.json'));
                    this.globalDestinationMap = new Map(Object.entries(destinationMapping));
                    break;
            }
        });
    }
    /**
     * return destination object for the hebrew postal service API
     * @param {string} destination destination name in Camel-Case format
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Destination} destination object (if exists), or an empty destination
     */
    getDestinationHe(destination, shipmentType) {
        let result = { id: "0", name: "" };
        this._verifyDestinationMapLoaded(shipmentType);
        switch (shipmentType) {
            case "חבילה":
                result = this.parcelDestinationMap.get(destination);
                break;
            case "EMS":
                result = this.emsDestinationMap.get(destination);
                break;
            case "eco post":
                result = this.economicDestinationMap.get(destination);
                break;
            //case "":
            default:
                result = this.globalDestinationMap.get(destination);
                break;
        }
        return result;
    }
    /**
     * return all the available destination for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType) {
        let result;
        this._verifyDestinationMapLoaded(shipmentType);
        switch (shipmentType) {
            case "חבילה":
                result = Array.from(this.parcelDestinationMap.keys());
                break;
            case "EMS":
                result = Array.from(this.emsDestinationMap.keys());
                break;
            case "eco post":
                result = Array.from(this.economicDestinationMap.keys());
                break;
            //case "":
            default:
                result = Array.from(this.globalDestinationMap.keys());
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
exports.Destinations = Destinations;
