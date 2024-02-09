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
    <CardContainer className="variant-outline card-expenses">
      <CardHeader className="card-expenses-header">
        <h3>Expenses and Income</h3>
      </CardHeader>
      <CardBody className="card-expenses-body">
        <div>
          <p>Expense</p>
          <p>{dummy.expense.percentage}</p>
          <p>{dummy.expense.value}</p>
        </div>
        <div>
          <div></div>
          <p>vs</p>
        </div>
        <div>
          <p>Income</p>
          <p>{dummy.income.percentage}</p>
          <p>{dummy.income.value}</p>
        </div>
      </CardBody>
      <CardFooter className="card-expenses-footer">
        <div
          style={{
            width: dummy.expense.percentage,
          }}
        ></div>
        <div
          style={{
            width: dummy.income.percentage,
          }}
        ></div>
      </CardFooter>
    </CardContainer>
  );
}

export default ExpensesAndIncomeCard;
