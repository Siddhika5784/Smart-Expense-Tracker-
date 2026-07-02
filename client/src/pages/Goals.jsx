import { useState, useEffect } from "react";

import Sidebar from "../components/Dashboard/Sidebar";

import GoalForm from "../components/Goals/GoalForm";
import GoalSummary from "../components/Goals/GoalSummary";
import GoalCard from "../components/Goals/GoalCard";

function Goals() {
  // Load goals from localStorage
  const [goals, setGoals] = useState(() => {
    return JSON.parse(localStorage.getItem("goals")) || [];
  });

  // Save whenever goals change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  // Add Goal
  function addGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

  // Delete Goal
  function deleteGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id));
  }

  // Total Goal Amount
  const totalGoalAmount = goals.reduce(
    (sum, goal) => sum + Number(goal.targetAmount),
    0,
  );

  // Total Saved
  const totalSaved = goals.reduce(
    (sum, goal) => sum + Number(goal.savedAmount),
    0,
  );

  // Completed Goals
  const completedGoals = goals.filter(
    (goal) => Number(goal.savedAmount) >= Number(goal.targetAmount),
  ).length;

  function addSavings(id, amount) {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              savedAmount: Number(goal.savedAmount) + Number(amount),
            }
          : goal,
      ),
    );
  }

  function editGoal(updatedGoal) {
    setGoals(
      goals.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal)),
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Heading */}

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Goals</h1>

            <p className="text-gray-500 mt-1">
              Track your savings goals and monitor your progress.
            </p>
          </div>
        </div>

        {/* Summary */}

        <GoalSummary
          totalGoals={goals.length}
          completedGoals={completedGoals}
          totalGoalAmount={totalGoalAmount}
          totalSaved={totalSaved}
        />

        {/* Add Goal */}

        <div className="mt-8">
          <GoalForm addGoal={addGoal} />
        </div>

        {/* Goal Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {goals.length === 0 ? (
            <div className="col-span-full bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                No Goals Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Create your first savings goal to start tracking your progress.
              </p>
            </div>
          ) : (
            goals.map((goal) => (
              <GoalCard
                key={goal.id}
                goal={goal}
                deleteGoal={deleteGoal}
                addSavings={addSavings}
                editGoal={editGoal}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Goals;
