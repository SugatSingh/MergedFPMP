const pool = require('./pool');

function insertMultipleContribution(table, objectArray, callback) {
    console.log(objectArray)
    let keys = Object.keys(objectArray[0]);
    let values = objectArray.map( obj => keys.map( key => obj[key]));
    let sql = 'INSERT INTO ' + table + ' (' + keys.join(',') + ') VALUES ?';

    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query(sql, [values], (err, result) => {
            if (err)
                throw err;
            callback(result);
        });
        connection.release();
    })
}

module.exports = insertMultipleContribution;
