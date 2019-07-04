# Israel Postal Service API

<a name="IPS"></a>

## IPS
Exposes Israel postal service API

**Kind**: global class
**Author**: Benny Megidish

* [IPS](#IPS)
    * [.calculateShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * [.calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * ~~[.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateAbroadShippingRate) ⇒
<code>Promise.&lt;ResponseParser&gt;</code>~~
    * ~~[.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateLocalShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * ~~[.calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateAbroadBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * ~~[.calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateLocalBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * [.getAllDestination(shipmentType)](#IPS+getAllDestination) ⇒ <code>Array.&lt;string&gt;</code>

<a name="IPS+calculateShippingRate"></a>

### IPS.calculateShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>calculate shipping rate for regular (non bulk) shipments

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (@see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destination | <code>string</code> |  | destination country name (in CamelCase English) |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateBulkShippingRate"></a>

### IPS.calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
calculate shipping rate for bulk shipments

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (@see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destination | <code>string</code> |  | destination country name (in CamelCase English) |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateAbroadShippingRate"></a>

### ~~IPS.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
***Deprecated***

calculate shipping rate for abroad shipments

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (@see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destination | <code>string</code> |  | destination country name (in CamelCase English) |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateLocalShippingRate"></a>

### ~~IPS.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
***Deprecated***

calculate shipping rate for local shipments (in Israel)

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (@see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateAbroadBulkShippingRate"></a>

### ~~IPS.calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
***Deprecated***

calculate bulk shipping rate for abroad bulk shipments

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (@see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destination | <code>string</code> |  | destination country name (in CamelCase English) or "" for local shipments |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateLocalBulkShippingRate"></a>

### ~~IPS.calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~***Deprecated***

calculate bulk shipping rate for local bulk shipments (in Israel)

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (@see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+getAllDestination"></a>

### IPS.getAllDestination(shipmentType) ⇒ <code>Array.&lt;string&gt;</code>
return all the available destination for the shipment type

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Array.&lt;string&gt;</code> - array that contains all the available destination for the shipment type

| Param | Type | Description |
| --- | --- | --- |
| shipmentType | <code>string</code> | type of shipment as defined in the {@class Options} class |

## ResponseParser
Handles Israel postal service response

**Kind**: global class
**Author**: Benny Megidish

* [ResponseParser](#ResponseParser)
    * [new ResponseParser(response)](#new_ResponseParser_new)
    * [.getPriceGroup()](#ResponseParser+getPriceGroup) ⇒ <code>string</code>
    * [.getPrice()](#ResponseParser+getPrice) ⇒ <code>number</code>
    * [.getTotalPrice()](#ResponseParser+getTotalPrice) ⇒ <code>number</code>
    * [.hasComments()](#ResponseParser+hasComments) ⇒ <code>boolean</code>
    * [.getComments()](#ResponseParser+getComments) ⇒ <code>array.&lt;string&gt;</code>
    * [.getStatus()](#ResponseParser+getStatus) ⇒ <code>string</code>
    * [.getRawData()](#ResponseParser+getRawData) ⇒ <code>string</code>

<a name="new_ResponseParser_new"></a>

### new ResponseParser(response)
Parses israel post response and provides easy way to consume the data


| Param | Type | Description |
| --- | --- | --- |
| response | <code>string</code> | the response the have been received from the israel-post server |

<a name="ResponseParser+getPriceGroup"></a>

### responseParser.getPriceGroup() ⇒ <code>string</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>string</code> - price group of the shipment
<a name="ResponseParser+getPrice"></a>

### responseParser.getPrice() ⇒ <code>number</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>number</code> - shipment price for individual package
<a name="ResponseParser+getTotalPrice"></a>

### responseParser.getTotalPrice() ⇒ <code>number</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>number</code> - shipment price for the entire shipment
<a name="ResponseParser+hasComments"></a>

### responseParser.hasComments() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>boolean</code> - whether we have comments about the method
<a name="ResponseParser+getComments"></a>

### responseParser.getComments() ⇒ <code>array.&lt;string&gt;</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>array.&lt;string&gt;</code> - array of comments about the method if available
<a name="ResponseParser+getRawData"></a>

### responseParser.getStatus() ⇒ <code>string</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>string</code> - response status

### responseParser.getRawData() ⇒ <code>string</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)
**Returns**: <code>string</code> - raw json response from the server

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

## Useful links
* [Postal Service Definitions](https://www.israelpost.co.il/postdictionary.nsf/ShowDefinitions?OpenForm)
* [Postal Service Online Shipment Calculator](https://www.israelpost.co.il/npostcalc.nsf/calculator2?OpenForm)