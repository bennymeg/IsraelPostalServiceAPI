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
