const LocalMailOptions = {
    LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null },
                                                            signed: { name: "רשום", options: { regular: "ללא אישור מסירה", with_delivery_verification: "עם אישור מסירה", with_delivery_and_scan_verification: "עם אישור מסירה וסריקה" } },
                                                            regular_express: { name: "דואר 24", options: null },
                                                            signed_express: { name: "רשום מהיר", options: null }} },
    POSTCARD: { shipmentType: "גלויה", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null }} },
    PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "מסניף לסניף", options: null },
                                                            regular: { name: "למען של דואר צבאי", options: null }} },
    LEAFLETS: { shipmentType: "עלונים", shipmentSubtypes: { regular: { name: "חלוקת עלונים", options: { toDispatchCenter: "חלוקה למרכזי חלוקה", byHand: "חלוקה רגלית" } }} } // todo: verify
};

const AbroadMailOptions = {
    LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "דואר אויר", options: { regular: "משלוח רגיל", signed: "רשום" } },
                                                            overTheSea: { name: "דואר ים ויבשה", options: { regular: "משלוח רגיל", signed: "רשום" } },
                                                            ems_express: { name: "דואר מהיר - EMS", options: null }} }, 
    POSTCARD: { shipmentType: "גלויה", shipmentSubtypes: { regular: { name: "דואר אויר", options: null },
                                                            overTheSea: { name: "דואר ים ויבשה", options: null }} },
    SMALL: { shipmentType: "צרור קטן", shipmentSubtypes: { regular: { name: "דואר אויר", options: { regular: "משלוח רגיל", signed: "רשום" } }} },
    PRINTED: { shipmentType: "דבר דפוס", shipmentSubtypes: { regular: { name: "דואר אויר", options: { regular: "משלוח רגיל", signed: "רשום", regular_check: "שק ישיר - משלוח רגיל", signed_check: "שק ישיר - רשום" } },
                                                                overTheSea: { name: "דואר ים ויבשה", options: null }} }, // todo: add options
    PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "דואר אויר", options: null },
                                                            overTheSea: { name: "דואר ים ויבשה", options: null },
                                                            ems_express: { name: "דואר מהיר - EMS", options: null }} },
    EMS: { shipmentType: "EMS", shipmentSubtypes: { ems_express: { name: "דואר מהיר - EMS", options: null }} },
    NEWSLETTER: { shipmentType: "עיתון", shipmentSubtypes: { regular: { name: "דואר אויר", options: null }} },
    ECO: { shipmentType: "eco post", shipmentSubtypes: { name: "eco post", options: { with_file: "כולל קובץ", without_file: "ללא קובץ" }} }
};

const BulkMailOptions = {
    LOCAL_LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "משלוח כמותי רגיל", options: { sorted: "ממויין", sortedToDispatchCenter: "ממויין - למרכזי חלוקה", unsortedZipped: "ממוקד לא ממויין", unsortedZippedToDispatchCenter: "ממוקד לא ממויין - למרכזי חלוקה" } },
                                                                signed: { name: "משלוח כמותי רשום", options: { withoutBarcode: "", withBarcodeAndRecipient: "עם ברקוד ופרטי נמען" } },
                                                                regular_express: { name: "דואר 24", options: null }} },
    LOCAL_PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "מסניף לסניף", options: null }} },
    LOCAL_RESPONSE: { shipmentType: "מסירת מכתבי תגוביינא", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null }} },
    ABROAD: { shipmentType: "דבר דואר לחו\"ל", shipmentSubtypes: { regular: { name: "דואר אויר", options: null }} }
};

module.exports.LocalMailOptions = LocalMailOptions;
module.exports.AbroadMailOptions = AbroadMailOptions;
module.exports.BulkMailOptions = BulkMailOptions;
