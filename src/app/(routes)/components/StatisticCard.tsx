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
    <CardContainer className="xl:col-span-5">
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xs font-medium">Balance statistics</p>
          <Select>
            <SelectTrigger className="w-[74px] text-xs font-medium">
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
      <CardBody>
        <div className="flex flex-row gap-4 items-center justify-between">
          <div className="flex-1 flex flex-col gap-3">
            <div className="border-b-[1px] pb-2 flex flex-col gap-1">
              <p className="font-semibold text-2xl">$564</p>
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 bg-primary"></div>
                <p className="text-xs max-w-[80px]">Your total balance</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-6">
                <div className="flex-[3] w-10 h-10">
                  <LineChart
                    labels={linechartDummy.labels}
                    datasets={linechartDummy.datasets}
                  />
                </div>
                <div className="flex-1 flex flex-row items-center gap-1">
                  <div className="border-[1px] border-black rounded-full p-[2px]">
                    <TrendingUp size={12} />
                  </div>
                  <p className="text-xs font-medium">6%</p>
                </div>
              </div>
              <p className="text-[10px] leading-tight text-gray-400 max-w-[100px]">
                Always see your earnings updates
              </p>
            </div>
          </div>
          <div className="flex-[2] w-10">
            <BarChart
              labels={barchartDummy.labels}
              datasets={barchartDummy.datasets}
            />
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default StatisticCard;
