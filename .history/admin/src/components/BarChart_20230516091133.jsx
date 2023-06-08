/** @format */

import React from "react";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";

import useApplicationsStore from "../store";
const BarChart = () => {
	const theme = useTheme();
	const data = useApplicationsStore((state) => state.applications);
	const colors = tokens(theme.palette.mode);

	const dataReal = data.reduce((result, item) => {
		const { locationValue } = item;
		if (result[locationValue]) {
			result[locationValue] += 1;
		} else {
			result[locationValue] = 1;
		}
		return result;
	}, {});

	const transformedData = Object.entries(dataReal).map(
		([country, totalApplication]) => ({
			country,
			totalApplication,
		}),
	);
	console.log(transformedData);
	return (
		<ResponsiveBar
			data={transformedData}
			theme={{
				// added
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
			keys={["totalApplication"]}
			indexBy="country"
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={{ scheme: "nivo" }}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Country",
				legendPosition: "middle",
				legendOffset: 32,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Total",
				legendPosition: "middle",
				legendOffset: -40,
			}}
			enableLabel={false}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: "hover",
							style: {
								itemOpacity: 100,
							},
						},
					],
				},
			]}
			role="application"
			barAriaLabel={function (e) {
				return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
			}}
		/>
	);
};

export default BarChart;
