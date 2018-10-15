const destination = require('../../src/destenations').Destinations;
const assert = require('chai').assert; 

describe('Destinations', () => {
    let dest = new destination("EMS");

    describe('Loading', () => {
        it('should load destination if provided in the constructor', () => {
            let result = dest._verifyDesitetionMapLoaded("EMS");

            assert.isTrue(result);
        });

        it('should load destination explicitly', () => {
            dest.loadDestinationMap("חבילה");
            let result = dest._verifyDesitetionMapLoaded("EMS");

            assert.isTrue(result);
        });

        it('should retrive destination from loaded mappings', () => {
            let result = dest.getDestenetionHe("Canada", "EMS");

            assert.exists(result);
            assert.equal(Object.keys(result).length, 2);
        });

        it('should retrive all the keys from loaded mappings', () => {
            let result = dest.getAllDestination("EMS");

            assert.exists(result);
            assert.isAbove(Object.keys(result).length, 200);
        });

        it('should verify destination loaded or load them if not', () => {
            let result1 = dest._verifyDesitetionMapLoaded("eco post");
            let result2 = dest._verifyDesitetionMapLoaded("eco post");

            assert.isFalse(result1);
            assert.isTrue(result2);
        });
    });
});