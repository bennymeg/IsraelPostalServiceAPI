export interface Destination {
    id: string;
    name: string;
}
/**
 * Loads and retrieves destination data
 * @author Benny Megidish
 */
export declare class Destinations {
    globalDestinationMap: Map<string, Destination>;
    parcelDestinationMap: Map<string, Destination>;
    emsDestinationMap: Map<string, Destination>;
    economicDestinationMap: Map<string, Destination>;
    constructor(...mappings: string[]);
    /**
     * loads the current destination mapping in a lazy manner
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     */
    loadDestinationMap(shipmentType: string): void;
    /**
     * return destination object for the hebrew postal service API
     * @param {string} destination destination name in Camel-Case format
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Destination} destination object (if exists), or an empty destination
     */
    getDestinationHe(destination: string, shipmentType: string): Destination;
    /**
     * return all the available destination for the shipment type
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {Array<string>} array that contains all the available destination for the shipment type
     */
    getAllDestination(shipmentType: string): Array<string>;
    /**
     * verifies that the appropriate mapping for the shipment type is loaded, if not, it loads it.
     * @param {string} shipmentType type of shipment as defined in the {@class Options} class
     * @returns {boolean} true, if the appropriate mapping was already loaded, false otherwise
     */
    _verifyDestinationMapLoaded(shipmentType: string): boolean;
}
