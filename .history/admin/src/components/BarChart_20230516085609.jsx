/** @format */

import React from "react";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import useApplicationsStore from "../store";
const BarChart = () => {
	const theme = useTheme();
	const data = useApplicationsStore((state) => state.applications);
	const colors = {
		scheme: "nivo",
	};

	return (
		<ResponsiveBar
			data={data}
			theme={{
				axis: {
					domain: {
						line: {
							stroke: theme.palette.grey[100],
						},
					},
					ticks: {
						line: {
							stroke: theme.palette.grey[100],
							strokeWidth: 1,
						},
						text: {
							fill: theme.palette.grey[100],
						},
					},
				},
				legends: {
					text: {
						fill: theme.palette.grey[100],
					},
				},
			}}
			keys={["listingsTotal"]}
			indexBy="country"
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={colors}
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
				legend: "Listings Total",
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
								itemOpacity: 1,
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
