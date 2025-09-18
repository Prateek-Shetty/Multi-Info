import React from "react";


const NewsCard = ({ news }) => {
  if (!news || !Array.isArray(news)) return null;

  return (
    <div className="news-card-ui shadow-lg rounded-lg p-4 bg-blue-50">
      <h2 className="news-title font-bold text-lg mb-2">{news.title}</h2>
      <ul className="list-disc list-inside">
        {news.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="news-link text-blue-700">
              {item.title}
            </a>{" "}
            - <span className="news-source">{item.source}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
