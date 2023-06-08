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
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	formContainer: {
		background: "#fff",
		boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
		borderRadius: "4px",
		padding: theme.spacing(2),
		color: "#000", // Update the color to black
	},

	formControl: {
		width: "50%",
		color: "#000",
		boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
	},
}));

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
	} = data;

	const classes = useStyles();

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
			height="100vh">
			<Box className={classes.formContainer}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Box textAlign="center" mb={2}>
							<Typography variant="h5">Birth Application</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Full Name</FormLabel>
							<Typography color="black">{fullname}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Gender</FormLabel>
							<Typography color="black">{gender}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Guardian's Phone</FormLabel>
							<Typography color="black">{guardians_phone}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Address</FormLabel>
							<Typography color="black">{address}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Category</FormLabel>
							<Typography color="black">{category}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Location</FormLabel>
							<Typography color="black">{locationValue}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Description</FormLabel>
							<Typography color="black">{description}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel color="black">Reason</FormLabel>
							<Typography color="black">{reason}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" justifyContent="space-between">
							<Button
								variant="contained"
								color="primary"
								onClick={handleAccept}>
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
		</Box>
	);
};

export default BirthForm;
