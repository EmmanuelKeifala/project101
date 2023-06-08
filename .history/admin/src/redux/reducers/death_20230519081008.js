/** @format */

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
};

export const deathReducer = createReducer(initialState, {
	//BirthInfo
	getApplicationBirthInfoRequest: (state) => {
		state.isLoading = true;
	},
	getApplicationBirthInfoSuccess: (state, action) => {
		state.isLoading = false;
		state.products = action.payload;
	},
	getApplicationBirthInfoFailed: (state, action) => {
		state.isLoading = false;
		state.error = action.payload;
	},
});
