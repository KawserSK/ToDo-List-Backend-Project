const express = require('express');
const profileController = require("../controller/profileController");
const todoListController = require("../controller/todoListController");

const authVerifyMiddleware = require("../middleware/authVerifyMiddleware");
const router = express.Router();

router.post("/createProfile", profileController.createProfile)
router.post("/userLogin", profileController.userLogin)


router.get("/selectProfile", authVerifyMiddleware,  profileController.selectProfile)
router.post("/updateProfile", authVerifyMiddleware,  profileController.updateProfile)

router.post("/createTodo", authVerifyMiddleware,  todoListController.createTodo)
router.get("/selectTodo", authVerifyMiddleware,  todoListController.selectTodo)


module.exports=router;