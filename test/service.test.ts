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

    it('should check if a shipment is eligible for express shipment', () => {
        let serviceType: string = options.AbroadMailOptions.EMS.shipmentType;
        
        assert.isTrue(ips.isEligibleForExpressShipment(serviceType, "Canada"));
        assert.isFalse(ips.isEligibleForExpressShipment(serviceType, "Afghanistan"));
    });

    it('should check if a shipment is eligible for economic shipment', () => {
        let serviceType: string = options.AbroadMailOptions.ECO.shipmentType;
        
        assert.isTrue(ips.isEligibleForEconomicShipment(serviceType, "Australia"));
        assert.isFalse(ips.isEligibleForEconomicShipment(serviceType, "Alaska"));
    });
});