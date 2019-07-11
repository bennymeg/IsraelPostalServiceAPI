import { Response } from "../types/response";
/**
 * Handles Israel postal service response
 * @author Benny Megidish
 */
export declare class ResponseParser {
    private response;
    private prices;
    /**
     * Parses israel post response and provides easy way to consume the data
     * @param {string} response the response the have been received from the israel-post server
     */
    constructor(response: string);
    /**
     * @returns {boolean} has the query succeeded or not
     */
    hasSucceeded(): boolean;
    /**
     * @returns {string} response status message
     */
    getStatus(): string;
    /**
     * @returns {string} price group of the shipment
     */
    getPriceGroup(): string;
    /**
     * @returns {number} shipment price for individual package
     */
    getPrice(): number;
    /**
     * @returns {number} shipment price for the entire shipment
     */
    getTotalPrice(): number;
    /**
     * @returns {boolean} whether we have comments about the method
     */
    hasComments(): boolean;
    /**
     * @returns {Array<string>} array of comments about the method if available
     */
    getComments(): Array<string>;
    /**
     * @returns {Response} raw json response from the server
     */
    getRawData(): Response;
}
