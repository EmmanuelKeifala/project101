/** @format */

import axios from "axios";
import { server } from "../../server";

export const getApplicationBirthInfo = (id) => async (dispatch) => {
	try {
		dispatch({
			type: "getApplicationBirthInfoRequest",
		});

		const { data } = await axios.get(`${server}/event/birth-info/${id}`);
		dispatch({
			type: "getApplicationBirthInfoSuccess",
			payload: data.events,
		});
	} catch (error) {
		dispatch({
			type: "getApplicationBirthInfoFailed",
			payload: error.response.data.message,
		});
	}
};
