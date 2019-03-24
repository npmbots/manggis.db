'use strict';

const { register } = require('./Error');

const Messages = {
    INVALID_OPTION: (property, must) => `The ${property} option value must be ${must}`,

    FILE_NOT_FOUND: file => `File could not be found: ${file}`,
    MODULE_NOT_FOUND: module => `Module ${module} is not installed`,
    SCRIPT_ERROR: (locate, error) => `Script Error on ${locate}, error stack: ${error}`,
    FATAL_ERROR: error => `FATAL ERROR! : ${error}`,

    INVALID_OWNER_ID: id => `Cannot find User with ID ${id}`,
    INVALID_CLIENT_ID: id => `Cannot find Client with ID ${id}`,
    INVALID_OWNER_ID_NULL: `Invalid Owner ID!!`,
    INVALID_CLIENT_ID_NULL: `Invalid Client ID!!`,
    INVALID_TOKEN: 'Invalid Token!',
    NOT_OWNER: bot => `You are not Owner of ${bot} Bot!`,
    NOT_A_BOT: bot => `The ${bot} ID doesn't belong to any bot`
};

for (const [name, message] of Object.entries(Messages)) register(name, message);