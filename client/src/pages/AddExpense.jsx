import { useState, useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar.jsx";
import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";
import api from "../services/api";



function AddExpense() {
  const [expenses, setExpenses] = useState([]);
 const [editExpense, setEditExpense] = useState(null);

  const fetchExpenses = async () => {
  try {
    const response = await api.get("/expenses");
    console.log("API Response:", response.data);

    setExpenses(response.data.expenses);

  } catch (error) {
    console.log(error);
  }
};

 const addExpense = async (newExpense) => {
  try {

    await api.post("/expenses", newExpense);

    fetchExpenses();

  } catch (error) {

    console.log(error);

  }
};

  const deleteExpense = async (id) => {

  try {

    await api.delete(`/expenses/${id}`);

    fetchExpenses();

  } catch (error) {

    console.log(error);

  }

};

const updateExpense = async (updatedExpense) => {
  try {

    await api.put(
      `/expenses/${updatedExpense._id}`,
      updatedExpense
    );

    fetchExpenses();

    setEditExpense(null);

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {
  fetchExpenses();
}, []);

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
