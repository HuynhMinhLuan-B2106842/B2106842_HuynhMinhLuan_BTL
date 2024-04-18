const express = require("express");
const router = express.Router();
const { registerStaff } = require("../controllers/staff.controller");
const { loginStaff } = require("../controllers/staff.controller");
// const { logout } = require("../controllers/auth.controller");

//Login route là /admin/loginadmin
router.post("/loginStaff", loginStaff);
router.post("/registerStaff", registerStaff);

//Logout route
// router.post("/logout", logout);

module.exports = router;
