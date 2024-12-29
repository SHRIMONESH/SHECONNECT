import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessPage.css'; // Import CSS for BusinessPage

const schemes = [
  { id: 10, name: "Asangathit Karmakaar Silai Machine Sahayata Yojana" },
  { id: 11, name: "Deen Dayal Upadhyaya Bunkar Yojana" },
  { id: 12, name: "District Central Cooperative Banks and through its Branches: For Revamped Micro Credit Loan for Women Vendors of Flower, Vegetable, Fruit etc." },
  { id: 13, name: "Entrepreneurship Development by SC & ST Women in Science Technology Engineering Mathematics" },
  { id: 14, name: "Goa (Technical/ Vocational Training To Sex Workers And Sexually Abused Women) Scheme, 2013 (PRABHAT)" },
  { id: 15, name: "Grant-in-Aid Scheme To Provide Financial Assistance To The Mahila Mandals/ Women’s Self-help Groups (SWAWLAMBHAN)" },
  { id: 16, name: "Kaimagga Vikasa Yojana - Karnataka" },
  { id: 17, name: "Kayaka Spoorthi Scheme Karnataka" },
  { id: 18, name: "Mahila Adhikarita Yojana under NSKFDC- Haryana" },
  { id: 19, name: "Mahila Kisan Yojana" },
  { id: 20, name: "Mahila Samiriddhi Yojana for Backward Classes- Haryana" },
  { id: 21, name: "Motivation Of Unemployed Persons To Start Self-Employed Enterprises Scheme" },
  { id: 22, name: "New Swarnima Scheme For Women" },
];

const BusinessPage = () => {
  const redirectToStreamlit = () => {
    window.location.href = "https://your-streamlit-app-url.com"; // Replace with your Streamlit chatbot URL
  };

  return (
    <div className="business-container">
      <div className="business-header">
        <h1 className="business-title">Business & Entrepreneurship</h1>
        <button onClick={redirectToStreamlit} className="button primary">
          CHATBOT
        </button>
      </div>
      <div className="schemes-buttons">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="scheme">
            <h3>{scheme.name}</h3>
            <Link to={`/business-scheme/${scheme.id}`} className="learn-more-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;
