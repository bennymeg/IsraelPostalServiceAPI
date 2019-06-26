const IPS = require('../index').IPS;
const options = require('../src/options');
const assert = require('chai').assert; 

describe('Service', () => {
    let ips = new IPS();

    it('should calculate abroad shipping price', async () => {
        let abroadServiceType = options.AbroadMailOptions.SMALL.shipmentType;
        let abroadServiceSubtype = options.AbroadMailOptions.SMALL.shipmentSubtypes.regular;

        return await ips.calculateAbroadShippingRate("Italy", 10, abroadServiceType, abroadServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {
            assert.fail(error);
        });
    });

    it('should calculate local shipping price', async () => {
        let localServiceType = options.LocalMailOptions.LETTER.shipmentType;
        let localServiceSubtype = options.LocalMailOptions.LETTER.shipmentSubtypes.regular;

        return await ips.calculateLocalShippingRate(10, localServiceType, localServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {
            assert.fail(error);
        });
    });

    it('should calculate bulk shipping price', async () => {
        let bulkServiceType = options.AbroadBulkMailOptions.PARCEL.shipmentType;
        let bulkServiceSubtype = options.AbroadBulkMailOptions.PARCEL.shipmentSubtypes.regular;
        
        return await ips.calculateBulkShippingRate("Germany", 10, bulkServiceType, bulkServiceSubtype).then((result) => {
            console.log(result);
            
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {   
            assert.fail(error);
        });
    });
});