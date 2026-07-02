// Payment method badge colors
const PAYMENT_BADGE = {
  UPI: "bg-green-100 text-green-600",
  Cash: "bg-emerald-100 text-emerald-600",
  "Credit Card": "bg-violet-100 text-violet-600",
  "Debit Card": "bg-blue-100 text-blue-600",
};

// Payment icons
const PAYMENT_ICON = {
  UPI: "▶",
  Cash: "💵",
  "Credit Card": "💳",
  "Debit Card": "🏧",
};

function TransactionItem({ transaction }) {
  const { name, category, date, amount, payment, icon, iconBg } = transaction;

  return (
    <div className="flex items-center gap-3 py-4 border-b border-gray-100 last:border-0">
      {/* Icon */}
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${iconBg}`}
      >
        {icon}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold text-gray-900 truncate">{name}</p>
        <p className="text-[12px] text-gray-400 mt-0.5">
          <span className="text-gray-500">{category}</span>
          <span className="mx-1">•</span>
          {date}
        </p>
      </div>

      {/* Amount + badge */}
      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
        <span className="text-[15px] font-bold text-gray-900">
          ₹{amount.toFixed(2)}
        </span>
        <span
          className={`text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${
            PAYMENT_BADGE[payment] || "bg-gray-100 text-gray-500"
          }`}
        >
          <span>{PAYMENT_ICON[payment]}</span>
          {payment}
        </span>
      </div>
    </div>
  );
}

const SORT_OPTIONS = ["Latest", "Oldest", "Highest", "Lowest"];

export default function TransactionList({ transactions, sort, onSortChange }) {
  const sorted = [...transactions].sort((a, b) => {
    if (sort === "Highest") return b.amount - a.amount;
    if (sort === "Lowest") return a.amount - b.amount;
    if (sort === "Oldest") return a.id - b.id;
    return b.id - a.id; // Latest
  });

  return (
    <div>
      {/* Header row */}
      <div className="flex items-center justify-between mb-1">
        <p className="text-[16px] font-bold text-gray-900">All Transactions</p>

        <div className="relative">
          <label className="text-[13px] text-gray-400 mr-1">Sort by:</label>
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-[13px] font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer appearance-none pr-4"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
            ▾
          </span>
        </div>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl border border-gray-100 px-3 mt-2">
        {sorted.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-8">
            No transactions match your filters.
          </p>
        ) : (
          sorted.map((t) => <TransactionItem key={t.id} transaction={t} />)
        )}
      </div>
    </div>
  );
}
