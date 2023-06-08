/** @format */

import React, { useEffect } from "react";
import { getApplicationBirthInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const BirthPreview = () => {
	const { death } = useSelector((state) => state.death);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch]);
	console.log(id, death);
	return <div>hey{death}</div>;
};

export default BirthPreview;
