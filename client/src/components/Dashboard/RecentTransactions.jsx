function RecentTransactions({ expenses }) {
  const recentExpenses = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mt-8 overflow-x-auto">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Transactions
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Your latest 5 recorded expenses
        </p>
      </div>

      {recentExpenses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-5xl">💸</p>

          <h3 className="text-xl font-semibold mt-3">
            No Transactions Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Start adding expenses to see your recent transactions.
          </p>
        </div>
      ) : (
        <table className="w-full text-left">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="py-4 text-sm font-semibold text-gray-600">
                Title
              </th>

              <th className="py-4 text-sm font-semibold text-gray-600">
                Category
              </th>

              <th className="py-4 text-sm font-semibold text-gray-600">
                Amount
              </th>

              <th className="py-4 text-sm font-semibold text-gray-600">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {recentExpenses.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-5 font-medium text-gray-800">
                  {item.title}
                </td>

                <td className="py-5">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </td>

                <td className="py-5 font-semibold text-red-600">
                  -₹{Number(item.amount).toLocaleString("en-IN")}
                </td>

                <td className="py-5 text-gray-500">
                  {new Date(item.date).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RecentTransactions;