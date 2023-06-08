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
		background: "teal",
		boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
		borderRadius: "4px",
		padding: theme.spacing(2),
		color: "black",
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
	} = data.products;

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
