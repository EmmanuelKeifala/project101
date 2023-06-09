/** @format */

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { People } from "@mui/icons-material";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { toast } from "react-toastify";
import {
	useAcceptedApplicationInfoStore,
	useDeclinedApplicationInfoStore,
	useApplicationsStore,
	useBirthInfoStore,
} from "../../store";
import { useEffect, useState } from "react";

const Dashboard = () => {
	const [applicationData, setApplicationData] = useState([]);
	const [applicationDeath, setApplicationDeath] = useState([]);

	const setData1 = useAcceptedApplicationInfoStore(
		(state) => state.acceptedApplication,
	);
	const setData2 = useDeclinedApplicationInfoStore(
		(state) => state.declinedApplication,
	);

	const totalApplications = useApplicationsStore((state) => state.applications);
	useEffect(() => {
		const birthFetch = () => {
			fetch("http://localhost:3001/api/birth-app")
				.then((response) => {
					if (!response.ok) {
						throw new Error("Error retrieving listings");
					}
					return response.json();
				})
				.then((data) => {
					setApplicationData(data);
				})
				.catch((error) => {
					console.error("Error:", error.message);
				});
		};
		const deathFetch = () => {
			fetch("http://localhost:3001/api/death-app")
				.then((response) => {
					if (!response.ok) {
						throw new Error("Error retrieving listings");
					}
					return response.json();
				})
				.then((data) => {
					setApplicationDeath(data);
				})
				.catch((error) => {
					console.error("Error:", error.message);
				});
		};

		birthFetch();
		deathFetch();
	}, []);

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const showNewApplicationToast = () => {
		toast.info("New application added!", {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 3000, // Adjust the duration as needed
		});
	};
	const totalEmail = setData1.length + setData2.length;
	const progress = totalEmail / 100;
	console.log(applicationData.length);
	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

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
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* GRID & CHARTS */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px">
				{/* ROW 1 */}
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title={totalEmail}
						subtitle="Emails Sent"
						progress={progress}
						icon={
							<EmailIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title={totalApplications.length}
						subtitle="Total Application"
						progress={totalApplications.length / 100}
						icon={
							<People
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title={applicationData.length}
						subtitle="Birth"
						progress={applicationData.length / 100}
						icon={
							<BabyChangingStationIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
					display="flex"
					alignItems="center"
					justifyContent="center">
					<StatBox
						title={applicationDeath.length}
						subtitle="Death"
						progress={applicationDeath.length / 100}
						icon={
							<SentimentDissatisfiedIcon
								sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
							/>
						}
					/>
				</Box>

				{/* ROW 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}>
					<Box
						mt="25px"
						p="0 30px"
						display="flex "
						justifyContent="space-between"
						alignItems="center">
						<Box>
							<Typography
								variant="h5"
								fontWeight="600"
								color={colors.grey[100]}>
								Total Applications per country
							</Typography>
							<Typography
								variant="h3"
								fontWeight="bold"
								color={colors.greenAccent[500]}>
								{totalApplications.length}
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height="250px" m="-20px 0 0 0">
						<BarChart isDashboard={true} />
					</Box>
				</Box>

				{/* ROW 3 */}
				{/* <Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px">
					<Typography variant="h5" fontWeight="600">
						Campaign
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						mt="25px">
						<ProgressCircle size="125" />
						<Typography
							variant="h5"
							color={colors.greenAccent[500]}
							sx={{ mt: "15px" }}>
							$48,352 revenue generated
						</Typography>
						<Typography>Includes extra misc expenditures and costs</Typography>
					</Box>
				</Box> */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}>
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ padding: "30px 30px 0 30px" }}>
						Application Volume per Country
					</Typography>
					<Box height="250px" mt="-20px">
						<BarChart isDashboard={true} />
					</Box>
				</Box>
				{/* <Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					padding="30px">
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ marginBottom: "15px" }}>
						Geography Based Traffic
					</Typography>
					<Box height="200px">
						<GeographyChart isDashboard={true} />
					</Box>
				</Box> */}
			</Box>
		</Box>
	);
};

export default Dashboard;
