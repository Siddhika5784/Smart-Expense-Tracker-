import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MonthlyTrend() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Helper: get month name
  const getMonthName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("default", { month: "short" });
  };

  // Group expenses by month
  const monthlyMap = {};

  expenses.forEach((expense) => {
    const month = getMonthName(expense.date);

    if (monthlyMap[month]) {
      monthlyMap[month] += Number(expense.amount);
    } else {
      monthlyMap[month] = Number(expense.amount);
    }
  });

  // Convert to array for Recharts
  const monthOrder = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

// convert object → sorted array
const data = Object.keys(monthlyMap)
  .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
  .map((month) => ({
    month,
    expense: monthlyMap[month],
  }));

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
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