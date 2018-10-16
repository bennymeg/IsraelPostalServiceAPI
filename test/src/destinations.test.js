const Destination = require('../../src/destinations').Destinations;
const assert = require('chai').assert; 

describe('Destinations', () => {
    let destination = new Destination("EMS");

    describe('Loading', () => {
        it('should load destination if provided in the constructor', () => {
            let result = destination._verifyDestinationMapLoaded("EMS");

            assert.isTrue(result);
        });

        it('should load destination explicitly', () => {
            destination.loadDestinationMap("חבילה");
            let result = destination._verifyDestinationMapLoaded("EMS");

            assert.isTrue(result);
        });

        it('should retrieve destination from loaded mappings', () => {
            let result = destination.getDestinationHe("Canada", "EMS");

            assert.exists(result);
            assert.equal(Object.keys(result).length, 2);
        });

        it('should retrieve all the keys from loaded mappings', () => {
            let result = destination.getAllDestination("EMS");

            assert.exists(result);
            assert.isAbove(Object.keys(result).length, 200);
        });

        it('should verify destination loaded or load them if not', () => {
            let result1 = destination._verifyDestinationMapLoaded("eco post");
            let result2 = destination._verifyDestinationMapLoaded("eco post");

            assert.isFalse(result1);
            assert.isTrue(result2);
        });
    });
});