const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Expense title is required"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    paymentMethod: {
      type: String,
      required: [true, "Payment Method is required"],
    },

    date: {
      type: Date,
      required: [true, "Date is required"],
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;