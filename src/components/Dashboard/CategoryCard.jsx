import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function CategoryCard() {
  const categories = [
    { name: "Food", amount: 8250, percent: 25, color: "#f97316" },
    { name: "Travel", amount: 6400, percent: 20, color: "#3b82f6" },
    { name: "Shopping", amount: 5600, percent: 17, color: "#ec4899" },
    { name: "Bills", amount: 4800, percent: 15, color: "#14b8a6" },
    { name: "Entertainment", amount: 3200, percent: 10, color: "#8b5cf6" },
    { name: "Education", amount: 2200, percent: 7, color: "#eab308" },
  ];

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
            <p className="text-lg font-bold">₹32,450</p>
            <p className="text-sm text-gray-500">Total</p>
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
                  style={{ backgroundColor: item.color }}
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