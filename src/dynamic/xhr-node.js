// we are running in node environment;
const XMLHttpRequest = require('request');

module.exports.XMLHttpRequest = XMLHttpRequest;
module.exports.env = "node";