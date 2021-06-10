const pool = require('./pool');

async function getAllByColumn(table, columns, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select ?? from ??', [columns, table], (err, results) => {
            if (err)
                throw err;
            callback(results);
        });
        connection.release();
    })
}

module.exports = getAllByColumn;
