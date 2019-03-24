'use strict';

// Thanks to Discord.js for providing the code

const SCode = Symbol('code');
const messages = new Map();

/**
 * Extend an error of some sort into a Wrapper Error.
 * @param {Error} Base Base error to extend
 * @returns {websocketError}
 */

function websocketThrow(Base) {
    return class websocketError extends Base {
        constructor(key, ...args) {
            super(message(key, args));
            this[SCode] = key;
            if(Error.captureStackTrace) Error.captureStackTrace(this, websocketError);
        }

        get name() {
            return `${super.name} [${this[SCode]}]`;
        }
        
        get code() {
            return this[SCode];
        }
    };
}

/**
 * Format the message for an error.
 * @param {string} key Error key
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 */

function message(key, args) {
    if(typeof key !== 'string') throw new Error('Error message key must be supplied by a string');
    const msg = messages.get(key);
    if(!msg) throw new Error(`An invalid error message key was used: ${key}.`);
    if(typeof msg === 'function') return msg(...args);
    if(args === undefined || args.length === 0) return msg;
    args.unshift(msg);
    return String(...args);
}

/**
 * Register an error code and message.
 * @param {string} sym Unique name for the error
 * @param {*} val Value of the error
 */

function register(sym, val) {
    messages.set(sym, typeof val === 'function' ? val : String(val));
}

module.exports = {
    register,
    Error: websocketThrow(Error),
    TypeError: websocketThrow(TypeError),
    RangeError: websocketThrow(RangeError)
};