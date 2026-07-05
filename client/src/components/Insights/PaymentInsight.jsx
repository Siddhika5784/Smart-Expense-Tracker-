import InsightCard from "./InsightCard";

function PaymentInsight({ expenses }) {
  const paymentCounts = {};

  expenses.forEach((expense) => {
    if (paymentCounts[expense.paymentMethod]) {
      paymentCounts[expense.paymentMethod]++;
    } else {
      paymentCounts[expense.paymentMethod] = 1;
    }
  });

  let mostUsedMethod = "";
  let highestCount = 0;

  Object.entries(paymentCounts).forEach(([method, count]) => {
    if (count > highestCount) {
      highestCount = count;
      mostUsedMethod = method;
    }
  });

  return (
    <InsightCard
      title="Most Used Payment Method"
      value={mostUsedMethod || "No Data"}
      subtitle={
        highestCount > 0
          ? `${highestCount} Transactions`
          : "Add expenses to view insights"
      }
      color="#3b82f6"
    />
  );
}

export default PaymentInsight;