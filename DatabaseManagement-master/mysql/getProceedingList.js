const pool = require('./pool');

function getProceedingList(callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select proceeding_id, title as proceeding_title from proceeding natural join publication', (err, results) => {
            if (err)
                throw err;
            callback(results);
        });
        connection.release();
    })
}

module.exports = getProceedingList;
