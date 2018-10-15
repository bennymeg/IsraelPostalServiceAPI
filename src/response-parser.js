/**
 * Handles Israel postal service response
 * @author Benny Megidish
 */
class ResponseParser {
    constructor(response) {
        this.response = JSON.parse(response);
        this.prices = this.response.prices[0];
    }

    getPriceGroup() {
        return this.response.pcode;
    }

    getPrice() {
        let price;

        if (this.prices && this.prices.Pprice) {
            price = Number(this.prices.Pprice);
        }

        return price;
    }

    getTotalPrice() {
        let price;

        if (this.prices && this.prices.Ptotal) {
            price = Number(this.prices.Ptotal);
        }

        return price;
    }

    hasComments() {
        return parseInt(this.response.commTextsNo) > 0 || false;
    }

    getComments() {
        let result = ""

        if (this.hasComments()) {
            result = this.response.commTexts.map(comment => comment.ctext);
        }

        return result;
    }

    getRawData() {
        return this.response;
    }
}

module.exports.ResponseParser = ResponseParser;