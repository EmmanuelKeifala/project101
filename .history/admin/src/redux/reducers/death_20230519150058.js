/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	death: null,
	error: null,
};

export const deathReducer = createReducer(initialState, (builder) => {
	builder
		.addCase("LoadDeathRequest", (state) => {
			state.loading = true;
		})
		.addCase("LoadDeathSuccess", (state, action) => {
			state.loading = false;
			state.death = action.payload;
		})
		.addCase("LoadDeathFail", (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
});
