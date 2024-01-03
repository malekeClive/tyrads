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
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 xl:gap-6">
      <div className="xl:col-span-9 p-6">
        <div className="col-span-2 mb-10">
          <h3 className="font-bold text-2xl">Hello, Jhon .D</h3>
          <p>View and control your finance here!</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-8 items-start gap-3 xl:gap-6">
          <StatisticCard />
          <VisaCard />
          <div className="xl:col-span-8 grid grid-cols-1 gap-3 xl:gap-0 xl:grid-cols-8">
            <TodoCard />
            <ChatCard />
          </div>
          <LastTransaction />
          <AnalyticsCard />
        </div>
      </div>

      <div className="xl:col-span-3 bg-white row-span-1 p-6 xl:p-6 flex flex-col gap-6">
        <ExpensesAndIncomeCard />
        <LatestSpendingCard />
        <PremiumCard />
      </div>
    </div>
  );
}
