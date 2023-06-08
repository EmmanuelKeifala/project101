/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { deathReducer } from "./reducers/death";

const Store = configureStore({
	reducer: {
		user: userReducer,
	},
});

export default Store;
