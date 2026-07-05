function RecentTransactions({ expenses }) {
  const recentExpenses = [...expenses].slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

      {/* header */}
      <div className="grid grid-cols-4 font-semibold text-gray-500 border-b pb-2">
        <p>Title</p>
        <p>Category</p>
        <p>Amount</p>
        <p>Date</p>
      </div>

      {recentExpenses.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-5xl">💸</p>

          <h3 className="text-xl font-semibold mt-3">No Transactions Yet</h3>

          <p className="text-gray-500 mt-2">
            Start adding expenses to see your recent transactions.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {recentExpenses.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-4 py-4 border-b items-center"
            >
              <p className="text-blue-500">{item.title}</p>
              <p className="text-gray-500">{item.category}</p>
              <p className="text-red-500 font-semibold">
                ₹{item.amount.toLocaleString()}
              </p>
              <p className="text-gray-500">
                {new Date(item.date).toLocaleDateString("en-IN")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentTransactions;
