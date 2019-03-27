## Modules

<dl>
<dt><a href="#module_Database">Database</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>The source of everything, and the controller of database flow
Every Cluster and Function will be resolved here</p>
</dd>
<dt><a href="#module_QueryCollector">QueryCollector</a> ⇐ <code>TreeMap</code></dt>
<dd><p>A Class that provides client with cached database.</p>
</dd>
<dt><a href="#module_SchemaBuilder">SchemaBuilder</a> ⇐ <code>Schema</code></dt>
<dd><p>A class who manage everything the schema needs</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Status">Status</a></dt>
<dd></dd>
<dt><a href="#Events">Events</a></dt>
<dd></dd>
<dt><a href="#Colors">Colors</a></dt>
<dd></dd>
<dt><a href="#StringResolvable">StringResolvable</a> : <code>string</code> | <code>Array</code> | <code>*</code></dt>
<dd><p>Data that can be resolved to give a string. This can be:</p>
<ul>
<li>A string</li>
<li>An array (joined with a new line delimiter to give a string)</li>
<li>Any value</li>
</ul>
</dd>
<dt><a href="#ColorResolvable">ColorResolvable</a> : <code>string</code> | <code>number</code> | <code>Array.&lt;number&gt;</code></dt>
<dd><p>Can be a number, hex string, an RGB array like:</p>
<pre><code class="language-javascript">[255, 0, 255] // purple
</code></pre>
<p>or one of the following strings:</p>
<ul>
<li><code>DEFAULT</code></li>
<li><code>WHITE</code></li>
<li><code>AQUA</code></li>
<li><code>GREEN</code></li>
<li><code>BLUE</code></li>
<li><code>PURPLE</code></li>
<li><code>LUMINOUS_VIVID_PINK</code></li>
<li><code>GOLD</code></li>
<li><code>ORANGE</code></li>
<li><code>RED</code></li>
<li><code>GREY</code></li>
<li><code>DARKER_GREY</code></li>
<li><code>NAVY</code></li>
<li><code>DARK_AQUA</code></li>
<li><code>DARK_GREEN</code></li>
<li><code>DARK_BLUE</code></li>
<li><code>DARK_PURPLE</code></li>
<li><code>DARK_VIVID_PINK</code></li>
<li><code>DARK_GOLD</code></li>
<li><code>DARK_ORANGE</code></li>
<li><code>DARK_RED</code></li>
<li><code>DARK_GREY</code></li>
<li><code>LIGHT_GREY</code></li>
<li><code>DARK_NAVY</code></li>
<li><code>RANDOM</code></li>
</ul>
</dd>
</dl>

<a name="module_Database"></a>

## Database ⇐ <code>EventEmitter</code>
The source of everything, and the controller of database flowEvery Cluster and Function will be resolved here

**Extends**: <code>EventEmitter</code>  

