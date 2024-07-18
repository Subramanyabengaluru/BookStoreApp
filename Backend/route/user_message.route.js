const express = require('express')
const router = express.Router();

let userMessageController = require('../controller/user_message.controller')

router.post("/",userMessageController.storeMessages);

module.exports = router;