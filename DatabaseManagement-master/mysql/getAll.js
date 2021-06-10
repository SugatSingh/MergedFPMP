const pool = require('./pool');

function getAll(table, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select * from ??', [table], (err, results) => {
            if (err)
                throw err;
            callback(results);
        });
        connection.release();
    })
}

module.exports = getAll;
