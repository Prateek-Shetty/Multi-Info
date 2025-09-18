const StockCard = ({ stock }) => {
  if (!stock || stock.length === 0) {
    return <div className="p-4 border rounded">No stock data available</div>;
  }

  return (
    <div className="p-4 border rounded shadow-lg bg-yellow-50">
      <h2 className="font-bold text-lg mb-4">Stocks</h2>
      <ul className="space-y-3">
        {stock
          .filter((s) => s && s.symbol)
          .map((s, index) => (
            <li key={index} className="p-2 border rounded bg-yellow-100">
              <div><strong>Symbol:</strong> {s.symbol}</div>
              <div><strong>Price:</strong> {s.price ? `$${s.price}` : "N/A"}</div>
              <div><strong>Open:</strong> {s.open ? `$${s.open}` : "N/A"}</div>
              <div><strong>High:</strong> {s.high ? `$${s.high}` : "N/A"}</div>
              <div><strong>Low:</strong> {s.low ? `$${s.low}` : "N/A"}</div>
              <div><strong>Previous Close:</strong> {s.previousClose ? `$${s.previousClose}` : "N/A"}</div>
              <div><strong>Currency:</strong> {s.currency || "N/A"}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StockCard;
