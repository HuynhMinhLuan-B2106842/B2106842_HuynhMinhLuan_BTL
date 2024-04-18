const express = require('express');
const router = express.Router();
// goi file controller
const orderController = require("../controllers/order.controller");


router.route("/")
    .get(orderController.getAllOrder)
    .post(orderController.createOrder)

router.route("/user")
    .get(orderController.getUserOrder)

router.route("/cancel/:id")
    .patch(orderController.cancelOrder)


module.exports = router;