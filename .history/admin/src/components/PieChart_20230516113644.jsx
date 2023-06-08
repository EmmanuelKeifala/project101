/** @format */

import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import useApplicationsStore from "../store";
import { countryNames } from "../data/mockData";

const PieChart = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const data = useApplicationsStore((state) => state.applications);

	const genderData = data.reduce((result, item) => {
		const { gender } = item;
		if (result[gender]) {
			result[gender] += 1;
		} else {
			result[gender] = 1;
		}
		return result;
	}, {});

	const mockPieData = Object.entries(genderData).map(
		([gender, value], index) => ({
			id: gender,
			label: gender,
			value,
			color: `hsl(${index * 100}, 70%, 50%)`,
		}),
	);

	return (
		<ResponsivePie
			data={mockPieData}
			// Rest of the code

			tooltip={(bar) => (
				<div style={{ padding: 12, background: "#fff", color: "#000" }}>
					<strong>{bar.data.label}</strong>{" "}
					{/* Use bar.data.label to display the gender */}
					<br />
					Total: {bar.data.value}{" "}
					{/* Use bar.data.value to display the value */}
				</div>
			)}
		/>
	);
};

export default PieChart;
