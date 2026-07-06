import { useState,useEffect } from "react";

function ExpenseForm({ addExpense,editExpense,updateExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

 useEffect(() => {
  if (editExpense) {
    console.log("editExpense:", editExpense);

    setTitle(editExpense.title);
    setAmount(editExpense.amount);
    setCategory(editExpense.category);
    setPaymentMethod(editExpense.paymentMethod);
    setDate(editExpense.date);
  }
}, [editExpense]);

  function handleSubmit(e) {
    e.preventDefault();

    if(!title || !amount ||!date){
      alert("Please fill all required fields");
      return;
    }

    if(Number(amount)<=0){
      alert("Amount must be greater than 0");
      return;
    }

    const newExpense = {
      title,
      amount: Number(amount),
      category,
      date,
      paymentMethod,
    };

    if (editExpense) {
  updateExpense({
    ...newExpense,
    _id: editExpense._id,
  });
} else {
  addExpense(newExpense);
}

    //reset after form submission 
    setTitle("");
    setAmount("");
    setCategory("Food");
    setPaymentMethod("UPI");
    setDate("");
  }

  return (
  <form
    onSubmit={handleSubmit}
    className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

      {/* Expense Title */}
      <div>
        <label className="block text-gray-600 mb-2">
          Expense Title
        </label>

        <input
          type="text"
          placeholder="Enter expense title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Amount */}
      <div>
        <label className="block text-gray-600 mb-2">
          Amount
        </label>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-gray-600 mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Education</option>
          <option>Entertainment</option>
        </select>
      </div>

      {/* Payment */}
      <div>
        <label className="block text-gray-600 mb-2">
          Payment Method
        </label>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
        </select>
      </div>

      {/* Date */}
      <div className="md:col-span-2">
        <label className="block text-gray-600 mb-2">
          Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-blue-500"
        />
      </div>

    </div>

    <button
      type="submit"
      className="mt-6 w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
    >
      {editExpense ? "Update Expense" : "Add Expense"}
    </button>
  </form>
);
}

export default ExpenseForm;