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
    <CardContainer className="variant-default card-analytic">
      <CardHeader className="card-header-analytic">
        <h3 className="font-semibold text-sm">Analytics</h3>
        <Button className="variant-ghost size-xs">
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
