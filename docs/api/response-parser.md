<a name="ResponseParser"></a>

## ResponseParser
Handles Israel postal service response

**Kind**: global class  
**Author**: Benny Megidish  

* [ResponseParser](#ResponseParser)
    * [new ResponseParser(response)](#new_ResponseParser_new)
    * [.hasSucceeded()](#ResponseParser+hasSucceeded) ⇒ <code>boolean</code>
    * [.getStatus()](#ResponseParser+getStatus) ⇒ <code>string</code>
    * [.getPriceGroup()](#ResponseParser+getPriceGroup) ⇒ <code>string</code>
    * [.getPrice()](#ResponseParser+getPrice) ⇒ <code>number</code>
    * [.getTotalPrice()](#ResponseParser+getTotalPrice) ⇒ <code>number</code>
    * [.hasComments()](#ResponseParser+hasComments) ⇒ <code>boolean</code>
    * [.getComments()](#ResponseParser+getComments) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getRawData()](#ResponseParser+getRawData) ⇒ <code>Response</code>

<a name="new_ResponseParser_new"></a>

### new ResponseParser(response)
Parses israel post response and provides easy way to consume the data


| Param | Type | Description |
| --- | --- | --- |
| response | <code>string</code> | the response the have been received from the israel-post server |

<a name="ResponseParser+hasSucceeded"></a>

### responseParser.hasSucceeded() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)  
**Returns**: <code>boolean</code> - has the query succeeded or not  
<a name="ResponseParser+getStatus"></a>

### responseParser.getStatus() ⇒ <code>string</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)  
**Returns**: <code>string</code> - response status message  
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

### responseParser.getComments() ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)  
**Returns**: <code>Array.&lt;string&gt;</code> - array of comments about the method if available  
<a name="ResponseParser+getRawData"></a>

### responseParser.getRawData() ⇒ <code>Response</code>
**Kind**: instance method of [<code>ResponseParser</code>](#ResponseParser)  
**Returns**: <code>Response</code> - raw json response from the server  
