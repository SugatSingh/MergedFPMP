const pool = require('./pool');

function update(table, data, selection_id, callback) {
    var column = table + '_id';
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Update ?? set ? where ?? = ?', [table, data, column, selection_id], (err, results) => {
            if (err)
                throw err;
            callback(results);
        });
        connection.release();

    })
}

module.exports = update;
