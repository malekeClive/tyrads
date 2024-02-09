import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import React from "react";

function PremiumCard() {
  return (
    <CardContainer className="variant-outline card-premium">
      <CardHeader className="card-premium-header">
        <h3>Go to Premium</h3>
      </CardHeader>
      <CardBody className="card-premium-body">
        <div></div>
        <div>
          <h3>Need more features?</h3>
          <p>Update your account to premium to get more features.</p>
        </div>
        <Button className="variant-default size-lg">Get now</Button>
      </CardBody>
    </CardContainer>
  );
}

export default PremiumCard;
