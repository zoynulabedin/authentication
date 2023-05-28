import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
		loading: false,
		message: null,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {},
});

// export slice selectors

// slice exports
export const {} = userSlice.actions;
export default userSlice.reducer;
