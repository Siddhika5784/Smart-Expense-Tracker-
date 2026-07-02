import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className=" sm:w-55 lg:w-64 min-h-screen bg-white border-gray-600 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Smart Spend</h2>

      <NavLink
        to="/dashboard"
        className="block bg-blue-50 text-blue-600 px-4 py-3 rounded-xl font-medium mb-2"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/add-expense"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        Add Expense
      </NavLink>

      <NavLink
        to="/Transactions"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        Transactions
      </NavLink>

      <NavLink
        to="/Budget"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        Budget
      </NavLink>
      <NavLink
        to="/CategoryAnalysis"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        Category Analysis
      </NavLink>

       <NavLink
        to="/Goals"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        Goals
      </NavLink>
    </div>
  );
}
export default Sidebar;
