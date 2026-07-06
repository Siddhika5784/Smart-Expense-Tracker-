import StatCard from "../components/Dashboard/StatCard";
import CategoryCard from "../components/Dashboard/CategoryCard";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import MonthlyTrend from "../components/Dashboard/MonthlyTrend";
import { useState, useEffect } from "react";
import api from "../services/api";
import Layout from "../components/Layout/Layout";
import LoadingSpinner from "../components/common/Loading";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await api.get("/expenses");
      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalIncome = 75000;
  const remainingBalance = totalIncome - totalExpenses;

  if (loading) {
  return (
    <Layout>
      <LoadingSpinner text="Loading your Dashboard..." />
    </Layout>
  );
}

  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor your expenses and financial health in one place.
          </p>
        </div>

        
          <button className="bg-white px-4 py-2 rounded-xl shadow-sm text-gray-600">
            July 2026
          </button>

        

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <StatCard
          title="Total Income"
          amount={`₹${totalIncome.toLocaleString("en-IN")}`}
          color="green"
        />

        <StatCard
          title="Total Expenses"
          amount={`₹${totalExpenses.toLocaleString("en-IN")}`}
          color="red"
        />

        <StatCard
          title="Remaining Balance"
          amount={`₹${remainingBalance.toLocaleString("en-IN")}`}
          color="blue"
        />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-8">

        <CategoryCard expenses={expenses} />

        <MonthlyTrend expenses={expenses} />

      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <RecentTransactions expenses={expenses} />
      </div>

    </Layout>
  );
}

export default Dashboard;