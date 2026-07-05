import InsightCard from "./InsightCard";

function AverageExpense({ expenses }) {

  const averageExpense =
    expenses.length > 0
      ? (
          expenses.reduce(
            (sum, expense) => sum + Number(expense.amount),
            0
          ) / expenses.length
        ).toFixed(2)
      : 0;

  return (
    <InsightCard
      title="Average Expense"
      value={`₹${averageExpense}`}
      subtitle={
        expenses.length > 0
          ? "Per Transaction"
          : "Add expenses to view insights"
      }
      color="#10b981"
    />
  );
}

export default AverageExpense;