const express = require('express');
const router = express.Router()


//not created yet
const task_controller = require("../controllers/task.controller")


router.get('/t' , task_controller.test1)

module.exports = router;