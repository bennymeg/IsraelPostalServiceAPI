// we are running in browserify / webpack environment. (dont use fs, child_process, etc..)
module.exports.request = require('request');
module.exports.environment = "browser";
