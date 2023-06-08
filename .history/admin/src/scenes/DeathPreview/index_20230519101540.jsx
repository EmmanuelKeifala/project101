/** @format */

import React, { useEffect } from "react";
import { getApplicationDeathInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";

const DeathPreview = () => {
	const { death } = useSelector((state) => state.death); // Accessing the "death" state directly
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationDeathInfo(id));
	}, [dispatch, id]);

	console.log(death);
	return <DeathForm data={death} />;
};

export default DeathPreview;
