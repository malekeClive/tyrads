import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

interface Dataset {
  label: string;
  backgroundColor: string;
  borderColor: string;
  data: number[];
}

interface LineChartProps {
  labels: string[];
  datasets: Dataset[];
}

function LineChart({ labels, datasets }: LineChartProps) {
  const options = {
    maintainAspectRatio: false, // Set to false to control the width and height directly
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  const data = {
    labels: labels,
    datasets: datasets,
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
