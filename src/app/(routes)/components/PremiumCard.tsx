import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import React from "react";

function PremiumCard() {
  return (
    <CardContainer variant="outline" className="flex flex-col p-4 gap-2">
      <CardHeader>
        <h3 className="text-center text-sm font-medium">Go to Premium</h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-3">
        <div className="h-10 w-10 bg-primary"></div>
        <div>
          <h3 className="font-semibold">Need more features?</h3>
          <p className="text-xs text-gray-400">
            Update your account to premium to get more features.
          </p>
        </div>
        <Button size="lg" className="rounded-xl">
          Get now
        </Button>
      </CardBody>
    </CardContainer>
  );
}

export default PremiumCard;
