const TreeMap = require('../utils/TreeMap')
/**
 * A Class that provides client with cached database
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
  }

  /**
   *
   */
  async fetchAll () {
    const datas = await this.client.getModel(this.collection.toLowerCase())
    datas.forEach(element => {
      super.set(element.key, element)
    })
    return this
  }
}
