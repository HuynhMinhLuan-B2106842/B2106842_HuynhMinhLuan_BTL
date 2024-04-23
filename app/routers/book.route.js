const express = require('express');
const router = express.Router();
// goi file controller
const bookController = require("../controllers/book.controller");
const Book = require('../models/Book');


router.route("/count").get(bookController.getBookCount)
router.route("/search").get(bookController.getBookByName);

router.route("/")
    .get(bookController.getAllBooks)
    .post(bookController.createBook)


// thêm các điều kiện kiểm tra, chỉ có admin mới được phép xóa sách
router.route("/:id")
    .get(bookController.getBookById)
    .delete(bookController.deleteBook)
    .put(bookController.updateBook)




module.exports = router;    