/** @format */

import React, { useEffect } from "react";
import { getApplicationBirthInfo } from "../../redux/actions/death";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeathForm from "../../components/DeathForm";

const BirthPreview = () => {
	const death = useSelector((state) => state.death); // Accessing the "death" state directly
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch, id]);

	return <DeathForm data={death} />;
};

export default BirthPreview;
