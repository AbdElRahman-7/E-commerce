"use client";

import { Typography, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import ChartSection from "../components/ChartSection";
import { BarChart } from "@mui/x-charts";

export default function ChartsPage() {
  return (
    <Box>
      <Typography sx={{ mb: 4, fontWeight: 700 }}>UI Elements</Typography>

      <ChartSection title="Bar Chart">
        <BarChart
          height={250}
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E", "F"],
              categoryGapRatio: 0.8,
              barGapRatio: 0.1,
            },
          ]}
          series={[
            {
              data: [8, 4, 3, 7, 5, 4, 5],
              color: "#4F7DF3",
            },
          ]}
          grid={{ horizontal: false, vertical: false }}
          sx={{
            "& .MuiChartsAxis-root": {
              display: "none",
            },
          }}
        />
        <BarChart
          height={250}
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E", "F"],
              categoryGapRatio: 0.85,
              barGapRatio: 0.4,
            },
          ]}
          series={[
            {
              data: [2, 3, 3, 2, 3, 2, 3],
              color: "#2DD4BF",
            },
          ]}
          grid={{ horizontal: false, vertical: false }}
          sx={{
            "& .MuiChartsAxis-root": {
              display: "none",
            },
          }}
        />
        <BarChart
          height={250}
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E", "F"],
              categoryGapRatio: 0.8,
              barGapRatio: 0.4,
            },
          ]}
          series={[
            {
              data: [8, 4, 3, 7, 5, 4, 5],
              color: "#4F7DF3",
            },
            {
              data: [3, 5, 6, 5, 4, 8, 4],
              color: "#F59E0B",
            },
          ]}
          grid={{ horizontal: false, vertical: false }}
          sx={{
            "& .MuiChartsAxis-root": {
              display: "none",
            },
          }}
        />
        <BarChart
          height={250}
          xAxis={[
            {
              scaleType: "band",
              data: ["A", "B", "C", "D", "E", "F"],
              categoryGapRatio: 0.85,
              barGapRatio: 0.8,
            },
          ]}
          series={[
            {
              data: [3, 2, 4, 4, 3, 5, 5],
              color: "#EC4899",
            },
          ]}
          grid={{ horizontal: false, vertical: false }}
          sx={{
            "& .MuiChartsAxis-root": {
              display: "none",
            },
          }}
        />
      </ChartSection>

      <ChartSection title="Pie Chart">
        <PieChart
          series={[
            {
              data: [
                {
                  id: 1,
                  value: 75,
                  color: "#E5E7EB",
                },
                {
                  id: 0,
                  value: 25,
                  color: "#4F46E5",
                },
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
                {
                  id: 0,
                  value: 25,
                  color: "#bf69fe",
                },
                {
                  id: 1,
                  value: 75,
                  color: "#E5E7EB",
                },
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
                {
                  id: 1,
                  value: 40,
                  color: "#ff8743",
                },
                {
                  id: 0,
                  value: 60,
                  color: "#E5E7EB",
                },
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
                {
                  id: 0,
                  value: 60,
                  color: "#4393ff",
                },

                {
                  id: 1,
                  value: 40,
                  color: "#E5E7EB",
                },
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
                {
                  id: 0,
                  value: 60,
                  color: "#1ccab8",
                },
                {
                  id: 1,
                  value: 40,
                  color: "#E5E7EB",
                },
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
                {
                  id: 0,
                  value: 40,
                  color: "#1ccab8",
                },
                {
                  id: 1,
                  value: 40,
                  color: "#4393ff",
                },
                {
                  id: 2,
                  value: 20,
                  color: "#ffdb83",
                },
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
                {
                  id: 0,
                  value: 60,
                  color: "#1ccab8",
                },
                {
                  id: 1,
                  value: 40,
                  color: "#4393ff",
                },
                {
                  id: 2,
                  value: 40,
                  color: "#ffdb83",
                },
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
                {
                  id: 0,
                  value: 60,
                  color: "#1ccab8",
                },
                {
                  id: 1,
                  value: 40,
                  color: "#ffdb83",
                },
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
