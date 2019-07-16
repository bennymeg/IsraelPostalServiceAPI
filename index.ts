// Copyright 2019 Benny Megidish

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Destinations, Destination } from './src/destinations';
import * as utils from './src/service-utils';
import { OptionsType } from './types/options';
import { ResponseParser } from './src/response-parser';
export const Options: OptionsType = require('./src/options');

/**
 * Exposes Israel postal service API
 * @author Benny Megidish
 */
export class IPS {
    private destinations: Destinations;

    constructor() {
        this.destinations = new Destinations();
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
    calculateShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption=null, quantity=1): Promise<ResponseParser> {
        let isLocal: boolean = this.isLocalShipment(destination);

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
    calculateBulkShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption=null, quantity=1): Promise<ResponseParser> {
        let isLocal: boolean = this.isLocalShipment(destination);

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
    calculateAbroadShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption=null, quantity=1): Promise<ResponseParser> {
        let destinationHE: Destination = this.destinations.getDestinationHe(destination, shipmentType);
        let type: string = "משלוח דואר לחו\"ל";
        let serviceType: string = type + "~" + shipmentType;

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
    calculateLocalShippingRate(weight: number, shipmentType: string, shipmentSubtype: any, serviceOption=null, quantity=1): Promise<ResponseParser> {
        let destinationHE: Destination = { id: "0", name: ""};
        let type: string = "משלוח דואר בארץ";
        let serviceType: string = type + "~" + shipmentType;

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
    calculateAbroadBulkShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption=null, quantity=1): Promise<ResponseParser> {
        let destinationHE: Destination = this.destinations.getDestinationHe(destination, shipmentType);
        let type: string = "משלוח דואר כמותי";
        let serviceType: string = type + "~" + shipmentType;

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
    calculateLocalBulkShippingRate(weight: number, shipmentType: string, shipmentSubtype: any, serviceOption=null, quantity=1): Promise<ResponseParser> {
        let destinationHE: Destination = { id: "0", name: ""};
        let type: string = "משלוח דואר כמותי";
        let serviceType: string = type + "~" + shipmentType;

        return utils.calculateShippingRate(destinationHE, weight, serviceType, shipmentSubtype, serviceOption, quantity);
    }

    /**
     * pre-loads the destinations for the requested shipment method
     * by default, the destinations are loaded lazily on-demand
     * @param {string} shipmentMethod method of shipment as defined in the {@class Options#ShipmentMethods} class
     */
    preloadDestinations(shipmentMethod: string) {
        this.destinations.loadDestinationMap(shipmentMethod);
    }

    /**
     * return all the available destinations for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestinations(shipmentType: string): Array<string> {
        return this.destinations.getAllDestination(shipmentType);
    }

    private isLocalShipment(destination: string): boolean {
        return destination.toLowerCase() === 'israel';
    }
}
