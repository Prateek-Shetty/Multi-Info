import React from "react";
import Card from "./components/Card";
import { useData } from "./hooks/useData";

function App() {
  const { data, summary, loading, getLatestData, summarizeData } = useData();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">AI Daily Digest</h1>

      <div className="space-x-4">
        <button
          onClick={() => getLatestData(13.05, 77.72)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
        >
          Fetch Latest Data
        </button>

        <button
          onClick={summarizeData}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors"
        >
          Summarize & Save
        </button>
      </div>

      {loading && <div className="text-gray-500 animate-pulse">Loading...</div>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mt-4">
          <Card title="Sports" content={data.sports} />
          <Card title="News" content={data.news} />
          <Card title="YouTube" content={data.youtube} />
          <Card title="Stock" content={data.stock} />
          <Card title="Weather" content={data.weather} />
        </div>
      )}

      {summary && (
        <div className="mt-6 p-4 bg-blue-100 rounded-lg shadow text-gray-800 max-w-3xl text-center">
          <strong>Summary:</strong> {summary}
        </div>
      )}
    </div>
  );
}

export default App;
