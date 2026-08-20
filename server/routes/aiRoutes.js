const express = require("express");
const Expense = require("../models/expense");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  generateExpenseInsight,
} = require("../services/geminiService");

router.post("/insights", authMiddleware, async (req, res) => {
  try {
    // Get expenses of the logged-in user from MongoDB
    const expenses = await Expense.find({
      user: req.user.userId,
    })
      .select("title amount category paymentMethod date")
      .sort({ date: -1 })
      .lean();

    // Check if user has any expenses
    if (expenses.length === 0) {
      return res.status(200).json({
        success: true,
        insight: "You don't have any expenses yet. Add some expenses to get personalized AI insights.",
      });
    }

    // Send user's expenses to Gemini
    const insight = await generateExpenseInsight(expenses);

    res.status(200).json({
      success: true,
      insight,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate AI insights",
    });
  }
});

module.exports = router;