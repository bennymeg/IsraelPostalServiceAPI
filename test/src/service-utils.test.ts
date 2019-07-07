const environment = require('../../src/dynamic/xhr-node').environment;
import * as options from '../../src/options';
import * as utils from '../../src/service-utils';
import { assert } from 'chai';
import { Destination } from '../../src/destinations';

describe('Service Utilities', () => {
    if (environment == "debug") {
        describe('CORS', () => {
            it('should return CORS request', () => {
                let result = utils.createCORSRequest("GET", "https://www.israelpost.co.il");
                assert.isNotNull(result);
            });

            it('should return CORS response', () => {
                let xhr = utils.createCORSRequest("GET", "https://www.israelpost.co.il");

                if (xhr) {
                    xhr.onload = () => {
                        assert.isNotNull(xhr.responseText);
                    };
                    
                    xhr.onerror = (error) => {
                        assert.fail(error);
                    };
                    
                    xhr.send();
                } else {
                    assert.fail("Could not create CORS request");
                }
            });
        });
    }

    describe('Service Options', () => {
        let abroadServiceSubtype: any = options.AbroadMailOptions.SMALL.shipmentSubtypes.regular;
        let localServiceSubtype: any = options.LocalMailOptions.LETTER.shipmentSubtypes.regular;
        let destination: Destination = { "id": "83", "name": "גרמניה" };

        it('should choose default option', () => {
            let result: string = utils.generateServiceOption(destination, abroadServiceSubtype, null);
            assert.equal(result, "דואר אויר~משלוח רגיל~C83");
        });

        it('should return valid service option', () => {
            let result: string = utils.generateServiceOption(destination, abroadServiceSubtype, abroadServiceSubtype.options.regular);
            assert.equal(result, "דואר אויר~משלוח רגיל~C83");
        });

        it('should return valid service option for local shipment', () => {
            let result: string = utils.generateServiceOption({ id: "0", name: "" }, localServiceSubtype, null);
            assert.equal(result, "משלוח רגיל");
        });
    });

    describe('Service Calculation', () => {
        let type: string = "משלוח דואר לחו\"ל";
        let abroadServiceType: string = type + "~" + options.AbroadMailOptions.PARCEL.shipmentType;
        let abroadShipmentSubtype: any = options.AbroadMailOptions.PARCEL.shipmentSubtypes.regular;
        let destination: Destination = { "id": "83", "name": "גרמניה" };

        it('should calculate shipping price', async () => {
            return await utils.calculateShippingRate(destination, 10, abroadServiceType, abroadShipmentSubtype, null).then((result) => {                
                assert.isTrue(result.getTotalPrice() > 0);
            }).catch((error) => {
                assert.fail(error);
            });
        });
    });
});