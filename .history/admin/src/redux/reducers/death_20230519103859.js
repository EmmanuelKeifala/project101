/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	deathInfo: null, // Add the deathInfo property with an initial value of null or an empty object/array
};

export const deathReducer = createReducer(initialState, {
	getApplicationDeathInfoRequest: (state) => {
		state.isLoading = true;
	},
	getApplicationDeathInfoSuccess: (state, action) => {
		state.isLoading = false;
		state.deathInfo = action.payload;
	},
	getApplicationDeathInfoFailed: (state, action) => {
		state.isLoading = false;
		state.error = action.payload;
	},
});
