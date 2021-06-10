var mysql = require('mysql');

var pool  = mysql.createPool({
	connectionLimit: 10,
	user: "root",
	// "DBMS",
  	password: "Sunil9860",
	 host: "localhost", 
	//  "mysql.station184.com",
	database: "publication_db",
	// "gloriaschool_publication_db",
	port: '3306'
});
module.exports = pool;