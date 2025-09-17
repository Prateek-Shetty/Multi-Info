import React from "react";

const Card = ({ title, content }) => (
  <div className="p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <pre className="text-gray-700 whitespace-pre-wrap">{JSON.stringify(content, null, 2)}</pre>
  </div>
);

export default Card;
