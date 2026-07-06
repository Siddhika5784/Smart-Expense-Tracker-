import TransactionItem from "./TransactionItem";

function TransactionList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-16 text-center">

        <div className="text-6xl mb-4">📭</div>

        <h2 className="text-2xl font-semibold text-gray-800">
          No Transactions Found
        </h2>

        <p className="mt-3 text-gray-500 max-w-sm mx-auto">
          Try changing your search or filters, or start tracking your spending
          by adding a new expense.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-5">
      {expenses.map((expense) => (
        <TransactionItem
          key={expense._id}
          expense={expense}
        />
      ))}
    </div>
  );
}

export default TransactionList;