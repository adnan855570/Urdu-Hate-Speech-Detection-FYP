import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserState/UserState";

export const store = configureStore({
	reducer: {
		UserState: UserSlice,
	},
});
