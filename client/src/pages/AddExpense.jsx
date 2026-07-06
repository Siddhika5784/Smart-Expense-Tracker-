import { useState, useEffect } from "react";
import ExpenseForm from "../components/expense/ExpenseForm";
import ExpenseList from "../components/expense/ExpenseList";
import api from "../services/api";
import Layout from "../components/Layout/Layout";
import LoadingSpinner from "../components/Common/Loading";

function AddExpense() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [loading, setLoading] =useState(true);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data.expenses);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
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
      await api.put(`/expenses/${updatedExpense._id}`, updatedExpense);

      fetchExpenses();
      setEditExpense(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

if (loading) {
  return (
    <Layout>
      <LoadingSpinner text="Loading your expenses..." />
    </Layout>
  );
}

  return (
 <Layout>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add Expense
          </h1>

          <p className="mt-2 text-gray-500">
            Record a new expense and keep track of your spending.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl">
          <ExpenseForm
            addExpense={addExpense}
            editExpense={editExpense}
            updateExpense={updateExpense}
          />
        </div>

        {/* Expense List */}
        <div className="mt-10">
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
            setEditExpense={setEditExpense}
          />
        </div>
    </Layout>
  );
}

export default AddExpense;