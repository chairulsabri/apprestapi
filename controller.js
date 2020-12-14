'use strict ';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, rest) {
    response.ok("Aplikasi rest saya berjalan")
};