const utils = require('../../src/service-utils');
const options = require('../../src/options');
const assert = require('chai').assert; 

describe('Service Utilities', () => {
    describe('CORS', () => {
        it('should return CORS request', () => {
            let result = utils.createCORSRequest("GET", "www.israelpost.co.il");
            assert.isNotNull(result);
        });

        it('should return CORS response', () => {
            let xhr = utils.createCORSRequest("GET", "www.israelpost.co.il");

            xhr.onload = () => {
                assert.isNotNull(xhr.responseText);
            };
            
            xhr.onerror = () => {
                assert.fail();
            };
            
            xhr.send();
        });
    });

    describe('Service Options', () => {
        let abroadServiceSubtype = options.AbroadMailOptions.SMALL.shipmentSubtypes.regular;
        let localServiceSubtype = options.LocalMailOptions.LETTER.shipmentSubtypes.regular;
        let destination = { "id": "83", "name": "גרמניה" };

        it('should choose default option', () => {
            let result = utils.generateServiceOption(destination, abroadServiceSubtype, null);
            assert.equal(result, "דואר אויר~משלוח רגיל~C83");
        });

        it('should return valid service option', () => {
            let result = utils.generateServiceOption(destination, abroadServiceSubtype, abroadServiceSubtype.options.regular);
            assert.equal(result, "דואר אויר~משלוח רגיל~C83");
        });

        it('should return valid service option for local shipment', () => {
            let result = utils.generateServiceOption("", localServiceSubtype, null);
            assert.equal(result, "משלוח רגיל");
        });
    });

    describe('Service Calculation', () => {
        let abroadServiceType = options.AbroadMailOptions.SMALL.shipmentType + "~משלוח דואר לחו\"ל";
        let abroadShipmentSubtype = options.AbroadMailOptions.SMALL.shipmentSubtypes.regular;
        let destination = { "id": "83", "name": "גרמניה" };

        it('should calculate shipping price', () => {
            utils.calculateShippingRate(destination, 10, abroadServiceType, abroadShipmentSubtype, null).then((result) => {
                assert.isTrue(result.getTotalPrice() > 0);
            }).catch(() => {
                assert.fail();
            })
        });
    });
});