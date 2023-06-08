/** @format */

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const DeathForm = () => {
	const deathInfo = useSelector((state) => state.deathInfo.deathInfo);

	const {
		fullname,
		gender,
		guardians_phone,
		address,
		category,
		locationValue,
		description,
		reason,
	} = deathInfo;
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const handleFormSubmit = (values) => {
		console.log(values);
	};
	return (
		<Box m="20px">
			<Header title="Death Info " subtitle={`For ${fullname}`} />

			<Formik onSubmit={handleFormSubmit}>
				{({ values, touched, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							sx={{
								"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
							}}>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Full Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={fullname}
								name="firstName"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Gender"
								onBlur={handleBlur}
								onChange={handleChange}
								value={gender}
								name="gender"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Contact Number"
								onBlur={handleBlur}
								onChange={handleChange}
								value={guardians_phone}
								name="contact"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Address 1"
								onBlur={handleBlur}
								onChange={handleChange}
								value={address}
								name="address1"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Address 2"
								onBlur={handleBlur}
								onChange={handleChange}
								value={locationValue}
								name="address2"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Description"
								onBlur={handleBlur}
								onChange={handleChange}
								value={description}
								name="description"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Reason for Application"
								onBlur={handleBlur}
								onChange={handleChange}
								value={reason}
								name="reason"
								sx={{ gridColumn: "span 4" }}
							/>
						</Box>
						<Box display="flex" justifyContent="between" mt="20px">
							<Button type="submit" color="secondary" variant="contained">
								Create New User
							</Button>
							<Button type="submit" color="secondary" variant="contained">
								Create New User
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default DeathForm;
