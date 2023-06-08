/** @format */

import axios from "axios";

export const getDeathInfo = (id) => async (dispatch) => {
	try {
		dispatch({
			type: "GetDeathInfoRequest",
		});

		const { data } = await axios.get(`http://localhost:3001/death-info/${id}`);
		dispatch({
			type: "GetDeathInfoSuccess",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "GetDeathInfoFailed",
			payload: error.message,
		});
	}
};
