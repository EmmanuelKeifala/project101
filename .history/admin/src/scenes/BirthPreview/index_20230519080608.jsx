/** @format */

import React, { useEffect } from "react";
import { getApplicationBirthInfo } from "../../redux/actions/user";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const BirthPreview = () => {
	const { user } = useSelector((state) => state.user);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch]);
	console.log(user);
	return <div></div>;
};

export default BirthPreview;
