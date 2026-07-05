import InsightCard from "./InsightCard";

function SpendingInsight({ expenses }) {
  const categoryTotals = {};

  expenses.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += Number(expense.amount);
    } else {
      categoryTotals[expense.category] = Number(expense.amount);
    }
  });

  let highestCategory = "";
  let highestAmount = 0;

  Object.entries(categoryTotals).forEach(([category, amount]) => {
    if (amount > highestAmount) {
      highestCategory = category;
      highestAmount = amount;
    }
  });

  return (
    <InsightCard
      title="Highest Spending Category"
      value={highestCategory || "No Data"}
      subtitle={
        highestAmount > 0
          ? `₹${highestAmount}`
          : "Add expenses to view insights"
      }
      color="#ef4444"
    />
  );
}

export default SpendingInsight;