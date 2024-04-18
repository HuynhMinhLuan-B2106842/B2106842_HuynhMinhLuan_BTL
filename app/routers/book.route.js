const express = require('express');
const router = express.Router();
// goi file controller
const bookController = require("../controllers/book.controller");


router.route("/")
    .get(bookController.getAllBooks)
    .post(bookController.createBook)


// thêm các điều kiện kiểm tra, chỉ có admin mới được phép xóa sách
router.route("/:id")
    .get(bookController.getBookById)
    .delete(bookController.deleteBook)
    .put(bookController.updateBook)

router.route("/count")
    .get(bookController.getBookCount)


module.exports = router;