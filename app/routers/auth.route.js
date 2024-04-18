const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth.controller");
const { login } = require("../controllers/auth.controller");
const { logout } = require("../controllers/auth.controller");

//Register route
router.post("/register", register);

//Login route là route là auth/login
router.post("/login", login);
//Logout route
router.post("/logout", logout);

module.exports = router;
