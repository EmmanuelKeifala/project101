/** @format */
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Birth = () => {
	const [applicationData, setApplicationData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/api/birth-calls")
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
	console.log(applicationData);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns = [
		{ field: "id", headerName: "ID", flex: 0.5 },
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		// {
		//   field: "email",
		//   headerName: "Email",
		//   flex: 1,
		// },
		{
			field: "address",
			headerName: "Address",
			flex: 1,
		},
		{
			field: "country",
			headerName: "Country",
			flex: 1,
		},
	];

	const rows = applicationData.map((item) => ({
		id: item._id.toString(),
		name: item.fullname,
		phone: item.guardians_phone,
		address: item.address,
		country: item.locationValue,
	}));
	console.log(rows);
	const getRowId = (row) => {
		if (!row || !row._id) {
			return ""; // Return an empty string or another unique identifier for invalid rows
		}
		return row._id.toString();
	};
	return (
		<Box m="20px">
			<Header title="BIRTH" subtitle="List of Birth for Future Reference" />
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
					getRowId={getRowId}
				/>
			</Box>
		</Box>
	);
};

export default Birth;
