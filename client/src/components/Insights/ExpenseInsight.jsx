import InsightCard from "./InsightCard";

function ExpenseInsight({ expenses }) {
  let largestExpense = null;

  expenses.forEach((expense) => {
    if (
      !largestExpense ||
      Number(expense.amount) > Number(largestExpense.amount)
    ) {
      largestExpense = expense;
    }
  });

  return (
    <InsightCard
      title="Largest Expense"
      value={largestExpense?.title || "No Data"}
      subtitle={
        largestExpense
          ? `₹${largestExpense.amount.toLocaleString("en-IN")}`
          : "Add expenses to view insights"
      }
      color="#8b5cf6"
    />
  );
}

export default ExpenseInsight;