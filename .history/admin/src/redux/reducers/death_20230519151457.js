/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	deathInfo: null,
	error: null,
};

export const deathInfoReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("GetDeathInfoRequest", (state) => {
			state.loading = true;
			state.deathInfo = null;
			state.error = null;
		})
		.addCase("GetDeathInfoSuccess", (state, action) => {
			state.loading = false;
			state.deathInfo = action.payload;
			state.error = null;
		})
		.addCase("GetDeathInfoFailed", (state, action) => {
			state.loading = false;
			state.deathInfo = null;
			state.error = action.payload;
		});
});
