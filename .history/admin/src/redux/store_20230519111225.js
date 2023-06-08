/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { deathReducer } from "./reducers/deathInfo";

const Store = configureStore({
	reducer: {
		user: userReducer,
		deathInfo: deathReducer,
	},
});

export default Store;
