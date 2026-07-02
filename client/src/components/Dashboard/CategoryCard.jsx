import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function CategoryCard() {
  // Safely parse localStorage and filter out any accidental null values immediately
  const rawExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const expenses = rawExpenses.filter(expense => expense !== null);

  const categoryTotals = {};

  expenses.forEach((expense) => {
    // Optional chaining (?.) stops the crash if an expense item is malformed
    const category = expense?.category;
    if (!category) return; // Skip item completely if it has no category name

    const amount = Number(expense?.amount) || 0;

    if (categoryTotals[category]) {
      categoryTotals[category] += amount;
    } else {
      categoryTotals[category] = amount;
    }
  });

  const colors = [
    "#f97316",
    "#3b82f6",
    "#ec4899",
    "#14b8a6",
    "#8b5cf6",
    "#eab308",
  ];

  // Added optional chaining and fallback to prevent NaN errors
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + (Number(expense?.amount) || 0),
    0
  );

  const categories = Object.entries(categoryTotals).map(
    ([name, amount], index) => ({
      name,
      amount,
      percent:
        totalAmount > 0
          ? Math.round((amount / totalAmount) * 100)
          : 0,
      color: colors[index % colors.length],
    })
  );

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">
          Expenses by Category
        </h2>
        <button className="text-sm border border-gray-200 px-3 py-1 rounded-lg text-gray-600">
          This Month
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="h-56 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                dataKey="amount"
                nameKey="name"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={2}
              >
                {categories.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-lg font-bold">
              ₹{totalAmount}
            </p>
            <p className="text-sm text-gray-500">
              Total
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                ></span>
                <span className="text-gray-700">
                  {item.name}
                </span>
              </div>
              <span className="text-gray-700">
                ₹{item.amount} ({item.percent}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
