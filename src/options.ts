import { LocalMailOptions, LocalBulkMailOptions, AbroadMailOptions, AbroadBulkMailOptions } from '../@types/src/options'

/**
 * This module contains all the shipping options enumerations
 * @author Benny Megidish
 */

const LocalMailOptions: LocalMailOptions = {
    LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null },
                                                        signed: { name: "רשום", options: { regular: "ללא אישור מסירה", withDeliveryVerification: "עם אישור מסירה", withDeliveryAndScanVerification: "עם אישור מסירה וסריקה" } },
                                                        overnight: { name: "דואר 24", options: null },
                                                        signedOvernight: { name: "רשום מהיר", options: null }} },
    POSTCARD: { shipmentType: "גלויה", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null }} },
    PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "מסניף לסניף", options: null },
                                                         military: { name: "למען של דואר צבאי", options: null }} },
    LEAFLETS: { shipmentType: "עלונים", shipmentSubtypes: { regular: { name: "חלוקת עלונים", options: null },
                                                            overnight: { name: "עלון 24", options: { toDispatchCenter: "חלוקה למרכזי חלוקה", byHand: "חלוקה רגלית" } }} }
};

const LocalBulkMailOptions: LocalBulkMailOptions = {
    LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "משלוח כמותי רגיל", options: { sorted: "ממויין", sortedToDispatchCenter: "ממויין - למרכזי חלוקה", unsortedZipped: "ממוקד לא ממויין", unsortedZippedToDispatchCenter: "ממוקד לא ממויין - למרכזי חלוקה" } },
                                                              signed: { name: "משלוח כמותי רשום", options: { withoutBarcode: "", withBarcodeAndRecipient: "עם ברקוד ופרטי נמען" } },
                                                              overnight: { name: "דואר 24", options: null }} },
    PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "מסניף לסניף", options: null },
                                                         combinedDirect: { name: "מסירה מרוכזת לנמען אחד", options: null }} },
    RESPONSE: { shipmentType: "מסירת מכתבי תגוביינא", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null }} }
};

const AbroadMailOptions: AbroadMailOptions = {
    LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "דואר אויר", options: { regular: "משלוח רגיל", signed: "רשום" } },
                                                        overTheSea: { name: "דואר ים ויבשה", options: { regular: "משלוח רגיל", signed: "רשום" } },
                                                        express: { name: "דואר מהיר - EMS", options: null }} }, 
    POSTCARD: { shipmentType: "גלויה", shipmentSubtypes: { regular: { name: "דואר אויר", options: null },
                                                            overTheSea: { name: "דואר ים ויבשה", options: null }} },
    SMALL: { shipmentType: "צרור קטן", shipmentSubtypes: { regular: { name: "דואר אויר", options: { regular: "משלוח רגיל", signed: "רשום" } }} },
    PRINTED: { shipmentType: "דבר דפוס", shipmentSubtypes: { regular: { name: "דואר אויר", options: { regular: "משלוח רגיל", signed: "רשום", directCheck: "שק ישיר - משלוח רגיל", signedDirectCheck: "שק ישיר - רשום" } },
                                                              overTheSea: { name: "דואר ים ויבשה", options: { regular: "תעריף רגיל", signed: "תעריף רגיל - רשום", directCheck: "שק ישיר - משלוח רגיל", directCheckDiscounted: "שק ישיר - תעריף מוזל", signedDirectCheck: "שק ישיר - תעריף רגיל - רשום"} }} },
    PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "דואר אויר", options: null },
                                                          overTheSea: { name: "דואר ים ויבשה", options: null },
                                                          express: { name: "דואר מהיר - EMS", options: null }} },
    EMS: { shipmentType: "EMS", shipmentSubtypes: { express: { name: "דואר מהיר - EMS", options: null }} },
    NEWSLETTER: { shipmentType: "עיתון", shipmentSubtypes: { regular: { name: "דואר אויר", options: null }} },
    ECO: { shipmentType: "eco post", shipmentSubtypes: { eco: { name: "eco post", options: { withFile: "כולל קובץ", withoutFile: "ללא קובץ" } }} }
};

const AbroadBulkMailOptions: AbroadBulkMailOptions = {
    PARCEL: { shipmentType: "דברי דואר לחו\"ל", shipmentSubtypes: { regular: { name: "דואר אויר", options: null }} }
};

// TODO: check all cases in options
// TODO: maybe this may cause confusion?
const UniqueShipmentTypes = {
    ALL: "",
    PARCEL: "חבילה",        // "parcel"
    EMS: "EMS",             // "ems"
    ECONOMIC: "eco post"    // "eco"
};

module.exports.LocalMailOptions = LocalMailOptions;
module.exports.LocalBulkMailOptions = LocalBulkMailOptions;
module.exports.AbroadMailOptions = AbroadMailOptions;
module.exports.AbroadBulkMailOptions = AbroadBulkMailOptions;
module.exports.UniqueShipmentTypes = UniqueShipmentTypes;
