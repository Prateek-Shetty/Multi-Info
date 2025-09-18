import { useState, useEffect } from "react";
import { fetchSummaries } from "../api.js";

const Summaries = () => {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchSummaries();
      setSummaries(res);
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 drop-shadow-lg">
        📊 Saved Summaries
      </h1>

      {summaries.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">No summaries saved yet.</p>
      ) : (
        <div className="space-y-6 max-w-5xl mx-auto">
          {summaries.map((item, i) => (
            <details
              key={i}
              className="group border border-gray-200 rounded-2xl shadow-lg p-5 bg-white/70 backdrop-blur-md hover:scale-105 transform transition-all duration-300"
            >
              <summary className="cursor-pointer font-semibold text-lg text-gray-800 flex justify-between items-center">
                <span>📌 Summary {i + 1}</span>
                <span className="text-sm text-gray-500 group-open:hidden">
                  Click to expand
                </span>
                <span className="text-sm text-gray-500 hidden group-open:inline">
                  Click to collapse
                </span>
              </summary>
              <div className="mt-4">
                <pre className="bg-gray-50/80 p-4 rounded-xl text-sm overflow-x-auto whitespace-pre-wrap">
                  {JSON.stringify(item, null, 2)}
                </pre>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summaries;
