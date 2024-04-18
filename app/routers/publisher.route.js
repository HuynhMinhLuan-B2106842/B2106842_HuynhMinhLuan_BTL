const express = require('express');
const publisherController = require("../controllers/publisher.controller");
const router = express.Router();
// Import the publisher controller

router.route("/")
    .get(publisherController.getAllPublishers)
    .post(publisherController.createPublisher)

router.route("/:id")
    .get(publisherController.getOnePublisher)
    .put(publisherController.updatePublisher)
    .delete(publisherController.deletePublisher)
module.exports = router;