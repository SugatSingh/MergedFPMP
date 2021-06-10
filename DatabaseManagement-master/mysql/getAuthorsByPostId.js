const pool = require('./pool');

function getAuthorsByPostId(publication_id, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select * from author natural join contribution where publication_id= ?', [publication_id], (err, results) => {
            if (err)
                throw err;
            callback(results)
        });
        connection.release();
    })
}

module.exports = getAuthorsByPostId;
