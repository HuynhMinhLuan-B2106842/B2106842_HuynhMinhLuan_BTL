
const Order = require('../models/Order');

exports.getAllOrder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserOrder = async (req, res) => {
    try {
        const userId = req.query.userId;
        const orders = await Order.find({ userId: userId }); // Sửa ở đây
        if (!orders || orders.length === 0) { // Kiểm tra nếu không có đơn hàng
            return res.status(404).json({ message: "Empty" });
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelOrder = async (req, res) => {
    try {
        const orderId = req.query.Id;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.status = "rejected";
        await order.save();

        res.status(200).json({ message: "Order cancelled successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
