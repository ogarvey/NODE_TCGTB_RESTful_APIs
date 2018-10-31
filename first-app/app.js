const logger = require('./logger');

// When imported module has multiple exports
// logger.log('Some Message');

// When imported module exports function directly
logger('Some other message');
