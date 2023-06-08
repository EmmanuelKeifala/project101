/** @format */

import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import DeathForm from "../../components/DeathForm";
import { useApplicationsStore } from "../../store";
const DeathPreview = () => {
	const setDataToStore = useApplicationsStore((state) => state.setDeathInfo);
	const { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:3001/death-info/${id}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error retrieving listings");
				}
				return response.json();
			})
			.then((data) => {
				setDataToStore(data);
			})
			.catch((error) => {
				console.error("Error:", error.message);
			});
	}, []);
	return <DeathForm />;
};

export default DeathPreview;
