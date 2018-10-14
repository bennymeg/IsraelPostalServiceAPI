class ResponseParser {
    constructor(response) {
        this.response = response;
        this.prices = response["prices"];
    }

    getPriceGroup() {
        return this.response["pcode"];
    }

    getPrice() {
        let price = -1;

        if (this.prices["Pprice"]) {
            price = Number(this.prices["Pprice"]);
        }

        return price;
    }

    getTotalPrice() {
        let price = -1;

        if (this.prices["Ptotal"]) {
            price = Number(this.prices["Ptotal"]);
        }

        return price;
    }

    hasComments() {
        return parseInt(this.responce["commTextsNo"]) > 0 || false;
    }

    getComments() {
        let result = ""

        if (this.hasComments()) {
            result = this.responce["commTexts"].map(comment => comment["ctext"])
        }

        return result;
    }
}

module.exports.ResponseParser = ResponseParser;