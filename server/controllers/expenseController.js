const Expense = require("../models/Expense");

// Add Expense
const addExpense = async (req, res) => {
  try {
    // Get data from frontend
    const {
      title,
      amount,
      category,
      paymentMethod,
      date,
    } = req.body;

    // Validation
    if (
      !title ||
      !amount ||
      !category ||
      !paymentMethod ||
      !date
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create Expense
    const expense = await Expense.create({
      title,
      amount,
      category,
      paymentMethod,
      date,
      user: req.user.userId,
    });

    res.status(201).json({
      success: true,
      message: "Expense Added Successfully",
      expense,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Expenses
const getAllExpenses = async (req, res) => {
  try {
    // Find expenses of logged-in user
    const expenses = await Expense.find({
      user: req.user.userId,
    }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: expenses.length,
      expenses,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Expense
const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      title,
      amount,
      category,
      paymentMethod,
      date,
    } = req.body;

    // Find expense
    const expense = await Expense.findOne({
      _id: id,
      user: req.user.userId,
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    // Update expense
    expense.title = title;
    expense.amount = amount;
    expense.category = category;
    expense.paymentMethod = paymentMethod;
    expense.date = date;

    await expense.save();

    res.status(200).json({
      success: true,
      message: "Expense Updated Successfully",
      expense,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    // Find expense belonging to logged-in user
    const expense = await Expense.findOne({
      _id: id,
      user: req.user.userId,
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found",
      });
    }

    // Delete expense
    await expense.deleteOne();

    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  addExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
};