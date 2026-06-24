import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MonthlyTrend() {
  const data = [
    { month: "Jan", expense: 22000 },
    { month: "Feb", expense: 28000 },
    { month: "Mar", expense: 25000 },
    { month: "Apr", expense: 31000 },
    { month: "May", expense: 32450 },
  ];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm ">
      <div className="flex justify-between mb-10">
        <h2 className="text-xl font-semibold">Monthly Trend</h2>

        <button className="text-sm border border-gray-200 px-3 py-1 rounded-lg">
          This Year
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="expense"
              strokeWidth={3}
              stroke="#7c3aed"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyTrend;