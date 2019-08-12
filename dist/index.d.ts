import { OptionsType } from './types/options';
import { ResponseParser } from './src/response-parser';
export declare const Options: OptionsType;
/**
 * Exposes Israel postal service API
 * @author Benny Megidish
 */
export declare class IPS {
    private destinations;
    constructor();
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
    calculateShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption?: any, quantity?: number): Promise<ResponseParser>;
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
    calculateBulkShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption?: any, quantity?: number): Promise<ResponseParser>;
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
    calculateAbroadShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption?: any, quantity?: number): Promise<ResponseParser>;
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
    calculateLocalShippingRate(weight: number, shipmentType: string, shipmentSubtype: any, serviceOption?: any, quantity?: number): Promise<ResponseParser>;
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
    calculateAbroadBulkShippingRate(destination: string, weight: number, shipmentType: string, shipmentSubtype: any, serviceOption?: any, quantity?: number): Promise<ResponseParser>;
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
    calculateLocalBulkShippingRate(weight: number, shipmentType: string, shipmentSubtype: any, serviceOption?: any, quantity?: number): Promise<ResponseParser>;
    /**
     * pre-loads the destinations for the requested shipment method
     * by default, the destinations are loaded lazily on-demand
     * @param {string} shipmentMethod method of shipment as defined in the {@class Options#ShipmentMethods} class
     */
    preloadDestinations(shipmentMethod: string): void;
    /**
     * return all the available destinations for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestinations(shipmentType: string): Array<string>;
    /**
     * verify if the shipment is eligible for economic shipment
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @param {string} destination destination country name (in CamelCase English)
     * @returns {boolean} true, if the shipment is eligible for economic shipment, otherwise, false
     */
    isEligibleForExpressShipment(shipmentType: string, destination: string): boolean;
    /**
     * verify if the shipment is eligible for economic shipment
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @param {string} destination destination country name (in CamelCase English)
     * @returns {boolean} true, if the shipment is eligible for economic shipment, otherwise, false
     */
    isEligibleForEconomicShipment(shipmentType: string, destination: string): boolean;
    private isLocalShipment;
}
