const { EventEmitter } = require('events');
module.exports = class Database extends EventEmitter {
	constructor(options, ...args) {
		super(...args);

		this.url = options.url;
		
	}

	parse() {
		
	}

	build() {
		this.parse();
	}
};
