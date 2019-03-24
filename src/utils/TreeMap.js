const Collection = require('./Collection');

/**
 * A TreeMap, consist of Sorted Mapping.
 * @extends {Collection}
 */
module.exports = class TreeMap extends Collection {
	constructor(iterable) {
		super(iterable);	
	}
};
