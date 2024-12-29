import React from 'react';
import { useParams } from 'react-router-dom';
import './SchemeDetails.css'; // Import your CSS file for styling

const schemeDetails = {
  1: {
    name: "Indira Gandhi National Widow Pension Scheme",
    details: "This scheme provides financial assistance to widows aged 40–59 from below poverty line (BPL) families."
  },
  2: {
    name: "Loan Based Schemes For Safai Karamchari - Education Loan Scheme (ELS)",
    details: `An Education Loan scheme by the Ministry of Social Justice and Empowerment for Safai Karamcharis, Manual Scavengers, and their dependents aged 18 years and above.

    **Loan Features**:
    - Loan Amount: Up to 90% of the unit cost.
      - Maximum: ₹10 lakh for study in India; ₹20 lakh for study abroad.
    - Interest Rate: 4% per annum.
      - Additional 0.5% rebate for women in case of study in India.
    - Repayment Period: 5 years after the course ends.
      - Interest payable quarterly during the course duration.
    - Moratorium Period: 1 year after course completion.

    **Coverage**:
    - Admission fees and tuition fees.
    - Books, stationery, and instruments required for the course.
    - Examination fees.
    - Boarding and lodging expenses.
    - Insurance premium for relevant policies.

    **Eligibility**:
    - Safai Karamcharis (including waste pickers) and identified Manual Scavengers, along with their dependents.
    - Registered cooperative societies of the target group.
    - Legally constituted associations/firms promoted by the target group.`
  },
  3: {
    name: "Mahila Samman Savings Certificate",
    details: "A savings scheme designed exclusively for women, offering competitive interest rates."
  },
  4: {
    name: "New Swarnima Scheme For Women",
    details: "A loan scheme aimed at empowering women entrepreneurs."
  },
  5: {
    name: "Scholarship Scheme for Girl Children of Jute Mills / MSMEs Workers",
    details: "Provides scholarships for education to girl children of workers in Jute Mills and MSMEs."
  }
};

const SchemeDetails = () => {
  const { id } = useParams();
  const scheme = schemeDetails[id];

  if (!scheme) {
    return <div className="error-message">Scheme not found</div>;
  }

  return (
    <div className="scheme-details-container">
      <h1 className="scheme-title">{scheme.name}</h1>
      <p className="scheme-description">{scheme.details}</p>
    </div>
  );
};

export default SchemeDetails;
