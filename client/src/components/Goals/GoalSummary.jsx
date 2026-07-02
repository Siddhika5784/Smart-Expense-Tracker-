function GoalSummary({
  totalGoals,
  completedGoals,
  totalGoalAmount,
  totalSaved,
}) {
  const overallProgress =
    totalGoalAmount > 0
      ? (totalSaved / totalGoalAmount) * 100
      : 0;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Total Goals */}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

        <p className="text-gray-500 text-sm">
          Total Goals
        </p>

        <h2 className="text-3xl font-bold mt-2 text-gray-800">
          {totalGoals}
        </h2>

      </div>

      {/* Completed Goals */}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

        <p className="text-gray-500 text-sm">
          Completed Goals
        </p>

        <h2 className="text-3xl font-bold mt-2 text-green-600">
          {completedGoals}
        </h2>

      </div>

      {/* Total Goal Amount */}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

        <p className="text-gray-500 text-sm">
          Total Goal Amount
        </p>

        <h2 className="text-3xl font-bold mt-2 text-purple-600">
          ₹{totalGoalAmount.toLocaleString()}
        </h2>

      </div>

      {/* Total Saved */}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">

        <p className="text-gray-500 text-sm">
          Total Saved
        </p>

        <h2 className="text-3xl font-bold mt-2 text-blue-600">
          ₹{totalSaved.toLocaleString()}
        </h2>

        {/* Progress */}

        <div className="mt-5">

          <div className="flex justify-between text-sm mb-2">

            <span className="text-gray-500">
              Overall Progress
            </span>

            <span className="font-semibold text-gray-700">
              {overallProgress.toFixed(0)}%
            </span>

          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full">

            <div
              className="h-3 rounded-full bg-purple-600 transition-all duration-500"
              style={{
                width: `${Math.min(overallProgress, 100)}%`,
              }}
            ></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GoalSummary;