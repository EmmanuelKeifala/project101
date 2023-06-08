/** @format */

// actions.js
export const FETCH_LISTINGS_REQUEST = "FETCH_LISTINGS_REQUEST";
export const FETCH_LISTINGS_SUCCESS = "FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_FAILURE = "FETCH_LISTINGS_FAILURE";

export const fetchListingsRequest = () => ({
	type: FETCH_LISTINGS_REQUEST,
});

export const fetchListingsSuccess = (listings) => ({
	type: FETCH_LISTINGS_SUCCESS,
	payload: listings,
});

export const fetchListingsFailure = (error) => ({
	type: FETCH_LISTINGS_FAILURE,
	payload: error,
});
