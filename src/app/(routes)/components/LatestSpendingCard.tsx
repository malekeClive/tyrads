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
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      <Avatar size="xs" className="text-xs">
        Z
      </Avatar>
      <div className="flex-1">
        <h5 className="text-sm font-medium">{title}</h5>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
};

function LatestSpendingCard() {
  return (
    <CardContainer variant="outline" className="flex flex-col p-4 gap-2">
      <CardHeader className="mb-3 flex flex-row justify-between items-center">
        <h3 className="font-medium">Latest Spending</h3>
        <Button variant="ghost" size="xs" className="hover:bg-transparent">
          <MoreVertical size={18} />
        </Button>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        {dummySpendItems.map(({ title, date }, idx) => {
          if (idx === dummySpendItems.length - 1) {
            return <SpendItem key={idx} title={title} date={date} />;
          }
          return (
            <SpendItem
              key={idx}
              title={title}
              date={date}
              className="border-b-[1px] border-b-background-foreground pb-4"
            />
          );
        })}
        <Link href="/" passHref className="flex justify-center">
          <Button
            variant="ghost"
            size="xs"
            className="flex flex-row justify-center gap-2 items-center text-primary hover:text-primary hover:bg-transparent"
          >
            <p className="text-xs">View all</p>
            <MoveRight size={14} />
          </Button>
        </Link>
      </CardBody>
    </CardContainer>
  );
}

export default LatestSpendingCard;
