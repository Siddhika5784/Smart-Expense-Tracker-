function StatCard({ title, amount, icon, bgColor ,color}) {
  const colorClasses = {
  green: "text-green-600 ",
  red: "text-red-600 ",
  blue: "text-blue-600 ",
  purple: "text-purple-600 ",
};
const cardColors = {
  green: "border-l-4 border-green-500",
  red: "border-l-4 border-red-500",
  blue: "border-l-4 border-blue-500",
  purple: "border-l-4 border-purple-500",
};
  return (
    <div className={`bg-white rounded-2xl p-5 shadow-sm  ${cardColors[color]}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className={`text-2xl font-bold mt-2 ${colorClasses[color]} `}>{amount}</p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;