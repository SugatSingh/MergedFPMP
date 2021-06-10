const pool = require('./pool');

function getAuthorsByBook(book_id, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select * from author natural join book_author where book_id= ?', [book_id], (err, results) => {
            if (err)
                throw err;
            callback(results)
        });
        connection.release();

    })
}

module.exports = getAuthorsByBook;
