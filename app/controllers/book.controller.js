const Book = require("../models/Book");
const mongoose = require("mongoose");


exports.getBookByName = async (req, res) => {
    try {
        const name = req.query.name;
        const book = await Book.find({ name: { $regex: name, $options: 'i' } });
        if (book.length === 0)
            return res.status(404).json({ error: "khong tim thay san pham" });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.massage });
    }
}

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        const updatedBook = await Book.findById(id);
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookCount = async (req, res) => {
    try {
        const count = await Book.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



