// we are running in node environment;
const XMLHttpRequest = module.require('xmlhttprequest').XMLHttpRequest;

module.exports.XMLHttpRequest = XMLHttpRequest;
module.exports.env = "node";