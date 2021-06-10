const pool = require('./pool');

function deletion(table, selection_id, callback) {
    const fact = {
        "contribution": "publication_id",
        "book_author": "book_id",
        "book_chapter": "publication_id",
        "conference": "conference_id",
        "conference_article": "publication_id",
        "journal": "journal_id",
        "journal_article": "publication_id",
        "journal_editor": "journal_id",
        "user": "user_id",
        "publisher": "publisher_id",
        "user_detail": "user_id",
        "proceeding": "proceeding_id",
        "publication": "publication_id"
    }
    var column = fact[table];
    console.log(column)
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query('Delete from ?? where ?? = ?', [table, column, selection_id], (err, results) => {
            if (err)
                throw err;
            callback(results);
        });
        connection.release();
    })
}

module.exports = deletion;
