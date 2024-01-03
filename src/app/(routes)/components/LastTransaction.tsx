import { Avatar } from "@/components/Avatar";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";

const LastTransactionItem = ({
  name,
  date,
  transaction,
  className,
}: {
  name: string;
  date: string;
  transaction: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-row justify-between items-center ${className}`}>
      <div className="flex flex-row items-center gap-2">
        <Avatar size="xs" className="text-xs">
          B
        </Avatar>
        <div className="flex flex-col">
          <p className="text-xs font-medium">{name}</p>
          <p className="text-[10px] text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <p className="text-xs font-medium">{transaction}</p>
        <Button variant="ghost" size="xs" className="hover:bg-transparent">
          <MoreVertical size={16} />
        </Button>
      </div>
    </div>
  );
};

const dummyLastTransation = [
  {
    name: "Bessie cooper",
    date: "02 July, 2023",
    transaction: "-$3,000",
  },
  {
    name: "Guy Hawkins",
    date: "02 July, 2023",
    transaction: "+$3,000",
  },
];

function LastTransaction() {
  return (
    <CardContainer className="xl:col-span-5">
      <CardHeader className="flex flex-row justify-between items-center border-b-background-foreground border-b-[1px] pb-2 mb-2">
        <h3 className="font-semibold text-sm">Last transactions</h3>
        <div className="flex flex-row text-xs items-center gap-4">
          <Button variant="underline" size="xs">
            Newest
          </Button>
          <Button
            variant="ghost"
            className="text-xs p-0 hover:bg-transparent"
            size="xs"
          >
            Oldest
          </Button>
        </div>
      </CardHeader>
      <CardBody className="h-36 overflow-scroll">
        <div className="flex flex-col gap-4">
          {dummyLastTransation.map(({ name, date, transaction }, idx) => {
            if (idx === dummyLastTransation.length - 1) {
              return (
                <LastTransactionItem
                  key={idx}
                  name={name}
                  date={date}
                  transaction={transaction}
                />
              );
            }

            return (
              <LastTransactionItem
                key={idx}
                name={name}
                date={date}
                transaction={transaction}
                className="border-b-[1px] border-b-background-foreground pb-4"
              />
            );
          })}
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default LastTransaction;
