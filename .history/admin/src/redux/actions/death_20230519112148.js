/** @format */

import axios from "axios";

// load user
export const loadDeath = (id) => async (dispatch) => {
	try {
		dispatch({
			type: "LoadDeathRequest",
		});
		const { data } = await axios.get(
			`http://localhost:3001/death-info/${id}`,
			{},
		);
		dispatch({
			type: "LoadDeathSuccess",
			payload: data.death,
		});
	} catch (error) {
		dispatch({
			type: "LoadDeathFail",
			payload: error.response.data.message,
		});
	}
};
