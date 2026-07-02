import Sidebar from "../components/Dashboard/Sidebar";

function Transactions() {
  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Transactions
        </h1>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          {expenses.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {expense.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {expense.category} • {expense.paymentMethod}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {expense.date}
                  </p>
                </div>

                <div className="font-bold">
                  ₹{expense.amount}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Transactions;