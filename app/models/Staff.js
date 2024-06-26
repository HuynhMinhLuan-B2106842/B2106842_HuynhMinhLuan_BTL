const mongoose = require("mongoose");


const staffSchema = new mongoose.Schema({
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
    role: {
        type: String,
        require: true,
    }
})

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff