import {
  UtensilsCrossed,
  ShoppingBag,
  Receipt,
  Plane,
  BookOpen,
  Film,
  Wallet,
  CreditCard,
  Landmark,
} from "lucide-react";

function TransactionItem({ expense }) {
  const categoryIcons = {
    Food: UtensilsCrossed,
    Shopping: ShoppingBag,
    Bills: Receipt,
    Travel: Plane,
    Education: BookOpen,
    Entertainment: Film,
  };

  const paymentIcons = {
    Cash: Wallet,
    UPI: Landmark,
    "Credit Card": CreditCard,
    "Debit Card": CreditCard,
  };

  const CategoryIcon =
    categoryIcons[expense.category] || Receipt;

  const PaymentIcon =
    paymentIcons[expense.paymentMethod] || Wallet;

  const formattedDate = new Date(expense.date).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">

      <div className="flex justify-between items-start">

        {/* Left */}

        <div className="flex gap-4">

          <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">

            <CategoryIcon
              size={22}
              className="text-blue-600"
            />

          </div>

          <div>

            <h3 className="text-lg font-semibold text-gray-900">
              {expense.title}
            </h3>

            <div className="flex items-center gap-3 mt-2">

              <span className="flex items-center gap-1 text-sm text-gray-600">

                <CategoryIcon size={15} />

                {expense.category}

              </span>

              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">

                <PaymentIcon size={14} />

                {expense.paymentMethod}

              </span>

            </div>

            <p className="mt-3 text-sm text-gray-400">
              {formattedDate}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="text-right">

          <p className="text-xl font-bold text-red-500">

            - ₹{Number(expense.amount).toLocaleString("en-IN")}

          </p>

        </div>

      </div>

    </div>
  );
}

export default TransactionItem;