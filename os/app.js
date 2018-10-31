const os = require("os");

var totalMem = os.totalmem();
var freeMem = os.freemem();
var arch = os.arch();
var cpus = os.cpus();

console.log(`Your Total Memory is: ${totalMem}, with ${freeMem} free...`);
console.log(`Your system is ${arch} based...`);
cpus.forEach((cpu) => console.log('CPU info:::',cpu));