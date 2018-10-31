const os = require("os");

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Your Total Memory is: ${totalMem}, with ${freeMem} free...`);
