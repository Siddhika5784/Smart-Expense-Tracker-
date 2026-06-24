import ExpenseItem from "./ExpenseItem"

function ExpenseList({ expenses, deleteExpense,setEditExpense }) {
  return(
  <div className = "mt-8">
    <h2 className = "text-2xl font-bold mb-4">
      Your Expenses
    </h2>

    {[...expenses].reverse().map((expense)=>(
      <ExpenseItem
        key = {expense.id}
        expense={expense}
        deleteExpense = {deleteExpense}
        setEditExpense={setEditExpense}
      />
    ))}

  </div>
  );
}
export default ExpenseList;