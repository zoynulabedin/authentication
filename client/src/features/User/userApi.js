import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get all users data

export const fetchAllUsers = createAsyncThunk(
	"user/fetchAllUsers",
	async () => {
		const response = await axios.get("http://localhost:5050/api/v1/user");

		return response.data;
	}
);

// create a new user

export const createNewUser = createAsyncThunk(
	"user/createNewUser",
	async (data) => {
		const response = await axios.post(
			"http://localhost:5050/api/v1/user/create",
			data
		);
		return response.data;
	}
);
