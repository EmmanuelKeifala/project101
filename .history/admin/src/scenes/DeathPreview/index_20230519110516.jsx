/** @format */

import React, { useEffect } from "react";
import { getApplicationDeathInfo } from "../../redux/actions/deathInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";

const DeathPreview = () => {
	const { deathInfo } = useSelector((state) => state.deathInfo);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationDeathInfo(id));
	}, [dispatch, id]);
	console.log(deathInfo);
	return <DeathForm data={deathInfo} />;
};

export default DeathPreview;
