/** @format */

import { Box, Link } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
const Death = ({ data }) => {
	const [applicationData, setApplicationData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/api/death-calls")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Error retrieving listings");
				}
				return response.json();
			})
			.then((data) => {
				setApplicationData(data);
			})
			.catch((error) => {
				console.error("Error:", error.message);
			});
	}, []);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: "fullname", headerName: "Full Name", flex: 1 },
		{ field: "gender", headerName: "Gender", flex: 1 },
		{ field: "guardians_phone", headerName: "Guardian's Phone", flex: 1 },
		{ field: "address", headerName: "Address", flex: 1 },
		{ field: "category", headerName: "Category", flex: 1 },
		{ field: "locationValue", headerName: "Location", flex: 1 },
		{ field: "description", headerName: "Description", flex: 1 },
		{ field: "reason", headerName: "Reason", flex: 1 },
	];
	const rows = applicationData.map((item) => ({
		id: item._id.toString(),
		description: item.description,
		category: item.category,
		locationValue: item.locationValue,
		gender: item.gender,
		reason: item.reason,
		address: item.address,
		guardians_phone: item.guardians_phone,
		fullname: item.fullname,
	}));

	const renderCell = (params) => {
		const cellValue = params.value;
		const id = params.id;
		const url = `/details/${id}`; // Replace with your desired URL format
		return (
			<Link href={url} underline="none" color="inherit">
				{cellValue}
			</Link>
		);
	};

	const columnsWithLinks = columns.map((column) => ({
		...column,
		renderCell: (params) => renderCell(params),
	}));

	return (
		<Box m="20px">
			<Header title="DEATH" subtitle="List of death application" />
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={
					{
						// Your custom styles
					}
				}>
				<DataGrid
					rows={rows}
					columns={columnsWithLinks}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Death;
