export class Options {
    static LocalMailOptions: LocalMailOptions;
    static LocalBulkMailOptions: LocalBulkMailOptions;
    static AbroadMailOptions: LocalBulkMailOptions;
    static AbroadBulkMailOptions: AbroadMailOptions;
    static UniqueShipmentTypes: any;
}

declare type LocalMailOptions = {
    LETTER: Option;
    POSTCARD: Option;
    PARCEL: Option;
    LEAFLETS: Option;
}

declare type LocalBulkMailOptions = {
    LETTER: Option;
    PARCEL: Option;
    RESPONSE: Option;
}

declare type AbroadMailOptions = {
    LETTER: Option;
    POSTCARD: Option;
    SMALL: Option;
    PRINTED: Option;
    PARCEL: Option;
    EMS: Option;
    NEWSLETTER: Option;
    ECO: Option;
}

declare type AbroadBulkMailOptions = {
    PARCEL: Option;
}

declare type Option = {
    shipmentType: string,
    shipmentSubtypes: any
}

declare type ShipmentSubtypes = {
    regular?: ShipmentSubtype,
    signed?: ShipmentSubtype,
    overnight?: ShipmentSubtype,
    signedOvernight?: ShipmentSubtype,
    military?: ShipmentSubtype,
    overTheSea?: ShipmentSubtype,
    express?: ShipmentSubtype,
    eco?: ShipmentSubtype
}

declare type ShipmentSubtype = {
    name: string,
    options?: any
}