function ExpenseItem({ expense, deleteExpense, setEditExpense }) {
  const formattedDate = new Date(expense.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Delete "${expense.title}"?\n\nThis action cannot be undone.`,
    );

    if (!confirmDelete) return;

    deleteExpense(expense._id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {expense.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {expense.category} • {expense.paymentMethod}
          </p>

          <p className="text-sm text-gray-400 mt-1">{formattedDate}</p>
        </div>

        {/* Right */}
        <div className="sm:text-right">
          <p className="text-2xl font-bold text-blue-600">
            ₹{Number(expense.amount).toLocaleString("en-IN")}
          </p>

          <div className="flex gap-3 mt-3 sm:justify-end">
            <button
              onClick={() => setEditExpense(expense)}
              className="px-3 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="px-3 py-2 rounded-lg border border-red-500 text-red-600 hover:bg-red-50"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
