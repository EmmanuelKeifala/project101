/** @format */

import axios from "axios";

export const getApplicationDeathInfo = (id) => async (dispatch) => {
	try {
		dispatch({
			type: "getApplicationDeathInfoRequest",
		});

		const { data } = await axios.get(`http://localhost:3001/death-info/${id}`);
		dispatch({
			type: "getApplicationDeathInfoSuccess",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "getApplicationDeathInfoFailed",
			payload: error.message,
		});
	}
};
