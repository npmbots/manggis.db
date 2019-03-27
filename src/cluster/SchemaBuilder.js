/* eslint-disable no-tabs */
const { Schema } = require('mongoose')
const _check = Symbol('check')
const _ = require('lodash')
const { Error, TypeError, RangeError } = require('../localization')
/**
 * A class who manage everything the schema needs
 * @module SchemaBuilder
 * @extends {Schema}
 */
module.exports = class SchemaBuilder extends Schema {
  /**
   * @constructor
   * @param {Schema} schema definitely an object of schema.
   * @param {Database} extends [EventEmitter] the database client.
   * @param {string} name Define the name of Schema
   * @typedef SchemaTypes
   * The permitted SchemaTypes are:
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
   * [Offical Docs](https://mongoosejs.com/docs/guide.html)
   */
  constructor (database, name, schema) {
    super(schema)
    this[_check](name, 'Name')

    /**
     * An Object created for a purpose of defining schema
     */
    this.schema = schema
    /**
     * Scheme's name
     */
    this.name = name
    /**
     * The source of everything, and the controller of database flow
     * Every Cluster and Function will be resolved here
     * @extends {EventEmitter}
     */
    this.database = database
  }

  /**
   * @function
   * to define a schema into a model
   * @returns {void}
   */
  build () {
    const a = `${this.database.debugHeader}Building Schema ${this.schema.name}`
    this[_check](this.schema)
    this.database.emit('debug', a)
    this.database.defineModel(this.name, this)
  }

  [_check] (key, object) {
    if (object === 'Name') {
      if (!_.isString(key)) throw new TypeError('INVALID_SCHEMA', 'name', 'string')
    }
  }
}
