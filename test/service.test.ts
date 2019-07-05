import * as options from '../src/options';
import { IPS } from '../index';
import { assert } from 'chai';

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

    it('should calculate abroad bulk shipping price', async () => {
        let bulkServiceType = options.AbroadBulkMailOptions.PARCEL.shipmentType;
        let bulkServiceSubtype = options.AbroadBulkMailOptions.PARCEL.shipmentSubtypes.regular;
        
        return await ips.calculateAbroadBulkShippingRate("Germany", 10, bulkServiceType, bulkServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {   
            assert.fail(error);
        });
    });

    it('should calculate local bulk shipping price', async () => {
        let bulkServiceType = options.LocalBulkMailOptions.PARCEL.shipmentType;
        let bulkServiceSubtype = options.LocalBulkMailOptions.PARCEL.shipmentSubtypes.regular;
        
        return await ips.calculateLocalBulkShippingRate(10, bulkServiceType, bulkServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {   
            assert.fail(error);
        });
    });
});