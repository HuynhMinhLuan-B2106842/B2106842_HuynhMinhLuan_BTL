const Book = require("../models/Book")
const mongoose = require('mongoose')



exports.getAllBooks = async (req, res) => {
    try{
        const book = await Book.find({});
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.getBookById = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.createBook = async (req, res) => {
    try{
        const book = await Book.create(req.body); 
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.updateBook = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if(!book){
            return res.status(404).json({massage: "Book not found"});
        }

        const updatedbook = await Book.findById(id);

        res.status(200).json(updatedbook);
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.deleteBook = async (req, res) => {
    try{
        const {id} = req.params;
        book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({massage: "Book not found"});
        }

        res.status(200).json({massage: "Book deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.massage});
    }
};

exports.getBookCount = (req, res) => {
    res.send({massage: "deleteBook handler"});
};