const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controller/userController");

const { auth } = require("../middleware/authmiddleware");
userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", auth,loginUser);
userRouter.post("/logout", logoutUser);

module.exports = { userRouter };
