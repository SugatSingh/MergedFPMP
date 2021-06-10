const pool = require('./pool');

function getJournalByPostId(id, callback) {
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('SELECT * FROM journal inner join journal_article on journal.journal_id = journal_article.journal_id where publication_id = ? limit 1', [id], (err, results) => {
            if (err)
                throw err;
            console.log(results);
            callback(results[0]);
        });
        connection.release();
    })
}

module.exports = getJournalByPostId;
