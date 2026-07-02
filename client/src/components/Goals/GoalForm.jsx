import { useState } from "react";

function GoalForm({ addGoal }) {
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");
  const [targetDate, setTargetDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !title ||
      !targetAmount ||
      !savedAmount ||
      !targetDate
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newGoal = {
      id: Date.now(),
      title,
      targetAmount: Number(targetAmount),
      savedAmount: Number(savedAmount),
      targetDate,
    };

    addGoal(newGoal);

    setTitle("");
    setTargetAmount("");
    setSavedAmount("");
    setTargetDate("");
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Goal
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5"
      >

        {/* Goal Name */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Goal Name
          </label>

          <input
            type="text"
            placeholder="Ex. Buy MacBook"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Target Amount */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Amount
          </label>

          <input
            type="number"
            placeholder="₹50000"
            value={targetAmount}
            onChange={(e) =>
              setTargetAmount(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Already Saved */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Saved Amount
          </label>

          <input
            type="number"
            placeholder="₹10000"
            value={savedAmount}
            onChange={(e) =>
              setSavedAmount(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Target Date */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Date
          </label>

          <input
            type="date"
            value={targetDate}
            onChange={(e) =>
              setTargetDate(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Button */}

        <div className="md:col-span-2">

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Add Goal
          </button>

        </div>

      </form>

    </div>
  );
}

export default GoalForm;