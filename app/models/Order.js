const mongoose = require('mongoose');



const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    bookId: {
        type: String,
        ref: 'Book',
        required: true
    },
    startDate: {
        type: Date,
        require: true,
        default: Date.now,
    },
    endDate: {
        type: Date,
        required: true,
        default: function () {
            return new Date(this.startDate.getTime() + 30 * 24 * 60 * 60 * 1000);
        }
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema)

module.exports = Order