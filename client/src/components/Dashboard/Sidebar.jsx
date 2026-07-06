import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Receipt,
  Wallet,
  BarChart3,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl font-medium mb-2 transition ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 z-40">

        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>

        <h2 className="ml-4 text-xl font-bold text-gray-800">
          Smart<span className="text-blue-600">Spend</span>
        </h2>

      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm
          flex flex-col p-6 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        {/* Close Button (Mobile Only) */}
        <div className="flex justify-end lg:hidden mb-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">

          <div className="bg-blue-600 p-3 rounded-xl">
            <Wallet className="text-white" size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Smart<span className="text-blue-600">Spend</span>
            </h2>

            <p className="text-xs text-gray-500">
              Expense Tracker
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="flex-1">

          <NavLink
            to="/dashboard"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <LayoutDashboard size={20} />
              Dashboard
            </div>
          </NavLink>

          <NavLink
            to="/add-expense"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <PlusCircle size={20} />
              Add Expense
            </div>
          </NavLink>

          <NavLink
            to="/transactions"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <Receipt size={20} />
              Transactions
            </div>
          </NavLink>

          <NavLink
            to="/budget"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <Wallet size={20} />
              Budget
            </div>
          </NavLink>

          <NavLink
            to="/insights"
            className={navClass}
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={20} />
              Insights
            </div>
          </NavLink>

        </div>

        {/* Logout */}
        <div className="border-t pt-4">

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
          >
            <div className="flex items-center justify-center gap-2">
              <LogOut size={18} />
              Logout
            </div>
          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;