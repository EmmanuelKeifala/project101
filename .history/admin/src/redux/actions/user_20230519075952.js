/** @format */

import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
	try {
		dispatch({
			type: "LoadUserRequest",
		});
		const { data } = await axios.get(`${server}/user/getuser`, {
			withCredentials: true,
		});
		dispatch({
			type: "LoadUserSuccess",
			payload: data.user,
		});
	} catch (error) {
		dispatch({
			type: "LoadUserFail",
			payload: error.response.data.message,
		});
	}
};

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
