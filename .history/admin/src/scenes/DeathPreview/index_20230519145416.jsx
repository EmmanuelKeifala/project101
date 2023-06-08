/** @format */

import React, { useEffect } from "react";
import { loadDeath } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";
const DeathPreview = () => {
	const { deathInfo } = useSelector((state) => state.death);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadDeath(id));
	}, [dispatch, id]);
	console.log(deathInfo);
	return <DeathForm data={deathInfo} />;
};

export default DeathPreview;
