const Collection = require('./Collection')
/**
 * A TreeMap, consist of Sorted Mapping.
 * @extends {Collection}
 */
module.exports = class TreeMap extends Collection {
  // eslint-disable-next-line no-useless-constructor
  constructor (iterable) {
    super(iterable)
  }
}
