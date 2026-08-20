import { useState, useEffect } from "react";
import api from "../services/api";

import {
  Bot,
  AlertTriangle,
  CheckCircle,
  PiggyBank,
} from "lucide-react";

import Layout from "../components/Layout/Layout";
import LoadingSpinner from "../components/Common/LoadingSpinner";

function Insights() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [aiInsight, setAiInsight] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  // Fetch user's expenses
  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data.expenses || []);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  // Generate AI insights
  const generateAIInsight = async () => {
    try {
      setAiLoading(true);
      setAiInsight(null);

      const response = await api.post("/ai/insights");

      setAiInsight(response.data.insight);
    } catch (error) {
      console.error("Error generating AI insight:", error);
      setAiInsight(null);
    } finally {
      setAiLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Page loading
  if (loading) {
    return (
      <Layout>
        <LoadingSpinner text="Loading your Insights..." />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Insights
        </h1>

        <p className="text-gray-500 mt-2">
          Understand your spending habits and get personalized AI recommendations.
        </p>
      </div>

      {/* Empty State */}
      {expenses.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <Bot className="w-12 h-12 mx-auto text-gray-400" />

          <h2 className="text-2xl font-semibold mt-4 text-gray-800">
            No Insights Available
          </h2>

          <p className="text-gray-500 mt-2">
            Add some expenses to generate personalized AI insights.
          </p>
        </div>
      ) : (
        /* AI Insights */
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-gray-800" />

                <h2 className="text-2xl font-bold text-gray-800">
                  AI Spending Insights
                </h2>
              </div>

              <p className="text-gray-500 mt-1">
                Get personalized recommendations based on your spending.
              </p>
            </div>

            <button
              onClick={generateAIInsight}
              disabled={aiLoading}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Bot className="w-5 h-5" />

              {aiLoading
                ? "Analyzing..."
                : "Generate AI Insights"}
            </button>
          </div>

          {/* AI Loading */}
          {aiLoading && (
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center">
              <Bot className="w-8 h-8 text-gray-700 animate-pulse mb-3" />

              <p className="text-gray-600">
                Analyzing your spending...
              </p>

              <p className="text-sm text-gray-400 mt-1">
                This may take a few seconds.
              </p>
            </div>
          )}

          {/* AI Result */}
          {aiInsight && !aiLoading && (
            <div className="mt-6 space-y-4">

              {/* Warning */}
              {aiInsight.warning && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />

                    <h3 className="font-semibold text-red-700">
                      Spending Warning
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-7">
                    {aiInsight.warning}
                  </p>
                </div>
              )}

              {/* Daily Habit */}
              {aiInsight.dailyHabit && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />

                    <h3 className="font-semibold text-blue-700">
                      Daily Habit Recommendation
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-7">
                    {aiInsight.dailyHabit}
                  </p>
                </div>
              )}

              {/* Estimated Savings */}
              {aiInsight.estimatedSavings && (
                <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <PiggyBank className="w-5 h-5 text-green-600" />

                    <h3 className="font-semibold text-green-700">
                      Estimated Monthly Savings
                    </h3>
                  </div>

                  <p className="text-green-700 font-bold text-2xl">
                    {aiInsight.estimatedSavings}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Layout>
  );
}

export default Insights;