import { useState, useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar.jsx";
import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";

function AddExpense() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editExpense, setEditExpense] = useState(null);

 function addExpense(newExpense) {
  const updated = [...expenses, newExpense].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  setExpenses(updated);
}

  function deleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

 function updateExpense(updatedExpense) {
  const updated = expenses
    .map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  setExpenses(updated);
  setEditExpense(null);
}

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <ExpenseForm
          addExpense={addExpense}
          editExpense={editExpense}
          updateExpense={updateExpense}
        />

        <ExpenseList expenses={expenses} 
        deleteExpense={deleteExpense}
         setEditExpense={setEditExpense} />
      </main>
    </div>
  );
}

export default AddExpense;
