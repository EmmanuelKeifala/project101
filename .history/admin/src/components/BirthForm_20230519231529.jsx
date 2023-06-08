/** @format */

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../theme";
import Header from "./Header";
import { useTheme } from "@emotion/react";
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
		fileSrc,
	} = data;
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");

	return (
		<Box m="20px">
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header
					title="Birth Info "
					subtitle={`For ${fullname ? `${fullname}` : "user"} `}
				/>
				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						{fileSrc && (
							<a href={`${fileSrc}`} target="_blank">
								Download Files for this Applicant
							</a>
						)}
					</Button>
				</Box>
			</Box>
			<Formik>
				{({ values, touched, handleBlur }) => (
					<form >
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
							<Button type="submit" color="secondary" variant="contained" onClick={}>
								Decline
							</Button>
							<Button type="submit" color="secondary" variant="contained">
								Accept
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default BirthForm;
