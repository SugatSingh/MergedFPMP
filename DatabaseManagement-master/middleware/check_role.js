
function checkRole(req, res, next) {
    if(req.user_data.role !== 'admin') {
        res.status(401).send({ message: "Permission UnAuthorized" });
    } else {
        next();
    }
};

module.exports = checkRole;