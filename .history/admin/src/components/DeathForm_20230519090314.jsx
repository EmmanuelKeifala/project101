/** @format */

import React from "react";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Grid,
	Typography,
} from "@mui/material";

const BirthForm = ({ data }) => {
	const {
		fullname,
		gender,
		guardians_phone,
		address,
		category,
		locationValue,
		description,
		reason,
	} = data.products;

	const handleAccept = () => {
		// Handle accept logic here
	};

	const handleDecline = () => {
		// Handle decline logic here
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			sx={{
				backgroundColor: "#fff",
				boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
				borderRadius: "4px",
				padding: "16px",
			}}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5">Birth Application</Typography>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Full Name</FormLabel>
						<Typography>{fullname}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Gender</FormLabel>
						<Typography>{gender}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Guardian's Phone</FormLabel>
						<Typography>{guardians_phone}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Address</FormLabel>
						<Typography>{address}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Category</FormLabel>
						<Typography>{category}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Location</FormLabel>
						<Typography>{locationValue}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Description</FormLabel>
						<Typography>{description}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Reason</FormLabel>
						<Typography>{reason}</Typography>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Box display="flex" justifyContent="center">
						<Button variant="contained" color="primary" onClick={handleAccept}>
							Accept
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={handleDecline}>
							Decline
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default BirthForm;
