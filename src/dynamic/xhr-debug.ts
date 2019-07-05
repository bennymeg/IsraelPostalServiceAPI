// we are running in node environment;
module.exports.request = module.require('xmlhttprequest').XMLHttpRequest;
module.exports.environment = "debug";