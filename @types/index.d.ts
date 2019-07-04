import { ResponseParser } from './src/response-parser';
import { Options } from './src/options';
export { ResponseParser, Options }

/**
 * @author Benny Megidish
 */

export declare class IPS {
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
    calculateAbroadShippingRate(destination: string, weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

    /**
     * calculate shipping rate for local shipments (in Israel)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateLocalShippingRate(weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser>

    /**
     * calculate abroad bulk shipping rate for abroad and local bulk shipments
     * @param {string} destination Camel-Case destination name (in english) or "" for local shipments
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateAbroadBulkShippingRate(destination: string, weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

    /**
     * calculate local bulk shipping rate for abroad and local bulk shipments (in Israel)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
     */
    calculateLocalBulkShippingRate(weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

    /**
     * return all the available destination for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {array} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType: string): string[]
}