import { useState } from "react";

const MONTHS = [
  "Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024",
  "May 2024", "Jun 2024", "Jul 2024", "Aug 2024",
  "Sep 2024", "Oct 2024", "Nov 2024", "Dec 2024",
];

export default function SummaryBar({ total, count, month }) {
  const [selectedMonth, setSelectedMonth] = useState(month);

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-4 flex items-end justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      {/* Total */}
      <div>
        <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
          Total Expenses
        </p>
        <p className="text-[22px] font-extrabold text-gray-900 mt-0.5 tracking-tight">
          ₹{total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Month */}
      <div className="flex flex-col items-center">
        <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase mb-1">
          This Month
        </p>
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="text-[14px] font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer appearance-none pr-5"
          >
            {MONTHS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
            ▾
          </span>
        </div>
      </div>

      {/* Count */}
      <div className="text-right">
        <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
          Transactions
        </p>
        <p className="text-[22px] font-extrabold text-violet-500 mt-0.5 tracking-tight">
          {count}
        </p>
      </div>
    </div>
  );
}
