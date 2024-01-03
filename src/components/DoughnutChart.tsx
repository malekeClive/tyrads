import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

interface Dataset {
  label: string;
  backgroundColor: string[];
  data: number[];
}

interface DoughnutChartProps {
  labels: string[];
  datasets: Dataset[];
}

function DoughnutChart({ labels, datasets }: DoughnutChartProps) {
  const options = {
    backgroundColor: "#f7f6fc",
    maintainAspectRatio: false,
    cutout: 50,
    rotation: -90,
    circumference: 180,
    borderRadius: {
      outerStart: 10,
      outerEnd: 10,
      innerStart: 10,
      innerEnd: 10,
    },
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: datasets,
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
