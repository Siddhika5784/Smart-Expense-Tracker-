import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function CategoryBarChart({ categoryData }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-w-xl w-full mx-auto">
      {/* Heading */}

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Expense Comparison
      </h2>

      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={categoryData}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

            <XAxis dataKey="name" tick={{ fontSize: 12 }} />

            <YAxis tick={{ fontSize: 12 }} />

            <Tooltip />

            <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
              {categoryData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CategoryBarChart;
