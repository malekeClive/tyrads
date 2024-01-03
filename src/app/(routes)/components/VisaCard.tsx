import { CardContainer } from "@/components/Card";
import React from "react";

function VisaCard() {
  return (
    <CardContainer className="xl:col-span-3 relative bg-primary h-[200px] xl:h-full text-white">
      <div className="absolute bottom-0 left-0 w-full flex items-end flex-row justify-between py-4 px-6 text-sm">
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
