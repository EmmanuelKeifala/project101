/** @format */

import React, { useEffect } from "react";
import { getApplicationBirthInfo } from "../../redux/actions/user";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const index = () => {
	const { user } = useSelector((state) => state.user);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch]);
	clg;
	return <div></div>;
};

export default index;
