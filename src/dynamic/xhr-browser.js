// we are running in browserify / webpack environment. (dont use fs, child_process, etc..)
const XMLHttpRequest = require('xhr');

module.exports.XMLHttpRequest = XMLHttpRequest;
module.exports.env = "browser";