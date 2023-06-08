/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	error: null,
};

export const deathReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("getApplicationDeathInfoRequest", (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase("getApplicationDeathInfoSuccess", (state, action) => {
			state.isLoading = false;
			state.deathInfo = action.payload;
		})
		.addCase("getApplicationDeathInfoFailed", (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
});
