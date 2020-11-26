const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'bsr1dcwt0hmn0eqphnvv-mysql.services.clever-cloud.com',
    user: 'urfbrftqnbf7aycd',
    password: 'nYeU9AM5I9pOly8oDCdT',
    database: 'bsr1dcwt0hmn0eqphnvv'
});

mysqlConnection.connect(function(err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;