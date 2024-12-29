import React from 'react';
import { Link } from 'react-router-dom';
import './AgriculturePage.css'; // Import CSS for AgriculturePage

const schemes = [
  { id: 6, name: "Scheme 1", path: "/scheme/1" },
  { id: 7, name: "Scheme 2", path: "/scheme/2" },
  { id: 8, name: "Scheme 3", path: "/scheme/3" },
  { id: 9, name: "Scheme 4", path: "/scheme/4" },
  { id: 10, name: "Scheme 5", path: "/scheme/5" },
];

const AgriculturePage = () => {
  return (
    <div className="agriculture-container">
      <h1 className="agriculture-title">Agriculture, Rural & Environment</h1>
      <div className="schemes-buttons">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme">
            <h3 className="scheme-name">{scheme.name}</h3>
            <Link to={`/Agriculture-scheme/${scheme.id}`} className="learn-more-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgriculturePage;
