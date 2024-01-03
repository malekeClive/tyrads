import {
  CardBody,
  CardContainer,
  CardFooter,
  CardHeader,
} from "@/components/Card";
import React from "react";

const dummy = {
  expense: {
    value: 5.663,
    percentage: "75%",
  },
  income: {
    value: 2.656,
    percentage: "25%",
  },
};

function ExpensesAndIncomeCard() {
  return (
    <CardContainer variant="outline" className="flex flex-col p-4 gap-2">
      <CardHeader className="mb-3">
        <h3 className="font-medium">Expenses and Income</h3>
      </CardHeader>
      <CardBody className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-[10px] font-medium">Expense</p>
          <p className="text-lg font-semibold">{dummy.expense.percentage}</p>
          <p className="text-[10px] text-gray-400">{dummy.expense.value}</p>
        </div>
        <div className="relative flex items-center">
          <div className="absolute w-[2px] rounded mx-auto left-0 right-0 h-full bg-black"></div>
          <p className="bg-white z-10 text-sm">vs</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[10px] font-medium">Income</p>
          <p className="text-lg font-semibold">{dummy.income.percentage}</p>
          <p className="text-[10px] text-gray-400">{dummy.income.value}</p>
        </div>
      </CardBody>
      <CardFooter className="flex flex-row">
        <div
          style={{
            width: dummy.expense.percentage,
          }}
          className="w-full h-6 bg-secondary rounded-md border-white border-2"
        ></div>
        <div
          style={{
            width: dummy.income.percentage,
          }}
          className="w-full h-6 bg-primary rounded-md border-white border-2"
        ></div>
      </CardFooter>
    </CardContainer>
  );
}

export default ExpensesAndIncomeCard;
