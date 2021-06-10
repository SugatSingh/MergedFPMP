const pool = require('./pool');
const mysql = require('mysql');

function searchPost(search_criteria, field, value, callback) {
    console.log(search_criteria);
    if(search_criteria === null) { search_criteria = { } };
    var joined_results = new Array();
    value = value + "%";
    pool.getConnection((err, connection) => {
        if (err)
            console.log(err);
        var array_of_values = [field, value];
        var sql = 'Select * from `publication` where ?? like ? ';
        if(!search_criteria) {
            if (search_criteria.publication_type != null) {
                console.log("Hello Victory\n");
                sql = sql + 'And `publication_type`=? ';
                array_of_values.push(search_criteria.publication_type);
            }
            if (search_criteria.date_from != null && search_criteria.date_until != null) {
                sql = sql + 'And `publication_date` between ? and ? ';
                array_of_values.push(search_criteria.date_from);
                array_of_values.push(search_criteria.date_until);
            }
            if (search_criteria.limit != null) {
                sql = sql + 'LIMIT ?';
                array_of_values.push(search_criteria.limit)
            }
        }
        sql = mysql.format(sql, array_of_values);

        connection.query(sql, (err, results) => {
            if (err) console.log(err);
            console.log(results)
            if (results.length == 0) callback([]);
            var counter = 0;
            results.forEach((row) => {
                if (row.publication_type != null) {
                    connection.query('Select * from ?? where publication_id=?',
                        [row.publication_type, row.publication_id],
                        (err, result) => {
                            if (err) console.log(err);
                            var new_result = {
                                ...row,
                                ...result[0]
                            };
                            joined_results.push(new_result);
                            // console.log(joined_results);
                            counter++;
                            if (counter == results.length) callback(joined_results);
                        });
                } else {
                    callback([])
                }
            });
        });
        connection.release();

    })
}

module.exports = searchPost;