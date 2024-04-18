const mongoose = require("mongoose");
// import {Schema, ObjectId } from 'mongoose';
// import isEmail from 'validator/lib/isEmail';


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    birthDay: {
        type: Date,
        require: true,
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other', 'unknown'],
            massage:  '{VALUE} is not supported'
        },
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        // validate: {
        //     validator: (value) => isEmail,
        //     message: 'Email is incorrect format'
        // },
        require: true,
    },
    phoneNumber: {
        type: String,
        // validate: {
        //     validator: (phoneNumber) => phoneNumber.length > 9,
        //     massage: 'Phone number is incorrect format'
        // },
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    created: {
        type: Date,
        require: true,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User