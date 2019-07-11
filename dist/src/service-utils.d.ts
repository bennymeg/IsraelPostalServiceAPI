import { Destination } from './destinations';
/**
 * Utilities module
 * @author Benny Megidish
 */
/**
 * calculate shipping rate for all the shipment types
 * @param {Destination} destination destination object
 * @param {float} weight weight of the shipment in grams
 * @param {string} serviceType type of service
 * @param {object} shipmentSubtype subtype of shipment (as define in the shipmentType {@class Options})
 * @param {string} serviceOption additional service options (nullable) (as generated in {@link generateServiceOption})
 * @param {integer} quantity amount of packages
 * @param {string} language API language
 * @param {string} shipmentQuantity shipment quantity
 * @returns {Promise<ResponseParser>} a promise with the parsed shipment data (see {@class ResponseParser})
 */
export declare function calculateShippingRate(destination: Destination, weight: number, serviceType: string, serviceSubtype: any, option?: string, quantity?: number, language?: string, shipmentQuantity?: string): Promise<any>;
/**
 * generate service options string
 * @param {Destination} destination destination object
 * @param {object} serviceSubtype service subtype as describes in the {@class Options} class
 * @param {string} option additional service options
 * @returns {string} service options string
 */
export declare function generateServiceOption(destination: Destination, serviceSubtype: any, option: string): string;
/**
 * generate request object for the  provided method and url (for node environment only)
 * @param {string} method request method (i.e. 'GET')
 * @param {string} url request url
 * @return {object} {@class XMLHttpRequest} or {@class XDomainRequest} or null if not available
 */
export declare function createCORSRequest(method: string, url: string): any;
