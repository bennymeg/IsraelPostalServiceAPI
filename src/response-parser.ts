import { Price, Response } from "../types/response";

/**
 * Handles Israel postal service response
 * @author Benny Megidish
 */

export class ResponseParser {
    private response: Response;
    private prices: Price;

    // ignore unconventional naming, due to bad postal service API
    /**
     * Parses israel post response and provides easy way to consume the data
     * @param {string} response the response the have been received from the israel-post server
     */
    constructor(response: string) {
        this.response = JSON.parse(response);
        this.prices = this.response.prices ? this.response.prices[0] : undefined;
    }

    /**
     * @returns {boolean} has the query succeeded or not
     */
    hasSucceeded(): boolean {
        return this.response && this.response.status > 0;
    }

    /**
     * @returns {string} response status message
     */
    getStatus(): string {
        return `${this.response.status > 0 ? 'הושלם.' : 'נכשל: '}${this.response.statusDesc}`;
    }

    /**
     * @returns {string} price group of the shipment
     */
    getPriceGroup(): string {
        return this.response.pcode;
    }

    /**
     * @returns {number} shipment price for individual package
     */
    getPrice(): number {
        let price: number;

        if (this.prices && this.prices.Pprice) {
            price = Number(this.prices.Pprice);
        }

        return price;
    }

    /**
     * @returns {number} shipment price for the entire shipment
     */
    getTotalPrice(): number {
        let price: number;

        if (this.prices && this.prices.Ptotal) {
            price = Number(this.prices.Ptotal);
        }

        return price;
    }

    /**
     * @returns {boolean} whether we have comments about the method
     */
    hasComments(): boolean {
        return parseInt(this.response.commTextsNo) > 0 || false;
    }

    /**
     * @returns {Array<string>} array of comments about the method if available
     */
    getComments(): Array<string> {
        let result = [""];

        if (this.hasComments()) {
            result = this.response.commTexts.map(comment => comment.ctext);
        }

        return result;
    }

    /**
     * @returns {Response} raw json response from the server
     */
    getRawData(): Response {
        return this.response;
    }
}
