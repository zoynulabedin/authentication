const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const asyncHandler = require("express-async-handler");
const tokenVerify = (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader) {
		return res.status(400).json({
			message: "Unauthorized",
		});
	}

	const token = authHeader.split(" ")[1];

	jwt.verify(
		token,
		process.env.ACCESS_TOKEN_SECRET_KEY,
		asyncHandler(async (error, decode) => {
			if (error) {
				return res.status(401).json({
					message: "Invalid token",
				});
			}
			const me = await User.findOne({ email: decode.email });
			req.me = me;

			next();
		})
	);
};

module.exports = tokenVerify;
