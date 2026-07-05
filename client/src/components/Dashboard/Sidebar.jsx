import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
  
function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/login");

};

  return (
    <div className=" sm:w-55 lg:w-64 min-h-screen fixed left-0 top-0 bg-white border-gray-600 p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Smart Spend</h2>

      <NavLink
        to="/dashboard"
        className="block bg-blue-50 text-blue-600 px-4 py-3 rounded-xl font-medium mb-2"
      >
       🏠 Dashboard
      </NavLink>

      <NavLink
        to="/add-expense"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        ➕ Add Expense
      </NavLink>

      <NavLink
        to="/Transactions"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        📄 Transactions
      </NavLink>

      <NavLink
        to="/Budget"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
       💰 Budget
      </NavLink>
      <NavLink
        to="/Insights"
        className="block text-gray-600 px-4 py-3 rounded-xl hover:bg-gray-100 mb-2"
      >
        📊 Insights
      </NavLink>

      <button
    onClick={handleLogout}
    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
>
    Logout
</button>
    </div>
  );
}
export default Sidebar;