* [Database](#module_Database) ⇐ <code>EventEmitter</code>
    * [module.exports](#exp_module_Database--module.exports) ⇐ <code>EventEmitter</code> ⏏
        * [new module.exports(options)](#new_module_Database--module.exports_new)
        * _instance_
            * [.Promise](#module_Database--module.exports+Promise)
            * [.util()](#module_Database--module.exports+util) ⇒ <code>any</code>
            * [.SchemaBuilder()](#module_Database--module.exports+SchemaBuilder) ⇒ <code>Schema</code>
        * _inner_
            * [~Define a Model(name, Schema)](#module_Database--module.exports..Define a Model) ⇒ <code>mongoose.model</code>
            * [~Get a Model(name)](#module_Database--module.exports..Get a Model) ⇒ <code>mongoose.model</code>
            * [~Build Database()](#module_Database--module.exports..Build Database) ⇒ <code>Mongoose</code>

<a name="exp_module_Database--module.exports"></a>

### module.exports ⇐ <code>EventEmitter</code> ⏏
**Kind**: Exported class  
**Extends**: <code>EventEmitter</code>  
**Access**: public  
<a name="new_module_Database--module.exports_new"></a>

#### new module.exports(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Parameters used in constructing database |
| options.url | <code>string</code> |  |
| options.username | <code>string</code> |  |
| options.password | <code>string</code> |  |
| options.port | <code>number</code> |  |
| options.database | <code>string</code> | For parameter, check this documentation [Official Mongoose Docs](https://mongoosejs.com/docs/connections.html#connections) |
| options.parameter | <code>Object</code> |  |

<a name="module_Database--module.exports+Promise"></a>

#### module.exports.Promise
Used a lot in the module

**Kind**: instance property of [<code>module.exports</code>](#exp_module_Database--module.exports)  
<a name="module_Database--module.exports+util"></a>

#### module.exports.util() ⇒ <code>any</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Database--module.exports)  
**Returns**: <code>any</code> - Contains various general-purpose utility methods.  
<a name="module_Database--module.exports+SchemaBuilder"></a>

#### module.exports.SchemaBuilder() ⇒ <code>Schema</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_Database--module.exports)  
**Returns**: <code>Schema</code> - Construct a Schema  
<a name="module_Database--module.exports..Define a Model"></a>

#### module.exports~Define a Model(name, Schema) ⇒ <code>mongoose.model</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_Database--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of model |
| Schema | <code>mongoose.Schema</code> | the schema itself |

<a name="module_Database--module.exports..Get a Model"></a>

#### module.exports~Get a Model(name) ⇒ <code>mongoose.model</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_Database--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | the name of model |

<a name="module_Database--module.exports..Build Database"></a>

#### module.exports~Build Database() ⇒ <code>Mongoose</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_Database--module.exports)  
<a name="module_QueryCollector"></a>

## QueryCollector ⇐ <code>TreeMap</code>
A Class that provides client with cached database.

**Extends**: <code>TreeMap</code>  

* [QueryCollector](#module_QueryCollector) ⇐ <code>TreeMap</code>
    * [module.exports](#exp_module_QueryCollector--module.exports) ⏏
        * [new module.exports(extends, collection)](#new_module_QueryCollector--module.exports_new)
        * _instance_
            * [.Promise](#module_QueryCollector--module.exports+Promise)
        * _inner_
            * [~fetchAllFetch BSON Document from Database MongoDB Client.In Another word, the Data itself.()](#module_QueryCollector--module.exports..fetchAllFetch BSON Document from Database MongoDB Client.In Another word, the Data itself.) ⇒ <code>Promise</code>
            * [~fetchAllSyncFetch BSON Document fron Database MongoDB Client Synchronously.()](#module_QueryCollector--module.exports..fetchAllSyncFetch BSON Document fron Database MongoDB Client Synchronously.) ⇒ <code>Array</code>
            * [~getGet a value from database.(key, refresh)](#module_QueryCollector--module.exports..getGet a value from database.) ⇒ <code>Promise</code>
            * [~refreshUsed to refresh TreeMap and re-fetch Data from MongoDBUnavailable when using non-persistent Database()](#module_QueryCollector--module.exports..refreshUsed to refresh TreeMap and re-fetch Data from MongoDBUnavailable when using non-persistent Database) ⇒ <code>Promise</code>

<a name="exp_module_QueryCollector--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_QueryCollector--module.exports_new"></a>

#### new module.exports(extends, collection)

| Param | Type | Description |
| --- | --- | --- |
| extends | <code>Database</code> | [EventEmitter] client |
| collection | <code>mongoose.Scheme</code> |  |

<a name="module_QueryCollector--module.exports+Promise"></a>

#### module.exports.Promise
Used a lot in this Class.

**Kind**: instance property of [<code>module.exports</code>](#exp_module_QueryCollector--module.exports)  
<a name="module_QueryCollector--module.exports..fetchAllFetch BSON Document from Database MongoDB Client.In Another word, the Data itself."></a>

#### module.exports~fetchAllFetch BSON Document from Database MongoDB Client.In Another word, the Data itself.() ⇒ <code>Promise</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_QueryCollector--module.exports)  
**Returns**: <code>Promise</code> - The QueryCollector TreeMap that contains every data.  
<a name="module_QueryCollector--module.exports..fetchAllSyncFetch BSON Document fron Database MongoDB Client Synchronously."></a>

#### module.exports~fetchAllSyncFetch BSON Document fron Database MongoDB Client Synchronously.() ⇒ <code>Array</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_QueryCollector--module.exports)  
<a name="module_QueryCollector--module.exports..getGet a value from database."></a>

#### module.exports~getGet a value from database.(key, refresh) ⇒ <code>Promise</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_QueryCollector--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Database Key, as defined in the Schema. |
| refresh | <code>\*</code> | Set as "true" to refresh Collector and fetch the new database from Mongo. Do remember that refresh is excuted first before returning a value. |

<a name="module_QueryCollector--module.exports..refreshUsed to refresh TreeMap and re-fetch Data from MongoDBUnavailable when using non-persistent Database"></a>

#### module.exports~refreshUsed to refresh TreeMap and re-fetch Data from MongoDBUnavailable when using non-persistent Database() ⇒ <code>Promise</code>
**Kind**: inner method of [<code>module.exports</code>](#exp_module_QueryCollector--module.exports)  
<a name="module_SchemaBuilder"></a>

## SchemaBuilder ⇐ <code>Schema</code>
A class who manage everything the schema needs

**Extends**: <code>Schema</code>  

* [SchemaBuilder](#module_SchemaBuilder) ⇐ <code>Schema</code>
    * _instance_
        * [.schema](#module_SchemaBuilder+schema)
        * [.name](#module_SchemaBuilder+name)
        * [.database](#module_SchemaBuilder+database) ⇐ <code>EventEmitter</code>
    * _inner_
        * [~to define a schema into a model()](#module_SchemaBuilder..to define a schema into a model) ⇒ <code>void</code>
        * [~SchemaTypes](#module_SchemaBuilder..SchemaTypes) : <code>String</code>

<a name="module_SchemaBuilder+schema"></a>

### schemaBuilder.schema
An Object created for a purpose of defining schema

**Kind**: instance property of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  
<a name="module_SchemaBuilder+name"></a>

### schemaBuilder.name
Scheme's name

**Kind**: instance property of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  
<a name="module_SchemaBuilder+database"></a>

### schemaBuilder.database ⇐ <code>EventEmitter</code>
The source of everything, and the controller of database flowEvery Cluster and Function will be resolved here

**Kind**: instance property of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  
**Extends**: <code>EventEmitter</code>  
<a name="module_SchemaBuilder..to define a schema into a model"></a>

### SchemaBuilder~to define a schema into a model() ⇒ <code>void</code>
**Kind**: inner method of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  
<a name="module_SchemaBuilder..SchemaTypes"></a>

### SchemaBuilder~SchemaTypes : <code>String</code>
The permitted SchemaTypes are:- - {Number}- {Date}- {Buffer}- {Boolean}- {Mixed}- {ObjectId}- {Array}- {Decimal128}- {Map}[Offical Docs](https://mongoosejs.com/docs/guide.html)

**Kind**: inner typedef of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>Schema</code> | definitely an object of schema. |
| extends | <code>Database</code> | [EventEmitter] the database client. |

<a name="Status"></a>

## Status
**Kind**: global typedef  
<a name="Events"></a>

## Events
**Kind**: global typedef  
**Example**  
```js
Database#.on('error', => (err))Database#.on('warn', => (warn))Database#.on('debug', => (debug))Database#.on('connected', => (null))Database#.on('disconnected', => (null))Database#.on('databaseCollecting', => (null))Database#.on('cacheRemoved', => (null))
```
<a name="Colors"></a>

## Colors
**Kind**: global typedef  
<a name="StringResolvable"></a>

## StringResolvable : <code>string</code> \| <code>Array</code> \| <code>\*</code>
Data that can be resolved to give a string. This can be:* A string* An array (joined with a new line delimiter to give a string)* Any value

**Kind**: global typedef  
<a name="ColorResolvable"></a>

## ColorResolvable : <code>string</code> \| <code>number</code> \| <code>Array.&lt;number&gt;</code>
Can be a number, hex string, an RGB array like:```js[255, 0, 255] // purple```or one of the following strings:- `DEFAULT`- `WHITE`- `AQUA`- `GREEN`- `BLUE`- `PURPLE`- `LUMINOUS_VIVID_PINK`- `GOLD`- `ORANGE`- `RED`- `GREY`- `DARKER_GREY`- `NAVY`- `DARK_AQUA`- `DARK_GREEN`- `DARK_BLUE`- `DARK_PURPLE`- `DARK_VIVID_PINK`- `DARK_GOLD`- `DARK_ORANGE`- `DARK_RED`- `DARK_GREY`- `LIGHT_GREY`- `DARK_NAVY`- `RANDOM`

**Kind**: global typedef  
