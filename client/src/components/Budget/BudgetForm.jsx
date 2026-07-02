import { useState } from "react";

function BudgetForm() {
  const [budgets, setBudgets] = useState(
    JSON.parse(localStorage.getItem("budgets")) || {
      Food: "",
      Travel: "",
      Shopping: "",
      Bills: "",
      Entertainment: "",
      Education: "",
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;

    setBudgets({
      ...budgets,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem(
      "budgets",
      JSON.stringify(budgets)
    );

    alert("Budget Saved Successfully!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm mb-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Set Monthly Budget
      </h2>

      {Object.keys(budgets).map((category) => (
        <div key={category} className="mb-4">
          <label className="block mb-1 font-medium">
            {category}
          </label>

          <input
            type="number"
            name={category}
            value={budgets[category]}
            onChange={handleChange}
            placeholder={`Enter ${category} budget`}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Save Budget
      </button>
    </form>
  );
}

export default BudgetForm;