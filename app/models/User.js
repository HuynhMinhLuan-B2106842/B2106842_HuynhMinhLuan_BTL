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
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    phoneNumber: {
        type: String,
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