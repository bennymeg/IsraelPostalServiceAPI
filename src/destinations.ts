import { UniqueShipmentTypes as eShipmentTypes } from './options';

export interface Destination {
    id: string,     // number
    name: string
}

/**
 * Loads and retrieves destination data
 * @author Benny Megidish
 */
export class Destinations {
    globalDestinationMap: Map<string, Destination>;
    parcelDestinationMap: Map<string, Destination>;
    emsDestinationMap: Map<string, Destination>;
    economicDestinationMap: Map<string, Destination>;

    // TODO: disjoint json source files to save memory and improve loading speed!!!?
    constructor(...mappings: string[]) {
        // load mapping [arguments] lazily to save time
        for (let i = 0; i < mappings.length; i++) {
            let argument = mappings[i];
            
            if (Object.values(eShipmentTypes).includes(argument)) {
                this.loadDestinationMap(argument);
            }
        }
    }

    /**
     * loads the current destination mapping in a lazy manner
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     */
    loadDestinationMap(shipmentType: string) {
        // dynamic import: import * as parcel from '../mapping/data/destination-map-parcel.json';
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
     * @returns {Destination} destination object (if exists), or an empty destination
     */
    getDestinationHe(destination: string, shipmentType: string): Destination {
        let result = { id: "0", name: "" };
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
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType: string): Array<string> {
        let result: Array<string>;
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
    _verifyDestinationMapLoaded(shipmentType: string): boolean {
        let isLoaded: boolean = true;

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
