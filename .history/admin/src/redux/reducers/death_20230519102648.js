/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isLoading: true,
	error: null,
};

export const deathReducer = createReducer(initialState, {
	getApplicationDeathInfoRequest: (state) => {
		state.isLoading = true;
		state.error = null;
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
