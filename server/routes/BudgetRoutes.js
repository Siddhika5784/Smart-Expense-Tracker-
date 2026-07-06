const express = require("express");

const router = express.Router();

const {
  saveBudget,
  getBudgets,
} = require("../controllers/budgetController");

const protect = require("../middleware/authMiddleware");

// Save / Update Budget
router.post("/", protect, saveBudget);

// Get All Budgets
router.get("/", protect, getBudgets);

module.exports = router;