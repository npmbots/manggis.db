const _ = require('lodash')
const TreeMap = require('../utils/TreeMap')
const { Error, TypeError, RangeError } = require('../localization')
// TESTING GIT PUSH v3
/**
 * Private method
 */
const _check = Symbol('check')
const _init = Symbol('init')
/**
 * A Class that provides client with cached database.
 * @module QueryCollector
 * @extends {TreeMap}
 */
module.exports = class QueryCollector extends TreeMap {
  /**
   * Construct a Collector to store data temporary.
   * @constructor
   * @param {Database} client The Database Client.
   * @param {mongoose.Scheme} collection The Schema name.
   */
  constructor (client, collection) {
    super()

    /**
     * Block all operation if the client is not ready
     */
    if (this.clientStatus === 0) throw new Error('DATABASE_ERROR', 'The client is not ready yet. Don\'t forget to invoke `.build()` method.')

    this.client = client
    this.collection = collection

    if (this.client.persistent) this[_init]()
    /**
     * Used a lot in this Class.
     */
    this.Promise = require('bluebird')
  }

  /**
   * Fetch BSON Document from Database MongoDB Client.
   * In Another word, the Data itself.
   * @method fetchAll
   * @returns {Promise} The QueryCollector TreeMap that contains every data.
   */
  fetchAll () {
    return new this.Promise((resolve, reject) => {
      this.client.getModel(this.collection.toLowerCase()).find().then(rows => {
        rows.forEach(element => {
          super.set(element.key, element)
        })
      }).catch(err => {
        reject(err)
        this.client.emit('error', err)
      })
      resolve(this)
    })
  }

  /**
   * Get a value from database.
   * @method get
   * @param {string} key Database Key, as defined in the Schema.
   * @param {*} refresh Set as "true" to refresh Collector and fetch the new database from Mongo. Do remember that refresh is excuted first before returning a value.
   * @returns {Promise}
   */
  get (key, refresh = false) {
    this[_check](key)
    if (refresh) {
      super.clear()
      return this.refresh()
    }
    return super.get(key)
  }

  /**
   * Used to refresh TreeMap and re-fetch Data from MongoDB
   * Unavailable when using non-persistent Database
   * @method refresh
   * @returns {Promise}
   */
  async refresh () {
    super.clear()
    await this.fetchAll()
  }

  [_check] (key) {
    const a = `The ${key} key does not exist on the treemap, please check again using check() and do refresh()`
    if (!this.has(key)) return this.client.emit('warn', a)
  }

  /**
   * Initialize Collector
   * @method _init
   * @private
   * @returns {void}
   */
  async [_init] () {
    await this.fetchAll()
  }
}
