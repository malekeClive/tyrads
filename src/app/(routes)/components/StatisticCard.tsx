"use client";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import "chart.js/auto";
import { TrendingUp } from "lucide-react";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import Image from "next/image";

function StatisticCard() {
  const barchartDummy = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [
      {
        label: "First dataset",
        backgroundColor: "#545de6",
        borderColor: "#545de6",
        data: [60, 40, 30, 20, 10],
      },
      {
        label: "Second dataset",
        backgroundColor: "#c7cafe",
        borderColor: "#c7cafe",
        data: [55, 35, 25, 15, 5],
      },
    ],
  };

  const linechartDummy = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#545de6",
        borderColor: "#545de6",
        data: [0, 10, 5, 2, 20, 30, 45],
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  return (
    <CardContainer className="variant-default card-statistic">
      <CardHeader className="card-statistic-header">
        <div>
          <p>Balance statistics</p>
          <Select>
            <SelectTrigger className="custom-select-trigger">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Day</SelectItem>
              <SelectItem value="dark">Week</SelectItem>
              <SelectItem value="system">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardBody className="card-statistic-body">
        <div>
          <div className="card-statistic-body-total-balance">
            <p>$564</p>
            <div>
              <Image alt="asset" src="/coin.png" width={30} height={30} />
              <p>Your total balance</p>
            </div>
          </div>
          <div className="card-statistic-body-charts">
            <div>
              <div className="card-statistic-body-charts-line-chart">
                <LineChart
                  labels={linechartDummy.labels}
                  datasets={linechartDummy.datasets}
                />
              </div>
              <div className="card-statistic-body-charts-trending">
                <div>
                  <TrendingUp size={12} />
                </div>
                <p>6%</p>
              </div>
            </div>
            <p>Always see your earnings updates</p>
          </div>
        </div>
        <div>
          <BarChart
            labels={barchartDummy.labels}
            datasets={barchartDummy.datasets}
          />
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default StatisticCard;
