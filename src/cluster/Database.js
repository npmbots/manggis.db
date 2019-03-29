const mongoose = require('bluebird').promisifyAll(require('mongoose'))
const fs = require('bluebird').promisifyAll(require('fs'))
mongoose.Promise = require('bluebird')
const { EventEmitter } = require('events')
const { Error, TypeError, RangeError } = require('../localization')
/**
 * Symbol, useful to define private methods
 */
const _parse = Symbol('parse')
const _isPersistent = Symbol('validate')
/**
 * The source of everything, and the controller of database flow.
 * Every Cluster and Function will be resolved here.
 * Provide client with no Parameter for non-persistent data storing (beta).
 * @module Database
 * @extends {EventEmitter}
 */
module.exports = class Database extends EventEmitter {
  /**
   * The constructor of Database Client.
   * @public
   * @constructor
   * @extends EventEmitter
   * @param {object} options Parameters used in constructing database.
   * @param {string} options.url The mongodb clean url, without protocol such as "mongodb://".
   * @param {string} options.username An username.
   * @param {string} options.password Definitely a password you dumbass.
   * @param {number} options.port The port that will be used for the database client.
   * @param {string} options.provider A Provider that will be used for the database client.
   * @param {Object} options.parameter For parameter, check this documentation [Official Mongoose Docs](https://mongoosejs.com/docs/connections.html#connections).
   */
  constructor (options) {
    super()
    /**
     * Private method to check whether this client is able to do persistent storing.
     */
    if (this[_isPersistent]()) {
      this.persistent = true
      this.url = options.url
      this.username = options.username
      this.password = options.password
      this.port = options.port
      this.provider = options.provider
      if (!options.parameter) {
        this.parameter = {
          useNewUrlParser: true
        }
      } else {
        this.parameter = options.parameter
      }
    } else {
      this.persistent = false
    }

    this.clientStatus = 0 // Not ready

    /**
     * For flexible module extension.
     */
    this.session = mongoose
    this.Schema = mongoose.Schema

    /**
     * Used a lot in the module.
     */
    this.Promise = require('bluebird')
    /**
     * Contains various general-purpose utility methods.
     * @method
     * @returns {any}
     */
    this.util = require('../utils/Util')

    /**
     * Construct a Schema.
     * @method
     * @returns {Schema}
     */
    this.SchemaBuilder = (schemaparams) => require('./SchemaBuilder')(schemaparams, this)
    this.debugHeader = `[ws] [ManggisDB [Session - ${this.username}]] `
  }

  /**
   * Configure Schema directory for auto-building.
   * @method
   * @returns {SchemaBuilder}
   * @example
   * const path = require('path')
   * db.configure(path.join(__dirname, 'schemas'))
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
   * @method
   * @returns {mongoose}
   */
  get Mongoose () {
    return this.session
  }

  /**
   * Define a Model.
   * @method
   * @param {string} name the name of model.
   * @param {mongoose.Schema} Schema the schema itself.
   * @returns {mongoose.model}
   */
  defineModel (name, Schema) {
    const a = this.debugHeader + 'Model ' + name + ' is declared..'
    this.emit('debug', a)
    return mongoose.model(name.toLowerCase(), Schema)
  }

  /**
   * Get a Model.
   * @method
   * @param {string} name the name of model.
   * @returns {mongoose.model}
   */
  getModel (name) {
    const a = this.debugHeader + 'Model ' + name + ' is fetched..'
    this.emit('debug', a)
    return mongoose.model(name.toLowerCase())
  }

  /**
   * Parse the parameter.
   * @private
   * @method
   * @returns {void}
   */
  [_parse] () {
    const a = this.debugHeader + 'Parsing parameter...'
    this.emit('debug', a)
    if (typeof this.url !== 'string' || this.url.startsWith('mongodb://')) {
      throw new TypeError('INVALID_OPTION', 'url', 'proper string without method/protocol of "mongodb://"')
    }
    if (typeof this.username !== 'string') {
      throw new TypeError('INVALID_OPTION', 'username', 'proper valid string')
    }
    if (typeof this.password !== 'string') {
      throw new TypeError('INVALID_OPTION', 'password', 'proper valid string')
    }
    if (isNaN(this.port)) {
      throw new TypeError('INVALID_OPTION', 'port', 'proper valid port/number')
    }
    if (typeof this.provider !== 'string') {
      throw new TypeError('INVALID_OPTION', 'database/provider', 'proper valid string')
    }
  }

  /**
   * Check whether this client is able to do persistent storing.
   * @method
   * @private
   * @returns {boolean}
   */
  [_isPersistent] () {
    if (!this.username && !this.password && !this.port && !this.url && !this.provider) {
      return false
    }
    return true
  }

  /**
   * Build the client database.
   * @method
   * @return {Mongoose}
   */
  build () {
    if (this[_isPersistent]()) {
      this[_parse]()
      // mongodb://user:password@host:port/dbname?authSource=dbWithUserCredentials
      this.URI = `mongodb://${this.username}:${this.password}@${this.url}:${this.port.toString()}/${this.provider}`
      return this.session.connect(this.URI.toString(), this.parameter).then(() => {
        const a = `${this.URI}`
        this.emit('connected', a)
        this.clientStatus = 1 // Ready!
      }).catch(err => {
        this.emit('error', err)
        process.exit(1)
      })
    } else {
      this.clientStatus = 1 // Ready!
      return this.emit('connected', 'Non-persistent Database')
    }
  }
}
