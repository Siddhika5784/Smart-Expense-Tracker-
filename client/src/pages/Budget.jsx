import BudgetForm from "../components/Budget/BudgetForm";
import { useState, useEffect } from "react";
import api from "../services/api";
import Layout from "../components/Layout/Layout";
import {
  Wallet,
  UtensilsCrossed,
  Plane,
  ShoppingBag,
  Receipt,
  Film,
  BookOpen,
} from "lucide-react";
import LoadingSpinner from "../components/common/Loading";

function Budget() {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);
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

  const fetchBudgets = async () => {
    try {
      setLoading(true);
      const response = await api.get("/budget");

      setBudgets(response.data.budgets);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
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
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.amount, 0);

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

  const categoryIcons = {
    Food: UtensilsCrossed,
    Travel: Plane,
    Shopping: ShoppingBag,
    Bills: Receipt,
    Entertainment: Film,
    Education: BookOpen,
  };

  if (loading) {
  return (
    <Layout>
      <LoadingSpinner text="Loading your  Budgets..." />
    </Layout>
  );
}

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
      

          <h1 className="text-3xl font-bold text-gray-800">Monthly Budget</h1>
        

        <p className="text-gray-500">
          Set category-wise budgets and monitor your spending progress.
        </p>
      </div>

      {/* Budget Form */}
      <BudgetForm fetchBudgets={fetchBudgets} />

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-8 overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-gray-600">Category</th>

              <th className="px-6 py-4 text-right text-gray-600">Budget</th>

              <th className="px-6 py-4 text-right text-gray-600">Spent</th>

              <th className="px-6 py-4 text-right text-gray-600">Remaining</th>

              <th className="px-6 py-4 text-left text-gray-600">Progress</th>
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

              const Icon = categoryIcons[budget.category];

              return (
                <tr key={budget.category} className="border-t border-gray-200">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {Icon && <Icon size={18} className="text-blue-600" />}

                      <span className="font-medium">{budget.category}</span>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-right">
                    ₹{Number(budget.amount).toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-5 text-right">
                    ₹{spent.toLocaleString("en-IN")}
                  </td>

                  <td
                    className={`px-6 py-5 text-right font-medium ${
                      remaining < 0 ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    ₹{remaining.toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-5 min-w-[220px]">
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
                      />
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
            <tr className="bg-gray-50 border-t-2">
              <td className="px-6 py-5 font-bold">Total</td>

              <td className="px-6 py-5 text-right font-bold">
                ₹{totalBudget.toLocaleString("en-IN")}
              </td>

              <td className="px-6 py-5 text-right font-bold">
                ₹{totalSpent.toLocaleString("en-IN")}
              </td>

              <td className="px-6 py-5 text-right font-bold">
                ₹{totalRemaining.toLocaleString("en-IN")}
              </td>

              <td className="px-6 py-5 min-w-[220px]">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{
                      width: `${overallProgress}%`,
                    }}
                  />
                </div>

                <p className="text-sm font-semibold mt-2">
                  {overallProgress.toFixed(1)}%
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
}

export default Budget;
