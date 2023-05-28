const User = require("../models/UserSchema");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
/**
 * @desc get all users
 * @rotue GET /users
 * @access public
 */

const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select("-password").lean();
	if (!users.length) return res.status(404).json({ message: "user not found" });
	res.json(users);
});

/**
 * @desc create a new user
 * @rotue POST /user
 * @access public
 */

const createNewUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	// check validit
	if (!name || !email || !password) {
		return res.status(400).json({ message: "All fields are required" });
	}
	// email exist
	const emailCheck = await User.findOne({ email });
	if (emailCheck) {
		return res.status(400).json({ message: "Email already exist" });
	}
	// has password
	const salt = await bcrypt.genSalt(10);
	const hassedPassword = await bcrypt.hash(password, salt);
	const user = await User.create({
		name,
		email,
		password: hassedPassword,
	});
	if (user) {
		return res.status(200).json({ message: "User created successfully" });
	} else {
		return res.status(400).json({ message: "user not created" });
	}
});

/**
 * @desc get a single user
 * @rotue get /user
 * @access public
 */

const getSingleUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id).select("-password").lean();
	if (!user) return res.status(404).json({ message: "User not found" });
	return res.status(200).json(user);
});

/**
 * @desc delete user
 * @rotue Delete /user
 * @access public
 */

const DeleteSingleUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const user = await User.findByIdAndDelete(id);
	if (!user) return res.status(404).json({ message: "user not found" });
	return res.status(200).json({ message: "User deleted" });
});

/**
 * @desc Update user
 * @rotue PATCH /users/:id
 * @access public
 */

const updateUserController = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { name, email, password } = req.body;
	// check validit
	if (!name || !email || !password) {
		return res.status(400).json({ message: "All fields are required" });
	}
	const salt = await bcrypt.genSalt(10);
	const hassedPassword = await bcrypt.hash(password, salt);
	const user = await User.findById(id).exec();
	if (!user) return res.status(404).json({ message: "User not found" });
	user.name = name;
	user.email = email;
	user.password = hassedPassword;

	const updateUser = await User.findByIdAndUpdate(id, {
		name,
		email,
		password,
	});
	if (!updateUser) return res.status(404).json({ message: "User not found" });
	return res.status(200).json({ message: "user updated successfully" });
});

module.exports = {
	getAllUsers,
	createNewUser,
	getSingleUser,
	DeleteSingleUser,
	updateUserController,
};
