const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const login = require("../mysql/User/login");
const register = require("../mysql/User/register");
const changePassword = require("../mysql/User/changePassword")
const userById = require("../mysql/User/userById");
const checkJwt = require("../middleware/check_jwt");
const checkRole = require("../middleware/check_role");
const update = require("../mysql/update");
const getAll = require("../mysql/getAll");
const async = require('async');

const router = express.Router();

// Handling user routes
router.post("/login", login);

router.post("/register", register);

router.post("changepassword", changePassword);

router.get("/:id",[checkJwt, checkRole], (req, res, next) => {
  userById(req.params.id, (result) => {
    res.send(result);
  });
});

router.post("/:id/update", checkJwt, (req, res, next)=> {
  async.waterfall([
    function(callback) {
      if (req.user_data.user_id !== req.params.id) {
        res.status(401).send({ message: "User Invalid"});
      } else {
        update('user', req.body.user, req.params.id, (result)=> {
          console.log(result);
          callback(null);
        })
      }
    },
    function(callback) {
      update('user_detail', req.body.user_detail, req.params.id, (result)=> {
        console.log(result);
        callback(null, 'done');
      } )
    }

  ], (error)=> {
    res.status(401).send({ message: "Error" });
  })
  
});

// router.get("/download")

router.get("/", [checkJwt, checkRole], (req, res, next) => {
  getAll('user', (result) => {
    res.send(result);
  })
  })

module.exports = router;