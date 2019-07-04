import { ResponseParser } from './src/response-parser';
import { Options } from './src/options';
export { ResponseParser, Options }

/**
 * @author Benny Megidish
 */

export declare class IPS {
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
    calculateShippingRate(destination: string, weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

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
    calculateBulkShippingRate(destination: string, weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

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
    calculateAbroadShippingRate(destination: string, weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

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
    calculateLocalShippingRate(weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser>

    /**
     * calculate abroad bulk shipping rate for abroad bulk shipments
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateBulkShippingRate} instead
     * @param {string} destination destination country name (in CamelCase English)
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
     */
    calculateAbroadBulkShippingRate(destination: string, weight: number, shipmentType: string,
        shipmentSubtype: any, serviceOption?: string, quantity?: number): Promise<ResponseParser> 

    /**
     * calculate local bulk shipping rate for local bulk shipments (in Israel)
     * @deprecated [#1] @since version 2.5.0 [#2] use {@link IPS#calculateBulkShippingRate} instead
     * @param {float} weight weight of the shipment in grams
     * @param {string} shipmentType type of shipment (as defines in {@class Options})
     * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
     * @param {string} serviceOption additional service options (nullable)
     * @param {integer} quantity amount of packages
     * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (@see {@class ResponseParser})
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