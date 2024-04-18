const mongoose = require("mongoose");


const satffSchema = new mongoose.Schema({
    // id: { type: ObjectId},
    // Name: {
    //     type: String,
    //     require: true,
    // },
    address: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        validate: {
            validator: (value) => isEmail,
            message: 'Email is incorrect format'
        },
        require: true,
    },
    phoneNumber: {
        type: String,
        validate: {
            validator: (phoneNumber) => phoneNumber.length > 9,
            massage: 'Phone number is incorrect format'
        },
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    }
})

const Staff = mongoose.model('Staff', satffSchema);

module.exports = Staff