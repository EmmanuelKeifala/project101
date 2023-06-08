/** @format */

import React, { useEffect } from "react";
import { getApplicationBirthInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BirthPreview = () => {
	const { death } = useSelector((state) => state.death); // Updated state key to "birth"
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch, id]);

	console.log(id, death);

	return <div>hey {death && JSON.stringify(death)}</div>; // Added conditional rendering to avoid accessing birth when it's null or undefined
};

export default BirthPreview;
