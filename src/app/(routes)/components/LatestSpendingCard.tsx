import { Avatar } from "@/components/Avatar";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { MoreVertical, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const dummySpendItems = [
  {
    url: "/online-market.jpeg",
    title: "Online store",
    date: "May 30, 2023 at 08:00pm",
  },
  {
    url: "/hospital.jpeg",
    title: "Pay the hospital",
    date: "May 30, 2023 at 08:00pm",
  },
  {
    url: "/tickets.jpeg",
    title: "Tickets",
    date: "May 30, 2023 at 08:00pm",
  },
];

const SpendItem = (props: {
  title: string;
  date: string;
  url: string;
  className?: string;
}) => {
  const { title, date, url, className } = props;
  return (
    <div className={`spend-item ${className}`}>
      <Image alt={title} src={url} width={50} height={50} />
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
        {dummySpendItems.map(({ title, url, date }, idx) => {
          if (idx === dummySpendItems.length - 1) {
            return (
              <SpendItem
                className="last"
                key={idx}
                title={title}
                url={url}
                date={date}
              />
            );
          }
          return <SpendItem key={idx} title={title} url={url} date={date} />;
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
