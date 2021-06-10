const pool = require('../pool');

function userById(id, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select * from user natural join user_details where user_id = ? limit 1', [id], (err, results) => {
            if (err)
                throw err;
            callback(results[0]);
        });
        connection.release();
    })
}

module.exports = userById;
