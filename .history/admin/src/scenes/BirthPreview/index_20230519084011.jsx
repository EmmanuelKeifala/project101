/** @format */

import React, { useEffect } from "react";
import { getApplicationBirthInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BirthPreview = () => {
	const { birth } = useSelector((state) => state.death); // Updated state key to "birth"
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch, id]);

	console.log(id, birth);

	return <div>hey {birth && JSON.stringify(birth)}</div>; // Added conditional rendering to avoid accessing birth when it's null or undefined
};

export default BirthPreview;
