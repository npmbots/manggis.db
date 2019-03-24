/**
 * Project Structure
 * @param {Database} extends [EventEmitter] client
 * Source of Everything
 */
module.exports = {
	Client: require('./cluster/Database'),
	HashMap: require('./utils/HashMap'),
	TreeMap: require('./utils/TreeMap'),
	Constant: require('./utils/Constants'),
	Collection: require('./utils/Collection'),
	Util: require('./utils/Util')
};
