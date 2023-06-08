/** @format */

import React, { useEffect } from "react";
import { getDeathInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";
const DeathPreview = () => {
	const deathInfo = useSelector((state) => state.deathInfo.deathInfo);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDeathInfo(id));
	}, []);

	return <DeathForm data={deathInfo} />;
};

export default DeathPreview;
