const express = require("express");
const rateLimit = require("express-rate-limit");
const Expense = require("../models/expense");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  generateExpenseInsight,
} = require("../services/geminiService");

// Limit AI requests to prevent excessive Gemini API usage
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many AI insight requests. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post(
  "/insights",
  authMiddleware,
  aiLimiter,
  async (req, res) => {
    try {
      const expenses = await Expense.find({
        user: req.user.userId,
      })
        .select("title amount category paymentMethod date")
        .sort({ date: -1 })
        .limit(100)
        .lean();

      if (expenses.length === 0) {
        return res.status(200).json({
          success: true,
          insight: {
            warning: "You don't have enough expense data yet.",
            dailyHabit:
              "Start tracking your daily expenses consistently.",
            estimatedSavings:
              "Add more expenses to receive a personalized estimate.",
          },
        });
      }

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
  }
);

module.exports = router;