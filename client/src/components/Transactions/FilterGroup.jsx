// Chip colors per label for category filters
const CHIP_COLORS = {
  Food: {
    active: "bg-green-100 border-green-400 text-green-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  Shopping: {
    active: "bg-purple-100 border-purple-400 text-purple-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  Bills: {
    active: "bg-blue-100 border-blue-400 text-blue-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  Education: {
    active: "bg-orange-100 border-orange-400 text-orange-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  Entertainment: {
    active: "bg-pink-100 border-pink-400 text-pink-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  UPI: {
    active: "bg-green-100 border-green-400 text-green-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  Cash: {
    active: "bg-emerald-100 border-emerald-400 text-emerald-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  "Credit Card": {
    active: "bg-violet-100 border-violet-400 text-violet-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
  "Debit Card": {
    active: "bg-blue-100 border-blue-400 text-blue-700",
    inactive: "bg-white border-gray-200 text-gray-600",
  },
};

export default function FilterGroup({ title, items, active, onToggle }) {
  return (
    <div>
      <p className="text-[15px] font-semibold text-gray-800 mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map(({ label, icon }) => {
          const isActive = active.includes(label);
          const colors = CHIP_COLORS[label] || {
            active: "bg-gray-200 border-gray-400 text-gray-700",
            inactive: "bg-white border-gray-200 text-gray-600",
          };
          return (
            <button
              key={label}
              onClick={() => onToggle(label)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-[13px] font-medium transition-all duration-150 ${
                isActive ? colors.active : colors.inactive
              }`}
            >
              <span className="text-sm leading-none">{icon}</span>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
