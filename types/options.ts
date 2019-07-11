export class OptionsType {
    static LocalMailOptions: LocalMailOptionsType;
    static LocalBulkMailOptions: LocalBulkMailOptionsType;
    static AbroadMailOptions: AbroadMailOptionsType;
    static AbroadBulkMailOptions: AbroadBulkMailOptionsType;
    static UniqueShipmentTypes: any;
}

export declare type LocalMailOptionsType = {
    LETTER: Option;
    POSTCARD: Option;
    PARCEL: Option;
    LEAFLETS: Option;
}

export declare type LocalBulkMailOptionsType = {
    LETTER: Option;
    PARCEL: Option;
    RESPONSE: Option;
}

export declare type AbroadMailOptionsType = {
    LETTER: Option;
    POSTCARD: Option;
    SMALL: Option;
    PRINTED: Option;
    PARCEL: Option;
    EMS: Option;
    NEWSLETTER: Option;
    ECO: Option;
}

export declare type AbroadBulkMailOptionsType = {
    PARCEL: Option;
}

declare type Option = {
    shipmentType: string,
    shipmentSubtypes: ShipmentSubtypes                  // FIXME: find more tailored solution as per #13
}

declare type TShipmentSubtypes = {
    [key: string]: ShipmentSubtype
}

declare type ShipmentSubtypes = {
    regular?: ShipmentSubtype,
    signed?: ShipmentSubtype,
    overnight?: ShipmentSubtype,
    signedOvernight?: ShipmentSubtype,
    military?: ShipmentSubtype,
    overTheSea?: ShipmentSubtype,
    express?: ShipmentSubtype,
    eco?: ShipmentSubtype,
    combinedDirect?: ShipmentSubtype
}

declare type ShipmentSubtype = {
    name: string,
    options?: ShipmentSubtypeOption                     // FIXME: find more tailored solution as per #13
}

declare type TShipmentSubtypeOption = {
    [key: string]: string
}

declare type ShipmentSubtypeOption = {
    regular?: string,
    signed?: string,
    withDeliveryVerification?: string, 
    withDeliveryAndScanVerification?: string, 
    toDispatchCenter?: string, 
    byHand?: string,
    sorted?: string, 
    sortedToDispatchCenter?: string, 
    unsortedZipped?: string, 
    unsortedZippedToDispatchCenter?: string,
    withoutBarcode?: string, 
    withBarcodeAndRecipient?: string, 
    directCheck?: string, 
    directCheckDiscounted?: string, 
    signedDirectCheck?: string,
    withFile?: string, 
    withoutFile?: string	
}
