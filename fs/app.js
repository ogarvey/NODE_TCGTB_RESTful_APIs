const fs = require('fs');

const files = fs.readdirSync('./');

console.log('Files in dir:::', files);

fs.readdir('./', (err, files) => {
    if (!err) console.log('Async Files in dir:::', files);
});