/** @format */

import { createReducer } from "@reduxjs/toolkit";
initialState: {
	loading: false;
}
export const deathReducer = createReducer(initialState, {
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
