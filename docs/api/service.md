<a name="IPS"></a>

## IPS
Exposes Israel postal service API

**Kind**: global class  
**Author**: Benny Megidish  

* [IPS](#IPS)
    * [.calculateShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * [.calculateBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
    * ~~[.calculateAbroadShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateAbroadShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * ~~[.calculateLocalShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateLocalShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * ~~[.calculateAbroadBulkShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateAbroadBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * ~~[.calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity)](#IPS+calculateLocalBulkShippingRate) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
    * [.preloadDestinations(shipmentMethod)](#IPS+preloadDestinations)
    * [.getAllDestinations(shipmentType)](#IPS+getAllDestinations) ⇒ <code>Array.&lt;string&gt;</code>

<a name="IPS+calculateShippingRate"></a>

### IPS.calculateShippingRate(destination, weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>
calculate shipping rate for regular (non bulk) shipments

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
| destination | <code>string</code> |  | destination country name (in CamelCase English) |
| weight | <code>float</code> |  | weight of the shipment in grams |
| shipmentType | <code>string</code> |  | type of shipment (as defines in {@class Options}) |
| shipmentSubtype | <code>object</code> |  | subtype of shipment (as define in the shipmentType {@class Options}) |
| serviceOption | <code>string</code> | <code>null</code> | additional service options (nullable) |
| quantity | <code>integer</code> | <code>1</code> | amount of packages |

<a name="IPS+calculateLocalBulkShippingRate"></a>

### ~~IPS.calculateLocalBulkShippingRate(weight, shipmentType, shipmentSubtype, serviceOption, quantity) ⇒ <code>Promise.&lt;ResponseParser&gt;</code>~~
***Deprecated***

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

<a name="IPS+preloadDestinations"></a>

### IPS.preloadDestinations(shipmentMethod)
pre-loads the destinations for the requested shipment method
by default, the destinations are loaded lazily on-demand

**Kind**: instance method of [<code>IPS</code>](#IPS)  

| Param | Type | Description |
| --- | --- | --- |
| shipmentMethod | <code>string</code> | method of shipment as defined in the {@class Options#ShipmentMethods} class |

<a name="IPS+getAllDestinations"></a>

### IPS.getAllDestinations(shipmentType) ⇒ <code>Array.&lt;string&gt;</code>
return all the available destinations for the shipment type

**Kind**: instance method of [<code>IPS</code>](#IPS)  
**Returns**: <code>Array.&lt;string&gt;</code> - array that contains all the available destination for the shipment type  

| Param | Type | Description |
| --- | --- | --- |
| shipmentType | <code>string</code> | type of shipment as defined in the {@class Options} class |

