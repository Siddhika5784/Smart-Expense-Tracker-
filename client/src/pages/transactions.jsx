import { useState, useEffect } from "react";
import TransactionFilters from "../components/Transactions/TransactionFilters";
import TransactionList from "../components/Transactions/TransactionList";
import api from "../services/api";
import Layout from "../components/Layout/Layout";
import LoadingSpinner from "../components/common/Loading";

function Transactions() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [paymentMethod, setPaymentMethod] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await api.get("/expenses");
      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  let filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (category !== "All") {
    filteredExpenses = filteredExpenses.filter(
      (expense) => expense.category === category,
    );
  }

  if (paymentMethod !== "All") {
    filteredExpenses = filteredExpenses.filter(
      (expense) => expense.paymentMethod === paymentMethod,
    );
  }

  switch (sortBy) {
    case "oldest":
      filteredExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;

    case "highest":
      filteredExpenses.sort((a, b) => b.amount - a.amount);
      break;

    case "lowest":
      filteredExpenses.sort((a, b) => a.amount - b.amount);
      break;

    default:
      filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  // Summary Stats
  const totalSpent = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const averageExpense =
    filteredExpenses.length > 0 ? totalSpent / filteredExpenses.length : 0;

  if (loading) {
    return (
      <Layout>
        <LoadingSpinner text="Loading your expenses..." />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Transactions</h1>

        <p className="mt-2 text-gray-500">
          View, search and analyze all your expenses.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Transactions</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {filteredExpenses.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Spent</p>

          <h2 className="mt-2 text-3xl font-bold text-red-500">
            ₹{totalSpent.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <p className="text-sm text-gray-500">Average Expense</p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            ₹
            {averageExpense.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <TransactionFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Transactions */}
      <TransactionList expenses={filteredExpenses} />
    </Layout>
  );
}

export default Transactions;
