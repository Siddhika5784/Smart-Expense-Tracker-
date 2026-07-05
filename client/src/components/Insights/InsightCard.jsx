function InsightCard({ title, value, subtitle, color }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4"
      style={{ borderColor: color }}>

      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2
        className="text-2xl font-bold mt-3"
        style={{ color }}
      >
        {value}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>
      )}

    </div>
  );
}

export default InsightCard;