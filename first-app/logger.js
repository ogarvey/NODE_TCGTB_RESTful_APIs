const EventEmitter = require("events");

// Dummy URL
var url = "https://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request to url
    console.log("Message:::", message);

    this.emit("messageLogged", message);
  }
}

// Add function to exports
//module.exports.log = log;

// Alternative for just one function
module.exports = Logger;
