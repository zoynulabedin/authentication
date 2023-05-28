const express = require('express');
const { getAllUsers, createNewUser, getSingleUser, DeleteSingleUser, updateUserController } = require('../controller/userController');

const userRouter = express.Router();

// routing
userRouter.route("/").get(getAllUsers);
userRouter.route("/create").post(createNewUser);
userRouter.route("/:id").get(getSingleUser).delete(DeleteSingleUser).patch(updateUserController);


module.exports = userRouter;