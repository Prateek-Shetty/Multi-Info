const SportsCard = ({ sports }) => {
  if (!sports) return null;

  // Split into lines, remove markdown (**), trim spaces, ignore empties
  const sportsList = sports
    .split("\n")
    .map(line => line.replace(/\*\*/g, "").trim())
    .filter(line => line !== "");

  return (
    <div className="p-4 bg-green-50 border border-green-200 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-3 text-green-800">Sports News</h2>
      <ul className="list-disc list-inside space-y-2">
        {sportsList.map((item, idx) => (
          <li key={idx} className="text-gray-700 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsCard;
