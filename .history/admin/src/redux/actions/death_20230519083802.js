/** @format */

import axios from "axios";

export const getApplicationBirthInfo = (id) => async (dispatch) => {
	try {
		dispatch({
			type: "getApplicationBirthInfoRequest",
		});

		const { data } = await axios.get(`http://localhost:3001/birth-info/${id}`);
		dispatch({
			type: "getApplicationBirthInfoSuccess",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "getApplicationBirthInfoFailed",
			payload: error.message,
		});
	}
};
