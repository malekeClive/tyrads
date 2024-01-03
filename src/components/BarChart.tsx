import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

interface Dataset {
  label: string;
  backgroundColor: string;
  borderColor: string;
  data: number[];
}

interface BarChartProps {
  labels: string[];
  datasets: Dataset[];
}

function BarChart({ labels, datasets }: BarChartProps) {
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const barChartdata = {
    labels: labels,
    datasets: datasets,
  };

  return <Bar data={barChartdata} options={options} />;
}

export default BarChart;
