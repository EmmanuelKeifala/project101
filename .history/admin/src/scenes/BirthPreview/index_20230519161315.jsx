/** @format */

import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import BirthForm from "../../components/BirthForm";
import { useBirthInfoStore } from "../../store";
const BirthPreview = () => {
	const setDataToStore = useBirthInfoStore((state) => state.setBirthInfo);
	const data = useBirthInfoStore((state) => state.birthInfo);

	const { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:3001/birth-info/${id}`)
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
	return <BirthForm data={data} />;
};

export default BirthPreview;
