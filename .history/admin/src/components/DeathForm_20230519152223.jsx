/** @format */

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
const DeathForm = ({ data }) => {
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
	const isNonMobile = useMediaQuery("(min-width:600px)");

	const handleFormSubmit = (values) => {
		console.log(values);
	};
	return (
		<Box m="20px">
			<Header title="Death Info " subtitle={`For ${fullname}`} />

			<Formik
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
				validationSchema={checkoutSchema}>
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
								helperText={touched.firstName && errors.firstName}
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
								helperText={touched.email && errors.email}
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
								helperText={touched.contact && errors.contact}
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
								helperText={touched.address1 && errors.address1}
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
								helperText={touched.address2 && errors.address2}
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
								helperText={touched.address2 && errors.address2}
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
								helperText={touched.address2 && errors.address2}
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

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
	firstName: yup.string().required("required"),
	lastName: yup.string().required("required"),
	email: yup.string().email("invalid email").required("required"),
	contact: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.required("required"),
	address1: yup.string().required("required"),
	address2: yup.string().required("required"),
});
const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	contact: "",
	address1: "",
	address2: "",
};

export default DeathForm;
