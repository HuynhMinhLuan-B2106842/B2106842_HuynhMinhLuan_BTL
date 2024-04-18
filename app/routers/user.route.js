const express = require('express');
const router = express.Router();
// goi file controller
const userController = require("../controllers/user.controller");
const { post } = require('./auth.route');

router.route("/")
    .get(userController.getAllUsers)
    .post(userController.register)
    .patch(userController.changePassword)

router.route("/info/:id")
    .get(userController.getUserInfoByID)
    .put(userController.changeUserInfo)

router.route("/cart")
    .get(userController.getUserCart)
    .post(userController.addCart)
    .patch(userController.updateBookInCart)

router.route("/cart/:id")
    .delete(userController.removeBook)



module.exports = router;