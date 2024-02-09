import { CardContainer } from "@/components/Card";
import Image from "next/image";
import React from "react";

function VisaCard() {
  return (
    <CardContainer className="variant-default card-visa">
      <Image alt="visa" src="/monster-visa.png" width={200} height={200} />
      <div>
        <div>
          <p>****9838</p>
          <p>Jhon Demon</p>
        </div>
        <p>08/12</p>
      </div>
    </CardContainer>
  );
}

export default VisaCard;
