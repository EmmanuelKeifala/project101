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
	console.log(mockPieData);
	return (
		<ResponsivePie
			data={mockPieData}
			theme={{
				axis: {
					domain: {
						line: {
							stroke: colors.grey[100],
						},
					},
					legend: {
						text: {
							fill: colors.grey[100],
						},
					},
					ticks: {
						line: {
							stroke: colors.grey[100],
							strokeWidth: 1,
						},
						text: {
							fill: colors.grey[100],
						},
					},
				},
				legends: {
					text: {
						fill: colors.grey[100],
					},
				},
			}}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor={colors.grey[100]}
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			enableArcLabels={false}
			arcLabelsRadiusOffset={0.4}
			arcLabelsSkipAngle={7}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: 0,
					translateY: 56,
					itemsSpacing: 0,
					itemWidth: 100,
					itemHeight: 18,
					itemTextColor: "#999",
					itemDirection: "left-to-right",
					itemOpacity: 1,
					symbolSize: 18,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000",
							},
						},
					],
				},
			]}
			tooltip={(bar) => (
				<div style={{ padding: 12, background: "#fff", color: "#000" }}>
					<strong>{mockPieData.label}</strong> <br />
					Total: {mockPieData.value}{" "}
					{/* Use bar.data.value to display the value */}
				</div>
			)}
		/>
	);
};

export default PieChart;
