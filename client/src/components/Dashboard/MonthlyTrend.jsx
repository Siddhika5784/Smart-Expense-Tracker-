import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function MonthlyTrend({ expenses }) {
  // Group expenses by month
  const monthlyMap = {};

  expenses.filter((expense) => expense !== null).forEach((expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    if (monthlyMap[month]) {
      monthlyMap[month] += Number(expense.amount);
    } else {
      monthlyMap[month] = Number(expense.amount);
    }
  });

  // Convert to array for Recharts
  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // convert object → sorted array
  const data = Object.keys(monthlyMap)
    .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
    .map((month) => ({
      month,
      expense: monthlyMap[month],
    }));

    //if no expenses 
    if (expenses.length === 0) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center h-80">
      <p className="text-5xl mb-3">📈</p>

      <h2 className="text-xl font-semibold">
        No Trend Available
      </h2>

      <p className="text-gray-500 mt-2 text-center">
        Add expenses to see your monthly spending trend.
      </p>
    </div>
  );
}

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
