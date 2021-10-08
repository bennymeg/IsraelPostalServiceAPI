"use strict";
// Copyright 2019 Benny Megidish
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destinations = void 0;
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
            if (Object.values(options_1.ShipmentMethods).includes(argument)) {
                this.loadDestinationMap(argument);
            }
        }
    }
    /**
     * loads the current destination mapping in a lazy manner
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     */
    loadDestinationMap(shipmentType) {
        let destinationMapping;
        // dynamic destinations module import
        switch (shipmentType) {
            case "חבילה":
                destinationMapping = require('../mapping/data/destination-map-parcel.json');
                this.parcelDestinationMap = new Map(Object.entries(destinationMapping));
                break;
            case "EMS":
                destinationMapping = require('../mapping/data/destination-map-ems.json');
                this.emsDestinationMap = new Map(Object.entries(destinationMapping));
                break;
            case "eco post":
                destinationMapping = require('../mapping/data/destination-map-eco.json');
                this.economicDestinationMap = new Map(Object.entries(destinationMapping));
                break;
            //case "":
            default:
                destinationMapping = require('../mapping/data/destination-map.json');
                this.globalDestinationMap = new Map(Object.entries(destinationMapping));
                break;
        }
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
