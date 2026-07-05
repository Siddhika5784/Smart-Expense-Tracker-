import Sidebar from "../components/Dashboard/Sidebar";
import BudgetForm from "../components/Budget/BudgetForm";
import { useState, useEffect } from "react";
import api from "../services/api";

function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");

      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBudgets = async () => {
    try {
      const response = await api.get("/budget");

      setBudgets(response.data.budgets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();

    fetchBudgets();
  }, []);

  // Store total spent for each category
  const categorySpent = {};

  expenses.forEach((expense) => {
    const category = expense.category;

    if (categorySpent[category]) {
      categorySpent[category] += Number(expense.amount);
    } else {
      categorySpent[category] = Number(expense.amount);
    }
  });

  // Total Budget
  const totalBudget = budgets.reduce(
  (sum, budget) => sum + budget.amount,
  0
)


  // Total Spent
  const totalSpent = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0,
  );

  // Remaining Budget
  const totalRemaining = totalBudget - totalSpent;

  // Overall Progress
  const overallProgress =
    totalBudget > 0 ? Math.min((totalSpent / totalBudget) * 100, 100) : 0;

  return (
    <div className="  flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className=" ml-64 flex-1 p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Monthly Budget
        </h1>

        {/* Budget Form */}
        <BudgetForm  fetchBudgets={fetchBudgets}/>

        {/* Budget Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-8">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left border-b border-gray-200 text-gray-600">
                  Category
                </th>

                <th className="px-6 py-4 text-left border-b border-gray-200 text-gray-600">
                  Budget
                </th>

                <th className="px-6 py-4 text-left border-b border-gray-200 text-gray-600">
                  Spent
                </th>

                <th className="px-6 py-4 text-left border-b border-gray-200 text-gray-600">
                  Remaining
                </th>

                <th className="px-6 py-4 text-left border-b border-gray-200 text-gray-600">
                  Progress
                </th>
              </tr>
            </thead>

            <tbody>
              {budgets.map((budget) => {
                const spent = categorySpent[budget.category] || 0;

                const remaining = Number(budget.amount) - spent;

                const progress =
                  Number(budget.amount) > 0
                    ? Math.min((spent / Number(budget.amount)) * 100, 100)
                    : 0;

                return (
                  <tr
                    key={budget.category}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-6 py-5 font-medium">{budget.category}</td>

                    <td className="px-6 py-5">₹{budget.amount}</td>

                    <td className="px-6 py-5">₹{spent}</td>

                    <td
                      className={`px-6 py-5 ${
                        remaining < 0
                          ? "text-red-500 font-semibold"
                          : "text-green-600"
                      }`}
                    >
                      ₹{remaining}
                    </td>

                    <td className="px-6 py-5 w-72">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={
                            progress >= 90
                              ? "bg-red-500 h-3 rounded-full"
                              : progress >= 70
                                ? "bg-yellow-500 h-3 rounded-full"
                                : "bg-green-500 h-3 rounded-full"
                          }
                          style={{
                            width: `${progress}%`,
                          }}
                        ></div>
                      </div>

                      <p className="text-sm text-gray-600 mt-2">
                        {progress.toFixed(1)}%
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr className="bg-gray-100 border-t-2 border-gray-300">
                <td className="px-6 py-5 font-bold">Total</td>

                <td className="px-6 py-5 font-bold">₹{totalBudget}</td>

                <td className="px-6 py-5 font-bold">₹{totalSpent}</td>

                <td className="px-6 py-5 font-bold">₹{totalRemaining}</td>

                <td className="px-6 py-5">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full"
                      style={{
                        width: `${overallProgress}%`,
                      }}
                    ></div>
                  </div>

                  <p className="text-sm font-semibold mt-2">
                    {overallProgress.toFixed(1)}%
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Budget;
