import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CategoryPieChart({
  categoryData,
  totalExpense,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      {/* Heading */}

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Expenses by Category
      </h2>

      <div className="grid grid-cols-2 gap-4 items-center">

        {/* Pie Chart */}

        <div className="relative h-72">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={categoryData}
                dataKey="amount"
                nameKey="name"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}
              >

                {categoryData.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

          {/* Center Text */}

          <div className="absolute inset-0 flex flex-col justify-center items-center">

            <p className="text-2xl font-bold text-gray-800">
              ₹{totalExpense}
            </p>

            <p className="text-sm text-gray-500">
              Total
            </p>

          </div>

        </div>

        {/* Category Details */}

        <div className="space-y-4">

          {categoryData.map((item) => (

            <div
              key={item.name}
              className="flex justify-between items-center"
            >

              <div className="flex items-center gap-3">

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

              <span className="text-sm font-medium text-gray-700">

                ₹{item.amount}
                {" "}
                ({item.percent}%)

              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default CategoryPieChart;