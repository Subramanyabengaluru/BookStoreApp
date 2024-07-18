const express = require('express')
const router = express.Router();

let bookController = require('../controller/book.controller')

router.get("/", bookController.getBook);
router.post("/addBook",bookController.addBook);
router.get("/search",bookController.search);
module.exports = router;