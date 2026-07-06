import { TrendingUp, Wallet, PieChart } from "lucide-react";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Section (Desktop Only) */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-16">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <Wallet className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-5xl font-extrabold">
            Smart<span className="text-blue-200">Spend</span>
          </h1>
        </div>

        <p className="text-xl text-blue-100 mt-5 mb-10">
          Take control of your finances with powerful budgeting, expense
          tracking, and smart insights.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Wallet size={28} />
            <span className="text-lg">Track every expense effortlessly</span>
          </div>

          <div className="flex items-center gap-4">
            <PieChart size={28} />
            <span className="text-lg">
              Visualize spending with interactive charts
            </span>
          </div>

          <div className="flex items-center gap-4">
            <TrendingUp size={28} />
            <span className="text-lg">Get smart financial insights</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-gray-50 px-6 py-8">
        {/* Mobile Branding */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
              <Wallet className="w-7 h-7 text-white" />
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900">
              Smart<span className="text-blue-600">Spend</span>
            </h1>
          </div>

          <p className="mt-4 text-center text-gray-500 max-w-xs mx-auto">
            Track expenses, manage budgets, and gain smart financial insights.
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

          <p className="text-gray-500 mt-2 mb-8">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
