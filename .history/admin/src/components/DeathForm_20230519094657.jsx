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
		color: "#000",
	},
	formControl: {
		width: "50%",
		color: "#000",
		boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
	},
	formLabel: {
		color: "#000",
	},
	typography: {
		color: "#000",
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
						<Typography variant="h5">Birth Application</Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Full Name</FormLabel>
							<Typography className={classes.typography}>{fullname}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Gender</FormLabel>
							<Typography className={classes.typography}>{gender}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>
								Guardian's Phone
							</FormLabel>
							<Typography className={classes.typography}>
								{guardians_phone}
							</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Address</FormLabel>
							<Typography className={classes.typography}>{address}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Category</FormLabel>
							<Typography className={classes.typography}>{category}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Location</FormLabel>
							<Typography className={classes.typography}>
								{locationValue}
							</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Description</FormLabel>
							<Typography className={classes.typography}>
								{description}
							</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<FormLabel className={classes.formLabel}>Reason</FormLabel>
							<Typography className={classes.typography}>{reason}</Typography>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" justifyContent="center">
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
