/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	birthInfo: null,
	error: null,
};

export const deathReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("getApplicationBirthInfoRequest", (state) => {
			state.isLoading = true;
			state.error = null;
		})
		.addCase("getApplicationBirthInfoSuccess", (state, action) => {
			state.isLoading = false;
			state.birthInfo = action.payload;
		})
		.addCase("getApplicationBirthInfoFailed", (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
});
