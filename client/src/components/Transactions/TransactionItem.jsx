function TransactionItem({ expense }) {
  return (
    <div className="flex justify-between items-center border-b py-4 hover:bg-gray-50 transition">

      {/* Left Section */}
      <div>

        <h3 className="text-lg font-semibold">
          {expense.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {expense.category} • {expense.paymentMethod}
        </p>

        <p className="text-sm text-gray-400 mt-1">
          {new Date(expense.date).toLocaleDateString("en-IN")}
        </p>

      </div>

      {/* Right Section */}
      <div className="text-right">

        <p className="text-lg font-bold text-red-500">
          ₹{Number(expense.amount).toLocaleString("en-IN")}
        </p>

      </div>

    </div>
  );
}

export default TransactionItem;