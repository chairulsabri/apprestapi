var mysql = require('mysql');

var con = mysql.createConnection({
    host: localhost,
    user: myusername,
    password: '',
    database: dbrestapi,
});

con.connect(function(err) {
    if (err) throw err;
    console.log('mysql terkonrksi');
});

module.export = conn;