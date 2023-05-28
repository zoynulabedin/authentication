const express = require('express');
const { UserLogin, me, userLoggout } = require('../controller/authController');
const tokenVerify = require('../middleware/tokenverify');
const authRouter = express.Router();

authRouter.route("/login").post(UserLogin);
authRouter.route("/me").get(tokenVerify,me);
authRouter.route("/loggout").post(userLoggout);

module.exports = authRouter;