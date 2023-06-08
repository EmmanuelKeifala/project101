/** @format */

// reducer.js
import {
	FETCH_LISTINGS_REQUEST,
	FETCH_LISTINGS_SUCCESS,
	FETCH_LISTINGS_FAILURE,
} from "./actions";

const initialState = {
	listings: [],
	loading: false,
	error: null,
};

const listingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LISTINGS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FETCH_LISTINGS_SUCCESS:
			return {
				...state,
				listings: action.payload,
				loading: false,
				error: null,
			};
		case FETCH_LISTINGS_FAILURE:
			return {
				...state,
				listings: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default listingsReducer;
