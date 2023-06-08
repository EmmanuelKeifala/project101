/** @format */

import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import DeathForm from "../../components/DeathForm";
import { useApplicationsStore } from "../../store";
const DeathPreview = () => {
	const setDataToStore = useApplicationsStore((state) => state.setApplications);

	useEffect(() => {
		fetch("http://localhost:3001/api/listings")
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

		Store.dispatch(loadUser());
	}, []);
	return <DeathForm />;
};

export default DeathPreview;
