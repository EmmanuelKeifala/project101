/** @format */

import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { tokens } from "../theme";
import Header from "./Header";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const BirthForm = ({ data }) => {
	const navigate = useNavigate();

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
		parent_1,
		parent_2,
		dob,
	} = data;
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const { id } = useParams();
	// Accept an application
	const acceptApplication = async (id) => {
		try {
			const response = await axios
				.put(`http://localhost:3001/api/applications/accept/${id}`)
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
	const declineApplication = async (id) => {
		try {
			const response = await axios
				.put(`http://localhost:3001/api/applications/decline/${id}`)
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
							{dob && (
								<TextField
									fullWidth
									variant="filled"
									type="text"
									label="Date of birth"
									// onBlur={handleBlur}
									onChange={() => {}}
									value={dob}
									name="dob"
									sx={{ gridColumn: "span 4" }}
								/>
							)}
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
								label="First parent's name"
								onBlur={handleBlur}
								onChange={() => {}}
								value={parent_1}
								name="parent_1"
								sx={{ gridColumn: "span 4" }}
							/>
							<TextField
								fullWidth
								variant="filled"
								type="text"
								label="Second parent's name"
								onBlur={handleBlur}
								onChange={() => {}}
								value={parent_2}
								name="parent_2"
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
							<Button
								color="secondary"
								variant="contained"
								onClick={() => declineApplication(id)}>
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

export default BirthForm;
