import { useState } from "react";
import api from "../../services/api";

function BudgetForm({ fetchBudgets }) {
  const [budgets, setBudgets] = useState({
    Food: "",
    Travel: "",
    Shopping: "",
    Bills: "",
    Entertainment: "",
    Education: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setBudgets({
      ...budgets,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const budgetEntries = Object.entries(budgets);

      for (const [category, amount] of budgetEntries) {
        if (!amount) continue;

        await api.post("/budget", {
          category,
          amount: Number(amount),
        });
      }

      alert("Budgets Saved Successfully");

      fetchBudgets();

      setBudgets({
        Food: "",
        Travel: "",
        Shopping: "",
        Bills: "",
        Entertainment: "",
        Education: "",
      });

    } catch (error) {
      console.log(error);
      alert("Failed to Save Budgets");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Set Monthly Budget
      </h2>

      <p className="text-gray-500 mb-6">
        Enter your monthly budget for each category.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {Object.keys(budgets).map((category) => (
          <div key={category}>
            <label className="block text-gray-600 mb-2">
              {category}
            </label>

            <input
              type="number"
              name={category}
              value={budgets[category]}
              onChange={handleChange}
              placeholder={`Enter ${category} budget`}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}

      </div>

      <button
        type="submit"
        className="mt-6 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
      >
        Save Budget
      </button>
    </form>
  );
}

export default BudgetForm;