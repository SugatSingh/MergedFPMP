const pool = require('../pool');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function register(req, res, next) {
    let user = req.body.user;
    console.log(user);
    if(!user.user_email) {
        res.json({
            message: "User Email is required"
        });
    } else if(!user.first_name || !user.last_name) {
        res.json({
            message: "User first name and last name required"
        });
    } else if(!user.password) {
        res.json({
            message: "User password is not set"
        });
    } else {
        user.password = bcrypt.hashSync(user.password, 8);
        pool.getConnection((err, connection) => {
            if(err) {
                res.json({
                    message: "Error occured"
                })
            } else {
                console.log('here')
                connection.query('INSERT INTO USER SET ?', [user], (error, result) => {
                    if(error) console.log(error);
                    console.log(result);
                    res.send(result);
                });
                connection.release();
            }
        })
    }



    
  };

module.exports = register;
