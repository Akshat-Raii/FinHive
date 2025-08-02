import Link from "next/link";
import React from "react";

function BudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 90) {
      return "bg-red-500";
    }
    if (percentage > 75) {
      return "bg-yellow-400";
    }
    return "bg-blue-600";
  };

  const progressPercentage = calculateProgressPerc();

  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div
        className="p-5 border rounded-2xl bg-white shadow-sm
        hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer h-[170px]"
      >
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-2xl p-3 px-4 bg-blue-100 rounded-full">
              {budget?.icon}
            </h2>
            <div>
              <h2 className="font-bold text-slate-800">{budget.name}</h2>
              <h2 className="text-sm text-gray-500">{budget.totalItem} Item(s)</h2>
            </div>
          </div>
          <h2 className="font-bold text-blue-700 text-lg">Rs.{budget.amount}</h2>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs text-slate-600">
              Rs.{budget.totalSpend ? budget.totalSpend : 0} Spend
            </h2>
            <h2 className="text-xs text-slate-600">
              Rs.{budget.amount - budget.totalSpend} Remaining
            </h2>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className={`h-2 rounded-full ${getProgressBarColor(
                progressPercentage
              )}`}
              style={{
                width: `${progressPercentage}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;