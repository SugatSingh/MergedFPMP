const pool = require('./pool');

function search(table, field, value, callback) {
    if(field == 'journal_name'|| 'conference_name'|| 'book_title') value += '%';
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Select * from ?? where ?? like ? ', [table,field, value], (err, result) => {
            if (err)
                throw err;
            callback(result);
        });
        connection.release();

    })
}

module.exports = search;
