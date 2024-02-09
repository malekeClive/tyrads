import { Avatar } from "@/components/Avatar";
import { CardBody, CardContainer, CardHeader } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import React from "react";

const LastTransactionItem = ({
  name,
  img,
  date,
  transaction,
  className,
}: {
  name: string;
  img: string;
  date: string;
  transaction: string;
  className?: string;
}) => {
  return (
    <div
      className={`card-last-transaction-body-last-transaction-item ${className}`}
    >
      <div>
        <Avatar className="variant-default size-xs">
          <Image alt={name} src={img} width={25} height={25} />
        </Avatar>
        <div>
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <div>
        <p>{transaction}</p>
        <Button className="variant-ghost size-xs">
          <MoreVertical size={16} />
        </Button>
      </div>
    </div>
  );
};

const dummyLastTransation = [
  {
    name: "Bessie cooper",
    img: "/avatar-cute-monster.jpeg",
    date: "02 July, 2023",
    transaction: "-$3,000",
  },
  {
    name: "Guy Hawkins",
    img: "/avatar-dog.jpeg",
    date: "02 July, 2023",
    transaction: "+$3,000",
  },
];

function LastTransaction() {
  return (
    <CardContainer className="variant-default card-last-transaction">
      <CardHeader className="card-last-transaction-header">
        <h3>Last transactions</h3>
        <div>
          <Button className="variant-underline size-xs">Newest</Button>
          <Button className="variant-ghost size-xs">Oldest</Button>
        </div>
      </CardHeader>
      <CardBody className="card-last-transaction-body">
        <div className="card-last-transaction-body-last-transaction-items">
          {dummyLastTransation.map(({ name, img, date, transaction }, idx) => {
            if (idx === dummyLastTransation.length - 1) {
              return (
                <LastTransactionItem
                  key={idx}
                  name={name}
                  img={img}
                  date={date}
                  transaction={transaction}
                />
              );
            }

            return (
              <LastTransactionItem
                key={idx}
                name={name}
                img={img}
                date={date}
                transaction={transaction}
                className="last"
              />
            );
          })}
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default LastTransaction;
