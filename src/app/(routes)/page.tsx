import StatisticCard from "./components/StatisticCard";
import VisaCard from "./components/VisaCard";
import LastTransaction from "./components/LastTransaction";
import ExpensesAndIncomeCard from "./components/ExpensesAndIncomeCard";
import LatestSpendingCard from "./components/LatestSpendingCard";
import PremiumCard from "./components/PremiumCard";
import TodoCard from "./components/TodoCard";
import ChatCard from "./components/ChatCard";
import AnalyticsCard from "./components/AnalyticsCard";

export default function Home() {

  return (
    <div className="layout">
      <div className="left">
        <div>
          <h3>Hello, Jhon .D</h3>
          <p>View and control your finance here!</p>
        </div>
        <div>
          <StatisticCard />
          <VisaCard />
          <div className="activities">
            <TodoCard />
            <ChatCard />
          </div>
          <LastTransaction />
          <AnalyticsCard />
        </div>
      </div>

      <div className="right">
        <ExpensesAndIncomeCard />
        <LatestSpendingCard />
        <PremiumCard />
      </div>
    </div>
  );
}
