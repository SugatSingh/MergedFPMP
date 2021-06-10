const pool = require('../pool');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function changePassword(req, res, next) {
    const user_id = req.user_data.user_id;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;
    if(!(oldPassword&& newPassword)|| (oldPassword == newPassword)){
        res.status(400).send({ message: "Password Change is not successful"});
    }
    pool.getConnection((err, connection) => {
        connection.query('Select * from `user` where `user_id`= ?', [user_id])
            .on('error', (err) => {
                throw err;
            }).on('result', (row) => {
                if (!bcrypt.compareSync(oldPassword, row.password)) {
                    res.status(401).send({message: 'Validation Failed'});
                } else {
                    const hashedPassword = bcrypt.hashSync(newPassword, 8);
                    connection.query('Update `user` set `password` = ? where `user_id` = ?',
                    [hashedPassword, user_id],
                    (err, result)=> {
                        if(err) throw err;
                        // res.send({ message: "Change successful" });
                    })
                    const token = jwt.sign({
                        user_id : row.user_id,
                        user_email: row.user_email,
                        role: row.role
                    }, 'another_Jwt_Secret_Key', {
                        expiresIn: "30d"
                    });
                    
                res.send({
                    message: "Password Changed Successful",
                    token,
                    user_id: row.user_id,
                    user_email: row.user_email,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    role: row.role
                })
                }
            })
    })
};

module.exports = changePassword;
