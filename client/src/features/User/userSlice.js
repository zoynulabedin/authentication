import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./userApi";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
		loading: false,
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
			});
	},
});

// export slice selectors

// slice exports
export const {} = userSlice.actions;
export default userSlice.reducer;
