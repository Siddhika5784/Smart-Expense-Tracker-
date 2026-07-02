import Sidebar from "../components/Dashboard/Sidebar";
import CategoryPieChart from "../components/CategoryAnalysis/CategoryPieChart";
import CategoryBarChart from "../components/CategoryAnalysis/CategoryBarChart";
import CategoryInsights from "../components/CategoryAnalysis/CategoryInsights";

function CategoryAnalysis() {
  // Read all expenses
  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  // Store category totals
  const categoryTotals = {};

  expenses.forEach((expense) => {
    const category = expense.category;

    if (categoryTotals[category]) {
      categoryTotals[category] += Number(expense.amount);
    } else {
      categoryTotals[category] = Number(expense.amount);
    }
  });

  // Colors for charts
  const colors = [
    "#F97316",
    "#3B82F6",
    "#EC4899",
    "#14B8A6",
    "#8B5CF6",
    "#EAB308",
  ];

  // Total expenses
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  // Convert object into chart array
  const categoryData = Object.entries(categoryTotals).map(
    ([name, amount], index) => ({
      name,
      amount,
      percent:
        totalExpense > 0
          ? Math.round((amount / totalExpense) * 100)
          : 0,
      color: colors[index % colors.length],
    })
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">

        {/* Heading */}

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            Category Analysis
          </h1>

          <div className="flex gap-4">

            <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
              This Month
            </button>

          </div>

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-6">

          <CategoryPieChart
            categoryData={categoryData}
            totalExpense={totalExpense}
          />

          <CategoryBarChart
            categoryData={categoryData}
          />

        </div>

        {/* Insights */}

        <div className="mt-8">

          <CategoryInsights
            expenses={expenses}
            categoryData={categoryData}
            totalExpense={totalExpense}
          />

        </div>

      </main>

    </div>
  );
}

export default CategoryAnalysis;