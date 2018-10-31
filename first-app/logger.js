// Dummy URL
var url = 'https://mylogger.io/log';

function log(message) {
    // Send an HTTP request to url
    console.log('Message::',message)
}

// Add function to exports
//module.exports.log = log;

// Alternative for just one function
module.exports = log