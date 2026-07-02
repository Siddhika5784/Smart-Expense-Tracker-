export default function TransactionHeader() {
  return (
    <div className="flex items-center justify-between px-4 pt-6 pb-2 bg-white sticky top-0 z-10">
      <button className="p-1 rounded-full hover:bg-gray-100 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">
        Transactions
      </h1>

      <button className="p-1 rounded-full hover:bg-gray-100 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h10M4 18h6"
          />
          <circle cx="17" cy="12" r="1" fill="currentColor" />
          <circle cx="13" cy="6" r="1" fill="currentColor" />
          <circle cx="9" cy="18" r="1" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
