/**
 * @function
 * @returns {Schema}
 */
module.exports = (schema, database) => {
	/**
	 * @constructor
	 * @param {schema} schema definitely an object of schema
	 * @param {Database} extends [EventEmitter] the database client
	 * @typedef {schema.schematic} schematic [The permitted SchemaTypes are](https://mongoosejs.com/docs/guide.html)
	 * @param {String}
	 * @param {Number}
	 * @param {Date}
	 * @param {Buffer}
	 * @param {Boolean}
	 * @param {Mixed}
	 * @param {ObjectId}
	 * @param {Array}
	 * @param {Decimal128}
	 * @param {Map}
	 * @example
	 * 	// [Optional] create a childschema
	 * 	const comments = {
	 * 		body: String,
	 * 		date: Date
	 * 	}
	 * // Resolve the childschema
	 * const resolve_comment = new Childschema(comments)
	 * 	const schema = {
	 * // this will be the [Collection]'s Name
	 * 		name: 'carlist',
	 * // this will be the [Collection]'s Schema
	 * 		schematic: {
	 * 			_id: String, // You can replace ObjectId by adding this field
	 * 			name: String, 
	 * 			releasedDate: { type: Date, default: Date.now },
	 * 			buyers: [{ name: String, date: Date }],
	 * // Include the childschema
	 * 			comment: resolve_comment,
	 * 			meta: {
	 * 				votes: Number,
	 * 				favorites: Number
	 * 			}
	 * 		}
	 * 	}
	 */
	return class Schema extends database.Schema {
		constructor(schema, database) {
			super(schema.schematic);

			this.schema = schema;
			/**
			 * @param {Database} extends [EventEmitter]
			 * Source of life and death
			 */
			this.database = database;
		}

		build() {
			const a = `${this.dtabase.debugHeader }Building Schema ${this.schema.name}`
			this.database.emit('debug', a);
			this.database.defineModel(this.schema.name, super.schematic);
		}
	};
};
