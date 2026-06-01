"use client";

import { Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import ChartSection from "../components/ChartSection";
import { BarChart } from "@mui/x-charts";

export default function ChartsPage() {
  return (
    <Box>
      <Typography  sx={{ mb: 4, fontWeight:700 }}>
        UI Elements
      </Typography>

      <ChartSection title="Bar Chart">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E"],
            },
          ]}
          series={[
            {
              data: [4, 6, 3, 8, 5],
            },
          ]}
          width={220}
          height={180}
        />

        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E"],
            },
          ]}
          series={[
            {
              data: [8, 4, 7, 5, 6],
            },
          ]}
          width={220}
          height={180}
        />

        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E"],
            },
          ]}
          series={[
            {
              data: [2, 7, 5, 9, 4],
            },
          ]}
          width={220}
          height={180}
        />
      </ChartSection>

      <ChartSection title="Pie Chart">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 25 },
                { id: 1, value: 75 },
              ],
            },
          ]}
          width={180}
          height={180}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 35 },
                { id: 1, value: 65 },
              ],
            },
          ]}
          width={180}
          height={180}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 45 },
                { id: 1, value: 55 },
              ],
            },
          ]}
          width={180}
          height={180}
        />

        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 60 },
                { id: 1, value: 40 },
              ],
            },
          ]}
          width={180}
          height={180}
        />
      </ChartSection>

      <ChartSection title="Donut Chart">
        <PieChart
          series={[
            {
              innerRadius: 40,
              outerRadius: 70,
              data: [
                { id: 0, value: 70 },
                { id: 1, value: 30 },
              ],
            },
          ]}
          width={180}
          height={180}
        />

        <PieChart
          series={[
            {
              innerRadius: 40,
              outerRadius: 70,
              data: [
                { id: 0, value: 50 },
                { id: 1, value: 50 },
              ],
            },
          ]}
          width={180}
          height={180}
        />

        <PieChart
          series={[
            {
              innerRadius: 40,
              outerRadius: 70,
              data: [
                { id: 0, value: 80 },
                { id: 1, value: 20 },
              ],
            },
          ]}
          width={180}
          height={180}
        />

        <PieChart
          series={[
            {
              innerRadius: 40,
              outerRadius: 70,
              data: [
                { id: 0, value: 65 },
                { id: 1, value: 35 },
              ],
            },
          ]}
          width={180}
          height={180}
        />
      </ChartSection>
    </Box>
  );
}
