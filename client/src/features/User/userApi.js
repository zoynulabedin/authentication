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
