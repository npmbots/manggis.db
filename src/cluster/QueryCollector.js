/**
 * A Class that provides client with cached database
 * @extends {Array}
 */
module.exports = class QueryCollector extends Array {
	/**
	 * @constructor
	 * @param {Database} extends [EventEmitter] client
	 * @param {mongoose.Scheme} collection 
	 */
	constructor(client, collection) {
		super();

		this.client = client;
		this.collection = collection;
	}
};
