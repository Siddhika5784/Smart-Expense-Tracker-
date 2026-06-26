export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by expense name"
        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-transparent transition"
      />
    </div>
  );
}
