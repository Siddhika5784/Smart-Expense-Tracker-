const Budget = require("../models/Budget");

// Save or Update Budget
const saveBudget = async (req, res) => {
  try {
    const { category, amount } = req.body;

    if (!category || amount==null) {
      return res.status(400).json({
        success: false,
        message: "Category and Amount are required",
      });
    }

    const budget = await Budget.findOneAndUpdate(
      {
        user: req.user.userId,
        category,
      },
      {
        amount,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Budget Saved Successfully",
      budget,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Budgets
const getBudgets = async (req, res) => {
  try {

    const budgets = await Budget.find({
      user: req.user.userId,
    });

    res.status(200).json({
      success: true,
      count: budgets.length,
      budgets,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  saveBudget,
  getBudgets,
};