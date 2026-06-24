import { useState,useEffect } from "react";

function ExpenseForm({ addExpense,editExpense,updateExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

 useEffect(() => {
  if (editExpense) {
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
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
      paymentMethod,
    };

    if (editExpense) {
  updateExpense({
    ...newExpense,
    id: editExpense.id,
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
      className="bg-white rounded-2xl shadow-sm p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Add Expense</h1>

      <label className="block text-gray-600 mb-2">Expense Title</label>
<input
  type="text"
  placeholder="Enter expense title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4"
/>

<label className="block text-gray-600 mb-2">Amount</label>
<input
  type="number"
  placeholder="Enter amount"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4"
/>

<label className="block text-gray-600 mb-2">Category</label>
<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4"
>
  <option>Food</option>
  <option>Travel</option>
  <option>Shopping</option>
  <option>Bills</option>
  <option>Education</option>
  <option>Entertainment</option>
</select>

<label className="block text-gray-600 mb-2">Payment Method</label>
<select
  value={paymentMethod}
  onChange={(e) => setPaymentMethod(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4"
>
  <option>Cash</option>
  <option>UPI</option>
  <option>Credit Card</option>
  <option>Debit Card</option>
</select>

<label className="block text-gray-600 mb-2">Date</label>
<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="w-full border p-3 rounded-xl mb-4"
/>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl transition duration-300 ease-in-out hover:bg-blue-500"
      >
        {editExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;