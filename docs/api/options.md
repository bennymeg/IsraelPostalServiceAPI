## Options

### Local Shipment
| Type     | Subtype         | Options                                                            | Description |
|----------|-----------------|--------------------------------------------------------------------|-------------|
| LETTER   | regular         |                                                                    | מכתב         |
|          | signed          | regular, withDeliveryVerification, withDeliveryAndScanVerification | מכתב רשום    |
|          | overnight       |                                                                    | דואר 24      |
|          | signedOvernight |                                                                    | דואר 24 רשום |
| POSTCARD | regular         |                                                                    | גלויה        |
| PARCEL   | regular         |                                                                    | חבילה        |
|          | military        |                                                                    | חבילה למען צבאי |
| LEAFLETS | regular         |                                                                    | עלון         |
|          | overnight       | toDispatchCenter, byHand                                           | עלון 24      |

### Local bulk Shipment
| Type     | Subtype        | Options                                                                        | Description |
|----------|----------------|--------------------------------------------------------------------------------|-------------|
| LETTER   | regular        | sorted, sortedToDispatchCenter, unsortedZipped, unsortedZippedToDispatchCenter | מכתב       |
|          | signed         | withoutBarcode, withBarcodeAndRecipient                                        | מכתב רשום  |
|          | overnight      |                                                                                | דואר 24    |
| PARCEL   | regular        |                                                                                | חבילה      |
|          | combinedDirect |                                                                                | חבילות למען יחיד |
| RESPONSE | regular        |                                                                                | תגוביינא   |

### Abroad Shipment
| Type       | Subtype    | Options                                                                | Description |
|------------|------------|------------------------------------------------------------------------|-------------|
| LETTER     | regular    | regular, signed                                                        | מכתב        |
|            | overTheSea | regular, signed                                                        | מכתב ימי    |
|            | express    |                                                                        | דואר מהיר   |
| POSTCARD   | regular    |                                                                        | גלויה       |
|            | overTheSea |                                                                        | גלויה ימית  |
| SMALL      | regular    | regular, signed                                                        | צרור קטן    |
| PRINTED    | regular    | regular, signed, directCheck, signedDirectCheck                        | דבר דפוס    |
|            | overTheSea | regular, signed, directCheck, directCheckDiscounted, signedDirectCheck | דבר דפוס ימי |
| PARCEL     | regular    |                                                                        | חבילה       |
|            | overTheSea |                                                                        | חבילה ימית   |
|            | express    |                                                                        | חבילה מהירה |
| EMS        | express    |                                                                        | משלוח מהיר  |
| NEWSLETTER | regular    |                                                                        | עיתון       |
| ECO        | eco        | withFile, withoutFile                                                  | משלוח מוזל  |

### Abroad bulk Shipment
| Type           | Subtype   | Options   | Description |
|----------------|-----------|-----------|-------------|
| PARCEL         | regular   |           | חבילה      |