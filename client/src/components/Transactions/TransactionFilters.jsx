function TransactionFilters({
  search,
  setSearch,
  category,
  setCategory,
  paymentMethod,
  setPaymentMethod,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">

      <div className="grid md:grid-cols-4 gap-4">

        {/* Search */}

        <input
          type="text"
          placeholder="🔍 Search Transaction..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        {/* Payment */}

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          <option value="All">All Payments</option>
          <option value="UPI">UPI</option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
        </select>

        {/* Sorting */}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-xl px-4 py-3"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest">Highest Amount</option>
          <option value="lowest">Lowest Amount</option>
        </select>

      </div>

    </div>
  );
}

export default TransactionFilters;