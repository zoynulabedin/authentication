const User = require("../models/UserSchema");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/**
 * @desc user Login method
 * @rotue Post /login
 * @access public
 */

const UserLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password)
		return res.status(400).json({
			success: false,
			message: "Please provide email and password",
		});

	// check user
	const checkUser = await User.findOne({ email });
	if (!checkUser)
		return res.status(404).json({
			success: false,
			message: "Email not found",
		});

	// password match
	const passwordCheck = await bcrypt.compare(password, checkUser.password);
	if (!passwordCheck)
		return res.status(404).json({
			success: false,
			message: "Invalid password",
		});

	// access Token
	const accessToken = jwt.sign(
		{
			email: checkUser.email,
		},
		process.env.ACCESS_TOKEN_SECRET_KEY,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY_SECRET_KEY,
		}
	);
	res.cookie("accessToken", accessToken, {
		httpOnly: false,
		secure: false,
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	res.status(200).json({
		token: accessToken,
		user: checkUser,
	});
});
/**
 * @desc me controller
 * @rotue Post /Me
 * @access Private
 */
const me = (req, res) => {
	if (!req.me)
		return res.status(404).json({
			message: "User not found",
		});
	res.status(200).json({
		me: req.me,
	});
};

/**
 * @desc loggout controller
 * @rotue Post /Me
 * @access Private
 */

const userLoggout = asyncHandler(async (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.accessToken)
		return res.status(400).json({
			message: "Already loggout",
		});

	res
		.clearCookie("accessToken", {
			httpOnly: true,
			secure: false,
		})
		.json({
			message: "loggout successfully",
		});
});

module.exports = { UserLogin, me, userLoggout };
