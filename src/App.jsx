import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import CategoryAnalysis from "./pages/CategoryAnalysis";
import Goals from "./pages/Goals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/CategoryAnalysis" element={<CategoryAnalysis />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/Goals" element={<Goals />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
