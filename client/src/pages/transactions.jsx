import Sidebar from "../components/Dashboard/Sidebar";
import { useState, useEffect } from "react";
import api from "../services/api";

function Transactions() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");

      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  //search feature
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Transactions</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          {expenses.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-5xl">💸</p>

              <h3 className="text-xl font-semibold mt-3">
                No Transactions Yet
              </h3>

              <p className="text-gray-500 mt-2">
                Start by adding your first expense.
              </p>
            </div>
          ) : filteredExpenses.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-5xl">🔍</p>

              <h3 className="text-xl font-semibold mt-3">
                No Matching Transactions
              </h3>

              <p className="text-gray-500 mt-2">
                Try searching with another title.
              </p>
            </div>
          ) : (
            expenses.map((expense) => (
              <div
                key={expense._id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <h3 className="font-semibold">{expense.title}</h3>

                  <p className="text-gray-500 text-sm">
                    <div className="flex gap-2 mt-1">
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {expense.category}
                      </span>

                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {expense.paymentMethod}
                      </span>
                    </div>
                  </p>

                  <p className="text-gray-400 text-sm">
                    {new Date(expense.date).toLocaleDateString("en-IN")}
                  </p>
                </div>

                <div className="font-bold text-red-600">
                  -₹{Number(expense.amount).toLocaleString("en-IN")}
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
