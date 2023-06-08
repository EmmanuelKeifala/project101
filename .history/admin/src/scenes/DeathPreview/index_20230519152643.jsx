/** @format */

import React, { useEffect } from "react";
import { getDeathInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";
const DeathPreview = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDeathInfo(id));
	}, [dispatch, id]);
	return <DeathForm />;
};

export default DeathPreview;
