import TransactionItem from "./TransactionItem";

function TransactionList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

        <p className="text-5xl">📭</p>

        <h2 className="text-2xl font-semibold mt-4">
          No Transactions Found
        </h2>

        <p className="text-gray-500 mt-2">
          Try changing your search or filters, or add a new expense.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

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