/** @format */

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
const DeathForm = ({ data }) => {
	const { id } = useParams();
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
	const acceptApplication = async (id) => {
		try {
			const response = await axios
				.put(`http://localhost:3001/api/applications/${id}`)
				.then((res) => {
					toast.success("Email sent");
					navigate("/birth");
					window.location.reload(true);
				})
				.catch((err) => {
					toast.error(err?.response?.data?.message);
				});
			const updatedApplication = response.data;
			// Perform any additional actions after accepting the application
		} catch (error) {
			console.error("Error accepting application:", error);
			// Handle error scenarios
		}
	};
	return (
		<Box m="20px">
			<Header title="Death Info " subtitle={`For ${fullname}`} />

			<Formik>
				{({ values, touched, handleBlur }) => (
					<form>
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
								onChange={() => {}}
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
								onChange={() => {}}
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
								onChange={() => {}}
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
								onChange={() => {}}
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
								onChange={() => {}}
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
								onChange={() => {}}
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
								onChange={() => {}}
								value={reason}
								name="reason"
								sx={{ gridColumn: "span 4" }}
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							mt="20px"
							mb="100px">
							<Button color="secondary" variant="contained">
								Decline
							</Button>
							<Button
								color="secondary"
								variant="contained"
								onClick={() => acceptApplication(id)}>
								Accept
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default DeathForm;
