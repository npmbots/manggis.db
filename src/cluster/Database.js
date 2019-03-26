const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
global.Promise = require('bluebird')
const { EventEmitter } = require('events')
const { Error, TypeError, RangeError } = require('../localization')
const fs = Promise.promisifyAll(require('fs'))
/**
 * The source of everything, and the controller of database flow
 * Every Cluster and Function will be resolved here
 * @module Database
 * @extends {EventEmitter}
 */
module.exports = class Database extends EventEmitter {
  /**
   * @public
   * @constructor
   * @extends EventEmitter
   * @param {object} options Parameters used in constructing database
   * @param {string} options.url
   * @param {string} options.username
   * @param {string} options.password
   * @param {number} options.port
   * @param {string} options.database
   * For parameter, check this documentation [Official Mongoose Docs](https://mongoosejs.com/docs/connections.html#connections)
   * @param {Object} options.parameter
   */
  constructor (options) {
    super()

    this.url = options.url
    this.username = options.username
    this.password = options.password
    this.port = options.port
    this.provider = options.database
    if (!options.parameter) {
      this.parameter = {
        useNewUrlParser: true
      }
    } else {
      this.parameter = options.parameter
    }

    this.session = mongoose
    this.Schema = mongoose.Schema
    /**
     * @function
     * @returns {any}
     * Contains various general-purpose utility methods.
     */
    this.util = require('../utils/Util')

    /**
     * @function
     * @returns {Schema}
     * Construct a Schema
     */
    this.SchemaBuilder = (schemaparams) => require('./SchemaBuilder')(schemaparams, this)
    this.debugHeader = `[ws] [ManggisDB [Session - ${this.username}]] `
  }

  /**
   * @functiona
   * @returns {SchemaBuilder}
   * @example
   * const path = require('path')
   * database.configure(path.join(__dirname, 'schemas'))
   */
  configure (path) {
    const a = this.debugHeader + 'Synchronizing Directory...'
    this.emit('debug', a)
    const SchemaList = fs.readdirSync(path)
    for (const SingleSchema of SchemaList) {
      const Schematic = require(`../${path}/${SingleSchema}`)
      const resolved = new Schematic(this)
      return resolved.build()
    }
  }

  /**
   * @function
   * @returns {mongoose}
   */
  get Mongoose () {
    return this.session
  }

  /**
   * @function
   * Define a Model
   * @param {string} name the name of model
   * @param {mongoose.Schema} Schema the schema itself
   * @returns {mongoose.model}
   */
  defineModel (name, Schema) {
    const a = this.debugHeader + 'Model ' + name + ' is declared..'
    this.emit('debug', a)
    return mongoose.model(name.toLowerCase(), Schema)
  }

  /**
   * @function
   * Get a Model
   * @param {string} name the name of model
   * @returns {mongoose.model}
   */
  getModel (name) {
    const a = this.debugHeader + 'Model ' + name + ' is fetched..'
    this.emit('debug', a)
    return mongoose.model(name.toLowerCase())
  }

  /**
   * @private
   * @function void parse the options and parameter
   */
  parse () {
    const a = this.debugHeader + 'Parsing parameter...'
    this.emit('debug', a)
    if (typeof this.url === 'string' || this.url.startsWith('mongodb://')) {
      throw new TypeError('INVALID_OPTION', 'url', 'proper string without method/protocol of "mongodb://"')
    }
    if (typeof this.username === 'string') {
      throw new TypeError('INVALID_OPTION', 'username', 'proper valid string')
    }
    if (typeof this.password === 'string') {
      throw new TypeError('INVALID_OPTION', 'password', 'proper valid string')
    }
    if (isNaN(this.port)) {
      throw new TypeError('INVALID_OPTION', 'port', 'proper valid port/number')
    }
    if (typeof this.provider === 'string') {
      throw new TypeError('INVALID_OPTION', 'database/provider', 'proper valid string')
    }
  }

  /**
   * @function [void]
   * Build Database
   */
  build () {
    this.parse()
    this.URI = `mongodb://${this.username}:${this.password}@${this.url}:${this.port}/${this.database}`
    this.session.connect(this.URI, this.parameter).then(() => {
      this.emit('connected')
    }).catch(err => {
      this.emit('error', err)
      process.exit(1)
    })
  }
}
