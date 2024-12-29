import React from 'react';
import { Link } from 'react-router-dom';
import './EducationPage.css'; // Import CSS for EducationPage



const EducationPage = () => {
  
  const schemes = [
    { id: 1, name: "Education Scheme 1", path: "/education/scheme/1" },
    { id: 2, name: "Education Scheme 2", path: "/education/scheme/2" },
    { id: 3, name: "Education Scheme 3", path: "/education/scheme/3" },
    { id: 4, name: "Education Scheme 4", path: "/education/scheme/4" },
    { id: 5, name: "Education Scheme 5", path: "/education/scheme/5" },
  ];

  return (
    <div className="education-container">
      <h1 className="education-title">Education & Learning</h1>
      <div className="schemes-buttons">
        {schemes.map((scheme) => (
          <Link to={scheme.path} key={scheme.id}>
            <button className="scheme-btn">{scheme.name}</button>
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
