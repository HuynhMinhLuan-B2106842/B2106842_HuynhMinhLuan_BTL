const express = require('express');
const router = express.Router();
const { registerStaff } = require("../controllers/staff.controller");
const { loginStaff } = require("../controllers/staff.controller");
const { getStaffInfoByID } = require("../controllers/staff.controller");
// const { logout } = require("../controllers/auth.controller");

router.get("/info/:id", getStaffInfoByID);
//Login route là /admin/loginadmin
router.post("/loginStaff", loginStaff);
router.post("/registerStaff", registerStaff);

//Logout route
// router.post("/logout", logout);



module.exports = router;
