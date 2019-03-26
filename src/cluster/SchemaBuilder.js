/* eslint-disable no-tabs */
const { Schema } = require('mongoose')
/**
 * A class who manage everything the schema needs
 * @module SchemaBuilder
 * @extends {Schema}
 */
module.exports = class SchemaBuilder extends Schema {
  /**
   * @constructor
   * @param {schema} schema definitely an object of schema
   * @param {Database} extends [EventEmitter] the database client
   * @typedef {schema.schematic} SchemaTypes [The permitted SchemaTypes are](https://mongoosejs.com/docs/guide.html)
   * - {String}
   * - {Number}
   * - {Date}
   * - {Buffer}
   * - {Boolean}
   * - {Mixed}
   * - {ObjectId}
   * - {Array}
   * - {Decimal128}
   * - {Map}
   * @example
   *  // this covers a quick example about how to create a Schema using SchemaBuilder
   * 	// [Optional] create a childschema
   * 	const comments = {
   * 		body: String,
   * 		date: Date
   * 	}
   * // Resolve the childschema
   * 	const resolve_comment = new Childschema(comments)
   * 	const schema = {
   * // this will be the [Collection]'s Name
   * 		name: 'carlist',
   * // this will be the [Collection]'s Schema
   * 		schematic: {
   * 			_id: String, // You can replace ObjectId by adding this field
   * 			name: String,
   * 			releasedDate: { type: Date, default: Date.now },
   * 			buyers: [{ name: String, date: Date }],
   * // Include the childschema
   * 			comment: resolve_comment,
   * 			meta: {
   * 				votes: Number,
   * 				favorites: Number
   * 			}
   * 		}
   * 	}
   */
  constructor (database, schema) {
    super(schema.schematic)

    /**
     * An Object created for a purpose of defining schema
     * @param {Object} schema
     */
    this.schema = schema
    /**
     * The source of everything, and the controller of database flow
     * Every Cluster and Function will be resolved here
     * @extends {EventEmitter}
     */
    this.database = database
  }

  /**
   * @method
   * to define a schema into a model
   * @returns {void}
   */
  build () {
    const a = `${this.database.debugHeader}Building Schema ${this.schema.name}`
    this.database.emit('debug', a)
    this.database.defineModel(this.schema.name, super.schematic)
  }
}
