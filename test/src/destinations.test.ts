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

import { Destinations, Destination } from '../../src/destinations';
import * as options from '../../src/options';
import { assert } from 'chai';

describe('Destinations', () => {
    let destination = new Destinations(options.ShipmentMethods.EMS);

    describe('Loading', () => {
        it('should load destination if provided in the constructor', () => {
            let result: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.EMS);

            assert.isTrue(result);
        });

        it('should load destination explicitly', () => {
            destination.loadDestinationMap("חבילה");
            let result: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.EMS);

            assert.isTrue(result);
        });

        it('should retrieve destination from loaded mappings', () => {
            let result: Destination = destination.getDestinationHe("Canada", options.ShipmentMethods.EMS);

            assert.exists(result);
            assert.equal(Object.keys(result).length, 2);
        });

        it('should retrieve all the keys from loaded mappings', () => {
            let result: Array<string> = destination.getAllDestination(options.ShipmentMethods.EMS);

            assert.exists(result);
            assert.isAbove(Object.keys(result).length, 200);
        });

        it('should verify destination loaded or load them if not', () => {
            let result1: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.ECONOMIC);
            let result2: boolean = destination._verifyDestinationMapLoaded(options.ShipmentMethods.ECONOMIC);

            assert.isFalse(result1);
            assert.isTrue(result2);
        });
    });
});

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}