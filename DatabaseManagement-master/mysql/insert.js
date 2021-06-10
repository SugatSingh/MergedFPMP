const pool = require('./pool');

function insert(table, data, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Insert into ?? set ?', [table, data], (err, result) => {
            if (err)
                throw err;
            callback(result);
        });
        connection.release();

    })
}

module.exports = insert;
