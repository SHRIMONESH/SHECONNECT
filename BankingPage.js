import React from 'react';
import { Link } from 'react-router-dom';
import './BankingPage.css'; // Import CSS for BankingPage

const schemes = [
  { id: 1, name: "Indira Gandhi National Widow Pension Scheme" },
  { id: 2, name: "Loan Based Schemes For Safai Karamchari - Education Loan Scheme (ELS)" },
  { id: 3, name: "Mahila Samman Savings Certificate" },
  { id: 4, name: "New Swarnima Scheme For Women" },
  { id: 5, name: "Scholarship Scheme for Girl Children of Jute Mills / MSMEs Workers" },
];

const BankingPage = () => {
  return (
    <div className="banking-container">
      <h1 className="banking-title">Banking, Financial Services & Insurance</h1>
      <div className="schemes-buttons">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme">
            <h3>{scheme.name}</h3>
            <Link to={`/banking-scheme/${scheme.id}`} className="learn-more-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankingPage;
