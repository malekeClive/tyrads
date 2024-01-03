"use client";

import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import DoughnutChart from "@/components/DoughnutChart";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";

function AnalyticsCard() {
  const doughnutchartDummy = {
    labels: ["Done", "In progress", "To do"],
    datasets: [
      {
        label: "My First dataset",
        data: [30, 30, 25, 15],
        backgroundColor: ["#545de6", "#ffa70f", "#e96451", "#f7f6fc"],
        pointStyle: "rectRot",
      },
    ],
  };

  return (
    <CardContainer className="xl:col-span-3 flex flex-col gap-3 xl:gap-3">
      <CardHeader className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-sm">Analytics</h3>
        <Button variant="ghost" size="xs" className="hover:bg-transparent">
          <MoreVertical size={18} />
        </Button>
      </CardHeader>
      <CardBody>
        <DoughnutChart
          labels={doughnutchartDummy.labels}
          datasets={doughnutchartDummy.datasets}
        />
      </CardBody>
    </CardContainer>
  );
}

export default AnalyticsCard;
