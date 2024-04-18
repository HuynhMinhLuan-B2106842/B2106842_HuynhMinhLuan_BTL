const Publisher = require('../models/Publisher');
const mongoose = require('mongoose')

// Get a single publisher by ID
exports.getOnePublisher = async (req, res) => {
    try {
        const publisher = await Publisher.findById(req.params.id);
        res.json(publisher);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all publishers
exports.getAllPublishers = async (req, res) => {
    try {
        const publishers = await Publisher.find();
        res.json(publishers);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new publisher
exports.createPublisher = async (req, res) => {
    try {
        const publisher = new Publisher(req.body);
        await publisher.save();
        res.json(publisher);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a publisher by ID
exports.updatePublisher = async (req, res) => {
    try {
        const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(publisher);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a publisher by ID
exports.deletePublisher = async (req, res) => {
    try {
        await Publisher.findByIdAndRemove(req.params.id);
        res.json({ message: 'Publisher deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};