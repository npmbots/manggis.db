## Modules

<dl>
<dt><a href="#module_Database">Database</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>The source of everything, and the controller of database flow
Every Cluster and Function will be resolved here</p>
</dd>
<dt><a href="#module_SchemaBuilder">SchemaBuilder</a> ⇐ <code>Schema</code></dt>
<dd><p>A class who manage everything the schema needs</p>
</dd>
<dt><a href="#manggis.module_db">db</a></dt>
<dd><p>Project Structure
Source of Everything</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#register">register(sym, val)</a></dt>
<dd><p>Register an error code and message.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Events">Events</a></dt>
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
            * [.util()](#module_Database--module.exports+util) ⇒ <code>any</code>
            * [.SchemaBuilder()](#module_Database--module.exports+SchemaBuilder) ⇒ <code>Schema</code>
        * _inner_
            * [~Define a Model(name, Schema)](#module_Database--module.exports..Define a Model) ⇒ <code>mongoose.model</code>
            * [~Get a Model(name)](#module_Database--module.exports..Get a Model) ⇒ <code>mongoose.model</code>
            * [~[void]Build Database()](#module_Database--module.exports..[void]Build Database)

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

<a name="module_Database--module.exports..[void]Build Database"></a>

#### module.exports~[void]Build Database()
**Kind**: inner method of [<code>module.exports</code>](#exp_module_Database--module.exports)  
<a name="module_SchemaBuilder"></a>

## SchemaBuilder ⇐ <code>Schema</code>
A class who manage everything the schema needs

**Extends**: <code>Schema</code>  

* [SchemaBuilder](#module_SchemaBuilder) ⇐ <code>Schema</code>
    * _instance_
        * [.schema](#module_SchemaBuilder+schema)
        * [.database](#module_SchemaBuilder+database) ⇐ <code>EventEmitter</code>
    * _inner_
        * [~to define a schema into a model()](#module_SchemaBuilder..to define a schema into a model) ⇒ <code>void</code>
        * [~SchemaTypes](#module_SchemaBuilder..SchemaTypes) : <code>schema.schematic</code>

<a name="module_SchemaBuilder+schema"></a>

### schemaBuilder.schema
An Object created for a purpose of defining schema

**Kind**: instance property of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  

| Param | Type |
| --- | --- |
| schema | <code>Object</code> | 

<a name="module_SchemaBuilder+database"></a>

### schemaBuilder.database ⇐ <code>EventEmitter</code>
The source of everything, and the controller of database flowEvery Cluster and Function will be resolved here

**Kind**: instance property of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  
**Extends**: <code>EventEmitter</code>  
<a name="module_SchemaBuilder..to define a schema into a model"></a>

### SchemaBuilder~to define a schema into a model() ⇒ <code>void</code>
**Kind**: inner method of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  
<a name="module_SchemaBuilder..SchemaTypes"></a>

### SchemaBuilder~SchemaTypes : <code>schema.schematic</code>
[The permitted SchemaTypes are](https://mongoosejs.com/docs/guide.html)- {String}- {Number}- {Date}- {Buffer}- {Boolean}- {Mixed}- {ObjectId}- {Array}- {Decimal128}- {Map}

**Kind**: inner typedef of [<code>SchemaBuilder</code>](#module_SchemaBuilder)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>schema</code> | definitely an object of schema |
| extends | <code>Database</code> | [EventEmitter] the database client |

**Example**  
```js
// this covers a quick example about how to create a Schema using SchemaBuilder	// [Optional] create a childschema	const comments = {		body: String,		date: Date	}// Resolve the childschema	const resolve_comment = new Childschema(comments)	const schema = {// this will be the [Collection]'s Name		name: 'carlist',// this will be the [Collection]'s Schema		schematic: {			_id: String, // You can replace ObjectId by adding this field			name: String,			releasedDate: { type: Date, default: Date.now },			buyers: [{ name: String, date: Date }],// Include the childschema			comment: resolve_comment,			meta: {				votes: Number,				favorites: Number			}		}	}
```
<a name="manggis.module_db"></a>

## db
Project StructureSource of Everything

<a name="register"></a>

## register(sym, val)
Register an error code and message.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sym | <code>string</code> | Unique name for the error |
| val | <code>\*</code> | Value of the error |

<a name="Events"></a>

## Events
**Kind**: global typedef  
<a name="StringResolvable"></a>

## StringResolvable : <code>string</code> \| <code>Array</code> \| <code>\*</code>
Data that can be resolved to give a string. This can be:* A string* An array (joined with a new line delimiter to give a string)* Any value

**Kind**: global typedef  
<a name="ColorResolvable"></a>

## ColorResolvable : <code>string</code> \| <code>number</code> \| <code>Array.&lt;number&gt;</code>
Can be a number, hex string, an RGB array like:```js[255, 0, 255] // purple```or one of the following strings:- `DEFAULT`- `WHITE`- `AQUA`- `GREEN`- `BLUE`- `PURPLE`- `LUMINOUS_VIVID_PINK`- `GOLD`- `ORANGE`- `RED`- `GREY`- `DARKER_GREY`- `NAVY`- `DARK_AQUA`- `DARK_GREEN`- `DARK_BLUE`- `DARK_PURPLE`- `DARK_VIVID_PINK`- `DARK_GOLD`- `DARK_ORANGE`- `DARK_RED`- `DARK_GREY`- `LIGHT_GREY`- `DARK_NAVY`- `RANDOM`

**Kind**: global typedef  
