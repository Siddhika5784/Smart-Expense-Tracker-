import { useState, useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import api from "../services/api";
import SpendingInsight from "../components/Insights/SpendingInsight";
import ExpenseInsight from "../components/Insights/ExpenseInsight";
import PaymentInsight from "../components/Insights/PaymentInsight";
import AverageExpense from "../components/Insights/AverageExpense";
import BudgetAlert from "../components/Insights/BudgetAlert";

function Insights() {

  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data.expenses);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await api.get("/budget");
      setBudgets(response.data.budgets);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
    fetchBudgets();
  }, []);

  return (
    <div className=" flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className=" ml-64 flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Insights
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <SpendingInsight expenses={expenses} />

          <ExpenseInsight expenses={expenses} />

          <PaymentInsight expenses={expenses} />

          <AverageExpense expenses={expenses} />

          <BudgetAlert
            expenses={expenses}
            budgets={budgets}
          />

        </div>

      </main>
    </div>
  );
}

export default Insights;
