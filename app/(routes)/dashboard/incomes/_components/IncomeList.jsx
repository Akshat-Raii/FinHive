"use client";
import React, { useEffect, useState } from "react";
import CreateIncomes from "./CreateIncomes";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql, and } from "drizzle-orm";
import { Incomes, Expenses } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import IncomeItem from "./IncomeItem";
import { toast } from "sonner"; // Recommended for user feedback

function IncomeList() {
  const [incomelist, setIncomelist] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && getIncomelist();
  }, [user]);

  /**
   * Used to get the list of incomes
   */
  const getIncomelist = async () => {
    const result = await db
      .select({
        ...getTableColumns(Incomes),
        totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
        totalItem: sql`count(${Expenses.id})`.mapWith(Number),
      })
      .from(Incomes)
      .leftJoin(Expenses, eq(Incomes.id, Expenses.budgetId))
      .where(eq(Incomes.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Incomes.id)
      .orderBy(desc(Incomes.id));

    setIncomelist(result);
  };

  /**
   * Used to delete an income source
   */
  const deleteIncome = async (incomeId) => {
    // 1. First, delete associated expenses to avoid foreign key errors.
    await db.delete(Expenses).where(eq(Expenses.budgetId, incomeId));

    // 2. Then, delete the income record itself.
    const result = await db
      .delete(Incomes)
      .where(
        and(
          eq(Incomes.id, incomeId),
          eq(Incomes.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      )
      .returning(); // Use .returning() to confirm the deletion

    if (result) {
      toast.success("Income source deleted successfully!");
      getIncomelist(); // Refresh the list to update the UI
    } else {
      toast.error("Failed to delete income source.");
    }
  };

  return (
    <div className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <CreateIncomes refreshData={() => getIncomelist()} />
        {incomelist?.length > 0
          ? incomelist.map((budget) => (
              <IncomeItem
                budget={budget}
                key={budget.id} // Use the unique ID for the key
                onDelete={deleteIncome} // Pass the delete function as a prop
              />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-full bg-slate-200 rounded-lg
         h-[150px] animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default IncomeList;