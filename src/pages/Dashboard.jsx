import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import CategoryCard from "../components/Dashboard/CategoryCard";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import MonthlyTrend from "../components/Dashboard/MonthlyTrend";

function Dashboard() {
  const expenses=JSON.parse(localStorage.getItem("expenses")) || [];

        const totalExpenses = expenses.reduce(
          (sum,expense) => sum + expense.amount,
          0
        );
        const totalIncome = 75000;
        const remainingBalance = totalIncome - totalExpenses;

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      <Sidebar />

      <main className="flex-1 p-8">
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
          <StatCard title="Total Income" amount={`₹${totalIncome}`} />

          <StatCard title="Total Expenses" amount={`₹${totalExpenses}`} />

          <StatCard title="Remaining Balance" amount={`₹${remainingBalance}`} />

          <StatCard title="Savings" amount="₹8,250" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-9">
          <CategoryCard />
          <MonthlyTrend />
        </div>

        <RecentTransactions expenses={expenses}/>
      </main>
    </div>
  );
}

export default Dashboard;
