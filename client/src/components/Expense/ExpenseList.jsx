import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense, setEditExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-5">
          Your Expenses
        </h2>

        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
          <p className="text-5xl">📝</p>

          <h3 className="text-xl font-semibold mt-4">
            No Expenses Added
          </h3>

          <p className="text-gray-500 mt-2">
            Start tracking your spending by adding your first expense.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Your Expenses
      </h2>

      <div className="space-y-4">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense._id}
            expense={expense}
            deleteExpense={deleteExpense}
            setEditExpense={setEditExpense}
          />
        ))}
      </div>

    </div>
  );
}

export default ExpenseList;