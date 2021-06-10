const jwt = require("jsonwebtoken");

function checkJwt(req, res, next) {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "another_Jwt_Secret_Key");
    req.user_data = { user_id: decodedToken.user_id, user_email: decodedToken.user_email, role: decodedToken.role};
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};

module.exports = checkJwt;