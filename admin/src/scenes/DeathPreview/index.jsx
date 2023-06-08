/** @format */

import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import DeathForm from "../../components/DeathForm";
import { useDeathInfoStore } from "../../store";
const DeathPreview = () => {
	const setDataToStore = useDeathInfoStore((state) => state.setDeathInfo);
	const data = useDeathInfoStore((state) => state.deathInfo);

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
	}, [id]);

	console.log(data);
	return <DeathForm data={data} />;
};

export default DeathPreview;
