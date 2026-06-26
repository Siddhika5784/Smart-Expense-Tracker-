function CategoryInsights({
  expenses,
  categoryData,
  totalExpense,
}) {
  // No expenses added
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Category Insights
        </h2>

        <p className="text-gray-500">
          Add some expenses to view insights.
        </p>
      </div>
    );
  }

  // Highest spending category
  const highestCategory = categoryData.reduce(
    (max, current) =>
      current.amount > max.amount ? current : max
  );

  // Lowest spending category
  const lowestCategory = categoryData.reduce(
    (min, current) =>
      current.amount < min.amount ? current : min
  );

  // Largest transaction
  const largestExpense = expenses.reduce(
    (max, current) =>
      Number(current.amount) > Number(max.amount)
        ? current
        : max
  );

  // Average expense
  const averageExpense =
    totalExpense / expenses.length;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Category Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {/* Highest Category */}

        <div className="bg-purple-50 rounded-xl p-4">

          <h3 className="font-semibold text-purple-700">
            Highest Spending Category
          </h3>

          <p className="mt-2 text-gray-700">
            {highestCategory.name}
          </p>

          <p className="font-bold text-lg">
            ₹{highestCategory.amount}
          </p>

          <p className="text-sm text-gray-500">
            {highestCategory.percent}% of total spending
          </p>

        </div>

        {/* Lowest Category */}

        <div className="bg-green-50 rounded-xl p-4">

          <h3 className="font-semibold text-green-700">
            Lowest Spending Category
          </h3>

          <p className="mt-2 text-gray-700">
            {lowestCategory.name}
          </p>

          <p className="font-bold text-lg">
            ₹{lowestCategory.amount}
          </p>

          <p className="text-sm text-gray-500">
            {lowestCategory.percent}% of total spending
          </p>

        </div>

        {/* Largest Expense */}

        <div className="bg-orange-50 rounded-xl p-4">

          <h3 className="font-semibold text-orange-700">
            Largest Transaction
          </h3>

          <p className="mt-2 text-gray-700">
            {largestExpense.title}
          </p>

          <p className="font-bold text-lg">
            ₹{largestExpense.amount}
          </p>

          <p className="text-sm text-gray-500">
            {largestExpense.category}
          </p>

        </div>

        {/* Average Expense */}

        <div className="bg-blue-50 rounded-xl p-4">

          <h3 className="font-semibold text-blue-700">
            Average Expense
          </h3>

          <p className="font-bold text-2xl mt-2">
            ₹{averageExpense.toFixed(2)}
          </p>

          <p className="text-sm text-gray-500">
            Per Transaction
          </p>

        </div>

      </div>

      {/* Summary */}

      <div className="mt-8 border-t pt-6">

        <h3 className="font-semibold text-gray-800 mb-4">
          Summary
        </h3>

        <ul className="space-y-3 text-gray-700">

          <li>
            📌 You have spent a total of{" "}
            <span className="font-semibold">
              ₹{totalExpense}
            </span>.
          </li>

          <li>
            🥇 Highest spending is on{" "}
            <span className="font-semibold">
              {highestCategory.name}
            </span>.
          </li>

          <li>
            💰 Average expense per transaction is{" "}
            <span className="font-semibold">
              ₹{averageExpense.toFixed(2)}
            </span>.
          </li>

          <li>
            📂 You have used{" "}
            <span className="font-semibold">
              {categoryData.length}
            </span>{" "}
            different categories.
          </li>

        </ul>

      </div>

    </div>
  );
}

export default CategoryInsights;