import { useState, useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import TransactionFilters from "../components/Transactions/TransactionFilters";
import TransactionList from "../components/Transactions/TransactionList";
import api from "../services/api";

function Transactions() {
  const [expenses, setExpenses] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [paymentMethod, setPaymentMethod] = useState("All");
  const [sortBy, setSortBy] = useState("latest");

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

  let filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredExpenses = filteredExpenses.filter(
      (expense) => expense.category === category
    );
  }

  if (paymentMethod !== "All") {
    filteredExpenses = filteredExpenses.filter(
      (expense) => expense.paymentMethod === paymentMethod
    );
  }

  switch (sortBy) {
    case "oldest":
      filteredExpenses.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      break;

    case "highest":
      filteredExpenses.sort(
        (a, b) => b.amount - a.amount
      );
      break;

    case "lowest":
      filteredExpenses.sort(
        (a, b) => a.amount - b.amount
      );
      break;

    default:
      filteredExpenses.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
  }

  return (
    <div className=" flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className=" ml-64 flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Transactions
        </h1>

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

        <TransactionList expenses={filteredExpenses} />

      </main>
    </div>
  );
}

export default Transactions;