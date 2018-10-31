const Logger = require('../first-app/logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called:::', arg);
});

logger.log('message');