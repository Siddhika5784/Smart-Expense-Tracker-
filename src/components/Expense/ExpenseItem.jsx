function ExpenseItem({ expense, deleteExpense, setEditExpense }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-center mb-3">
      <div>
        <h3 className="text-lg font-semibold">{expense.title}</h3>

        <p className="text-gray-500">
          {expense.category} •{expense.date}
        </p>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold text-blue-600">₹{expense.amount}</p>
       
       <div className=" ">
        <button
          onClick={() => setEditExpense(expense)}
          className="text-blue-500 mt-2 hover:text-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => deleteExpense(expense.id)}
          className="text-red-500 mt-2 hover:text-red-700"
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
