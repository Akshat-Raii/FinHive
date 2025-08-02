"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD/MM/YYYY"),
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      setLoading(false);
      refreshData();
      toast("New Expense Added!");
    }
    setName("");
    setAmount("");
    setLoading(false);
  };

  return (
    <div className="border p-5 rounded-2xl bg-white shadow-sm">
      <h2 className="font-bold text-lg text-slate-800">Add New Expense</h2>
      <div className="mt-4">
        <label className="text-slate-600 font-medium my-1">Expense Name</label>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          className="mt-1 focus-visible:ring-blue-500"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="text-slate-600 font-medium my-1">Expense Amount</label>
        <Input
          type="number"
          placeholder="e.g. Rs.1000"
          value={amount}
          className="mt-1 focus-visible:ring-blue-500"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        onClick={() => addNewExpense()}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
