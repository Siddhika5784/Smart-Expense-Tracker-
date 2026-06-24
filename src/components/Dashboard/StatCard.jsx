function StatCard({ title, amount, icon, bgColor }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-bold mt-2">{amount}</p>
        </div>

        <div className={`${bgColor} p-3 rounded-xl text-xl`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;