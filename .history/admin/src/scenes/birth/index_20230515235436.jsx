/** @format */

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Birth = ({ data }) => {
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
	const rows = data.map((item) => ({
		id: item._id,
		name: item.fullname,
		phone: item.guardians_phone,
		address: item.address,
		country: item.locationValue,
	}));
	const getRowId = (row) => row._id;
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
					getRowId={getRowId}
					rows={rows}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Birth;
