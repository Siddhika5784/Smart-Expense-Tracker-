import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import CategoryCard from "../components/Dashboard/CategoryCard";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import MonthlyTrend from "../components/Dashboard/MonthlyTrend";
import { useState, useEffect } from "react";
import api from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");

      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );
  const totalIncome = 75000;
  const remainingBalance = totalIncome - totalExpenses;

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      <Sidebar />

      <main className=" ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <div className="flex items-center gap-4">
            <button className="bg-white px-4 py-2 rounded-xl shadow-sm text-gray-600">
              May 2025
            </button>

            <button className="bg-white px-3 py-2 rounded-xl shadow-sm">
              🔔
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-9">
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

          <StatCard title="Savings" amount={`₹${totalIncome.toLocaleString("en-IN")}`} color="purple" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-9">
          <CategoryCard expenses={expenses} />
          <MonthlyTrend expenses={expenses} />
        </div>

        <RecentTransactions expenses={expenses} />
      </main>
    </div>
  );
}

export default Dashboard;
