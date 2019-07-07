import * as options from '../src/options';
import { IPS } from '../index';
import { assert } from 'chai';

describe('Service', () => {
    let ips: IPS = new IPS();

    it('should calculate abroad shipping price', async () => {
        let abroadServiceType: string = options.AbroadMailOptions.SMALL.shipmentType;
        let abroadServiceSubtype: any = options.AbroadMailOptions.SMALL.shipmentSubtypes.regular;

        return await ips.calculateAbroadShippingRate("Italy", 10, abroadServiceType, abroadServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {
            assert.fail(error);
        });
    });

    it('should calculate local shipping price', async () => {
        let localServiceType: string = options.LocalMailOptions.LETTER.shipmentType;
        let localServiceSubtype: any = options.LocalMailOptions.LETTER.shipmentSubtypes.regular;

        return await ips.calculateLocalShippingRate(10, localServiceType, localServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {
            assert.fail(error);
        });
    });

    it('should calculate abroad bulk shipping price', async () => {
        let bulkServiceType: string = options.AbroadBulkMailOptions.PARCEL.shipmentType;
        let bulkServiceSubtype: any = options.AbroadBulkMailOptions.PARCEL.shipmentSubtypes.regular;
        
        return await ips.calculateAbroadBulkShippingRate("Germany", 10, bulkServiceType, bulkServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {   
            assert.fail(error);
        });
    });

    it('should calculate local bulk shipping price', async () => {
        let bulkServiceType: string = options.LocalBulkMailOptions.PARCEL.shipmentType;
        let bulkServiceSubtype: any = options.LocalBulkMailOptions.PARCEL.shipmentSubtypes.regular;
        
        return await ips.calculateLocalBulkShippingRate(10, bulkServiceType, bulkServiceSubtype).then((result) => {
            assert.isTrue(result.getTotalPrice() > 0);
        }).catch((error) => {   
            assert.fail(error);
        });
    });
});