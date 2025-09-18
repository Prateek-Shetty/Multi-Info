import React from "react";


const YouTubeCard = ({ youtube }) => {
  if (!youtube || !Array.isArray(youtube)) return null;

  return (
    <div className="youtube-card-ui shadow-lg rounded-lg p-4 bg-red-50">
      <h2 className="youtube-title font-bold text-lg mb-2">YouTube</h2>
      <ul className="list-disc list-inside">
        {youtube.map((item, idx) => (
          <li key={idx} className="youtube-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="youtube-link text-red-700">
              {item.title}
            </a>{" "}
            - <span className="youtube-channel">{item.channel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeCard;
