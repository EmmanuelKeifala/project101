/** @format */

import React from "react";
import { getApplicationBirthInfo } from "../../redux/actions/user";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const index = () => {
	const { products } = useSelector((state) => state.products);
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getApplicationBirthInfo(id));
	}, [dispatch]);
	return <div></div>;
};

export default index;
