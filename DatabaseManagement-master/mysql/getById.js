const pool = require('./pool');

function getById(table,id, callback) {
    var column = table.split('_')[0] + '_id';
    console.log(column);
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select * from ?? where ?? = ? limit 1', [table, column, id], (err, results) => {
            if (err)
                throw err;
            callback(results[0]);
        });
        connection.release();
    })
}

module.exports = getById;
