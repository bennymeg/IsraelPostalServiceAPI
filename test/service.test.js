const IPS = require('../index').IPS;
const options = require('../src/options');
const assert = require('chai').assert; 

describe('Service', () => {
    let ips = new IPS();

    it('should calculate abroad shipping price', () => {
        let abroadServiceType = options.AbroadMailOptions.SMALL.shipmentType;
        let abroadServiceSubtype = options.AbroadMailOptions.SMALL.shipmentSubtypes.regular;

        ips.calculateAbroadShippingRate("Italy", 10, abroadServiceType, abroadServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch(() => {
            assert.fail();
        });
    });

    it('should calculate local shipping price', () => {
        let localServiceType = options.LocalMailOptions.LETTER.shipmentType;
        let localServiceSubtype = options.LocalMailOptions.LETTER.shipmentSubtypes.regular;

        ips.calculateLocalShippingRate(10, localServiceType, localServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch(() => {
            assert.fail();
        });
    });

    it('should calculate bulk shipping price', () => {
        let bulkServiceType = options.LocalBulkMailOptions.LETTER.shipmentType;
        let bulkServiceSubtype = options.LocalBulkMailOptions.LETTER.shipmentSubtypes.regular;
        
        ips.calculateAbroadShippingRate("Spain", 10, bulkServiceType, bulkServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch(() => {
            assert.fail();
        });
    });
});