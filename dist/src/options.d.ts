import { LocalMailOptionsType, LocalBulkMailOptionsType, AbroadMailOptionsType, AbroadBulkMailOptionsType } from '../types/options';
/**
 * This module contains all the shipping options enumerations
 * @author Benny Megidish
 */
export declare const LocalMailOptions: LocalMailOptionsType;
export declare const LocalBulkMailOptions: LocalBulkMailOptionsType;
export declare const AbroadMailOptions: AbroadMailOptionsType;
export declare const AbroadBulkMailOptions: AbroadBulkMailOptionsType;
/**
 *  Set of unique shipment methods that divide the world into regions (have different reach)
 */
export declare const ShipmentMethods: {
    REGULAR: string;
    PARCEL: string;
    EMS: string;
    ECONOMIC: string;
};
