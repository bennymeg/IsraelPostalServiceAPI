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

import { LocalMailOptionsType, LocalBulkMailOptionsType, AbroadMailOptionsType, AbroadBulkMailOptionsType } from '../types/options'

/**
 * This module contains all the shipping options enumerations
 * @author Benny Megidish
 */

export const LocalMailOptions: LocalMailOptionsType = {
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

export const LocalBulkMailOptions: LocalBulkMailOptionsType = {
    LETTER: { shipmentType: "מכתב", shipmentSubtypes: { regular: { name: "משלוח כמותי רגיל", options: { sorted: "ממויין", sortedToDispatchCenter: "ממויין - למרכזי חלוקה", unsortedZipped: "ממוקד לא ממויין", unsortedZippedToDispatchCenter: "ממוקד לא ממויין - למרכזי חלוקה" } },
                                                              signed: { name: "משלוח כמותי רשום", options: { withoutBarcode: "", withBarcodeAndRecipient: "עם ברקוד ופרטי נמען" } },
                                                              overnight: { name: "דואר 24", options: null }} },
    PARCEL: { shipmentType: "חבילה", shipmentSubtypes: { regular: { name: "מסניף לסניף", options: null },
                                                         combinedDirect: { name: "מסירה מרוכזת לנמען אחד", options: null }} },
    RESPONSE: { shipmentType: "מסירת מכתבי תגוביינא", shipmentSubtypes: { regular: { name: "משלוח רגיל", options: null }} }
};

export const AbroadMailOptions: AbroadMailOptionsType = {
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

export const AbroadBulkMailOptions: AbroadBulkMailOptionsType = {
    PARCEL: { shipmentType: "דברי דואר לחו\"ל", shipmentSubtypes: { regular: { name: "דואר אויר", options: null }} }
};

/**
 *  Set of unique shipment methods that divide the world into regions (have different reach)
 */
export const ShipmentMethods = {
    REGULAR: "",             // "all"
    PARCEL: "חבילה",        // "parcel"
    EMS: "EMS",             // "ems"
    ECONOMIC: "eco post"    // "eco"
};
