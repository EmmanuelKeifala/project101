/** @format */

import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function BirthForm({ data }) {
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

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Birth Application
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography>
						<strong>Full Name:</strong> {fullname}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Gender:</strong> {gender}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Guardian's Phone:</strong> {guardians_phone}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Address:</strong> {address}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Category:</strong> {category}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Location:</strong> {locationValue}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Description:</strong> {description}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography>
						<strong>Reason:</strong> {reason}
					</Typography>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
