import { useState } from "react";

function GoalCard({
  goal,
  deleteGoal,
  addSavings,
  editGoal,
}) {
  const [saving, setSaving] = useState("");
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(goal.title);
  const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
  const [targetDate, setTargetDate] = useState(goal.targetDate);

  const progress = Math.min(
    (Number(goal.savedAmount) / Number(goal.targetAmount)) * 100,
    100
  );

  const remaining = Math.max(
    Number(goal.targetAmount) - Number(goal.savedAmount),
    0
  );

  function handleAddSavings() {
    if (!saving || Number(saving) <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    const newSaved =
      Number(goal.savedAmount) + Number(saving);

    if (newSaved > Number(goal.targetAmount)) {
      alert("Savings cannot exceed the goal amount.");
      return;
    }

    addSavings(goal.id, Number(saving));
    setSaving("");
  }

  function handleSave() {
    if (!title || !targetAmount || !targetDate) {
      alert("Please fill all fields.");
      return;
    }

    editGoal({
      ...goal,
      title,
      targetAmount: Number(targetAmount),
      targetDate,
    });

    setEditing(false);
  }

  let progressColor = "bg-blue-500";

  if (progress >= 80) {
    progressColor = "bg-green-500";
  } else if (progress >= 50) {
    progressColor = "bg-yellow-500";
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {goal.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Target Date : {goal.targetDate}
          </p>
        </div>

        {progress >= 100 ? (
          <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
            Completed
          </span>
        ) : (
          <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
            In Progress
          </span>
        )}

      </div>

      {/* Edit Section */}

      {editing && (
        <div className="mt-6 space-y-3">

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Goal Name"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <input
            type="number"
            value={targetAmount}
            onChange={(e) =>
              setTargetAmount(e.target.value)
            }
            placeholder="Target Amount"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <input
            type="date"
            value={targetDate}
            onChange={(e) =>
              setTargetDate(e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <button
            onClick={handleSave}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700"
          >
            Save Changes
          </button>

        </div>
      )}

      {/* Goal Details */}

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500">Target</span>

          <span className="font-semibold">
            ₹{goal.targetAmount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Saved</span>

          <span className="font-semibold text-green-600">
            ₹{goal.savedAmount.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Remaining</span>

          <span className="font-semibold text-red-500">
            ₹{remaining.toLocaleString()}
          </span>
        </div>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between text-sm mb-2">

          <span>Progress</span>

          <span>{progress.toFixed(0)}%</span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className={`${progressColor} h-3 rounded-full transition-all duration-500`}
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

      </div>

      {/* Add Savings */}

      <div className="mt-6">

        <label className="block text-sm font-medium mb-2">
          Add Savings
        </label>

        <div className="flex gap-2">

          <input
            type="number"
            placeholder="₹1000"
            value={saving}
            onChange={(e) =>
              setSaving(e.target.value)
            }
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
          />

          <button
            onClick={handleAddSavings}
            className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700"
          >
            Add
          </button>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex gap-3">

        <button
          onClick={() => setEditing(!editing)}
          className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => deleteGoal(goal.id)}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default GoalCard;