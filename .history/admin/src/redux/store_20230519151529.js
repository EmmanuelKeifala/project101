/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { deathInfoReducer } from "./reducers/death";

const Store = configureStore({
	reducer: {
		user: userReducer,
		deathInfo: deathInfoReducer,
	},
});

export default Store;
