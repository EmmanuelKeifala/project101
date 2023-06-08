/** @format */

import React, { useEffect } from "react";
import { getApplicationDeathInfo } from "../../redux/actions/deathInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";

const DeathPreview = () => {
	const { deathInfo, isLoading, error } = useSelector(
		(state) => state.deathInfo,
	);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationDeathInfo(id));
	}, [dispatch, id]);
	// Render loading state or error message if applicable
	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	// Render the DeathForm component with the retrieved data
	return <DeathForm data={deathInfo} />;
};

export default DeathPreview;
