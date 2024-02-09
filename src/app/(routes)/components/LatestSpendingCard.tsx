import { Avatar } from "@/components/Avatar";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { MoreVertical, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const dummySpendItems = [
  {
    title: "Online store",
    date: "May 30, 2023 at 08:00pm",
  },
  {
    title: "Pay the hospital",
    date: "May 30, 2023 at 08:00pm",
  },
  {
    title: "Tickets",
    date: "May 30, 2023 at 08:00pm",
  },
];

const SpendItem = (props: {
  title: string;
  date: string;
  className?: string;
}) => {
  const { title, date, className } = props;
  return (
    <div className={`spend-item ${className}`}>
      <Avatar className="variant-default size-xs">Z</Avatar>
      <div>
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
    </div>
  );
};

function LatestSpendingCard() {
  return (
    <CardContainer className="variant-outline card-latest-spending">
      <CardHeader className="card-latest-spending-header">
        <h3>Latest Spending</h3>
        <Button className="variant-ghost size-xs">
          <MoreVertical size={18} />
        </Button>
      </CardHeader>
      <CardBody className="card-latest-spending-body">
        {dummySpendItems.map(({ title, date }, idx) => {
          if (idx === dummySpendItems.length - 1) {
            return (
              <SpendItem className="last" key={idx} title={title} date={date} />
            );
          }
          return <SpendItem key={idx} title={title} date={date} />;
        })}
        <Button className="variant-ghost size-xs">
          <p>View all</p>
          <MoveRight size={14} />
        </Button>
      </CardBody>
    </CardContainer>
  );
}

export default LatestSpendingCard;
