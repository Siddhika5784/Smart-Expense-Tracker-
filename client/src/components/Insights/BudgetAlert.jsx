import InsightCard from "./InsightCard";

function BudgetAlert({ expenses, budgets }) {

  const exceededCategories = [];

  budgets.forEach((budget) => {

    const spent = expenses
      .filter(
        (expense) => expense.category === budget.category
      )
      .reduce(
        (sum, expense) =>
          sum + Number(expense.amount),
        0
      );

    if (spent > budget.amount) {

      exceededCategories.push({
        category: budget.category,
        exceededBy: spent - budget.amount,
      });

    }

  });

  return (
    <InsightCard
      title="Budget Alerts"
      value={
        exceededCategories.length > 0
          ? exceededCategories[0].category
          : "No Alerts"
      }
      subtitle={
        exceededCategories.length > 0
          ? `Exceeded by ₹${exceededCategories[0].exceededBy}`
          : "All budgets are within limits"
      }
      color="#f97316"
    />
  );
}

export default BudgetAlert;