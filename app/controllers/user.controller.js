const User = require("../models/User")
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')

exports.getAllUsers  = async (req, res) => {
    try{
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.register = async (req, res) => {
    try{
        const user = await User.create(req.body); 
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.changePassword = (req, res) => {
    res.send({massage: "changePassword"});
};

exports.getUserInfoByID = async (req, res) => {
    try{


        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};




exports.changeUserInfo = (req, res) => {
    res.send({massage: "changeUserInfo "});
};

exports.getUserCart = (req, res) => {
    res.send({massage: "getUserCart"});
};

exports.addCart  = (req, res) => {
    res.send({massage: "addCart "});
};

exports.updateBookInCart = (req, res) => {
    res.send({massage: "updateBookInCart"});
};

exports.removeBook = (req, res) => {
    res.send({massage: "removeBook"});
};