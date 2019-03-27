const _ = require('lodash')
const TreeMap = require('../utils/TreeMap')
const { Error, TypeError, RangeError } = require('../localization')

const _check = Symbol('check')
/**
 * A Class that provides client with cached database.
 * @module QueryCollector
 * @extends {TreeMap}
 */
module.exports = class QueryCollector extends TreeMap {
  /**
   * @constructor
   * @param {Database} extends [EventEmitter] client
   * @param {mongoose.Scheme} collection
   */
  constructor (client, collection) {
    super()

    this.client = client
    this.collection = collection

    /**
     * Used a lot in this Class.
     */
    this.Promise = require('bluebird')
  }

  /**
   * @function sync
   * to Synchronous-ify a function
   * @param {function} fn The function that will be executed
   * @returns {function}
   */
  sync (fn) {
    var result = fn
    if (result === undefined) {
      const seconds = 1
      var waitTill = new Date(new Date().getTime() + seconds * 100)
      while (waitTill > new Date()) {
        return this.sync(fn)
      }
    }
    return result
  }

  /**
   * @function fetchAll
   * Fetch BSON Document from Database MongoDB Client.
   * In Another word, the Data itself.
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
   * @function fetchAllSync
   * Fetch BSON Document fron Database MongoDB Client Synchronously.
   * @returns {Array}
   */
  fetchAllSync () {
    const query = this.client.getModel(this.collection.toLowerCase()).find()
    this.sync(query)
    return this
  }

  /**
   * @function get
   * Get a value from database.
   * @param {string} key Database Key, as defined in the Schema.
   * @param {*} refresh Set as "true" to refresh Collector and fetch the new database from Mongo.
   * Do remember that refresh is excuted first before returning a value.
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
   * @function refresh
   * Used to refresh TreeMap and re-fetch Data from MongoDB
   * Unavailable when using non-persistent Database
   * @returns {Promise}
   */
  refresh () {
    super.clear()
    return this.fetchAll()
  }

  refreshSync () {
    super.clear()
    return this.fetchAllSync()
  }

  [_check] (key) {
    const a = `The ${key} key does not exist on the treemap, please check again using check() and do refresh()`
    if (!this.has(key)) return this.client.emit('warn', a)
  }
}
