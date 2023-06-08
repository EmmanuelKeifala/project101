/** @format */

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Preview } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Death = () => {
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
		{
			field: "Preview",
			flex: 0.8,
			minWidth: 100,
			headerName: "Preview",
			type: "number",
			sortable: false,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/birth-info/${params.id}`}>
							<Preview size={20} />
						</Link>
					</>
				);
			},
		},
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
	return (
		<Box m="20px">
			<Header title="DEATH" subtitle="List of death application" />
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiCheckbox-root": {
						color: `${colors.greenAccent[200]} !important`,
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: `${colors.grey[100]} !important`,
					},
				}}>
				<DataGrid
					rows={rows}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
					disableSelectionOnClick
					autoHeight
				/>
			</Box>
		</Box>
	);
};

export default Death;
