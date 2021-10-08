"use strict";
// Copyright 2019 Benny Megidish
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseParser = void 0;
/**
 * Handles Israel postal service response
 * @author Benny Megidish
 */
class ResponseParser {
    // ignore unconventional naming, due to bad postal service API
    /**
     * Parses israel post response and provides easy way to consume the data
     * @param {string} response the response the have been received from the israel-post server
     */
    constructor(response) {
        this.response = JSON.parse(response);
        this.prices = this.response.prices ? this.response.prices[0] : undefined;
    }
    /**
     * @returns {boolean} has the query succeeded or not
     */
    hasSucceeded() {
        return this.response && this.response.status > 0;
    }
    /**
     * @returns {string} response status message
     */
    getStatus() {
        return `${this.response.status > 0 ? 'הושלם.' : 'נכשל: '}${this.response.statusDesc}`;
    }
    /**
     * @returns {string} price group of the shipment
     */
    getPriceGroup() {
        return this.response.pcode;
    }
    /**
     * @returns {number} shipment price for individual package
     */
    getPrice() {
        let price;
        if (this.prices && this.prices.Pprice) {
            price = Number(this.prices.Pprice);
        }
        return price;
    }
    /**
     * @returns {number} shipment price for the entire shipment
     */
    getTotalPrice() {
        let price;
        if (this.prices && this.prices.Ptotal) {
            price = Number(this.prices.Ptotal);
        }
        return price;
    }
    /**
     * @returns {boolean} whether we have comments about the method
     */
    hasComments() {
        return parseInt(this.response.commTextsNo) > 0 || false;
    }
    /**
     * @returns {Array<string>} array of comments about the method if available
     */
    getComments() {
        let result = [""];
        if (this.hasComments()) {
            result = this.response.commTexts.map(comment => comment.ctext);
        }
        return result;
    }
    /**
     * @returns {Response} raw json response from the server
     */
    getRawData() {
        return this.response;
    }
}
exports.ResponseParser = ResponseParser;
