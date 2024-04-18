const express = require('express');
const router = express.Router();
// goi file controller
const authController = require("../controllers/auth.controller");


router.route("/login")
    .post(authController.login)

router.route("logout")
    .post(authController.logout)

router.route("register")
    .post(authController.register)
    
module.exports = router;