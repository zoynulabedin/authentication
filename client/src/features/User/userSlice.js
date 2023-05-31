import { createSlice } from "@reduxjs/toolkit";
import {
	UserData,
	createNewUser,
	fetchAllUsers,
	loggOut,
	loginUser,
} from "./userApi";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
		loading: false,
		loginState: false,
		message: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllUsers.pending, (state, { type, payload }) => {
				state.loading = true;
			})
			.addCase(fetchAllUsers.fulfilled, (state, { type, payload }) => {
				state.loading = false;
				state.users = payload;
			})
			.addCase(fetchAllUsers.rejected, (state, { type, payload }) => {
				state.loading = false;
			})
			.addCase(createNewUser.pending, (state, { type, payload }) => {
				state.loading = true;
			})
			.addCase(createNewUser.fulfilled, (state, { type, payload }) => {
				state.loading = false;
				state.users.push(payload.user);
			})
			.addCase(createNewUser.rejected, (state, { type, payload }) => {
				state.loading = false;
			})
			.addCase(loginUser.pending, (state, { type, payload }) => {
				state.loading = true;
			})
			.addCase(loginUser.fulfilled, (state, { type, payload }) => {
				state.loading = false;
				state.loginState = false;
				state.users = payload;
			})
			.addCase(loggOut.fulfilled, (state, { type, payload }) => {
				state.loading = false;
				state.loginState = false;
			})
			.addCase(UserData.pending, (state, { type, payload }) => {
				state.loading = true;
			})
			.addCase(UserData.fulfilled, (state, { type, payload }) => {
				state.loading = false;
				state.loginState = true;
				state.users = payload;
			});
	},
});

// export slice selectors

export const getAllusersdata = (state) => state.user;

// slice exports
export const {} = userSlice.actions;
export default userSlice.reducer;
