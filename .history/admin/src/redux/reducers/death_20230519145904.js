/** @format */

import { createReducer } from "@reduxjs/toolkit";
const initialState = {
	isAuthenticated: false,
};
export const deathReducer = createReducer({
	LoadDeathRequest: (state) => {
		state.loading = true;
	},
	LoadDeathSuccess: (state, action) => {
		state.loading = false;
		state.death = action.payload;
	},
	LoadDeathFail: (state, action) => {
		state.loading = false;
		state.error = action.payload;
	},
});
