# Israel Postal Service API

<a name="IPS"></a>

## IPS
Exposes Israel postal service API

**Kind**: global class
**Author**: Benny Megidish

* [IPS](#IPS)
    * [.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateAbroadShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * [.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateLocalShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * [.calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * [.getAllDestination(shipmentType)](#IPS+getAllDestination(shipmentType)) ⇒ <code>string[]</code>

<a name="IPS+calculateAbroadShippingRate"></a>

### IPS.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
calculate shipping rate for abroad shipments

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destination | <code>string</code> |  | Camel-Case destination name (in english) |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateLocalShippingRate"></a>

### IPS.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
calculate shipping rate for local shipments (in Israel)

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateBulkShippingRate"></a>

### IPS.calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
calculate bulk shipping rate for abroad and local bulk shipments

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>Promise.&lt;ResponseParser&gt;</code> - a promise with the parsed shipment data (see {@class ResponseParser})

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| destination | <code>string</code> |  | Camel-Case destination name (in english) or "" for local shipments |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+getAllDestination"></a>

### IPS.getAllDestination(shipmentType) ⇒ <code>string[]</code>
return all the available destination for the shipment type

**Kind**: instance method of [<code>IPS</code>](#IPS)
**Returns**: <code>string[]</code> - array that contains all the available destination for the shipment type

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
| LETTER   | regular         |                                                                    |             |
|          | signed          | regular, withDeliveryVerification, withDeliveryAndScanVerification |             |
|          | overnight       |                                                                    |             |
|          | signedOvernight |                                                                    |             |
| POSTCARD | regular         |                                                                    |             |
| PARCEL   | regular         |                                                                    |             |
|          | military        |                                                                    |             |
| LEAFLETS | regular         |                                                                    |             |
|          | overnight       | toDispatchCenter, byHand                                           |             |

### Local bulk Shipment
| Type     | Subtype   | Options                                                                        | Description |
|----------|-----------|--------------------------------------------------------------------------------|-------------|
| LETTER   | regular   | sorted, sortedToDispatchCenter, unsortedZipped, unsortedZippedToDispatchCenter |             |
|          | signed    | withoutBarcode, withBarcodeAndRecipient                                        |             |
|          | overnight |                                                                                |             |
| PARCEL   | regular   |                                                                                |             |
| RESPONSE | regular   |                                                                                |             |

### Abroad Shipment
| Type       | Subtype    | Options                                                                | Description |
|------------|------------|------------------------------------------------------------------------|-------------|
| LETTER     | regular    | regular, signed                                                        |             |
|            | overTheSea | regular, signed                                                        |             |
|            | express    |                                                                        |             |
| POSTCARD   | regular    |                                                                        |             |
|            | overTheSea |                                                                        |             |
| SMALL      | regular    | regular, signed                                                        |             |
| PRINTED    | regular    | regular, signed, directCheck, signedDirectCheck                        |             |
|            | overTheSea | regular, signed, directCheck, directCheckDiscounted, signedDirectCheck |             |
| PARCEL     | regular    |                                                                        |             |
|            | overTheSea |                                                                        |             |
|            | express    |                                                                        |             |
| EMS        | express    |                                                                        |             |
| NEWSLETTER | regular    |                                                                        |             |
| ECO        | eco        | withFile, withoutFile                                                  |             |

### Abroad bulk Shipment
| Type           | Subtype   | Options   | Description |
|----------------|-----------|-----------|-------------|
| PARCEL         | regular   |           |             |