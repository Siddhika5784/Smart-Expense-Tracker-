import { useState, useEffect } from "react";
import api from "../services/api";
import SpendingInsight from "../components/Insights/SpendingInsight";
import ExpenseInsight from "../components/Insights/ExpenseInsight";
import PaymentInsight from "../components/Insights/PaymentInsight";
import AverageExpense from "../components/Insights/AverageExpense";
import BudgetAlert from "../components/Insights/BudgetAlert";
import Layout from "../components/Layout/Layout";
import LoadingSpinner from "../components/Common/LoadingSpinner";

function Insights() {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data.expenses);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBudgets = async () => {
    try {
      setLoading(true);
      const response = await api.get("/budget");
      setBudgets(response.data.budgets);
    } catch (error) {
      console.error("Error fetching budgets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
    fetchBudgets();
  }, []);

  if (loading) {
    return (
      <Layout>
        <LoadingSpinner text="Loading your Insights..." />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Insights</h1>

        <p className="text-gray-500 mt-2">
          Understand your spending habits and financial trends.
        </p>
      </div>

      {/* Empty State */}
      {expenses.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
          <p className="text-5xl">📊</p>

          <h2 className="text-2xl font-semibold mt-4">No Insights Available</h2>

          <p className="text-gray-500 mt-2">
            Add some expenses to generate spending insights.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SpendingInsight expenses={expenses} />

          <ExpenseInsight expenses={expenses} />

          <PaymentInsight expenses={expenses} />

          <AverageExpense expenses={expenses} />

          <BudgetAlert expenses={expenses} budgets={budgets} />
        </div>
      )}
    </Layout>
  );
}

export default Insights;
