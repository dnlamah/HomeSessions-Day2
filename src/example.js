//tests the client, supply argument for search after node file command
var lib = require("./client");
console.log(lib.wiki(process.argv.slice(2).join(" ")));