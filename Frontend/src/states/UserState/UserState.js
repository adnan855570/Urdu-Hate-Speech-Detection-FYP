import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	userActive: false,
	user: {},
};

export const UserSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.userActive = true;
			state.user = action.payload.user;
		},
		resetUser: (state, action) => {
			state.userActive = false;
			state.user = {}
		}
	},
});

// Action creators are generated for each case reducer function
export const {addUser, resetUser} = UserSlice.actions;

export default UserSlice.reducer;
