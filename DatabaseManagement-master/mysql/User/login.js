const pool = require('../pool');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function login(req, res, next) {
    const user_email = req.body.user_email;
    const password = req.body.password;
    console.log(password);
    console.log(req.body);
    console.log(user_email);
    try {
        pool.getConnection((err, connection) => {
            connection.query('Select * from `user` where `user_email`= ? limit 1', [user_email], (error, results) => {
                if (error) {
                    throw error;
                }
                if (results.length === 0) {
                    res.status(401).json({
                        message: 'Login Failed, No such user'
                    });
                } else {
                    console.log(results);
                    result = results[0];
                    if (!bcrypt.compareSync(password, result.password)) {
                        res.status(401).send({
                            message: 'Validation Failed'
                        });
                    } else {
                        console.log("valid user");
                        const token = jwt.sign({
                            user_id: result.user_id,
                            user_email: result.user_email,
                            role: result.role
                        }, 'another_Jwt_Secret_Key', {
                            expiresIn: "30d"
                        });

                        res.send({
                            message: "Login Successful",
                            token,
                            user_id: result.user_id,
                            user_email: result.user_email,
                            firstName: result.firstName,
                            lastName: result.lastName,
                            role: result.role
                        })
                    }
                }
            });
            connection.release();
        });
    } catch (error) {
        console.log(error.message);
        res.status(401).send({
            message: 'Validation Failed'
        });

    }

};

module.exports = login;