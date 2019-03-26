/**
 * A Hash-storing Map that mostly do something similar to Map
 * @extends {Map}
 */
module.exports = class HashMap extends Map {
  // eslint-disable-next-line no-useless-constructor
  constructor (iterable) {
    super(iterable)
  }

  toArray () {
    return Array.from(new Set(this.map(x => x)))
  }
}
